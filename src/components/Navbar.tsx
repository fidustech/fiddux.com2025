import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/compliance', label: 'Compliance' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-28">
          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="flex-shrink-0">
              <div className="w-[400px] h-[100px]">
                <Logo />
              </div>
            </Link>
          </div>

          {/* Menu Button - Absolute positioned */}
          <div className="absolute right-4 sm:right-6 lg:right-8">
            <motion.button
              className="p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-200 bg-white/5 backdrop-blur-sm border border-white/10"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute right-4 mt-2"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className="w-56 overflow-hidden rounded-xl border border-white/10 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 150, 88, 0.5), rgba(0, 186, 45, 0.5))',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="py-2">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className={`group flex items-center justify-between px-4 py-2 text-sm font-medium ${
                          location.pathname === link.href
                            ? 'text-white bg-white/20'
                            : 'text-white hover:text-white hover:bg-white/10'
                        } transition-all duration-200`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{link.label}</span>
                        <ChevronRight 
                          size={16} 
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;