"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const mainLinks = [
    { label: "Home", href: "/landing-page" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "" },
    { label: "About", href: "/about" },
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
          <Link href="/" className="flex-shrink-0">
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
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                aria-haspopup="true"
                aria-expanded={isResourcesOpen}
                className="flex items-center text-white text-sm lg:text-base font-medium hover:text-gray-300 transition"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Resources
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                  stroke="currentColor"
                  fill="none"
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
                <div className="absolute right-0 mt-3 w-40 sm:w-44 bg-zinc-800 rounded-md shadow-xl z-20">
                  {resourcesLinks.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="block px-3 sm:px-4 py-2 sm:py-3 text-white text-sm hover:bg-zinc-700"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-[#FF6A00] hover:bg-[#e65d00] text-white px-4 sm:px-6 py-2 rounded-md text-sm lg:text-base font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] px-4 sm:px-6 pt-4 pb-6 space-y-2">
          {mainLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block text-white text-sm font-medium py-2 hover:text-gray-300 transition"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </Link>
          ))}

          {/* Resources Dropdown */}
          <div>
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="w-full flex justify-between items-center text-white text-sm font-medium py-2 hover:text-gray-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Resources
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${
                  isResourcesOpen ? "rotate-180" : ""
                }`}
                stroke="currentColor"
                fill="none"
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
              <div className="pl-3 sm:pl-4 mt-2 space-y-1">
                {resourcesLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block text-white text-sm py-1 hover:text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="w-full mt-3 bg-[#FF6A00] hover:bg-[#e65d00] text-white px-5 py-2 rounded-md text-sm font-medium block text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
