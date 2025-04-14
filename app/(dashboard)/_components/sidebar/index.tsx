// This component is used to display the sidebar in the dashboard
// and it is used to display the list of organizations in the sidebar

import { NewButton } from "./new-button";
import { List } from "./list";

export const Sidebar = () => {
    return (
        <aside className="fixed z-[1] left-0 bg-blue-950
        h-full w-[60px] flex p-3 flex-col gap-y-4">
            <List/>
            <NewButton/>
        </aside>
    )
}