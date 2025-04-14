// This component is used to display an empty state when there are no search results found.

import Image from 'next/image';

export const EmptySearch = () => {
    return (
        <div className = "h-full flex flex-col items-center justify-center">
            <Image
                src = "/empty-search.png"
                height = {140}
                width = {140}
                alt = "Empty Search"    
            />
            <h2 className = "text-2xl font-semibold mt-6">
                No results found
            </h2>
            <p className =" text-muted-foreground text-sm mt-2 mb-4">
                Try searching for something else.
            </p>
        </div>
    )
}