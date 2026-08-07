export default function DiceButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Randomize character"
      className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md bg-white/90 text-brand-panelDark shadow-card transition-transform duration-200 hover:scale-110 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-8 sm:w-8"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
        <circle cx="8" cy="8" r="1.6" fill="white" />
        <circle cx="16" cy="8" r="1.6" fill="white" />
        <circle cx="12" cy="12" r="1.6" fill="white" />
        <circle cx="8" cy="16" r="1.6" fill="white" />
        <circle cx="16" cy="16" r="1.6" fill="white" />
      </svg>
    </button>
  );
}
