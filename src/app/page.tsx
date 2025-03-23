import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className="text-6xl text-red-500 font-bold">New Project Next</h1>
      <Link href="/about" className="text-3xl text-blue-500">
        Go to About Page:  { 1 + 1 }
      </Link>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-3xl text-gray-500">
        Footer

        </span>
      </footer>
    </div>
  );
}
