"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#313131] backdrop-blur-md border-b border-slate-700/50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center">
              <svg
                className="w-[125px] h-[33px] 2xl:w-[144px] 2xl:h-[38px]"
                viewBox="0 0 192 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M176.117 27.0588V0.567272H177.869V8.05525C178.978 3.74399 182.364 0 187.617 0C188.726 0 189.952 0.056728 191.412 0.510544L190.886 2.15563C189.544 1.75854 188.493 1.70181 187.617 1.70181C179.62 1.70181 178.044 10.7781 177.869 16.621V27.0588H176.117Z"
                  fill="#72E549"
                />
                <path
                  d="M160.823 13.7384V14.4764H136.068C136.354 21.4591 141.556 25.944 147.788 25.944C152.076 25.944 155.678 23.957 157.793 20.5508L159.28 21.4591C156.821 25.3195 152.648 27.6471 147.788 27.6471C140.299 27.6471 134.353 22.1404 134.353 13.7384C134.353 5.33639 140.299 0 147.788 0C155.335 0 160.823 5.33639 160.823 13.7384ZM147.788 1.7031C141.442 1.7031 136.525 6.07441 136.068 12.9436H159.108C158.822 6.07441 154.134 1.7031 147.788 1.7031Z"
                  fill="#72E549"
                />
                <path
                  d="M15.1592 0.587891C22.888 0.587891 29.0587 6.37102 29.0587 14.1386C29.0587 21.9061 22.888 27.6892 15.1592 27.6892C8.61456 27.6892 4.37615 24.2874 2.56859 20.3186V38.235H0.823364V1.09817H2.50626L2.56859 7.84515C4.37615 3.87634 8.61456 0.587891 15.1592 0.587891ZM14.9722 26.1584C21.5791 26.1584 27.1888 21.0556 27.1888 14.1386C27.1888 7.22148 21.5791 2.11872 14.9722 2.11872C7.61729 2.11872 2.56859 7.16479 2.56859 14.1386C2.56859 21.1123 7.61729 26.1584 14.9722 26.1584Z"
                  fill="#72E549"
                />
                <path
                  d="M55.7937 28.2349C48.2752 28.2349 41.9998 22.323 41.9998 14.4404C41.9998 6.49984 48.2752 0.587891 55.7937 0.587891C63.3123 0.587891 69.6469 6.49984 69.6469 14.4404C69.6469 22.323 63.3123 28.2349 55.7937 28.2349ZM55.7937 26.67C62.1875 26.67 67.8708 21.4536 67.8708 14.4404C67.8708 7.36924 62.1875 2.15282 55.7937 2.15282C49.4 2.15282 43.7167 7.36924 43.7167 14.4404C43.7167 21.4536 49.4 26.67 55.7937 26.67Z"
                  fill="#72E549"
                />
                <path
                  d="M120.213 0.530541H122L112.202 27.6471H110.703L101.942 2.71165L93.2966 27.6471H91.7981L81.9998 0.530541H83.8442L92.605 25.0533L101.193 0H102.864L111.568 24.9944L120.213 0.530541Z"
                  fill="#72E549"
                />
                <line
                  x1="0.823364"
                  y1="49.5588"
                  x2="26.1175"
                  y2="49.5588"
                  stroke="#72E549"
                  strokeWidth="0.882353"
                />
              </svg>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/pillars" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/our_app" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              App
            </Link>
            <Link href="/charging" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Charging
            </Link>
            <Link href="https://clover.energy/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Clover
            </Link>
            <Link href="/smart_home" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/factory" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Manufactory
            </Link>
            <Link href="/team" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Team
            </Link>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact_us" className="group flex items-center space-x-2 bg-transparent border-2 border-green-400 hover:bg-green-400 text-green-400 hover:text-slate-800 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
              <span>Contact Us</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </Link>
          </div>

          {/* Mobile menu section */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Contact Button - Mobile */}
            <Link 
              href="/contact_us" 
              className="flex items-center space-x-2 bg-transparent border-2 border-green-400 hover:bg-green-400 text-green-400 hover:text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
            >
              <span>Contact</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </Link>
            
            {/* Hamburger menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="group relative p-2 rounded-md hover:bg-slate-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-full h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : ''}`}></span>
                <span className={`absolute left-0 top-3 w-full h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute left-0 top-5 w-full h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-1 pt-4 border-t border-slate-700/50">
            {[
              { href: '/pillars', label: 'About' },
              { href: '/our_app', label: 'App' },
              { href: '/charging', label: 'Charging' },
              { 
                href: 'https://clover.energy/', 
                label: 'Clover',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              { href: '/smart_home', label: 'Home' },
              { href: '/factory', label: 'Manufactory' },
              { href: '/team', label: 'Team' }
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.target}
                rel={item.rel}
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md text-sm font-medium transition-all duration-200"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}