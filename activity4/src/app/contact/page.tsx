"use client";

import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="max-w-xl w-full bg-white/10 dark:bg-black/30 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-[var(--foreground)]">
        <Image
          src="/assets/pic.jpg"
          alt="Paul Jan V. Dilag"
          width={120}
          height={120}
          className="rounded-full border-4 border-[var(--foreground)] mb-4 shadow-lg object-cover"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Contact</h1>
        <h2 className="text-lg md:text-xl font-semibold mb-6 text-center">Paul Jan V. Dilag</h2>
        <div className="w-full flex flex-col gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold">Email:</span>
            <a href="mailto:pauljan.dilag@gmail.com" className="text-blue-500 hover:underline break-all">pauljan04@gmail.com</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">Domain Email:</span>
            <a href="mailto:pauljan.dilag@gmail.com" className="text-blue-500 hover:underline break-all">202220002@gordoncollege.edu.ph</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">Phone:</span>
            <a href="tel:+639123456789" className="text-blue-500 hover:underline">+63 998 392 5959</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">Facebook:</span>
            <a href="https://www.facebook.com/paul.dilag4/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">paul.dilag4</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">Instagram:</span>
            <a href="https://www.instagram.com/hi_pols/" target="_blank" rel="noopener" className="text-pink-500 hover:underline">@hi_pols</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">Discord:</span>
            <span className="text-gray-400">KimTofuu#1234</span>
          </div>
        </div>
        <Link href="/">
          <button className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-cyan-600 text-white font-semibold shadow-lg hover:from-cyan-600 hover:to-green-500 hover:scale-105 transition-all duration-300 border-0 outline-none focus:ring-2 focus:ring-green-300">
            ← Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
