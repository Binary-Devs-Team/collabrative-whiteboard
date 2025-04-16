"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";

import { api } from "@/convex/_generated/api";

export const EmptyBoards = () => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then(() => {
        toast.success("Board Created");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src='/note.png' height={120} width={120} alt='Empty Search' />
      <h2 className='text-2xl font-semibold mt-6'>Create your first board.</h2>
      <p className=' text-muted-foreground text-sm mt-2 mb-4'>
        Start by creating a board for your organization.
      </p>
      <div>
        <Button disabled={pending} onClick={onClick} size='lg'>
          Create board
        </Button>
      </div>
    </div>
  );
};
