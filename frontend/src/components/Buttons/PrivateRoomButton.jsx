export default function PrivateRoomButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-12 w-full rounded-md bg-brand-private text-base font-bold text-white shadow-button transition-all duration-200 hover:scale-[1.01] hover:brightness-110 hover:shadow-lg active:translate-y-0.5 active:shadow-none sm:text-lg"
    >
      Create Private Room
    </button>
  );
}
