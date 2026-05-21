import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ label, title, subtitle, align = 'left' }) => {
  return (
    <div className={`${styles.header} ${styles[align]}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
