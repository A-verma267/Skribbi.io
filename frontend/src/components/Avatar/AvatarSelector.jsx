import AvatarPreview from "./AvatarPreview.jsx";
import AvatarArrow from "./AvatarArrow.jsx";
import DiceButton from "./DiceButton.jsx";

export default function AvatarSelector({ avatar, onPrevious, onNext, onRandomize }) {
  return (
    <div className="relative rounded-lg bg-brand-panel px-4 py-5">
      <DiceButton onClick={onRandomize} />
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <div className="flex flex-col gap-4">
          <AvatarArrow direction="left" onClick={onPrevious} label="Previous character" />
        </div>

        <div className="flex h-32 w-28 items-center justify-center sm:h-36 sm:w-32">
          <AvatarPreview key={avatar.id} preset={avatar} size="large" />
        </div>

        <div className="flex flex-col gap-4">
          <AvatarArrow direction="right" onClick={onNext} label="Next character" />
        </div>
      </div>
    </div>
  );
}
