import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 sm:px-8 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-8">
        {/* Logo & Contact Info */}
        <div className="flex flex-col">
          <div className="mb-4">
            <img src="/images/logo-white.png" alt="Logo" className="h-10 w-auto" />
          </div>
          <p className="text-sm mb-2">12 Marina Street, Victoria Island, Lagos, Nigeria</p>
          <p className="text-sm mb-1">+234 (0) 123 456 7890</p>
          <p className="text-sm">info@nigerianmanpower.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6 sm:w-5 sm:h-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6 sm:w-5 sm:h-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 sm:w-5 sm:h-5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Industries</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Resources</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Cookies Settings</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        © 2025 Nigerian Manpower Outsourcing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
