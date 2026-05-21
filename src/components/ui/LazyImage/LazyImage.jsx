import React, { useState } from 'react';
import styles from './LazyImage.module.css';

const LazyImage = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`${styles.wrapper} ${isLoaded ? styles.loaded : ''} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={styles.image}
        {...props}
      />
      {!isLoaded && <div className={styles.placeholder} />}
    </div>
  );
};

export default LazyImage;
