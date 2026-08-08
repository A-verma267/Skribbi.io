import React from "react";
import { DoorOpen, UserPlus, Volume2, VolumeX, Settings, Maximize } from "lucide-react";

/**
 * BottomToolbar
 * Full-width footer with room-level actions. All handlers are dummy no-ops.
 *
 * @param {boolean} isMuted
 */
export default function BottomToolbar({
  isMuted,
  onLeave,
  onInvite,
  onToggleMute,
  onOpenSettings,
  onToggleFullscreen,
}) {
  const ActionButton = ({ icon: Icon, label, onClick, danger }) => (
    <button
      type="button"
      onClick={onClick}
      title={label}
      className={[
        "flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-colors duration-150 sm:text-sm",
        danger
          ? "text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10"
          : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
      ].join(" ")}
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <footer className="flex h-14 w-full shrink-0 items-center justify-center gap-1 border-t border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-900 sm:justify-between">
      <ActionButton icon={DoorOpen} label="Leave Room" onClick={onLeave} danger />

      <div className="flex items-center gap-1">
        <ActionButton icon={UserPlus} label="Invite" onClick={onInvite} />
        <ActionButton
          icon={isMuted ? VolumeX : Volume2}
          label={isMuted ? "Unmute" : "Mute"}
          onClick={onToggleMute}
        />
        <ActionButton icon={Settings} label="Settings" onClick={onOpenSettings} />
        <ActionButton icon={Maximize} label="Fullscreen" onClick={onToggleFullscreen} />
      </div>
    </footer>
  );
}

BottomToolbar.defaultProps = {
  isMuted: false,
  onLeave: () => {},
  onInvite: () => {},
  onToggleMute: () => {},
  onOpenSettings: () => {},
  onToggleFullscreen: () => {},
};
