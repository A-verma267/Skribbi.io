const LANGUAGES = ["English", "Deutsch", "Français", "Español", "Português", "日本語"];

export default function LanguageSelect({ value, onChange }) {
  return (
    <div className="w-32 sm:w-36">
      <label htmlFor="language-select" className="sr-only">
        Select language
      </label>
      <select
        id="language-select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full cursor-pointer rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 shadow-sm outline-none transition-shadow duration-200 focus:ring-2 focus:ring-brand-private sm:h-12 sm:text-base"
      >
        {LANGUAGES.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
}
