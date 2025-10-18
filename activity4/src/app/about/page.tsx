"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="max-w-2xl w-full bg-white/10 dark:bg-black/30 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-[var(--foreground)]">
        <Image
          src="/assets/pic.jpg"
          alt="Paul Jan V. Dilag"
          width={160}
          height={160}
          className="rounded-full border-4 border-[var(--foreground)] mb-6 shadow-lg object-cover"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Me</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Paul Jan V. Dilag</h2>
        <p className="text-base md:text-lg leading-relaxed text-center mb-6">
          Hi! I’m Paul, a passionate IT student at Gordon College. My journey in tech started with curiosity and quickly grew into a love for building things—whether it’s apps, games, or creative projects. I’ve had the chance to work as an Assistant Project Manager, which taught me a lot about teamwork, leadership, and the real-world challenges of IT.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-center mb-6">
          Outside of coding, you’ll find me gaming 🎮, hitting the gym 💪, or exploring new tech trends. I believe in always leveling up—both in my skills and in life. My dream is to become a top-tier IT professional, making a positive impact through technology.
        </p>
        <div className="flex flex-row gap-4 justify-center mb-4">
          <a href="https://github.com/KimTofuu" target="_blank" rel="noopener" className="hover:scale-110 transition-transform">
            <img src="/assets/github.png" alt="github logo" className="icons w-10 h-10" />
          </a>
          <a href="https://www.facebook.com/paul.dilag4/" target="_blank" rel="noopener" className="hover:scale-110 transition-transform">
            <img src="/assets/facebook.png" alt="facebook logo" className="icons w-10 h-10" />
          </a>
          <a href="https://www.instagram.com/hi_pols/" target="_blank" rel="noopener" className="hover:scale-110 transition-transform">
            <img src="/assets/instagram.png" alt="instagram logo" className="icons w-10 h-10" />
          </a>
          <a href="https://www.discord.com/users/754653265987109026" target="_blank" rel="noopener" className="hover:scale-110 transition-transform">
            <img src="/assets/discord.png" alt="discord logo" className="icons w-10 h-10" />
          </a>
        </div>
        <Link href="/">
          <button className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-blue-500 hover:scale-105 transition-all duration-300 border-0 outline-none focus:ring-2 focus:ring-blue-300">
            ← Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
