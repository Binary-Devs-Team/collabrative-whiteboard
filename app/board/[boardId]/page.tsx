import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
  params: Promise<{ boardId: string }>;
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const { boardId } = await params;
  return <Canvas boardId={boardId} />;
};

export default BoardIdPage;
