import LogoText from "./LogoText.jsx";
import CharacterIcons from "./CharacterIcons.jsx";
// import logo from './logo.gif';

function PencilAccent() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 120"
      className="ml-1 h-16 w-6 sm:h-20 sm:w-7 md:h-24 md:w-8"
    >
      <rect x="12" y="10" width="16" height="80" fill="#F4A73A" stroke="#14161A" strokeWidth="3" />
      <polygon points="12,90 28,90 20,115" fill="#F2C9A0" stroke="#14161A" strokeWidth="3" />
      <polygon points="17,108 23,108 20,115" fill="#3A2A20" stroke="#14161A" strokeWidth="2" />
      <rect x="12" y="4" width="16" height="10" fill="#E85FA8" stroke="#14161A" strokeWidth="3" />
    </svg>
  );
}

export default function Logo({ activeAvatarIndex, onSelectAvatar }) {
  return (
    <header className="flex flex-col items-center pt-8 sm:pt-10">
      
      <img src="./logo.gif" alt="logo" />
      <CharacterIcons activeIndex={activeAvatarIndex} onSelect={onSelectAvatar} />
    </header>
  );
}
