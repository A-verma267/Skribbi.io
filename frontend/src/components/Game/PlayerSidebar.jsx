import React from "react";
import { Users } from "lucide-react";
import PlayerCard from "./PlayerCard";



/**
 * PlayerSidebar
 * Fixed-width left column showing the ranked list of players.
 *
 * @param {Array} players - list of player objects, see PlayerCard for shape
 */
 export default function PlayerSidebar({ players }) {
  
  return (
    <aside className="flex h-full w-[260px] shrink-0 flex-col border-r border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
        <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          Players
        </h2>
        <span className="ml-auto rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          {players.length}
        </span>
      </div>

      <ul className="flex flex-1 flex-col gap-2 overflow-y-auto px-3 py-3">
        {players.map((player, idx) => (
          // console.log("hello")
          // console.log(player)
          
          
          <PlayerCard key={idx} player={player} rank={idx + 1} />
        ))}
      </ul>
    </aside>
  );
}

PlayerSidebar.defaultProps = {
  players: DUMMY_PLAYERS,
};
