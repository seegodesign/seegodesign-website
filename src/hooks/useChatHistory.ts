import { useEffect, useRef, useState } from "react";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

type ChatState = {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
};

type StoredMessage = Omit<Message, "timestamp"> & { timestamp: string };

type StoredPayload = {
  messages: StoredMessage[];
  expiresAt: number;
};

type ChatApiResponse = {
  message?: string;
  error?: string;
  ok?: boolean;
};

const STORAGE_KEY = "seego-chat-history";
const MAX_STORED_MESSAGES = 50;
const STORAGE_EXPIRY_HOURS = 24;
const REQUEST_TIMEOUT_MS = 30000;

const isStoredPayload = (payload: unknown): payload is StoredPayload => {
  if (!payload || typeof payload !== "object") return false;
  const record = payload as StoredPayload;
  if (!Array.isArray(record.messages)) return false;
  if (typeof record.expiresAt !== "number") return false;
  return record.messages.every(
    (message) =>
      message &&
      typeof message.id === "string" &&
      (message.role === "user" || message.role === "assistant") &&
      typeof message.content === "string" &&
      typeof message.timestamp === "string"
  );
};

export const useChatHistory = (): ChatState & {
  sendMessage: (content: string) => Promise<void>;
  clearHistory: () => void;
} => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const messagesRef = useRef<Message[]>([]);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as unknown;
      if (!isStoredPayload(parsed)) {
        window.localStorage.removeItem(STORAGE_KEY);
        return;
      }

      if (Date.now() > parsed.expiresAt) {
        window.localStorage.removeItem(STORAGE_KEY);
        return;
      }

      const restored = parsed.messages.map((message) => ({
        ...message,
        timestamp: new Date(message.timestamp),
      }));

      setMessages(restored);
    } catch (storageError) {
      console.warn("Failed to load chat history:", storageError);
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (messages.length === 0) return;

    try {
      const payload: StoredPayload = {
        messages: messages.slice(-MAX_STORED_MESSAGES).map((message) => ({
          ...message,
          timestamp: message.timestamp.toISOString(),
        })),
        expiresAt: Date.now() + STORAGE_EXPIRY_HOURS * 60 * 60 * 1000,
      };

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (storageError) {
      console.warn("Failed to persist chat history:", storageError);
    }
  }, [messages]);

  /**
   * Send a chat message and stream updates back into the message list.
   */
  const sendMessage = async (content: string): Promise<void> => {
    const trimmed = content.trim();
    if (!trimmed) return;

    abortControllerRef.current?.abort();

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    const optimisticMessages = [...messagesRef.current, userMessage];
    setMessages(optimisticMessages);
    setIsLoading(true);
    setError(null);

    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    const timeoutId = window.setTimeout(() => abortController.abort(), REQUEST_TIMEOUT_MS);
    let assistantMessageId: string | null = null;

    const rollbackMessages = () => {
      setMessages((prev) =>
        prev.filter(
          (message) => message.id !== userMessage.id && message.id !== assistantMessageId
        )
      );
    };

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: optimisticMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
        signal: abortController.signal,
      });

      if (!response.ok) {
        let errorMessage = "Chat service temporarily unavailable.";
        if (response.status === 429) {
          errorMessage = "You're sending messages too quickly. Please wait a moment and try again.";
        } else if (response.status === 503) {
          errorMessage = "The chat model is loading. Please try again in a few seconds.";
        } else {
          try {
            const errorData = (await response.json()) as ChatApiResponse;
            if (errorData?.error) {
              errorMessage = errorData.error;
            }
          } catch {
            // Ignore JSON parsing errors for non-JSON responses.
          }
        }

        throw new Error(errorMessage);
      }

      const contentType = response.headers.get("Content-Type") ?? "";
      if (contentType.includes("text/plain")) {
        if (!response.body) {
          throw new Error("Chat service temporarily unavailable.");
        }

        const assistantId = crypto.randomUUID();
        assistantMessageId = assistantId;
        setMessages((prev) => [
          ...prev,
          {
            id: assistantId,
            role: "assistant",
            content: "",
            timestamp: new Date(),
          },
        ]);

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const nextChunk = buffer;
          buffer = "";

          if (nextChunk) {
            setMessages((prev) =>
              prev.map((message) =>
                message.id === assistantId
                  ? {
                      ...message,
                      content: message.content + nextChunk,
                    }
                  : message
              )
            );
          }
        }

        const remainder = decoder.decode();
        if (remainder) {
          setMessages((prev) =>
            prev.map((message) =>
              message.id === assistantId
                ? {
                    ...message,
                    content: message.content + remainder,
                  }
                : message
            )
          );
        }

        reader.releaseLock();
        return;
      }

      const data = (await response.json()) as ChatApiResponse;
      if (!data?.message) {
        throw new Error(data?.error || "Chat service temporarily unavailable.");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.message,
          timestamp: new Date(),
        },
      ]);
    } catch (requestError) {
      rollbackMessages();
      if (requestError instanceof DOMException && requestError.name === "AbortError") {
        setError("The request timed out. Please try again.");
      } else if (requestError instanceof Error) {
        setError(requestError.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      window.clearTimeout(timeoutId);
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  /**
   * Clear the chat history and any persisted state.
   */
  const clearHistory = (): void => {
    setMessages([]);
    setError(null);

    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearHistory,
  };
};
