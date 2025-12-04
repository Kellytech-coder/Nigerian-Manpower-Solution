// app/components/landing-page/Footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Container from './Container';
import FadeInWrapper from './FadeInOnScroll';

export default function Footer() {
  const navigationLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resources', href: '#resources' },
  ];

  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Careers', href: '#careers' },
    { label: 'Resources', href: '#resources' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const legalLinks = [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
    { label: 'Cookies settings', href: '/cookies' },
  ];

  return (
    <footer className="bg-zinc-900 text-white">
      <Container>
        {/* Main Footer Content */}
        <FadeInWrapper className="py-12 md:py-16 lg:py-20 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8">
            {/* Company Info */}
            <FadeInWrapper className="sm:col-span-2 lg:col-span-1">
              {/* Logo */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold italic">Logo</h3>
              </div>

              {/* Address */}
              <div className="mb-5 md:mb-6">
                <h4 className="text-xs md:text-sm font-bold text-white mb-2 md:mb-3">
                  Address
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  12 Marina Street, Victoria Island, Lagos, Nigeria
                </p>
              </div>

              {/* Contact */}
              <div className="mb-6 md:mb-8">
                <h4 className="text-xs md:text-sm font-bold text-white mb-2 md:mb-3">
                  Contact
                </h4>
                <div className="space-y-2">
                  <a
                    href="tel:+2340123456789"
                    className="block text-gray-400 text-sm md:text-base hover:text-white transition-colors underline"
                  >
                    +234 (0) 123 456 7890
                  </a>
                  <a
                    href="mailto:info@nigerianmanpower.com"
                    className="block text-gray-400 text-sm md:text-base hover:text-white transition-colors underline break-all"
                  >
                    info@nigerianmanpower.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-500 transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  );
                })}
              </div>
            </FadeInWrapper>

            {/* Navigation Links */}
            <FadeInWrapper>
              <nav className="space-y-3 md:space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </FadeInWrapper>

            {/* Quick Links */}
            <FadeInWrapper>
              <h4 className="text-white font-bold mb-4 md:mb-6 text-sm md:text-base">
                Quick links
              </h4>
              <nav className="space-y-3 md:space-y-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </FadeInWrapper>

            {/* Empty column for spacing on desktop only */}
            <div className="hidden lg:block"></div>
          </div>
        </FadeInWrapper>

        {/* Bottom Bar */}
        <FadeInWrapper className="border-t border-zinc-800 py-5 md:py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © 2024 Nigerian Manpower Outsourcing. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 text-xs md:text-sm hover:text-white transition-colors underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </FadeInWrapper>
      </Container>
    </footer>
  );
}
