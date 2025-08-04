import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-practo-blue">
                •practo•
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/doctors"
                className="text-gray-700 hover:text-practo-blue px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-practo-blue transition-colors duration-200"
              >
                Find Doctors
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-practo-blue px-3 py-2 text-sm font-medium flex items-center gap-1">
                  Video Consult
                  <FiChevronDown className="text-xs" />
                </button>
              </div>
              <Link
                href="/surgeries"
                className="text-gray-700 hover:text-practo-blue px-3 py-2 text-sm font-medium"
              >
                Surgeries
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-practo-blue px-3 py-2 text-sm font-medium flex items-center gap-1">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-1">
                    NEW
                  </span>
                  For Corporates
                  <FiChevronDown className="text-xs" />
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-practo-blue px-3 py-2 text-sm font-medium flex items-center gap-1">
                  For Providers
                  <FiChevronDown className="text-xs" />
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-practo-blue px-3 py-2 text-sm font-medium flex items-center gap-1">
                  Security & help
                  <FiChevronDown className="text-xs" />
                </button>
              </div>
            </div>
          </div>

          {/* Login/Signup */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-practo-blue px-3 py-2 text-sm font-medium"
              >
                Login / Signup
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-practo-blue p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              href="/doctors"
              className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Doctors
            </Link>
            <Link
              href="/video-consult"
              className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Video Consult
            </Link>
            <Link
              href="/surgeries"
              className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Surgeries
            </Link>
            <Link
              href="/corporates"
              className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              For Corporates
            </Link>
            <Link
              href="/providers"
              className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              For Providers
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Login / Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;