const DOODLE_ICONS = [
  "M4 4 L20 4 L20 20 L4 20 Z", // placeholder path unused, real pattern below
];

/**
 * Full-viewport background built from a tiled inline SVG doodle pattern,
 * so no external image asset is required.
 */
function DoodleBackground() {
  const svgMarkup = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
      <g fill="none" stroke="#4B7BDE" stroke-width="2" opacity="0.35">
        <circle cx="30" cy="30" r="14"/>
        <path d="M25 33 q5 6 10 0"/>
        <path d="M80 20 l14 14 M94 20 l-14 14"/>
        <rect x="150" y="15" width="26" height="20" rx="3"/>
        <path d="M150 15 l13 10 13 -10"/>
        <path d="M20 90 l10 -18 10 18 z"/>
        <path d="M70 90 q10 -14 20 0 q10 -14 20 0"/>
        <circle cx="150" cy="90" r="10"/>
        <path d="M143 95 q7 8 14 0"/>
        <path d="M200 70 l6 16 h-12 z"/>
        <path d="M10 150 h20 M20 140 v20"/>
        <path d="M60 140 q0 20 20 20 q20 0 20 -20 q0 -14 -20 -8 q-20 -6 -20 8 z"/>
        <circle cx="150" cy="150" r="12"/>
        <path d="M144 146 h12 M144 154 h12"/>
        <path d="M195 135 l15 30 h-30 z"/>
        <path d="M30 200 q0 -16 16 -16 q16 0 16 16 q0 16 -16 16 q-16 0 -16 -16 z"/>
        <path d="M90 190 l20 20 M110 190 l-20 20"/>
        <path d="M160 195 h24 M172 183 v24"/>
        <path d="M210 200 q8 -12 16 0 q-8 12 -16 0 z"/>
      </g>
    </svg>
  `);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,${svgMarkup}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "240px 240px",
      }}
    />
  );
}

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen font-body">
      <DoodleBackground />
      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
    </div>
  );
}
