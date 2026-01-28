"use client";

import { Send, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

import { ChatMessage } from "./ChatMessage";
import { useChatHistory } from "../hooks/useChatHistory";
import { trackEvent } from "@/lib/analytics";

type ChatWidgetProps = {
  isOpen: boolean;
  onClose: () => void;
  widgetId?: string;
  titleId?: string;
  inputId?: string;
};

export const ChatWidget = ({
  isOpen,
  onClose,
  widgetId = "chat-widget",
  titleId = "chat-widget-title",
  inputId = "chat-widget-input",
}: ChatWidgetProps) => {
  const { messages, isLoading, error, sendMessage, clearHistory } = useChatHistory();
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const nextHeight = Math.min(textareaRef.current.scrollHeight, 4 * 24);
      textareaRef.current.style.height = `${nextHeight}px`;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setInputValue("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      await sendMessage(trimmed);
      trackEvent("form_submit", {
        event_category: "engagement",
        event_label: "chat_message_sent",
      });
    } catch (sendError) {
      console.error(sendError);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm("Clear chat history?")) {
      clearHistory();
      trackEvent("click", {
        event_category: "engagement",
        event_label: "chat_history_cleared",
      });
    }
  };

  const isSendDisabled = inputValue.trim().length === 0 || isLoading;

  return (
    <div
      id={widgetId}
      className={`chat-widget chat-widget--mobile ${isOpen ? "is-open" : "is-closed"}`}
      role="dialog"
      aria-labelledby={titleId}
      aria-modal={isOpen ? "true" : undefined}
      aria-hidden={!isOpen}
    >
      <div className="chat-widget__header">
        <div>
          <div className="chat-widget__title" id={titleId}>
            Seego Design Chat
          </div>
          <div className="chat-widget__subtitle">Your Virtual Assistant</div>
        </div>
        <div className="chat-widget__actions">
          <button
            type="button"
            className="chat-widget__action"
            onClick={handleClearHistory}
            aria-label="Clear chat history"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button type="button" className="chat-widget__close" onClick={onClose} aria-label="Close chat">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="chat-widget__messages" aria-live="polite" aria-relevant="additions">
        {messages.length === 0 ? (
          <ChatMessage
            role="assistant"
            content="Hi! I'm here to help answer questions you might have about Seego Design. What can I help you with?"
            timestamp={new Date()}
          />
        ) : (
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              role={message.role}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))
        )}
        {isLoading ? (
          <div className="chat-message chat-message--assistant">
            <div className="chat-message__bubble chat-message__bubble--assistant">
              <div className="chat-widget__typing" role="status" aria-label="Assistant is typing">
                <span className="chat-widget__typing-dot" />
                <span className="chat-widget__typing-dot" />
                <span className="chat-widget__typing-dot" />
              </div>
            </div>
          </div>
        ) : null}
        <div ref={messagesEndRef} />
      </div>

      {error ? <div className="chat-widget__error">{error}</div> : null}

      <div className="chat-widget__input-container">
        <form className="relative flex-1" onSubmit={handleSubmit}>
          <textarea
            ref={textareaRef}
            id={inputId}
            className="chat-widget__input pr-12"
            rows={1}
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="chat-widget__send absolute right-2 bottom-2" disabled={isSendDisabled}>
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
