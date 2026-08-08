import React from "react";
import { MessageSquare } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const DUMMY_MESSAGES = [
  { id: "1", sender: "Anshika", text: "hello", type: "normal" },
  { id: "2", sender: "Rahul", text: "apple", type: "wrong" },
  { id: "3", sender: "Priya", text: "elephant", type: "correct" },
  { id: "4", sender: "System", text: "Priya guessed correctly!", type: "system" },
];

/**
 * ChatPanel
 * Right sidebar, ~320px wide. Scrollable message list on top, input pinned
 * to the bottom. Guessers can type; the drawer sees a status notice instead.
 *
 * @param {Array} messages
 * @param {boolean} isDrawer
 * @param {(text: string) => void} onSendMessage
 */
export default function ChatPanel({ messages = DUMMY_MESSAGES, isDrawer, onSendMessage }) {
  const safeMessages = Array.isArray(messages) ? messages : [];

  return (
    <aside className="flex h-full w-[320px] shrink-0 flex-col border-l border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
        <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          Chat
        </h2>
      </div>

      <ul className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-3 py-3">
        {safeMessages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
      </ul>

      <ChatInput isDrawer={isDrawer} onSend={onSendMessage} />
    </aside>
  );
}

ChatPanel.defaultProps = {
  messages: DUMMY_MESSAGES,
  isDrawer: false,
  onSendMessage: () => {},
};