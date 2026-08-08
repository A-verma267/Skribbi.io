import React from "react";
import { Palette } from "lucide-react";
import WordDisplay from "./WordDisplay";
import Timer from "./Timer";

/**
 * TopBar
 * Full-width header, ~70px tall. Round counter on the left, the current
 * word (or its blanks) centered, and the round timer on the right.
 *
 * @param {number} round
 * @param {number} totalRounds
 * @param {string} word
 * @param {boolean} isDrawer
 * @param {number[]} revealedLetters
 * @param {number} secondsLeft
 * @param {number} totalSeconds
 */
export default function TopBar({
  round,
  totalRounds,
  word,
  isDrawer,
  revealedLetters,
  secondsLeft,
  totalSeconds,
}) {
  return (
    <header className="flex h-[70px] w-full shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Left: round + brand */}
      <div className="flex min-w-[140px] items-center gap-2">
        <Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Round
          </span>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-100">
            {round} / {totalRounds}
          </span>
        </div>
      </div>

      {/* Center: word */}
      <div className="flex flex-1 items-center justify-center">
        <WordDisplay word={word} isDrawer={isDrawer} revealed={revealedLetters} />
      </div>

      {/* Right: timer */}
      <div className="flex min-w-[140px] justify-end">
        <Timer secondsLeft={secondsLeft} totalSeconds={totalSeconds} />
      </div>
    </header>
  );
}

TopBar.defaultProps = {
  round: 1,
  totalRounds: 3,
  word: "ELEPHANT",
  isDrawer: false,
  revealedLetters: [0, 3],
  secondsLeft: 80,
  totalSeconds: 80,
};
