'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <header className="bg-[#1A1A1A] sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl md:text-3xl font-normal text-white"
          style={{ fontFamily: `'Pacifico', cursive` }}
        >
          Logo
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm text-white">
          <Link href="/services" className="hover:text-gray-300 transition">
            Services
          </Link>

          <Link href="/industries" className="hover:text-gray-300 transition">
            Industries
          </Link>

          <Link href="/how-it-work" className="hover:text-gray-300 transition">
            How It Work
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-gray-300 transition">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/case-studies" className="block px-4 py-2 hover:bg-zinc-700 rounded-t-md">
                Case Studies
              </Link>
              <Link href="/workforce" className="block px-4 py-2 hover:bg-zinc-700">
                Workforce
              </Link>
              <Link href="/careers" className="block px-4 py-2 hover:bg-zinc-700 rounded-b-md">
                Careers
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            Contact
          </Link>

          <Link
            href="/request"
            className="px-5 py-2 rounded-full bg-amber-500 font-semibold hover:bg-amber-600 transition"
          >
            Request
          </Link>
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
            <Link href="/services" onClick={closeMobileMenu} className="text-white py-2 hover:text-amber-500">
              Services
            </Link>

            <Link href="/industries" onClick={closeMobileMenu} className="text-white py-2 hover:text-amber-500">
              Industries
            </Link>

            <Link href="/how-it-work" onClick={closeMobileMenu} className="text-white py-2 hover:text-amber-500">
              How It Work
            </Link>

            <Link href="/about" onClick={closeMobileMenu} className="text-white py-2 hover:text-amber-500">
              About
            </Link>

            {/* Mobile Resources */}
            <div>
              <button
                onClick={() => setIsResourcesOpen(prev => !prev)}
                className="flex items-center justify-between w-full text-white py-2 hover:text-amber-500"
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isResourcesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/case-studies" onClick={closeMobileMenu} className="block text-gray-400 hover:text-amber-500">
                    Case Studies
                  </Link>
                  <Link href="/workforce" onClick={closeMobileMenu} className="block text-gray-400 hover:text-amber-500">
                    Workforce
                  </Link>
                  <Link href="/careers" onClick={closeMobileMenu} className="block text-gray-400 hover:text-amber-500">
                    Careers
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="w-full text-center px-4 py-3 rounded-full border border-white/30 hover:bg-white/10"
              >
                Contact
              </Link>

              <Link
                href="/request"
                onClick={closeMobileMenu}
                className="w-full text-center px-4 py-3 rounded-full bg-amber-500 font-semibold hover:bg-amber-600"
              >
                Request
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
