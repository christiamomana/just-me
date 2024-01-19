"use client";

import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stories from "react-insta-stories";
import { LinkToSocial } from "./components/LinkToSocial/LinkToSocial";

const stories = [
  "https://lh3.googleusercontent.com/pw/ABLVV84B3fFgEhZyVO60EaH7tJOXcUqfGWjo_55lleYu9isxjrx0lVQtoOuRz09Sk3GwzXYmVuvbRKXI-CeBkPDb0mKhRUkr2Ab1poMOA8wLvwjlgskJaYsiWN6dybnpt0Gq2VeuSI90sP7i-vrs9auFKIdiIA=w1132-h1508-s-no-gm?authuser=0",
  {
    url: "https://firebasestorage.googleapis.com/v0/b/personal-eea8d.appspot.com/o/just-me%2FIMG_4542.MOV?alt=media&token=818437d3-4664-478b-885f-e0c74344e345",
    duration: 5000, // ignored
    type: "video",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative mx-auto mt-16 grid w-full max-w-container grid-cols-1 px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
        <div
          className="col-start-1 row-start-1 h-7 text-base text-white	font-semibold leading-7 text-sky-500"
          aria-hidden="true"
        >
          Full stack developer
        </div>
        <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl text-white	font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
          Christiam Omaña
        </h1>
        <p className="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-zinc-300">
          Desde 2015, desempeño el rol de desarrollador de software, acumulando
          experiencia en diversas tecnologías y destacándome por mi enfoque
          proactivo, pasión por el aprendizaje constante y disposición para
          abordar desafíos significativos.
        </p>
        <div className="col-start-1 row-start-4  sm:flex-row sm:space-x-4 sm:space-y-0">
          <LinkToSocial Icon={GitHubIcon} />
          <LinkToSocial Icon={GitHubIcon} />
          <a
            className=" justify-center rounded-x text-sm font-semibold py-3 px-4 bg-slate-900 text-green-400 hover:bg-slate-700"
            href="/components"
          >
            <span>
              <LinkedInIcon />
              <span
                aria-hidden="true"
                className="hidden text-slate-400 sm:inline"
              >
                →
              </span>
            </span>
          </a>
          <a
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
            href="/templates"
          >
            <span>
              Explore templates
              <span
                aria-hidden="true"
                className="hidden text-black/25 sm:inline"
              >
                →
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
