"use client";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import ConfirmModal from "./confirm-modal";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";
interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}
const Actions = ({ children, side, sideOffset, id, title }: ActionsProps) => {
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(
        `
            ${window.location.origin}/board/${id}
            `
      )
      .then(() => toast.success("Link Copied"))
      .catch(() => toast.error("Failed to copy link"));
  };
  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Board Deleted"))
      .catch(() => toast.error("Failed to delete board"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        className='w-60'
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem onClick={onCopyLink}>
          <Link2 className='h-4 w-4 mr-2' /> Copy board Link
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onOpen(id, title)}>
          <Pencil className='h-4 w-4 mr-2' /> Rename
        </DropdownMenuItem>
        <ConfirmModal
          header='Delete board?'
          description='This will delete the board and all its contents'
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant={"ghost"}
            className='p-3 cursor-pointer text-sm justify-start w-full font-normal '
          >
            <Trash2 className='h-4 w-4 mr-2' /> Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
