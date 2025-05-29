import {createClient} from "@liveblocks/client";
import { createRoomContext} from "@liveblocks/react";

declare global {
  interface Liveblocks {
    // Each user's Presence, for useMyPresence, useOthers, etc.
    Presence: {
      cursor: { x: number, y: number } | null;
    };
    UserMeta: {
      id?: string;
      info?: {
        // Example properties, for useSelf, useUser, useOthers, etc.
        name?: string;
        picture?: string;
      };
    };

    // Custom events, for useBroadcastEvent, useEventListener

    // Example has two events, using a union
    // | { type: "PLAY" }
    // | { type: "REACTION"; emoji: "🔥" };

    // Custom metadata set on threads, for useThreads, useCreateThread, etc.
  }
}

export const client = createClient({
  throttle: 16,
  authEndpoint: "/api/liveblocks-auth", // Replace with your actual auth endpoint
});

export {};
