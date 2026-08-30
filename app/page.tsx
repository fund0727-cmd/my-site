export default function Home() {
  const today = new Date().toLocaleDateString("mn-MN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Сайн уу, би вэб хийж сурч байна
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{today}</p>
        <div className="mt-4 flex flex-row gap-4">
          <button className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-black dark:border-zinc-700 dark:text-white">
            Тухай
          </button>
          <button className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-black dark:border-zinc-700 dark:text-white">
            Ажлууд
          </button>
          <button className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-black dark:border-zinc-700 dark:text-white">
            Холбоо барих
          </button>
        </div>
      </div>
      <footer className="py-4 text-center text-xs text-zinc-400 dark:text-zinc-600">
        © 2026
      </footer>
    </div>
  );
}
