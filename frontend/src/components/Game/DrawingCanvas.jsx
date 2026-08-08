import React, { useRef } from "react";
import CanvasToolbar from "./CanvasToolbar";

/**
 * DrawingCanvas
 * The largest area of the layout. Renders a plain HTML5 <canvas> inside a
 * white, rounded, shadowed frame, with the CanvasToolbar directly beneath.
 * No drawing logic is implemented here — just the ref and layout — wire up
 * pointer events / Socket.IO broadcasting separately.
 *
 * @param {boolean} isDrawer - only the drawer may use the toolbar
 */
export default function DrawingCanvas({ isDrawer }) {
  const canvasRef = useRef(null);

  return (
    <div className="flex h-full min-w-0 flex-1 flex-col items-center justify-center px-6 py-4">
      <div className="flex w-full flex-1 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700">
        <canvas
          ref={canvasRef}
          width={900}
          height={600}
          className="h-full w-full cursor-crosshair rounded-2xl bg-white"
        />
      </div>

      <CanvasToolbar disabled={!isDrawer} />
    </div>
  );
}

DrawingCanvas.defaultProps = {
  isDrawer: false,
};
