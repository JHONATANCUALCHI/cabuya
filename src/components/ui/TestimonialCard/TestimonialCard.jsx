import React from 'react';
import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ testimonial }) => {
  const { text, author, city, rating, avatar } = testimonial;

  return (
    <div className={styles.card}>
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? styles.starActive : styles.star}>★</span>
        ))}
      </div>
      <p className={styles.text}>"{text}"</p>
      <div className={styles.authorInfo}>
        {avatar && (
          <img src={avatar} alt={author} className={styles.avatar} />
        )}
        <div>
          <h4 className={styles.author}>{author}</h4>
          <p className={styles.city}>{city}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
