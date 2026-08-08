import React from "react";
import { Trophy, RotateCcw, LogOut } from "lucide-react";
import ScoreBoard from "./ScoreBoard";

/**
 * GameOverModal
 * Reusable end-of-game modal: winner, final scoreboard, and two actions.
 * No logic implemented — `onPlayAgain` / `onLeave` are dummy callbacks.
 *
 * @param {boolean} isOpen
 * @param {Object} winner - { username, avatar, score }
 * @param {Array} scores
 * @param {() => void} onPlayAgain
 * @param {() => void} onLeave
 */
export default function GameOverModal({
  isOpen,
  winner,
  scores,
  onPlayAgain,
  onLeave,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-800">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/10">
            <Trophy className="h-8 w-8 text-amber-500" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Winner
          </span>
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
            {winner.avatar} {winner.username}
          </h2>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {winner.score} pts
          </span>
        </div>

        <ScoreBoard scores={scores} />

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onLeave}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors duration-150 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <LogOut className="h-4 w-4" />
            Leave
          </button>
          <button
            type="button"
            onClick={onPlayAgain}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-blue-700"
          >
            <RotateCcw className="h-4 w-4" />
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

GameOverModal.defaultProps = {
  isOpen: false,
  winner: { username: "Anshika", avatar: "😊", score: 340 },
  scores: [
    { id: "1", username: "Anshika", avatar: "😊", score: 340 },
    { id: "2", username: "Rahul", avatar: "😎", score: 120 },
    { id: "3", username: "Priya", avatar: "🙂", score: 80 },
  ],
  onPlayAgain: () => {},
  onLeave: () => {},
};
