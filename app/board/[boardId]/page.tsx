import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { CanvasLoading } from "./_components/canvas-loading";
interface BoardIdPageProps {
  params: Promise<{ boardId: string }>;
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const { boardId } = await params;

  return (
    <Room roomId={boardId} fallback={<CanvasLoading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardIdPage;
