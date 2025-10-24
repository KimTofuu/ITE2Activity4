"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // On mount, sync with current data-theme
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") || "dark";
    setTheme(current);
  }, []);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    setTheme(next);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 md:p-24 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <button
        id="themeToggle"
        onClick={toggleTheme}
        className="fixed top-4 left-4 z-50 px-[18px] py-2 rounded-lg border-0 bg-[#222] text-white font-bold cursor-pointer shadow-md"
      >
        {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div
        id="profile"
        className="opacity-100 w-auto max-w-[1000px] mx-auto mt-8 flex flex-col-reverse md:flex-row justify-evenly items-center gap-6 md:gap-12 relative z-10 text-left"
      >
        <div className="main flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-12 max-w-[1000px] w-full p-0 relative">
          <div className="details flex-1 text-left text-[1.15rem] leading-[1.6] max-w-[540px]">
            <h2 className="text-[2.5rem] font-bold mb-[0.2em] tracking-[-1px]">Paul Jan V. Dilag</h2>
            <p>BS in Information Technology</p>
            <br />
            <p>Student 💻 | Gamer 🎮 | Gym Rat 💪 | Future IT Pro 👨‍💻</p>
            <br />
            <p>
              I’m an IT student at Gordon College who loves coding, gaming, and the gym. I got to work as an Assistant Project Manager for a bit, which gave me a taste of the real-world grind. Whether I’m building apps, chasing wins in-game, or pushing reps at the gym, I’m always looking for ways to level up.
            </p>
            <div className="flex flex-row gap-4 mt-6">
              <Link href="/about">
                <button
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-blue-500 hover:scale-105 transition-all duration-300 border-0 outline-none focus:ring-2 focus:ring-blue-300"
                >
                  About Me
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-cyan-600 text-white font-semibold shadow-lg hover:from-cyan-600 hover:to-green-500 hover:scale-105 transition-all duration-300 border-0 outline-none focus:ring-2 focus:ring-green-300"
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="picture flex flex-col items-center md:items-end justify-center max-w-[340px] min-w-[220px] w-auto m-0 relative flex-1">
            <Image
              className="img w-[180px] h-[180px] md:w-[240px] md:h-[240px] lg:w-[320px] lg:h-[320px] rounded-full object-cover border-[6px] border-[var(--foreground)]"
              src="/assets/pic.jpg"
              alt="Profile Picture"
              width={320}
              height={320}
            />
            <span className="handwritten intro absolute text-[var(--foreground)] opacity-80 pointer-events-none left-[-50px] top-[20px] text-[1rem] -rotate-[18deg] md:left-[-90px] md:top-[60px] md:text-[1.2rem]">
              let me<br />introduce<br />myself
            </span>
            <span className="handwritten note absolute text-[var(--foreground)] italic opacity-80 pointer-events-none left-[225px] bottom-[60px] text-left text-[0.9rem] max-w-[200px] rotate-[18deg] md:right-[-150px] md:bottom-[10px] md:left-auto md:text-center md:text-[1rem]">
              I am just a student<br />have mercy
            </span>
            <div id="moreDeets" className="flex flex-row gap-4 mt-5">
              <div className="github">
                <a href="https://github.com/KimTofuu" target="_blank" rel="noopener">
                  <img src="/assets/github.png" alt="github logo" className="icons w-[30px] h-[30px] md:w-[50px] md:h-[50px] m-[10px]" />
                </a>
              </div>
              <div className="facebook">
                <a href="https://www.facebook.com/paul.dilag4/" target="_blank" rel="noopener">
                  <img src="/assets/facebook.png" alt="facebook logo" className="icons w-[30px] h-[30px] md:w-[50px] md:h-[50px] m-[10px]" />
                </a>
              </div>
              <div className="instagram">
                <a href="https://www.instagram.com/hi_pols/" target="_blank" rel="noopener">
                  <img src="/assets/instagram.png" alt="instagram logo" className="icons w-[30px] h-[30px] md:w-[50px] md:h-[50px] m-[10px]" />
                </a>
              </div>
              <div className="discord">
                <a href="https://www.discord.com/users/754653265987109026" target="_blank" rel="noopener">
                  <img src="/assets/discord.png" alt="discord logo" className="icons w-[30px] h-[30px] md:w-[50px] md:h-[50px] m-[10px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
