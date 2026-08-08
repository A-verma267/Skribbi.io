import React from "react";
import { Crown } from "lucide-react";

/**
 * ScoreBoard
 * Ranked list of final scores, used inside GameOverModal (or standalone).
 *
 * @param {Array} scores - [{ id, username, avatar, score }]
 */
export default function ScoreBoard({ scores }) {
  const sorted = [...scores].sort((a, b) => b.score - a.score);

  return (
    <ol className="flex flex-col gap-2">
      {sorted.map((player, idx) => (
        <li
          key={player.id}
          className={[
            "flex items-center gap-3 rounded-xl border px-3 py-2",
            idx === 0
              ? "border-yellow-400 bg-yellow-50 dark:border-yellow-500/40 dark:bg-yellow-500/10"
              : "border-slate-100 bg-slate-50 dark:border-slate-700 dark:bg-slate-800",
          ].join(" ")}
        >
          <span className="w-5 text-sm font-bold text-slate-400 dark:text-slate-500">
            {idx + 1}
          </span>
          <span className="text-lg">{player.avatar}</span>
          <span className="flex-1 truncate text-sm font-semibold text-slate-700 dark:text-slate-100">
            {player.username}
          </span>
          {idx === 0 && <Crown className="h-4 w-4 text-amber-500" />}
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
            {player.score} pts
          </span>
        </li>
      ))}
    </ol>
  );
}

ScoreBoard.defaultProps = {
  scores: [
    { id: "1", username: "Anshika", avatar: "😊", score: 340 },
    { id: "2", username: "Rahul", avatar: "😎", score: 120 },
    { id: "3", username: "Priya", avatar: "🙂", score: 80 },
  ],
};
