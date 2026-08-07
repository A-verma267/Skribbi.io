import FooterCard from "./FooterCard.jsx";

const FOOTER_ITEMS = [
  {
    id: "about",
    icon: "❓",
    title: "About",
    content: (
      <p>
        <span className="font-bold text-white">doodle.io</span> is a free
        online multiplayer drawing and guessing game. Sketch a prompt each
        round and race to guess what everyone else is drawing.
      </p>
    ),
  },
  {
    id: "news",
    icon: "📰",
    title: "News",
    content: (
      <div className="flex items-center justify-between gap-2">
        <a
          href="#"
          className="font-semibold text-white underline decoration-gray-300 underline-offset-2 hover:text-gray-100"
        >
          Fresh paint
        </a>
        <span className="whitespace-nowrap text-xs text-gray-300">9th November 2022</span>
      </div>
    ),
  },
  {
    id: "how-to-play",
    icon: "✏️",
    title: "How to play",
    content: (
      <p>
        Take turns drawing a secret word while everyone else tries to guess
        it in the chat before time runs out. Fastest guesses score the most
        points.
      </p>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-footer/40 px-4 pb-10 pt-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row">
        {FOOTER_ITEMS.map((item) => (
          <FooterCard key={item.id} icon={item.icon} title={item.title}>
            {item.content}
          </FooterCard>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll back to top"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-footer text-white shadow-card transition-transform duration-200 hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path d="M12 5 L5 14 H19 Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
