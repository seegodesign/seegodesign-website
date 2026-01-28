'use client';

import { useState, type FormEvent } from 'react';
import type { PaidToolKey } from '@/lib/paidToolConfig';

type InviteCodeModalProps = {
  tool: PaidToolKey;
  isOpen: boolean;
  onClose: () => void;
};

type InviteCodeResponse = {
  token?: string;
  expiresAt?: number;
  error?: string;
};

export const InviteCodeModal = ({ tool, isOpen, onClose }: InviteCodeModalProps) => {
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = code.trim();
    if (!trimmed || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/tools/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool, code: trimmed }),
      });

      const data = (await response.json()) as InviteCodeResponse;
      if (!response.ok || !data.token || !data.expiresAt) {
        setError(data.error || 'Invalid invite code.');
        return;
      }

      const storageKey = `paid-tool-access:${tool}`;
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({ token: data.token, expiresAt: data.expiresAt })
      );

      window.location.reload();
    } catch (requestError) {
      console.error(requestError);
      setError('Unable to verify invite code. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-10">
      <button
        type="button"
        aria-label="Close invite code dialog"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[color:var(--color-surface-strong)] p-6 shadow-2xl">
        <div className="text-sm uppercase tracking-[0.3em] text-[color:var(--color-text-muted)]">Invite code</div>
        <h3 className="mt-3 text-xl font-semibold text-white">Unlock 24-hour access</h3>
        <p className="mt-2 text-sm text-slate-300">
          Enter your invite code to unlock this tool for free for the next 24 hours.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]"
            placeholder="Enter invite code"
            autoComplete="off"
            spellCheck={false}
          />
          {error ? <div className="text-sm text-red-300">{error}</div> : null}
          <div className="flex items-center justify-between gap-3">
            <button type="button" onClick={onClose} className="text-sm text-slate-300 hover:text-white">
              Cancel
            </button>
            <button
              type="submit"
              className="button"
              disabled={isSubmitting || !code.trim()}
            >
              {isSubmitting ? 'Checking…' : 'Unlock'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
