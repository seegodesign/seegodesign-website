import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import type { PaidToolKey } from '../lib/paidToolConfig';

export const usePaidToolAccess = (tool: PaidToolKey) => {
  const searchParams = useSearchParams();
  const [hasAccess, setHasAccess] = useState(false);
  const token = useMemo(() => searchParams.get('access'), [searchParams]);

  useEffect(() => {
    const storageKey = `paid-tool-access:${tool}`;
    const storedToken = (() => {
      if (typeof window === 'undefined') return null;
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return null;
      try {
        const data = JSON.parse(raw) as { token?: string; expiresAt?: number };
        if (!data.token || !data.expiresAt) return null;
        if (Date.now() > data.expiresAt) {
          window.localStorage.removeItem(storageKey);
          return null;
        }
        return data.token;
      } catch {
        window.localStorage.removeItem(storageKey);
        return null;
      }
    })();
    const activeToken = token ?? storedToken;

    if (!activeToken) {
      setTimeout(() => {
        setHasAccess(false);
      }, 0);
      return;
    }

    let cancelled = false;

    const verify = async () => {
      try {
        const response = await fetch(`/api/tools/verify?tool=${tool}&token=${activeToken}`);
        if (!response.ok) {
          setHasAccess(false);
          return;
        }
        const data = (await response.json()) as { valid?: boolean };
        if (!cancelled) {
          const isValid = Boolean(data.valid);
          setHasAccess(isValid);
          if (isValid && token && typeof window !== 'undefined') {
            const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
            window.localStorage.setItem(storageKey, JSON.stringify({ token, expiresAt }));
          }
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setHasAccess(false);
        }
      }
    };

    void verify();

    return () => {
      cancelled = true;
    };
  }, [token, tool]);

  return { hasAccess, token };
};
