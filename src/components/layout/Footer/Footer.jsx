import React from 'react';
import { brand } from '../../../config/brand';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <h2 className={styles.logo}>{brand.name}</h2>
            <p className={styles.description}>
              {brand.tagline}. Calzado hecho a mano con herencia andina desde Otavalo, Ecuador.
            </p>
            <div className={styles.socials}>
              {brand.social.instagram && (
                <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              )}
              {brand.social.facebook && (
                <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Explorar</h3>
            <ul className={styles.linkList}>
              <li><a href="#catalog">Colección</a></li>
              <li><a href="#story">Nuestra Historia</a></li>
              <li><a href="#testimonials">Testimonios</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Contacto</h3>
            <ul className={styles.contactList}>
              <li>📍 {brand.location}</li>
              <li>📞 {brand.whatsapp.number}</li>
              <li>✉️ {brand.email}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {brand.name} &middot; Hecho con amor en Otavalo &middot; Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
