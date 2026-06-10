import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Service Menu', href: '#experience' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="font-display font-bold text-2xl tracking-tight text-glass-50">
              Kento<span className="text-accent-200">.</span>M
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-display text-glass-100 hover:text-glass-50 font-medium transition-colors text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent-200 text-glass-800 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-100 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="メニューを開閉"
              className="text-glass-100 hover:text-glass-50 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-glass-700 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-glass-100 hover:text-accent-200 hover:bg-glass-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex justify-center space-x-6 border-t border-glass-300 mt-4">
            <a href="mailto:airifubaogaochanneru@gmail.com" aria-label="メールを送る">
              <Mail className="w-5 h-5 text-glass-100 hover:text-accent-200 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
