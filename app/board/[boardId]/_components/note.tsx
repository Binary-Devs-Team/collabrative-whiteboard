import { Kalam } from "next/font/google";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

import { cn, colorToCss, getContrastingTextColor } from "@/lib/utils";

import { NoteLayer } from "@/types/canvas";
import { useMutation } from "@liveblocks/react";

const font = Kalam({
  subsets: ["latin"],
  weight: "400",
});

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96;
  const scaleFactor = 0.15;
  const fontSizeBasedOnHeight = height * scaleFactor;
  const fontSizeBasedOnWidth = width * scaleFactor;
  return Math.min(fontSizeBasedOnHeight, fontSizeBasedOnWidth, maxFontSize);
};

interface NoteProps {
  id: string;
  layer: NoteLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Note = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: NoteProps) => {
  const { x, y, width, height, fill, value } = layer;

  const updateValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");
    liveLayers.get(id)?.set("value", newValue);
  }, []);

  const handleContentChange = (e: ContentEditableEvent) => {
    updateValue(e.target.value);
  };

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      xHeight={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        backgroundColor: fill ? colorToCss(fill) : "#000",
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
      }}
      className="drop-shadow-xl shadow-md"
    >
      <ContentEditable
        html={value || "Note"}
        onChange={handleContentChange}
        className={cn(
          "h-full w-full flex items-center justify-center text-center  outline-none",
          font.className
        )}
        style={{
          fontSize: `${calculateFontSize(width, height)}px`,
          color: fill ? getContrastingTextColor(fill) : "#000",
        }}
      />
    </foreignObject>
  );
};
