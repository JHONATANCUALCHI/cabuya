import React, { useState, useEffect } from 'react';
import { brand } from '../../../config/brand';
import { useScrolled } from '../../../hooks/useScrolled';
import WhatsAppButton from '../../ui/WhatsAppButton/WhatsAppButton';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition after passing 80% of the viewport height (roughly when Hero ends)
      const threshold = window.innerHeight * 0.8;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Colección', href: '#catalog' },
    { name: 'Historia', href: '#story' },
    {/*{ name: 'Testimonios', href: '#testimonials' },*/ }
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={`${styles.container} container`}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoText}>{brand.name}</span>
        </a>

        {/* Desktop Navigation */}
        <ul className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className={styles.link}>{link.name}</a>
            </li>
          ))}
          {/*  <li>
            <WhatsAppButton variant="default" className={styles.navCTA}>
              WhatsApp
            </WhatsAppButton>
          </li>*/}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.show : ''}`}>
          <ul className={styles.mobileMenu}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={styles.mobileLink} onClick={closeMenu}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className={styles.mobileCtaWrapper}>
              <WhatsAppButton onClick={closeMenu}>
                Chatear por WhatsApp
              </WhatsAppButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
