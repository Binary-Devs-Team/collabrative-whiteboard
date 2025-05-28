declare global {
  interface Liveblocks {
    // Each user's Presence, for useMyPresence, useOthers, etc.

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

export {};
