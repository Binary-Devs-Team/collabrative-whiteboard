import Image from "next/image";

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full w-full '>
      <Image
        src={"/logo.svg"}
        alt='logo'
        width={120}
        priority
        height={120}
        className='animate-pulse duration-700 '
      />
    </div>
  );
};

export default Loading;
