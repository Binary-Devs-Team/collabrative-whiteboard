"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}
const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then(() => {
        toast.success("Board Created");
        //Todo : Redirect to /board/${id}
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <button
      disabled={pending || disabled}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6 ",
        (pending || disabled) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed "
      )}
      onClick={onClick}
    >
      <Plus className='h-12 w-12 text-white stroke-1 ' />
      <p className='text-xs text-white font-light '>New Board</p>
    </button>
  );
};

export default NewBoardButton;
