import Link from "next/link";

export const Main = () => {
  return (
    <main className="text-[24px] flex flex-col w-full gap-4 items-center mt-[100px]">
      <Link
        href={"/room"}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <p>Создать игру</p>
      </Link>
      <p>ИЛИ</p>
      <input
        type="text"
        className="bg-gray-200 focus:bg-white border border-gray-300 p-1 rounded-md"
        placeholder="Ftg3"
      />
      <Link
        href={"/"}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <p>Присоединиться к игре</p>
      </Link>
    </main>
  );
};
