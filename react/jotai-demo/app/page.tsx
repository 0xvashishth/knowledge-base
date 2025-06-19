"use client";
import { useAtom } from "jotai";
import { countAtom } from "./atoms/countAtom";
import Image from "next/image";

// Jotai atom (state)
// const countAtom = atom(0);

export default function Home() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-xl">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <section className="mb-4">
          <h2 className="text-lg font-bold mb-2">Jotai State Management Demo</h2>
          <div className="flex items-center gap-4">
            <button
              className="px-3 py-1 rounded bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
              onClick={() => setCount((c) => c - 1)}
            >
              -
            </button>
            <span className="text-xl font-mono">{count}</span>
            <button
              className="px-3 py-1 rounded bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]"
              onClick={() => setCount((c) => c + 1)}
            >
              +
            </button>
          </div>
        </section>

        <section>
          <h3 className="font-semibold mb-1">What is Jotai?</h3>
          <p className="text-sm mb-2">
            <strong>Jotai</strong> is a minimal, scalable state management library for React. It uses atomic state units called <em>atoms</em>, which can be shared across components.
          </p>
          <ul className="list-disc pl-5 text-sm mb-2">
            <li>
              <strong>Local-first:</strong> Atoms are like local state, but can be shared globally.
            </li>
            <li>
              <strong>Minimal API:</strong> Just <code>atom</code> and <code>useAtom</code>.
            </li>
            <li>
              <strong>Zero boilerplate:</strong> No providers or reducers needed.
            </li>
          </ul>
          <h4 className="font-semibold mb-1">How is Jotai different?</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>
              Unlike Redux or Zustand, Jotai has no global store—each atom is independent.
            </li>
            <li>
              No context providers required; atoms work anywhere in your component tree.
            </li>
            <li>
              State updates are granular and scoped to the atom, reducing unnecessary re-renders.
            </li>
          </ul>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://jotai.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Learn more about Jotai
        </a>
      </footer>
    </div>
  );
}
