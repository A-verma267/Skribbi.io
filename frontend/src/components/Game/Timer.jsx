import React from "react";

/**
 * Timer
 * Circular countdown ring. Purely presentational — pass `secondsLeft`
 * and `totalSeconds` down from whatever socket/timer logic drives the round.
 *
 * @param {number} secondsLeft
 * @param {number} totalSeconds
 */
export default function Timer({ secondsLeft, totalSeconds }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(1, secondsLeft / totalSeconds));
  const offset = circumference * (1 - progress);
  const isUrgent = secondsLeft <= 10;

  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
      <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          strokeWidth="5"
          className="stroke-slate-200 dark:stroke-slate-700"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={[
            "transition-all duration-1000 ease-linear",
            isUrgent ? "stroke-rose-500" : "stroke-blue-600",
          ].join(" ")}
        />
      </svg>
      <span
        className={[
          "absolute text-lg font-extrabold tabular-nums",
          isUrgent ? "text-rose-500" : "text-slate-700 dark:text-slate-100",
        ].join(" ")}
      >
        {secondsLeft}
      </span>
    </div>
  );
}

Timer.defaultProps = {
  secondsLeft: 80,
  totalSeconds: 80,
};
