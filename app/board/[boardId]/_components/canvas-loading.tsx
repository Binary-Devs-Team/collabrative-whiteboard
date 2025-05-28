"use client";
import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";
// import { Skeleton } from "@/components/ui/skeleton";

export const CanvasLoading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none items-center justify-center flex">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
