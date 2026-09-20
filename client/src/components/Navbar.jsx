import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={closeMenu}
        >
          {/* <span>ELLORA</span>
          <small>INTERIOR DESIGN</small> */}
          <img src="ELLORA.png" alt="" />
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="navbar__cta"
        >
          Start a Project
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`navbar__toggle ${
            menuOpen ? 'navbar__toggle--open' : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
          >
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#process" onClick={closeMenu}>
              Process
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="#contact"
              className="navbar__mobile-cta"
              onClick={closeMenu}
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;