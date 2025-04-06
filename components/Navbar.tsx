'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { safeSendGAEvent } from '@/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image
            className="size-5"
            src="/sonara.png"
            alt="Sonara logo"
            width={180}
            height={38}
            priority
          />
          <span className="text-2xl font-semibold text-gray-900">Sonara</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="hover:text-sonara-500 text-gray-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-sonara-500 text-gray-600 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#early-access"
            className="bg-sonara-500 hover:bg-sonara-600 rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300"
            onClick={() => {
              safeSendGAEvent('event', 'nav_desktop_cta', { value: 'xyz' });
            }}
          >
            Get Started for €0
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="hover:text-sonara-500 text-gray-600 transition-colors md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="animate-fade-in absolute top-full left-0 z-50 w-full bg-white px-6 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#features"
              className="hover:text-sonara-500 py-2 text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-sonara-500 py-2 text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <div className="flex justify-center">
              <a
                href="#early-access"
                className="button-primary w-2/3 text-center"
                onClick={() => {
                  safeSendGAEvent('event', 'nav_mobile_cta', { value: 'xyz' });
                  setMobileMenuOpen(false);
                }}
              >
                Get Started for €0
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
