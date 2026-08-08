import React from "react";

/**
 * ChatMessage
 * Renders a single chat line. `type` controls the background treatment:
 *  - "system"  -> green background   (e.g. "Rahul guessed correctly!")
 *  - "correct" -> yellow background  (the guesser's own correct guess)
 *  - "wrong" | "normal" -> plain background
 *
 * @param {Object} message
 * @param {string} message.sender
 * @param {string} message.text
 * @param {"system"|"correct"|"wrong"|"normal"} message.type
 */
export default function ChatMessage({ message }) {
  const { sender, text, type } = message;

  const wrapperClass = {
    system: "bg-emerald-100 border-emerald-300 dark:bg-emerald-500/10 dark:border-emerald-500/30",
    correct: "bg-yellow-100 border-yellow-300 dark:bg-yellow-500/10 dark:border-yellow-500/30",
    wrong: "bg-transparent border-transparent",
    normal: "bg-transparent border-transparent",
  }[type];

  if (type === "system") {
    return (
      <li
        className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium italic text-emerald-700 dark:text-emerald-300 ${wrapperClass}`}
      >
        {text}
      </li>
    );
  }

  return (
    <li className={`rounded-lg border px-2.5 py-1.5 ${wrapperClass}`}>
      <span className="text-xs font-bold text-blue-700 dark:text-blue-400">
        {sender}:
      </span>{" "}
      <span className="text-sm text-slate-700 dark:text-slate-200">{text}</span>
    </li>
  );
}

ChatMessage.defaultProps = {
  message: { sender: "Player", text: "hello", type: "normal" },
};
