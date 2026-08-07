const CHEVRON_PATHS = {
  left: "M15 4 L7 12 L15 20",
  right: "M9 4 L17 12 L9 20",
};

export default function AvatarArrow({ direction, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-7 w-7 items-center justify-center text-white/90 transition-transform duration-200 hover:scale-125 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-8 sm:w-8"
    >
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <path
          d={CHEVRON_PATHS[direction]}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
