import React, { useState } from "react";
import { Send, Pencil } from "lucide-react";

/**
 * ChatInput
 * Text field + send button for guessers. If the current user is the
 * drawer, the input is replaced with a "You are drawing..." notice.
 *
 * @param {boolean} isDrawer
 * @param {(text: string) => void} onSend
 */
export default function ChatInput({ isDrawer, onSend }) {
  const [value, setValue] = useState("");

  if (isDrawer) {
    return (
      <div className="flex items-center justify-center gap-2 border-t border-slate-200 px-4 py-3 dark:border-slate-800">
        <Pencil className="h-4 w-4 text-blue-500" />
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          You are drawing...
        </span>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-slate-200 p-3 dark:border-slate-800"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type your guess..."
        className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:bg-slate-900"
      />
      <button
        type="submit"
        aria-label="Send guess"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition-colors duration-150 hover:bg-blue-700 active:scale-95"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

ChatInput.defaultProps = {
  isDrawer: false,
  onSend: () => {},
};
