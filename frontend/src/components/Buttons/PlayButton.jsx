export default function PlayButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-14 w-full rounded-md bg-brand-play text-2xl font-bold text-white shadow-button transition-all duration-200 hover:scale-[1.01] hover:brightness-110 hover:shadow-lg active:translate-y-0.5 active:shadow-none sm:text-3xl"
      style={{ fontFamily: "'Comic Sans MS', 'Comic Neue', cursive" }}
    >
      Join Room
    </button>
  );
}
