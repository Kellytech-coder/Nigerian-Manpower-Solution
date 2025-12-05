"use client";

import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className="text-white text-3xl italic font-[400] tracking-wide"
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              Logo
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12 flex-grow justify-end pr-6">
            <a className="text-white text-sm font-medium hover:text-gray-300 transition"
              style={{ fontFamily: "Inter, sans-serif" }}>
              Home
            </a>
            <a className="text-white text-sm font-medium hover:text-gray-300 transition"
              style={{ fontFamily: "Inter, sans-serif" }}>
              Services
            </a>
            <a className="text-white text-sm font-medium hover:text-gray-300 transition"
              style={{ fontFamily: "Inter, sans-serif" }}>
              Industries
            </a>
            <a className="text-white text-sm font-medium hover:text-gray-300 transition"
              style={{ fontFamily: "Inter, sans-serif" }}>
              About
            </a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-white text-sm font-medium hover:text-gray-300 transition"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Resources
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
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

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-zinc-800 rounded-md shadow-xl z-20">
                  <a
                    className="block px-4 py-3 text-white-700  text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Case Studies
                  </a>
                  <a
                    className="block px-4 py-3 text-white-700  text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Work Force
                  </a>
                  <a
                    className="block px-4 py-3 text-white-700  text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Careers
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Contact Us button */}
          <div className="hidden md:flex">
            <button
              className="bg-[#FF6A00] hover:bg-[#e65d00] text-white px-6 py-2 rounded-md text-sm font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
