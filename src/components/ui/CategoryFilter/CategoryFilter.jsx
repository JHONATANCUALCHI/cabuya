import React from 'react';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ categories, active, onChange }) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.scrollWrapper}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.filterBtn} ${active === category.id ? styles.active : ''}`}
            onClick={() => onChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
