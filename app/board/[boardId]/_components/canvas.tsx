"use client";

// import { useSelf } from "@liveblocks/react";

import { useCallback, useState } from "react";
import { CanvasState, CanvasMode, Camera } from "@/types/canvas";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { useHistory, useCanUndo, useCanRedo, useMutation } from "@liveblocks/react";
import { CursorsPresence } from "./cursors-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";
interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  })

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
  
  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onWheel = useCallback((e: React.WheelEvent) =>{
    setCamera((camera) =>({
      x: camera.x -e.deltaX,
      y: camera.y - e.deltaY,
    }))
  },
    []
  )
  // const info = useSelf((self) => self.info);

const onPointerMove = useMutation(
  ({ setMyPresence }, e: React.PointerEvent) => {
    e.preventDefault();
    const current = pointerEventToCanvasPoint(e, camera);
    setMyPresence({ cursor: current });
  },
  []
); 
const onPointerLeave = useMutation(
  ({ setMyPresence }) => {
    setMyPresence({ cursor: null });
  },
  []
);

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar 
        canvasState = {canvasState}
        setCanvasState = {setCanvasState}
        canRedo = {canRedo}
        canUndo = {canUndo}
        undo = {history.undo}
        redo = {history.redo}
      />
      <svg 
        className="h-[100vh] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <g>
          <CursorsPresence/>
        </g>
      </svg>
      {/* Example usage of boardId to avoid unused variable error */}
      <span className="hidden">{boardId}</span>
    </main>
  );
};
