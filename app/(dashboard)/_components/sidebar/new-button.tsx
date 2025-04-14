// This component is used to create a new organization
// when the user clicks on the button in the sidebar
// and it is used in the sidebar.tsx file
// and it is used to show a hint when the user hovers over the button

"use-client";

import { Hint } from "@/components/hint";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import{
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

export const NewButton = () => {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint label = "Create Organization"
                        side = "right"
                        align = "start"
                        sideOffset = {10}
                    >
                        <button className="bg-white/25 h-full w-full rounded-md
                        flex items-center justify-center opacity-60 hover:opacity-100 transition">
                            <Plus className="text-white"/>
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent  className="p-0 flex justify-center item-center bg-transparent border-none w-[430px]">
                <CreateOrganization/>
            </DialogContent>
        </Dialog>
    )
}