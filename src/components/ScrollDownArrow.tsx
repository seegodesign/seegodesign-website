export default function ScrollDownArrow({ handleDownArrowClick }: { handleDownArrowClick: () => void }) {
  return (
    <button
        aria-label="Scroll to services"
        onClick={handleDownArrowClick}
        className="mt-16 mx-auto animate-pulse rounded-full bg-white/10 hover:bg-white/20 transition-colors p-4 flex flex-col items-center group w-12 h-12 justify-center"
        style={{ outline: 'none', border: 'none' }}
    >
      <svg
        className="w-8 h-8 text-[color:var(--brand-primary)] group-hover:text-white transition-colors"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      <span className="sr-only">Scroll down</span>
    </button>
  );
}