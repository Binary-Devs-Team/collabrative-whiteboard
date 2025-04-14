// This component is used to display the organization in the sidebar 
// and it is used in the sidebar.tsx file
// and it is used to show a hint when the user hovers over the organization

"use client";

import { Hint } from "@/components/hint";
import Image from "next/image";
import {
    useOrganization,
    useOrganizationList,
} from "@clerk/nextjs";

import { cn } from "@/lib/utils";

interface ItemProps {
    id : string;
    name : string;
    imageUrl : string;
}

export const Item = ({ id, name, imageUrl } : ItemProps) => {
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();
    const isActive = organization?.id === id;
    const onClick = () => {
        if(!setActive) return;
        setActive({organization : id});
    }        
    return (
        <div className="aspect-square relative">
            <Hint label = {name}
                side = "right"
                align = "start"
                sideOffset = {10}
            >
                <Image
                    fill
                    alt ={name}
                    src = {imageUrl}
                    onClick = {onClick}
                    className={cn("rounded-md object-cover opacity-60 hover:opacity-100 transition cursor-pointer", isActive && "opacity-100")}
                />
            </Hint>
        </div>
    )
}