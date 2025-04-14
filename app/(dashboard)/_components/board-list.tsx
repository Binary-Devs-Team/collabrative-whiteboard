// This component is used to display a list of boards based on 
// the provided organization ID and query parameters.

"use client";

import { useSearchParams } from "next/navigation";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";
import { EmptyBoards } from "./empty-boards";

interface BoardListProps {
    orgId: string;
    query?: {
        search?: string;
        favorites?: string;
    }
}
export const BoardList = ({
    orgId,
    query
}: BoardListProps) => {
    const data = [];
    const searchParams = useSearchParams();
    const search = searchParams.get("search");
    const favorites = searchParams.get("favorites");
    if(!data?.length && search){
        return (
            <EmptySearch/>
        )
    }
    if(!data?.length && favorites){
        return (
            <EmptyFavorites/>
        )
    }
    if(!data?.length){
        return (
            <EmptyBoards/>
        ) 
    }
    return (
        <div>
            {JSON.stringify(query)}
        </div>
    )
}
        