export default function NameInput({ value, onChange }) {
  return (
    <div className="flex-1">
      <label htmlFor="player-name" className="sr-only">
        Enter your name
      </label>
      <input
        id="player-name"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Enter your name"
        maxLength={30}
        className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder-gray-400 shadow-sm outline-none transition-shadow duration-200 focus:ring-2 focus:ring-brand-private sm:h-12 sm:text-base"
      />
    </div>
  );
}
