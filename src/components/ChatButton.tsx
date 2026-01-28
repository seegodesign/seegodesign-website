"use client";

import { MessageCircle, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type ChatButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  unreadCount?: number;
  controlsId?: string;
};

export const ChatButton = ({ isOpen, onClick, unreadCount, controlsId }: ChatButtonProps) => {
  const ariaLabel = isOpen ? "Close chat" : "Open chat";
  const handleClick = () => {
    trackEvent("click", {
      event_category: "engagement",
      event_label: isOpen ? "chat_closed" : "chat_opened",
    });
    onClick();
  };

  return (
    <button
      type="button"
      className="chat-button"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      onClick={handleClick}
    >
      <span className={`transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}>
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </span>
      {unreadCount && unreadCount > 0 ? <span className="chat-button__badge" /> : null}
    </button>
  );
};
