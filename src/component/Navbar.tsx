'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false); 
  const [isHome, setIsHome] = useState<boolean>(false);

  useEffect(() => {
    // Check the initial path
    const handlePathChange = () => {
      setIsHome(window.location.pathname === '/');
    };

    // Initial check
    handlePathChange();

    // Scroll event handler
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePathChange); // Update on back/forward navigation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // Toggle mobile menu visibility
  };

  return (
    <header className={`w-full fixed top-0 z-50 bg-transparent backdrop-blur-md transition-colors duration-300`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} className="cursor-pointer" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <span
              className={`font-medium transition-colors duration-300 ${
                isHome
                  ? scrolling
                    ? 'text-[#26156d]'
                    : 'text-white hover:text-sky-400'
                  : scrolling
                  ? 'text-[#26156d]' 
                  : 'text-[#26156d] hover:text-sky-400'
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/gallery">
            <span
              className={`font-medium transition-colors duration-300 ${
                isHome
                  ? scrolling
                    ? 'text-[#26156d]'
                    : 'text-white hover:text-sky-400'
                  : scrolling
                  ? 'text-[#26156d]'
                  : 'text-[#26156d] hover:text-sky-400'
              }`}
            >
              Gallery
            </span>
          </Link>
          <Link href="/contact">
            <span
              className={`font-medium transition-colors duration-300 ${
                isHome
                  ? scrolling
                    ? 'text-[#26156d]' 
                    : 'text-white hover:text-sky-400'
                  : scrolling
                  ? 'text-[#26156d]' 
                  : 'text-[#26156d] hover:text-sky-400'
              }`}
            >
              Contact Us
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-skyBlue text-white py-4 flex flex-col items-center shadow-lg rounded-lg">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-medium text-lg transition-colors duration-300 hover:text-sky-200">
              Home
            </span>
          </Link>
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-medium text-lg transition-colors duration-300 hover:text-sky-200">
              Gallery
            </span>
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-medium text-lg transition-colors duration-300 hover:text-sky-200">
              Contact Us
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
