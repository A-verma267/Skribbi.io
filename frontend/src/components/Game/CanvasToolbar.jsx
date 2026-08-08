import React from "react";
import {
  Undo2,
  Redo2,
  Brush,
  Eraser,
  PaintBucket,
  Trash2,
} from "lucide-react";

const COLORS = [
  "#000000",
  "#FFFFFF",
  "#EF4444",
  "#F97316",
  "#FACC15",
  "#22C55E",
  "#3B82F6",
  "#6366F1",
  "#A855F7",
  "#EC4899",
  "#78350F",
  "#94A3B8",
];

/**
 * CanvasToolbar
 * Drawing controls rendered directly beneath the canvas. Disabled entirely
 * for guessers — only the active drawer may interact with it.
 *
 * All handlers are dummy no-ops; wire them up to real canvas logic later.
 *
 * @param {boolean} disabled       - true when the current user is not the drawer
 * @param {string} activeColor
 * @param {string} activeTool      - "brush" | "eraser" | "fill"
 * @param {number} brushSize
 */
export default function CanvasToolbar({
  disabled,
  activeColor,
  activeTool,
  brushSize,
  onSelectTool,
  onSelectColor,
  onBrushSizeChange,
  onUndo,
  onRedo,
  onClear,
}) {
  const toolBtn = (name, Icon, label, onClick) => (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      title={label}
      aria-label={label}
      className={[
        "flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-150",
        activeTool === name
          ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
          : "border-transparent text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700",
        disabled && "cursor-not-allowed opacity-40 hover:bg-transparent",
      ].join(" ")}
    >
      <Icon className="h-4 w-4" />
    </button>
  );

  return (
    <div
      className={[
        "mt-3 flex w-full flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm dark:border-slate-700 dark:bg-slate-800",
        disabled && "opacity-60",
      ].join(" ")}
    >
      {/* Undo / redo */}
      <div className="flex items-center gap-1 border-r border-slate-200 pr-3 dark:border-slate-700">
        {toolBtn("undo", Undo2, "Undo", onUndo)}
        {toolBtn("redo", Redo2, "Redo", onRedo)}
      </div>

      {/* Brush / eraser / fill */}
      <div className="flex items-center gap-1 border-r border-slate-200 pr-3 dark:border-slate-700">
        {toolBtn("brush", Brush, "Brush", () => onSelectTool("brush"))}
        {toolBtn("eraser", Eraser, "Eraser", () => onSelectTool("eraser"))}
        {toolBtn("fill", PaintBucket, "Fill", () => onSelectTool("fill"))}
      </div>

      {/* Color picker */}
      <div className="flex items-center gap-1.5 border-r border-slate-200 pr-3 dark:border-slate-700">
        {COLORS.map((color) => (
          <button
            key={color}
            type="button"
            disabled={disabled}
            onClick={() => onSelectColor(color)}
            aria-label={`Select color ${color}`}
            style={{ backgroundColor: color }}
            className={[
              "h-5 w-5 rounded-full border transition-transform duration-150",
              activeColor === color
                ? "scale-110 ring-2 ring-blue-500 ring-offset-1"
                : "border-slate-300 hover:scale-110 dark:border-slate-600",
              disabled && "cursor-not-allowed hover:scale-100",
            ].join(" ")}
          />
        ))}
        <input
          type="color"
          disabled={disabled}
          value={activeColor}
          onChange={(e) => onSelectColor(e.target.value)}
          className="h-6 w-6 cursor-pointer rounded-full border border-slate-300 bg-transparent p-0 disabled:cursor-not-allowed dark:border-slate-600"
          aria-label="Custom color"
        />
      </div>

      {/* Brush size */}
      <div className="flex flex-1 items-center gap-2 border-r border-slate-200 pr-3 dark:border-slate-700">
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
          Size
        </span>
        <input
          type="range"
          min="1"
          max="40"
          value={brushSize}
          disabled={disabled}
          onChange={(e) => onBrushSizeChange(Number(e.target.value))}
          className="h-1.5 w-24 cursor-pointer accent-blue-600 disabled:cursor-not-allowed"
        />
      </div>

      {/* Clear */}
      <button
        type="button"
        disabled={disabled}
        onClick={onClear}
        className={[
          "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-rose-600 transition-colors duration-150 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10",
          disabled && "cursor-not-allowed opacity-40 hover:bg-transparent",
        ].join(" ")}
      >
        <Trash2 className="h-3.5 w-3.5" />
        Clear
      </button>
    </div>
  );
}

CanvasToolbar.defaultProps = {
  disabled: false,
  activeColor: "#000000",
  activeTool: "brush",
  brushSize: 6,
  onSelectTool: () => {},
  onSelectColor: () => {},
  onBrushSizeChange: () => {},
  onUndo: () => {},
  onRedo: () => {},
  onClear: () => {},
};
