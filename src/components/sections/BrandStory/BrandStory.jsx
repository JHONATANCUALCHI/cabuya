import React from 'react';
import { brandStory } from '../../../data/brand-story';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import AnimatedSection from '../../common/AnimatedSection';
import styles from './BrandStory.module.css';

const BrandStory = () => {
  return (
    <section id="story" className={`${styles.section} section-padding`}>
      <div className="container">
        <div className={styles.centeredWrapper}>
          <AnimatedSection animation="fadeUp">
            <div className={styles.logoWrapper}>
              <img src="/assets/images/brand/boceto.png" alt="Logo Boceto" className={styles.bocetoLogo} />
            </div>

            <div className={styles.contentWrapper}>
              <SectionHeader
                label="Legado"
                align="center"
              />

              <div className={styles.content}>
                {brandStory.content.map((paragraph, idx) => (
                  <p key={idx} className={styles.paragraph}>{paragraph}</p>
                ))}
                {/*<blockquote className={styles.quote}>
                  "{brandStory.quote}"
                </blockquote>*/}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
