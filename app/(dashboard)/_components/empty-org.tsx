// This component is used to display an empty state when there are no organizations available.
// It provides a button to create a new organization using Clerk's CreateOrganization component.

import Image from 'next/image';
import { CreateOrganization } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/components/ui/dialog';
export const EmptyOrg = () => {
    return (
        <div className = " h-full flex flex-col items-center justify-center">
            <Image
                src="/elements.svg"
                alt="Empty"
                width={200}
                height={200}
            />
            <h2 className ="text-2xl font-semibold mt-6">
                Welcome to board!
            </h2>
            <p className =" text-muted-foreground text-sm mt-2 mb-4">
                Create an organization to get started.
            </p>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg">
                            Create organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className = "p-0 bg-transparent borde-none w-[430px]">
                        <CreateOrganization/>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}