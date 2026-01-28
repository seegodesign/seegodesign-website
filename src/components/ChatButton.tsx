"use client";

import { MessageCircle, X } from "lucide-react";

type ChatButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  unreadCount?: number;
  controlsId?: string;
};

export const ChatButton = ({ isOpen, onClick, unreadCount, controlsId }: ChatButtonProps) => {
  const ariaLabel = isOpen ? "Close chat" : "Open chat";

  return (
    <button
      type="button"
      className="chat-button"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      onClick={onClick}
    >
      <span className={`transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}>
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </span>
      {unreadCount && unreadCount > 0 ? <span className="chat-button__badge" /> : null}
    </button>
  );
};
