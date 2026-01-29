'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
  showCloseButton?: boolean;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  ariaLabel,
  className,
  showCloseButton = false,
}: ModalProps) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const closeDurationMs = 220;

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
      return;
    }

    if (!isVisible) return;
    setIsClosing(true);
    const timeoutId = window.setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, closeDurationMs);

    return () => window.clearTimeout(timeoutId);
  }, [isOpen, isVisible]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`modal ${isClosing ? 'is-closing' : ''}`.trim()}>
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="modal__backdrop"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className={`modal__panel ${className ?? ''}`.trim()}
      >
        {showCloseButton && (
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
