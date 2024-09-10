export const Room = () => {
  return (
    <main className="pt-[200px] flex flex-col bg-gray-200">
      <div className="flex flex-col items-center h-screen  ">
        <div
          className="bg-blue-500 text-white font-bold rounded-lg"
          style={{ width: "800px", height: "600px" }}
        ></div>
        <input className="text-[20px]" placeholder="номинал" />
        <input placeholder="количество" />
      </div>
    </main>
  );
};
