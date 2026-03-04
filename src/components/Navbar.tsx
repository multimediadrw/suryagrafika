"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/galeri", label: "Galeri" },
    { href: "/kontak", label: "Kontak" },
    { href: "/lokasi", label: "Lokasi" },
  ];

  const isTransparent = isHome && !scrolled && !isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-sky-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SG</span>
            </div>
            <div>
              <span className={`font-bold text-xl transition-colors duration-300 ${isTransparent ? "text-white" : "text-sky-700"}`}>
                Surya
              </span>
              <span className={`font-bold text-xl transition-colors duration-300 ${isTransparent ? "text-sky-200" : "text-sky-500"}`}>
                {" "}Grafika
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 relative group ${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-sky-800 hover:text-sky-500"
                } ${pathname === link.href ? (isTransparent ? "text-white" : "text-sky-600") : ""}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  } ${isTransparent ? "bg-white" : "bg-sky-500"}`}
                />
              </Link>
            ))}
            <Link
              href="/kontak"
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                isTransparent
                  ? "border-2 border-white text-white hover:bg-white hover:text-sky-700"
                  : "bg-sky-600 text-white hover:bg-sky-700"
              }`}
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-sky-700"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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
          <div className="md:hidden bg-white border-t border-sky-100 py-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 font-medium transition-colors ${
                  pathname === link.href
                    ? "text-sky-600 bg-sky-50"
                    : "text-sky-800 hover:bg-sky-50 hover:text-sky-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Link
                href="/kontak"
                className="block bg-sky-600 text-white text-center px-5 py-2.5 rounded-full hover:bg-sky-700 transition-colors font-medium"
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
