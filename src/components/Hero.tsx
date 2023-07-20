"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useContext, useEffect, useRef } from "react";
// import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { ScrollContext } from "./Providers/ScrollProvider";
import { renderCanvas } from "./renderCanvas";
import { TypePhase, useTypedSuperpower } from "./useTypedSuperpower";
import cn from "classnames";

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);
  const { typedSuperpower, phase } = useTypedSuperpower([
    "Freelancer",
    "Full Stack Web Developer",
    "Mobile Developer",
  ]);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hello Im Somay Chauhan, I am a freelance Web Developer who helps businesses turn their ideas
        into functional websites and applications.
      </h1>
      <motion.div
        className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-4">
              <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
                Somay Chauhan
              </h1>
              <span
                className={cn(
                  "h-8 text-xl font-medium opacity-80 sm:text-3xl md:h-9 md:text-4xl xl:h-10",
                  {
                    ["end-cursor"]: phase !== TypePhase.Deleting,
                    ["blinking"]: phase === TypePhase.Pausing,
                  }
                )}
              >
                {typedSuperpower}
              </span>

              <Link
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                Read more about me &rarr;
              </Link>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector("#intro");

                  intro?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* <HiOutlineArrowNarrowDown size={20} /> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
