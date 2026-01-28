"use client";

import { useEffect, useState } from "react";

import { ChatButton } from "./ChatButton";
import { ChatWidget } from "./ChatWidget";

const CHAT_WIDGET_ID = "global-chat-widget";
const CHAT_TITLE_ID = "global-chat-title";
const CHAT_INPUT_ID = "global-chat-input";

const getFocusableElements = (container: HTMLElement | null) => {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => !element.hasAttribute("disabled"));
};

export const GlobalChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const input = document.getElementById(CHAT_INPUT_ID) as HTMLTextAreaElement | null;
    input?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const widget = document.getElementById(CHAT_WIDGET_ID);
      const focusableElements = getFocusableElements(widget);
      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const updateBodyLock = () => {
      const isMobile = window.innerWidth < 768;
      if (isOpen && isMobile) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    updateBodyLock();
    window.addEventListener("resize", updateBodyLock);
    return () => {
      window.removeEventListener("resize", updateBodyLock);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <ChatButton
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        controlsId={CHAT_WIDGET_ID}
      />
      <ChatWidget
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        widgetId={CHAT_WIDGET_ID}
        titleId={CHAT_TITLE_ID}
        inputId={CHAT_INPUT_ID}
      />
    </>
  );
};
