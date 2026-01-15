"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const mainLinks = [
    { label: "Home", href: "/landing-page" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "How It Works", href: "/how-it-work" },
  ];

  const resourcesLinks = [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Work Force", href: "/work-force" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <header className="fixed top-0 w-full z-30 flex justify-center px-4">
      <nav className="w-full max-w-7xl">
        <div
          className="flex justify-between items-center h-16 sm:h-20
                     bg-gradient-to-r from-[#1a1a1a] to-[#222]
                     px-6 sm:px-8 lg:px-10
                     rounded-b-3xl
                     shadow-[0_10px_25px_rgba(0,0,0,0.35)]
                     border-x border-b border-white/10"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo2.png"
              alt="Nigeria Manpower Solution"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {mainLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-white hover:text-gray-300 transition"
              >
                {label}
              </Link>
            ))}

            {/* Desktop Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center text-white hover:text-gray-300 transition"
              >
                Resources
                <svg
                  className="w-6 h-6 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="19" r="2" />
                </svg>
              </button>

              {isResourcesOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-zinc-800 rounded-md shadow-xl z-50">
                  {resourcesLinks.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsResourcesOpen(false)}
                      className="block px-4 py-3 text-white text-sm hover:bg-zinc-700"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Contact Button */}
            <Link
              href="/contact-us"
              className="bg-amber-500 hover:bg-[#e65d00] text-white px-5 py-2 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-16 sm:top-20 left-0 w-full
                       bg-[#1A1A1A] px-5 py-6 space-y-3
                       md:hidden z-40 rounded-b-2xl"
          >
            {mainLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white py-2"
              >
                {label}
              </Link>
            ))}

            {/* Mobile Resources Dropdown */}
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="w-full flex justify-between items-center text-white py-2"
            >
              Resources
              <span>{isResourcesOpen ? "−" : "+"}</span>
            </button>

            {isResourcesOpen && (
              <div className="pl-4 space-y-1">
                {resourcesLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 text-sm"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Contact Button */}
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 bg-amber-500 text-white text-center py-2 rounded-md transition-colors hover:bg-[#e65d00]"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
