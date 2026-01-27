export default function ScrollDownArrow({ handleDownArrowClick }: { handleDownArrowClick: () => void }) {
  return (
    <button
      aria-label="Scroll to services"
      onClick={handleDownArrowClick}
      className="scroll-down-arrow"
    >
      <svg
        className="scroll-down-arrow__icon"
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