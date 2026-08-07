import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', href: '#collections' },
    { name: 'The Craft', href: '#craftsmanship' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-stone-50/95 backdrop-blur-md py-6 shadow-sm border-b border-stone-300' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center">
        <a href="#" className={`font-serif text-xl tracking-[0.2em] font-light transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
          Business name will go here
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-[11px] tracking-widest font-sans uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors ${isScrolled ? 'text-stone-900 opacity-60 hover:opacity-100' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden opacity-80"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-stone-900' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-50 border-t border-stone-300"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 text-[11px] font-sans tracking-widest uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-stone-900 opacity-60 hover:opacity-100 py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
