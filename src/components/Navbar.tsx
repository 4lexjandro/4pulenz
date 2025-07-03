'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@Assets/images/image.barrel';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    // { href: '/services', label: 'Services' },
  ];

  return (
    <>
      <header className='sticky w-full top-0 z-30 bg-black/70 backdrop-blur-sm px-6 py-4 flex justify-between items-center'>
        <Link href='/'>
          <Image alt='Logo' src={Logo} width={60} height={60} />
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-6'>
          {links.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className='relative group text-white transition duration-200'
            >
              <span className='group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-red-500 group-hover:drop-shadow-[0_0_8px_rgba(255,0,128,0.6)] transition duration-300'>
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className='md:hidden z-30 text-white'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle Menu'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {menuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className='md:hidden fixed top-[80px] left-0 right-0 bg-black/90 text-white p-6 z-40 flex flex-col gap-4 text-lg'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className='relative group text-white transition duration-200'
              >
                <span className='group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-red-500 group-hover:drop-shadow-[0_0_8px_rgba(255,0,128,0.6)] transition duration-300'>
                  {label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}