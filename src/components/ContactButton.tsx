import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

type ContactButtonProps = {
  text: string;
  icon?: LucideIcon;
  className?: string;
};

export default function ContactButton({ text, icon: Icon, className }: ContactButtonProps) {
  return (
    <Link
      href="/contact"
      className={`button inline-flex items-center gap-2 ${className}`}
      onClick={() => {
        trackEvent('click', {
          event_category: 'engagement',
          event_label: 'contact_button_click',
          button_text: text,
        });
      }}
    >
      {text}
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
    </Link>
  );
}
