'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-practo-blue text-white px-3 py-1 rounded-lg font-bold text-xl">
                practo
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-practo-blue px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-practo-blue transition duration-200"
            >
              Find Doctors
            </Link>
            <Link
              href="/video-consult"
              className="text-gray-700 hover:text-practo-blue px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-practo-blue transition duration-200"
            >
              Video Consult
            </Link>
            <Link
              href="/surgeries"
              className="text-gray-700 hover:text-practo-blue px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-practo-blue transition duration-200"
            >
              Surgeries
            </Link>
            <div className="relative">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full absolute -top-1 -right-2">
                NEW
              </span>
              <Link
                href="/corporate"
                className="text-gray-700 hover:text-practo-blue px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-practo-blue transition duration-200"
              >
                For Corporates
              </Link>
            </div>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <select className="text-gray-700 hover:text-practo-blue text-sm font-medium bg-transparent border-none cursor-pointer">
                <option>For Providers</option>
                <option>List Practice</option>
                <option>Practo Pro</option>
              </select>
            </div>
            <div className="relative">
              <select className="text-gray-700 hover:text-practo-blue text-sm font-medium bg-transparent border-none cursor-pointer">
                <option>Security & help</option>
                <option>Security</option>
                <option>Help</option>
              </select>
            </div>
            <button className="text-gray-700 hover:text-practo-blue text-sm font-medium">
              Login / Signup
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-practo-blue focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="text-gray-900 hover:text-practo-blue block px-3 py-2 text-base font-medium"
              >
                Find Doctors
              </Link>
              <Link
                href="/video-consult"
                className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
              >
                Video Consult
              </Link>
              <Link
                href="/surgeries"
                className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
              >
                Surgeries
              </Link>
              <Link
                href="/corporate"
                className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
              >
                For Corporates <span className="text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded-full ml-1">NEW</span>
              </Link>
              <div className="border-t pt-3 mt-3">
                <Link
                  href="/providers"
                  className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
                >
                  For Providers
                </Link>
                <Link
                  href="/help"
                  className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
                >
                  Security & help
                </Link>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-practo-blue block px-3 py-2 text-base font-medium"
                >
                  Login / Signup
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}