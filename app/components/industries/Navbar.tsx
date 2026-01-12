"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
  };

  const mainLinks = [
    { label: "Home", href: "/landing-page" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "How It Work", href: "/how-it-work" },
  ];

  const resourcesLinks = [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Work Force", href: "/work-force" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <header className="bg-[#1A1A1A] fixed w-full z-30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={closeAllMenus}>
            <h1
              className="text-white text-2xl sm:text-3xl italic font-[400] tracking-wide"
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              Logo
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-grow justify-end">
            {mainLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-white text-sm lg:text-base font-medium hover:text-gray-300 transition"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {label}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(prev => !prev)}
                className="flex items-center text-white text-sm lg:text-base font-medium hover:text-gray-300 transition"
                style={{ fontFamily: "Inter, sans-serif" }}
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
                <div className="absolute right-0 mt-3 w-44 bg-zinc-800 rounded-md shadow-xl">
                  {resourcesLinks.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={closeAllMenus}
                      className="block px-4 py-3 text-white text-sm hover:bg-zinc-700"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact-us"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md text-sm lg:text-base font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="text-white"
              aria-label="Toggle mobile menu"
            >
              {/* Three stacked dots icon */}
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] px-4 pt-4 pb-6 space-y-2">
          {mainLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={closeAllMenus}
              className="block text-white text-sm font-medium py-2 hover:text-gray-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Resources */}
          <div>
            <button
              onClick={() => setIsResourcesOpen(prev => !prev)}
              className="w-full flex justify-between items-center text-white text-sm font-medium py-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Resources
              <svg
                className={`h-4 w-4 transition-transform ${
                  isResourcesOpen ? "rotate-180" : ""
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

            {isResourcesOpen && (
              <div className="pl-4 space-y-1">
                {resourcesLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeAllMenus}
                    className="block text-white text-sm py-1 hover:text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Contact Button */}
          <Link
            href="/contact-us"
            onClick={closeAllMenus}
            className="w-full mt-3 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-md text-sm font-medium block text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
