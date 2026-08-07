const SIZE_CLASSES = {
  icon: "h-full w-full",
  large: "h-40 w-32 sm:h-48 sm:w-40",
};

/**
 * Renders one of a handful of simple facial-expression variants
 * on top of a colored blocky body, keyed off preset.face.
 */
function FaceMarkup({ face }) {
  switch (face) {
    case "sad":
      return (
        <>
          <circle cx="38" cy="45" r="7" fill="#14161A" />
          <circle cx="62" cy="45" r="7" fill="#14161A" />
          <path d="M35 68 q15 -14 30 0" stroke="#14161A" strokeWidth="4" fill="none" strokeLinecap="round" />
        </>
      );
    case "shock":
      return (
        <>
          <circle cx="38" cy="45" r="8" fill="#fff" stroke="#14161A" strokeWidth="3" />
          <circle cx="62" cy="45" r="8" fill="#fff" stroke="#14161A" strokeWidth="3" />
          <circle cx="50" cy="68" r="6" fill="#14161A" />
        </>
      );
    case "grin":
      return (
        <>
          <path d="M30 42 l14 8 l-14 8 z" fill="#14161A" />
          <path d="M70 42 l-14 8 l14 8 z" fill="#14161A" />
          <path d="M32 62 q18 18 36 0 l-4 10 q-14 12 -28 0 z" fill="#14161A" />
        </>
      );
    case "grumpy":
      return (
        <>
          <rect x="30" y="40" width="16" height="6" rx="2" fill="#14161A" transform="rotate(-8 38 43)" />
          <rect x="54" y="40" width="16" height="6" rx="2" fill="#14161A" transform="rotate(8 62 43)" />
          <path d="M36 66 h28" stroke="#14161A" strokeWidth="4" strokeLinecap="round" />
        </>
      );
    case "cyclops":
      return (
        <>
          <circle cx="50" cy="45" r="14" fill="#fff" stroke="#14161A" strokeWidth="3" />
          <circle cx="50" cy="45" r="5" fill="#14161A" />
          <path d="M38 68 q12 10 24 0" stroke="#14161A" strokeWidth="4" fill="none" strokeLinecap="round" />
        </>
      );
    case "peek":
      return (
        <>
          <path d="M28 40 q10 -10 20 0" stroke="#14161A" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M52 40 q10 -10 20 0" stroke="#14161A" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="34" y="60" width="32" height="8" rx="4" fill="#14161A" />
        </>
      );
    case "shout":
      return (
        <>
          <circle cx="38" cy="44" r="6" fill="#14161A" />
          <circle cx="62" cy="44" r="6" fill="#14161A" />
          <ellipse cx="50" cy="66" rx="12" ry="9" fill="#14161A" />
          <ellipse cx="50" cy="64" rx="7" ry="5" fill="#E85FA8" />
        </>
      );
    case "wink":
    default:
      return (
        <>
          <path d="M32 45 h14" stroke="#14161A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="62" cy="45" r="6" fill="#14161A" />
          <path d="M38 66 q12 8 24 0" stroke="#14161A" strokeWidth="4" fill="none" strokeLinecap="round" />
        </>
      );
  }
}

export default function AvatarPreview({ preset, size = "large" }) {
  return (
    <svg
      viewBox="0 0 100 130"
      className={`${SIZE_CLASSES[size]} animate-fadeSwap`}
      role="img"
      aria-label={`${preset.id} character avatar`}
    >
      <rect x="10" y="20" width="80" height="90" rx="14" fill={preset.color} stroke="#14161A" strokeWidth="4" />
      <FaceMarkup face={preset.face} />
    </svg>
  );
}
