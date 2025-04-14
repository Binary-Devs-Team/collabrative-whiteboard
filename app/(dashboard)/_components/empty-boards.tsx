import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const EmptyBoards = () => {
    return (
        <div className = "h-full flex flex-col items-center justify-center">
            <Image
                src = "/note.png"
                height = {120}
                width = {120}
                alt = "Empty Search"    
            />
            <h2 className = "text-2xl font-semibold mt-6">
                Create your first board.
            </h2>
            <p className =" text-muted-foreground text-sm mt-2 mb-4">
                Start by creating a board for your organization.
            </p>
            <div>
                <Button size = "lg">
                    Create board
                </Button>
            </div>
        </div>
    )
}