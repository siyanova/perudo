import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-row w-full p-[24px] items-center justify-between">
      <div className="flex flex-col items-center">
        <p className="text-[48px]">PERUDO</p>
        <Link
          href={"/rules"}
          className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <p>Правила игры</p>
        </Link>
      </div>
      <div className="flex flex-col">
        <p className="text-[18px]">Введите имя</p>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            className="bg-gray-200 focus:bg-white border border-gray-300 p-1 rounded-md"
            placeholder="Виталий"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <p>Сохранить</p>
          </button>
        </div>
      </div>
    </header>
  );
};
