import React from "react";

/**
 * WordDisplay
 * Shows the full word to the drawer, or letter-tile blanks to guessers.
 * Revealed hint letters are passed in `revealed` as an array of indices.
 *
 * @param {string} word
 * @param {boolean} isDrawer
 * @param {number[]} revealed - indices of letters already hinted/revealed
 */
export default function WordDisplay({ word, isDrawer, revealed }) {
  if (isDrawer) {
    return (
      <div className="flex flex-col items-center">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400">
          Your word
        </span>
        <span className="text-xl font-extrabold uppercase tracking-[0.2em] text-slate-800 dark:text-slate-100">
          {word}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
        {word.length} letters
      </span>
      <div className="flex gap-1.5">
        {word.split("").map((letter, i) => {
          const isRevealed = revealed.includes(i);
          return (
            <span
              key={i}
              className="flex h-8 w-6 items-center justify-center border-b-2 border-slate-300 text-lg font-bold uppercase text-slate-700 dark:border-slate-600 dark:text-slate-100"
            >
              {isRevealed ? letter : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
}

WordDisplay.defaultProps = {
  word: "ELEPHANT",
  isDrawer: false,
  revealed: [0, 3],
};
