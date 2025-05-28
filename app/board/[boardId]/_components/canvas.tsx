"use client";

// import { useSelf } from "@liveblocks/react";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  // const info = useSelf((self) => self.info);

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
      {/* Example usage of boardId to avoid unused variable error */}
      <span className="hidden">{boardId}</span>
    </main>
  );
};
