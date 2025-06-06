"use client";

import { memo } from "react";

import {
  shallow,
  useOthersConnectionIds,
  useOthersMapped,
} from "@liveblocks/react";
import { Cursor } from "./cursor";
import { Path } from "./path";
import { colorToCss } from "@/lib/utils";

const Cursors = () => {
  const ids = useOthersConnectionIds();
  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

const DraftS = () => {
  const others = useOthersMapped(
    (other) => ({
      pencilDraft: other.presence.pencilDraft,
      penColor: other.presence.penColor,
    }),
    shallow
  );

  return (
    <>
      {others.map(([Key, other]) => (
        <Path
          key={Key}
          points={other.pencilDraft || []}
          x={0}
          y={0}
          fill={other.penColor ? colorToCss(other.penColor) : "#000"}
        />
      ))}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <>
      <DraftS />
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorsPresence";
