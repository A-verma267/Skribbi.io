import React from "react";
import { Crown, Pencil, Circle } from "lucide-react";
import AvatarPreview from "../Avatar/AvatarPreview";

/**
 * PlayerCard
 * Renders a single player's row inside the PlayerSidebar.
 *
 * Props (all dummy / to be wired up to Socket.IO later):
 * @param {Object} player
 * @param {string} player.id
 * @param {string} player.username
 * @param {string} player.avatar        - emoji or avatar url
 * @param {number} player.score
 * @param {boolean} player.isHost
 * @param {boolean} player.isDrawer
 * @param {boolean} player.isOnline
 * @param {number} rank                 - 1-based position in the list
 */
export default function PlayerCard({ player, rank }) {
  const { name, avatar , id } = player;

  return (
    <li
      className={[
        "group flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-200"
        // isDrawer
        //   ? "bg-yellow-100 border-yellow-500 shadow-sm dark:bg-yellow-500/10 dark:border-yellow-500"
        //   : "bg-white border-slate-100 hover:border-blue-200 hover:shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-500/40",
      ].join(" ")}
    >
      {/* Rank */}
      <span className="w-4 shrink-0 text-xs font-semibold text-slate-400 dark:text-slate-500">
        {rank}
      </span>

      {/* Avatar with online indicator */}
      <div className="relative shrink-0 flex items-center justify-between gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-lg dark:bg-slate-700">
          <span aria-hidden="true">
            <AvatarPreview preset={avatar} size="small"/>
          </span>
        </div>
        {name}
      </div>

      
    </li>
  );
}


