export default function AdvertisementCard() {
  return (
    <aside
      aria-label="Advertisement placeholder"
      className="hidden h-full min-h-[21rem] flex-1 items-center justify-center rounded-lg bg-brand-ad text-center md:flex"
    >
      <p className="text-sm text-gray-300">
        Ad removed.{" "}
        <button
          type="button"
          className="text-white underline decoration-gray-400 underline-offset-2 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Details
        </button>
      </p>
    </aside>
  );
}
