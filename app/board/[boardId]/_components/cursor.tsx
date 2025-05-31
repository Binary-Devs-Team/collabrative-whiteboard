"use client";
import { memo } from "react";
import { MousePointer2 } from "lucide-react";
import { connectionIdToColor } from "@/lib/utils";
import { useOther } from "@liveblocks/react";
import { useRef, useEffect, useState } from "react";

interface CursorProps {
  connectionId: number;
}

export const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);
  const name = info?.name || "Teammate";
  // Ultra-smooth logic
  const [animated, setAnimated] = useState<{ x: number; y: number } | null>(
    null
  );
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef<{ x: number; y: number } | null>(null);

  // Always keep the latest target in a ref
  useEffect(() => {
    if (cursor) {
      targetRef.current = { x: cursor.x, y: cursor.y };
      if (!animated) setAnimated({ x: cursor.x, y: cursor.y });
    }
  }, [cursor, animated]);

  // Run animation loop always if cursor is present
  useEffect(() => {
    if (!cursor) return;
    let running = true;
    function animate() {
      setAnimated((prev) => {
        if (!prev || !targetRef.current) return prev;
        const alpha = 0.18; // For 144fps: snappy, smooth movement
        const nx = prev.x + (targetRef.current.x - prev.x) * alpha;
        const ny = prev.y + (targetRef.current.y - prev.y) * alpha;
        // Snap if very close
        if (
          Math.abs(nx - targetRef.current.x) < 0.2 &&
          Math.abs(ny - targetRef.current.y) < 0.2
        ) {
          return { x: targetRef.current.x, y: targetRef.current.y };
        }
        return { x: nx, y: ny };
      });
      if (running) rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!cursor]);

  if (!cursor || !animated) {
    return null;
  }
  const { x, y } = animated;
  return (
    <foreignObject
      style={{
        transform: `translate(${x}px) translateY(${y}px)`,
      }}
      height={50}
      width={name.length * 10 + 24}
      className="relative drop-shadow-md"
    >
      <MousePointer2
        className="h-5 w-5"
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
      />
      <div
        className="absolute left-5 px-1.5 py-0.5 rounded-md text-xs text-white font-semibold"
        style={{
          backgroundColor: connectionIdToColor(connectionId),
        }}
      >
        {name}
      </div>
    </foreignObject>
  );
});

Cursor.displayName = "Cursor";
