import {Plus} from "lucide-react";
import {OrganizationProfile} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import{
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from  "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const InviteButton = () => {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="mr-4">
                    <Plus className = "h-4 w-4 mr-2"/>
                    Invite Members
                </Button>
            </DialogTrigger>
            <DialogContent className="!p-0 !bg-transparent !border-none !max-w-none !w-auto pt-18"
                style={{ width: 'fit-content' }}>
                <DialogTitle>
                    <VisuallyHidden>Invite Members</VisuallyHidden>
                </DialogTitle>
                <OrganizationProfile routing="hash"/>
            </DialogContent>
        </Dialog>
    )
}