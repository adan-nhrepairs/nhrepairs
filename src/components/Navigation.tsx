"use client";

import { useState } from "react";
import Link from "next/link";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/fleet-maintenance", label: "Fleet Maintenance" },
    { href: "/breakdown-membership", label: "Breakdown Membership" },
    { href: "/services", label: "Services" },
    { href: "/areas/miami", label: "Service Areas" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#0A1628] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              {/* Wordmark logo with icon */}
              <div className="flex items-center gap-1">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="3" fill="#F97316"/>
                  <path d="M4 18L8 10H16L20 18H4Z" fill="white"/>
                  <circle cx="8" cy="20" r="2" fill="white"/>
                  <circle cx="17" cy="20" r="2" fill="white"/>
                  <rect x="16" y="12" width="8" height="6" rx="1" fill="white"/>
                </svg>
                <span className="text-white font-black text-lg tracking-tight leading-none">
                  FLORIDA<span className="text-orange-400">TRUCK</span>REPAIRS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-colors duration-150 uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="text-orange-400 font-bold text-sm hover:text-orange-300 transition-colors"
            >
              {PHONE_NUMBER}
            </a>
            <Link
              href="/contact"
              className="bg-orange-400 text-white text-sm font-semibold px-4 py-2 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-wider"
            >
              Get Coverage
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0A1628] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3 text-gray-300 hover:text-orange-400 font-medium text-sm uppercase tracking-wide border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <a
                href={PHONE_HREF}
                className="block text-center bg-orange-400 text-white font-bold py-3 rounded-sm hover:bg-orange-600 transition-colors"
              >
                Call Now: {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
