import Link from "next/link";

export default function Contact() {
  return (
    <div className="relative flex flex-1 flex-col bg-white dark:bg-black">
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <Link
          href="/"
          className="absolute left-4 top-4 text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          ← Нүүр
        </Link>
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Холбоо барих
        </h1>
      </div>
      <footer className="py-4 text-center text-xs text-zinc-400 dark:text-zinc-600">
        © 2026
      </footer>
    </div>
  );
}
