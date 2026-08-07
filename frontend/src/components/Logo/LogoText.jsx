const LETTER_COLORS = [
  "#EF4444", // d
  "#F59E0B", // o
  "#FACC15", // o
  "#22C55E", // d
  "#22D3EE", // l
  "#6366F1", // e
  "#A855F7", // .
  "#F472B6", // i
];

const WORD = "doodle.io".split("");

export default function LogoText() {
  return (
    <span
      className="inline-flex select-none tracking-tight"
      style={{ fontFamily: "'Comic Sans MS', 'Comic Neue', cursive" }}
    >
      {WORD.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="text-6xl font-bold sm:text-7xl md:text-8xl"
          style={{
            color: LETTER_COLORS[index % LETTER_COLORS.length],
            WebkitTextStroke: "3px #14161A",
            textShadow: "2px 2px 0 rgba(0,0,0,0.15)",
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
