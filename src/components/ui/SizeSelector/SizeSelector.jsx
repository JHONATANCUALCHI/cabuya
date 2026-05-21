import React from 'react';
import styles from './SizeSelector.module.css';

const SizeSelector = ({ sizes, selectedSize, onSelect }) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Seleccionar Talla (EU):</span>
      <div className={styles.grid}>
        {sizes.map((size) => (
          <button
            key={size}
            className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
            onClick={() => onSelect(size)}
            aria-pressed={selectedSize === size}
          >
            {size}
          </button>
        ))}
      </div>
      {selectedSize && (
        <p className={styles.selectionNote}>
          Talla seleccionada: <strong>{selectedSize}</strong>
        </p>
      )}
    </div>
  );
};

export default SizeSelector;
