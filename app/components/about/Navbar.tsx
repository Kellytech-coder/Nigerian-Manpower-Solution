"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <nav className="bg-[#1A1A1A] fixed w-full z-30">
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
          <div className="hidden md:flex items-center space-x-8 flex-grow justify-end">
            <a className="text-white text-sm font-medium hover:text-gray-300 transition"
              style={{ fontFamily: "Inter, sans-serif" }}>Home</a>
            <a className="text-white text-sm font-medium hover:text-gray-300 transition"
              style={{ fontFamily: "Inter, sans-serif" }}>Services</a>
            <a className="text-white text-sm font-medium hover:text-gray-300 transition"
              style={{ fontFamily: "Inter, sans-serif" }}>Industries</a>
            <a className="text-white text-sm font-medium hover:text-gray-300 transition"
              style={{ fontFamily: "Inter, sans-serif" }}>About</a>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center text-white text-sm font-medium hover:text-gray-300 transition"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Resources
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isResourcesOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-zinc-800 rounded-md shadow-xl z-20">
                  <a className="block px-4 py-3 text-white text-sm hover:bg-zinc-700" style={{ fontFamily: "Inter, sans-serif" }}>Case Studies</a>
                  <a className="block px-4 py-3 text-white text-sm hover:bg-zinc-700" style={{ fontFamily: "Inter, sans-serif" }}>Work Force</a>
                  <a className="block px-4 py-3 text-white text-sm hover:bg-zinc-700" style={{ fontFamily: "Inter, sans-serif" }}>Careers</a>
                </div>
              )}
            </div>
          </div>

          {/* Contact Us button (desktop only) */}
          <div className="hidden md:flex">
            <button className="bg-[#FF6A00] hover:bg-[#e65d00] text-white px-6 py-2 rounded-md text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] px-6 pt-4 pb-6 space-y-2">
          <a className="block text-white text-sm font-medium py-2 hover:text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>Home</a>
          <a className="block text-white text-sm font-medium py-2 hover:text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>Services</a>
          <a className="block text-white text-sm font-medium py-2 hover:text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>Industries</a>
          <a className="block text-white text-sm font-medium py-2 hover:text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>About</a>

          {/* Resources Dropdown for mobile */}
          <div>
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="w-full flex justify-between items-center text-white text-sm font-medium py-2 hover:text-gray-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Resources
              <svg className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isResourcesOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <a className="block text-white text-sm py-1 hover:text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>Case Studies</a>
                <a className="block text-white text-sm py-1 hover:text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>Work Force</a>
                <a className="block text-white text-sm py-1 hover:text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>Careers</a>
              </div>
            )}
          </div>

          {/* Contact Us button for mobile */}
          <button className="w-full mt-2 bg-[#FF6A00] hover:bg-[#e65d00] text-white px-6 py-2 rounded-md text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
