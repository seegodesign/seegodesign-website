import Link from 'next/link';
export default function ContactButton({ text }: { text: string }) {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 border border-white/30 hover:border-white/60 hover:text-white transition bg-[color:var(--brand-primary-dark)] hover:bg-[color:var(--brand-primary)]"
    >
      {text}
    </Link>
  );
}