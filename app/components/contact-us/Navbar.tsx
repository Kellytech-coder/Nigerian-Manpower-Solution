"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopResourcesOpen, setIsDesktopResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  const mainLinks = [
    { label: "Home", href: "/landing-page" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-work" },
  ];

  const resourcesLinks = [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Work Force", href: "/work-force" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <header className="fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="bg-[#1a1a1a] rounded-b-2xl px-6 lg:px-10 h-16 flex items-center justify-between shadow-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo2.png"
              alt="Nigeria Manpower Solution"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {mainLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-white/90 hover:text-white transition"
              >
                {label}
              </Link>
            ))}

            {/* Desktop Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsDesktopResourcesOpen(!isDesktopResourcesOpen)
                }
                className="flex items-center gap-1 text-white/90 hover:text-white transition"
              >
                Resources
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDesktopResourcesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isDesktopResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-12 right-0 w-44 bg-[#222] rounded-xl shadow-xl overflow-hidden"
                  >
                    {resourcesLinks.map(({ label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setIsDesktopResourcesOpen(false)}
                        className="block px-4 py-3 text-sm text-white/80 hover:bg-[#2d2d2d] hover:text-white"
                      >
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Primary Action: Contact */}
          <div className="hidden md:flex items-center gap-5">
            {/* <Link
              href="/contact-us"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition"
            >
              Contact Us
            </Link> */}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden mt-4 mx-4 bg-[#1a1a1a] rounded-2xl px-6 py-6 space-y-4"
          >
            {mainLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/90 py-2"
              >
                {label}
              </Link>
            ))}

            {/* Mobile Resources Accordion */}
            <button
              onClick={() =>
                setIsMobileResourcesOpen(!isMobileResourcesOpen)
              }
              className="w-full flex justify-between items-center text-white/90 py-2"
            >
              <span>Resources</span>
              <span className="text-xl">
                {isMobileResourcesOpen ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {isMobileResourcesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pl-4 space-y-2 overflow-hidden"
                >
                  {resourcesLinks.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => {
                        setIsMobileResourcesOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-sm text-gray-300"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Primary Action: Contact */}
           {/* <Link
  href="/contact-us"
  onClick={() => setIsMobileMenuOpen(false)}
  className="block mt-3 bg-amber-500 text-center text-white py-2 rounded-full font-medium transition"
>
  Contact Us
</Link> */}

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
