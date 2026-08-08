import React from "react";

/**
 * WordModal
 * Shown when `choosingWord === true` (the current drawer must pick a word).
 * Centered, dark overlay, three large word buttons. Clicking a word should
 * emit a socket event upstream via `onSelectWord`; after selection the
 * parent should flip `choosingWord` back to false to hide the modal.
 *
 * @param {boolean} isOpen
 * @param {string[]} words
 * @param {(word: string) => void} onSelectWord
 */
export default function WordModal({ isOpen, words, onSelectWord }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-800">
        <h2 className="mb-1 text-center text-2xl font-extrabold text-slate-800 dark:text-slate-100">
          Choose a Word
        </h2>
        <p className="mb-6 text-center text-sm text-slate-400 dark:text-slate-500">
          Pick one word to draw for this round
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          {words.map((word) => (
            <button
              key={word}
              type="button"
              onClick={() => onSelectWord(word)}
              className="flex-1 rounded-xl border-2 border-blue-100 bg-blue-50 px-4 py-6 text-center text-lg font-bold text-blue-700 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-blue-400 hover:shadow-lg dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300 dark:hover:border-blue-400"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

WordModal.defaultProps = {
  isOpen: false,
  words: ["Elephant", "Mountain", "Camera"],
  onSelectWord: () => {},
};
