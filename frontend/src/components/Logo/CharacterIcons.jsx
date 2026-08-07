import { AVATAR_PRESETS } from "../../hooks/useAvatar.js";
import AvatarPreview from "../Avatar/AvatarPreview.jsx";

export default function CharacterIcons({ activeIndex, onSelect }) {
  return (
    <ul
      className="mt-2 flex items-center justify-center gap-2"
      aria-label="Available avatar characters"
    >
      {AVATAR_PRESETS.map((preset, index) => (
        <li key={preset.id}>
          <button
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Select ${preset.id} character`}
            aria-pressed={activeIndex === index}
            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-transform duration-200 hover:scale-110 sm:h-12 sm:w-12 ${
              activeIndex === index
                ? "border-white shadow-card"
                : "border-transparent opacity-90"
            }`}
          >
            <AvatarPreview preset={preset} size="icon" />
          </button>
        </li>
      ))}
    </ul>
  );
}
