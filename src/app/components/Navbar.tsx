"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center">
              <span className="text-2xl font-light text-green-400 tracking-wide">
                power
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/app" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              App
            </Link>
            <Link href="/smart-home" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Smart Home
            </Link>
            <Link href="/vehicle-charging" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Vehicle Charging
            </Link>
            <Link href="/business" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Business
            </Link>
            <Link href="/clover" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Clover
            </Link>
            <Link href="/team" className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Team
            </Link>
          </div>

          {/* Contact Button with User Icon */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact" className="group flex items-center space-x-2 bg-transparent border-2 border-green-400 hover:bg-green-400 text-green-400 hover:text-slate-800 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
              <span>Contact Us</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="group relative p-2 rounded-md hover:bg-slate-700 transition-colors duration-200"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-full h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : ''}`}></span>
                <span className={`absolute left-0 top-3 w-full h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute left-0 top-5 w-full h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-1 pt-4 border-t border-slate-700/50">
            {[
              { href: '/about', label: 'About' },
              { href: '/app', label: 'App' },
              { href: '/smart-home', label: 'Smart Home' },
              { href: '/vehicle-charging', label: 'Vehicle Charging' },
              { href: '/business', label: 'Business' },
              { href: '/clover', label: 'Clover' },
              { href: '/team', label: 'Team' }
            ].map((item, index) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md text-sm font-medium transition-all duration-200"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4">
              <Link href="/contact" className="flex items-center justify-center space-x-2 bg-transparent border-2 border-green-400 hover:bg-green-400 text-green-400 hover:text-slate-800 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 mx-4">
                <span>Contact Us</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}