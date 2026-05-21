import React from 'react';
import { testimonials } from '../../../data/testimonials';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import TestimonialCard from '../../ui/TestimonialCard/TestimonialCard';
import AnimatedSection from '../../common/AnimatedSection';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className={`${styles.section} section-padding`}>
      <div className="container">
        <AnimatedSection animation="fadeUp">
          <SectionHeader 
            label="Opiniones"
            title="Lo que dicen nuestros clientes"
            subtitle="La satisfacción de quienes ya caminan con Cabuya es nuestro mayor orgullo."
            align="center"
          />
        </AnimatedSection>

        <div className={styles.grid}>
          {testimonials.map((testimonial, idx) => (
            <AnimatedSection 
              key={testimonial.id} 
              animation="fadeUp" 
              delay={idx * 150}
            >
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
