"use client";

import Image from "next/image";
import Link from "next/link";

export default function MobileHeader() {
  return (
    <header className="md:hidden sticky top-0 z-40 bg-sky-100/90 backdrop-blur-md border-b border-sky-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo + Nama */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm border border-sky-200">
            <Image
              src="/logo.png"
              alt="Surya Grafika"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <span className="text-sky-900 font-bold text-base tracking-wide">SURYA GRAFIKA</span>
        </Link>

        {/* Icon kanan */}
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow-sm border border-sky-100 text-sky-600 hover:bg-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow-sm border border-sky-100 text-sky-600 hover:bg-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
