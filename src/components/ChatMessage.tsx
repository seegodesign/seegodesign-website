import type { ReactNode } from "react";

type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
};

const formatTimestamp = (timestamp?: Date) => {
  if (!timestamp) {
    return null;
  }

  return timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const renderBoldSegments = (text: string, keyPrefix: string) => {
  const segments = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return segments.map((segment, segmentIndex) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-bold-${segmentIndex}`}>{segment.slice(2, -2)}</strong>
      );
    }

    return <span key={`${keyPrefix}-text-${segmentIndex}`}>{segment}</span>;
  });
};

const renderFormattedContent = (content: string) => {
  const lines = content.split("\n");
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

  return lines.map((line, lineIndex) => {
    const nodes: ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null = null;
    let linkIndex = 0;

    while ((match = linkRegex.exec(line)) !== null) {
      const [fullMatch, label, url] = match;
      const before = line.slice(lastIndex, match.index);

      if (before) {
        nodes.push(...renderBoldSegments(before, `line-${lineIndex}-before-${linkIndex}`));
      }

      nodes.push(
        <a
          key={`line-${lineIndex}-link-${linkIndex}`}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {label}
        </a>
      );

      lastIndex = match.index + fullMatch.length;
      linkIndex += 1;
    }

    const after = line.slice(lastIndex);
    if (after) {
      nodes.push(...renderBoldSegments(after, `line-${lineIndex}-after-${linkIndex}`));
    }

    return (
      <span key={`line-${lineIndex}`}>
        {nodes}
        {lineIndex < lines.length - 1 ? <br /> : null}
      </span>
    );
  });
};

export const ChatMessage = ({ role, content, timestamp }: ChatMessageProps) => {
  const isUser = role === "user";
  const timestampLabel = formatTimestamp(timestamp);

  return (
    <div className={`chat-message ${isUser ? "chat-message--user" : "chat-message--assistant"}`}>
      <div className="flex flex-col">
        <div
          className={`chat-message__bubble ${
            isUser ? "chat-message__bubble--user" : "chat-message__bubble--assistant"
          } animate-in fade-in slide-in-from-bottom-2 duration-300`}
        >
          {renderFormattedContent(content)}
        </div>
        {timestampLabel ? <div className="chat-message__timestamp">{timestampLabel}</div> : null}
      </div>
    </div>
  );
};
