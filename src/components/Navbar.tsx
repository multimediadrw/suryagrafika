"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/layanan", label: "Layanan" },
    { href: "/portofolio", label: "Portofolio" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SG</span>
            </div>
            <div>
              <span className="text-sky-700 font-bold text-xl">Surya</span>
              <span className="text-sky-500 font-bold text-xl"> Grafika</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sky-800 hover:text-sky-500 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              className="bg-sky-600 text-white px-5 py-2 rounded-full hover:bg-sky-700 transition-colors duration-200 font-medium"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sky-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-sky-100 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sky-800 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/kontak"
                className="block bg-sky-600 text-white text-center px-5 py-2 rounded-full hover:bg-sky-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pesan Sekarang
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
