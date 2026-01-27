import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

type ContactButtonProps = {
  text: string;
  icon?: LucideIcon;
};

export default function ContactButton({ text, icon: Icon }: ContactButtonProps) {
  return (
    <Link
      href="/contact"
      className="button inline-flex items-center gap-2"
    >
      {text}
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
    </Link>
  );
}
