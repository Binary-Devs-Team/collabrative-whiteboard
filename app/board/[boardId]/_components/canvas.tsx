"use client";

// import { useSelf } from "@liveblocks/react";

import { useState } from "react";
import { CanvasState, CanvasMode } from "@/types/canvas";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { useHistory, useCanUndo, useCanRedo } from "@liveblocks/react";
interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  })
  
  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();
  // const info = useSelf((self) => self.info);

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
      {/* Example usage of boardId to avoid unused variable error */}
      <span className="hidden">{boardId}</span>
    </main>
  );
};
