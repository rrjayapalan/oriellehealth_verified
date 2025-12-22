"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-md">
      {/* Match site container width */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="h-20 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Orielle Health Services Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-8 text-base text-teal font-medium">
            <Link href="/" className="hover:text-gold">Home</Link>
            <Link href="/about" className="hover:text-gold">About Us</Link>
            <a href="/#services" className="hover:text-gold">Services</a>
            <a href="/#how-it-works" className="hover:text-gold">How it works</a>
            <Link href="/faq" className="hover:text-gold">FAQ</Link>
            <a href="/#contact" className="hover:text-gold">Contact</a>
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/60122740741"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex flex-shrink-0 bg-gold text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition text-base whitespace-nowrap"
          >
            WhatsApp Us
          </a>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/60122740741"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white px-3 py-2 rounded-lg shadow-md text-sm whitespace-nowrap"
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg border border-teal/20 px-3 py-2 text-teal"
              aria-label="Open menu"
              aria-expanded={open}
            >
              {/* simple hamburger */}
              <span className="block w-5">
                <span className="block h-[2px] w-5 bg-teal mb-1"></span>
                <span className="block h-[2px] w-5 bg-teal mb-1"></span>
                <span className="block h-[2px] w-5 bg-teal"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-teal/10 bg-white shadow-sm p-4 flex flex-col gap-3 text-teal font-medium">
              <Link href="/" onClick={() => setOpen(false)} className="hover:text-gold">Home</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="hover:text-gold">About Us</Link>
              <a href="/#services" onClick={() => setOpen(false)} className="hover:text-gold">Services</a>
              <a href="/#how-it-works" onClick={() => setOpen(false)} className="hover:text-gold">How it works</a>
              <Link href="/faq" onClick={() => setOpen(false)} className="hover:text-gold">FAQ</Link>
              <a href="/#contact" onClick={() => setOpen(false)} className="hover:text-gold">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
