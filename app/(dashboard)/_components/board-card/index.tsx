"use client";

import Image from "next/image";
import Link from "next/link";
import Overlay from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import Actions from "@/components/actions";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const { mutate: onFavourite, pending: pendingFavourite } = useApiMutation(
    api.board.favourite
  );
  const { mutate: onunFavourite, pending: pendingunFavourite } = useApiMutation(
    api.board.unfavourite
  );

  const toggleFavourite = () => {
    if (isFavorite) {
      onunFavourite({ id }).catch(() => toast.error("Failed to unfavourite"));
    } else {
      onFavourite({ id, orgId }).catch(() =>
        toast.error("Failed to favourite")
      );
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] rounded-lg border  flex flex-col justify-between overflow-hidden ">
        <div className="relative w-full h-full p-6 flex items-center bg-amber-50 justify-center">
          <Image
            src={imageUrl}
            alt={title}
            width={100}
            height={100}
            className="object-contain"
          />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute opacity-0 top-1 right-1 group-hover:opacity-100 px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity  " />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavourite}
          disabled={pendingFavourite || pendingunFavourite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="group aspect-[100/127] rounded-lg overflow-hidden ">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default BoardCard;
