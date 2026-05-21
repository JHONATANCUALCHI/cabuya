import React from 'react';
import Badge from '../Badge/Badge';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onClick }) => {
  const { name, price, currency, images, badge, isAvailable } = product;

  return (
    <div 
      className={`${styles.editorialSliderCenterSingle} ${!isAvailable ? styles.unavailable : ''}`}
      onClick={() => isAvailable && onClick(product)}
    >
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img 
            src={images[0]} 
            alt={name} 
            className={styles.imgBg} 
          />
        </div>

        {badge && (
          <div className={styles.badgeWrapper}>
            <Badge variant={badge.toLowerCase().replace(/\s+/g, '-')}>{badge}</Badge>
          </div>
        )}
        
        {!isAvailable ? (
          <div className={styles.soldOutOverlay}>
            <span>Agotado</span>
          </div>
        ) : (
          <div className={styles.buyNow}>
            <span>COMPRAR AHORA</span>
          </div>
        )}
      </div>

      <div className={styles.editorialSliderCenterSingleContent}>
        <div className={styles.editorialSliderCenterSingleContentTitle}>
          <h3>{name}</h3>
        </div>
        <div className={styles.editorialSliderCenterSingleContentDescription}>
          <p>{currency} {price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
