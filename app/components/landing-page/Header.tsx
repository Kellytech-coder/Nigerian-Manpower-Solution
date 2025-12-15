// app/components/landing-page/Header.tsx
'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-[#1A1A1A] sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-2xl md:text-3xl font-normal text-white" 
          style={{ fontFamily: `'Pacifico', cursive` }}
        >
          Logo
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm text-white">
          <a href="/services" className="hover:text-gray-300 transition">Services</a>
          <a href="#industries" className="hover:text-gray-300 transition">Industries</a>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>

          {/* Resources dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <a href="#case-studies" className="block px-4 py-2 hover:bg-zinc-700 rounded-t-md">Case Studies</a>
              <a href="#work-force" className="block px-4 py-2 hover:bg-zinc-700">Workforce</a>
              <a href="#careers" className="block px-4 py-2 hover:bg-zinc-700 rounded-b-md">Careers</a>
            </div>
          </div>

          <a href="#contact" className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition">Contact</a>
          <a href="#request" className="px-5 py-2 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition">Request</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zinc-900 border-t border-zinc-800">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a href="/services" onClick={closeMobileMenu} className="text-white py-2 hover:text-amber-500 transition">Services</a>
            <a href="#industries" onClick={closeMobileMenu} className="text-white py-2 hover:text-amber-500 transition">Industries</a>
            <Link href="/about" onClick={closeMobileMenu} className="text-white py-2 hover:text-amber-500 transition">About</Link>

            {/* Resources dropdown for mobile */}
            <div>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full text-white py-2 hover:text-amber-500 transition"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isResourcesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#case-studies" onClick={closeMobileMenu} className="block text-gray-400 py-2 hover:text-amber-500 transition">Case Studies</a>
                  <a href="#work-force" onClick={closeMobileMenu} className="block text-gray-400 py-2 hover:text-amber-500 transition">Workforce</a>
                  <a href="#careers" onClick={closeMobileMenu} className="block text-gray-400 py-2 hover:text-amber-500 transition">Careers</a>
                </div>
              )}
            </div>

            {/* Mobile buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <a href="#contact" onClick={closeMobileMenu} className="w-full text-center px-4 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">Contact</a>
              <a href="#request" onClick={closeMobileMenu} className="w-full text-center px-4 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition">Request</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
