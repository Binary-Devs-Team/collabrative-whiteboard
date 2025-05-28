"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";
import { EmptyBoards } from "./empty-boards";
import { useSearchParams } from "next/navigation";
import BoardCard from "./board-card";
import NewBoardButton from "./new-board-button";
// import { query } from "@/convex/_generated/server";

interface BoardListProps {
  orgId: string;
}

export const BoardList = ({ orgId }: BoardListProps) => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? undefined;
  const favorites = searchParams.get("favorites") ?? undefined;

  const data = useQuery(api.boards.get, { orgId, search, favourites: favorites });

  if (data === undefined) {
    return (
      <div>
        <h2 className='text-3x1'>
          {favorites ? "Favorite boards" : "Team boards"}
        </h2>
        <div
          className='grid grid-cols-1 md:grid-cols-4
    lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10'
        >
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data.length && search) {
    return <EmptySearch />;
  }
  if (!data.length && favorites) {
    return <EmptyFavorites />;
  }
  if (!data.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h3 className='text-3xl'>
        {favorites ? "Favorite Boards " : "Team Boards"}
      </h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10 '>
        <NewBoardButton orgId={orgId} />
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavourite}
          />
        ))}
      </div>
    </div>
  );
};
