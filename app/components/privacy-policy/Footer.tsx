import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  // Define the dark grey background color
  const darkGrey = '#1A1A1A'; 

  // Links data for the Quick links section
  const quickLinks = [
    { name: 'Home', href: '/landing-page' },
    { name: 'Industries', href: '/industries' },
    { name: 'About Us', href: '/about' },
    { name: 'How It Work', href: '/how-it-work' },
    { name: 'Careers', href: '#' },
    { name: 'Resources', href: '#' },
  ];

  // Social media icon mapping
  const socialIcons = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter/X' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer style={{ backgroundColor: darkGrey }} className="text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo, Contact, and Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 pb-12">
          
          {/* Column 1: Logo and Contact Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-8">Logo</h2> 
            
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p className="text-gray-400 mb-6">12 Marina Street, Victoria Island, Lagos, Nigeria</p>
            
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-gray-400">+234 (0) 123 456 7890</p>
            <p className="text-gray-400 mb-6">
              <a href="mailto:info@nigerianmanpower.com" className="hover:text-white transition duration-200">
                info@nigerianmanpower.com
              </a>
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    aria-label={item.label}
                    className="text-gray-400 hover:text-white transition duration-200 text-xl"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Column 2 & 3: Quick Links (using list) */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Quick links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 py-6">
          <p className="order-2 md:order-1 mb-4 md:mb-0">
            © 2025 Nigerian Manpower Outsourcing. All rights reserved.
          </p>
          
          <div className="order-1 md:order-2 flex space-x-6">
            <a href="/terms-of-service" className="hover:text-white transition duration-200">Terms of service</a>
            <a href="#" className="hover:text-white transition duration-200">Cookies settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;