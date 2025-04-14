"use client";

import { Item } from "./item";
import { useOrganizationList } from "@clerk/nextjs"

export const List = () => {
    const { userMemberships } = useOrganizationList({
        userMemberships : {
            infinite : true,
        }
    })
    return (
        <ul className = "space-y-4">
            {userMemberships.data?.map((mem) => (
                <Item
                    key = {mem.organization.id}
                    id = {mem.organization.id}
                    name = {mem.organization.name}
                    imageUrl = {mem.organization.imageUrl}
                />
            ))}
        </ul>
    )
}