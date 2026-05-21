import React from 'react';
import { brand } from '../../../config/brand';
import WhatsAppButton from '../../ui/WhatsAppButton/WhatsAppButton';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        >
          <source src="/assets/videos/footerCabuya_01.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>
      <div className={styles.overlay}></div>
      <div className={`${styles.content} container`}>
        <div className={styles.textWrapper}>
          {/*<span className={styles.tagline}>{brand.tagline}</span> */}
          <h1 className={styles.title}>
            Cada paso cuenta una historia
          </h1>
          {/*  <p className={styles.description}>
            Descubre la elegancia de la artesanía de Otavalo. Cada par es una obra de arte hecha a mano con materiales naturales y siglos de tradición.
          </p> */}
          <div className={styles.ctaGroup}>
            <a href="#catalog" className={styles.primaryBtn}>
              Explorar Colección
            </a>
            {/* <WhatsAppButton variant="hero">
              Asesoría Personalizada
            </WhatsAppButton> */}
          </div>
        </div>
      </div>
      {/*<div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span>Desliza para descubrir</span>
      </div> */}
    </section>
  );
};

export default Hero;
