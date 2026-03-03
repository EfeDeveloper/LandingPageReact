import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import useScrollSpy from '../hooks/useScrollSpy';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const sections = [
    'features',
    'about',
    'services',
    'portfolio',
    'testimonials',
    'team',
    'contact',
  ];
  const activeSection = useScrollSpy(sections, 80);

  // Detectar scroll para cambiar fondo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al hacer click en un link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Smooth scroll al hacer click en un link
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    handleLinkClick();
  };

  const navLinks = [
    { id: 'features', label: 'Características' },
    { id: 'about', label: 'Sobre Nosotros' },
    { id: 'services', label: 'Servicios' },
    { id: 'portfolio', label: 'Galería' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'team', label: 'Equipo' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#page-top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-2xl font-bold transition-colors ${
                scrolled || isDark
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-white'
              }`}
            >
              React Landing
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  activeSection === link.id
                    ? scrolled || isDark
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-white'
                    : scrolled || isDark
                      ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                      : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="right-0 bottom-0 left-0 absolute bg-primary-600 dark:bg-primary-400 h-0.5"></span>
                )}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2 rounded-full transition-colors ${
                scrolled || isDark
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-gray-200 hover:bg-white/20'
              }`}
              aria-label="Toggle dark mode"
              aria-pressed={isDark}
            >
              {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled || isDark ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled || isDark ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="space-y-1 bg-white dark:bg-gray-900 shadow-lg px-2 pt-2 pb-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-primary-600 dark:text-primary-400 bg-gray-100 dark:bg-gray-800'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
