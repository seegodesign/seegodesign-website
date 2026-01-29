'use client';

import { useEffect, useRef, type ReactNode } from 'react';
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
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const focusTarget = showCloseButton ? closeButtonRef.current : panelRef.current;
    if (!focusTarget) return;
    const rafId = window.requestAnimationFrame(() => focusTarget.focus());
    return () => window.cancelAnimationFrame(rafId);
  }, [isOpen, showCloseButton]);

  return (
    <div className={`modal ${isOpen ? 'is-open' : 'is-closed'}`.trim()} aria-hidden={!isOpen}>
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
        ref={panelRef}
        tabIndex={-1}
      >
        {showCloseButton && (
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Close"
            ref={closeButtonRef}
          >
            <X size={18} />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
