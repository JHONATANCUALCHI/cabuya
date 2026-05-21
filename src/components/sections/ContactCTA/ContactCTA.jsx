import React from 'react';
import WhatsAppButton from '../../ui/WhatsAppButton/WhatsAppButton';
import AnimatedSection from '../../common/AnimatedSection';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <AnimatedSection animation="fadeUp">
          <div className={styles.card}>
            <div className={styles.content}>
              <h2 className={styles.title}>¿Listo para tu par de Cabuya?</h2>
              <p className={styles.subtitle}>
                Escríbenos por WhatsApp y te asesoramos con tu talla, envíos y cualquier duda que tengas.
              </p>
              <div className={styles.action}>
                <WhatsAppButton variant="hero">
                  Chatear con un asesor
                </WhatsAppButton>
              </div>
            </div>
            <div className={styles.decoration}>
              <span>🌿</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactCTA;
