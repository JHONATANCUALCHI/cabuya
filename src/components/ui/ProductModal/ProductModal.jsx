import React, { useState, useEffect, useMemo } from 'react';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import SizeSelector from '../SizeSelector/SizeSelector';
import LazyImage from '../LazyImage/LazyImage';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import styles from './ProductModal.module.css';

const ProductModal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(null);
      setActiveImage(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  const media = useMemo(() => {
    if (!product) return [];
    const list = (product.images || []).map(src => ({ type: 'image', src }));
    if (product.video) {
      list.push({ type: 'video', src: product.video });
    }
    return list;
  }, [product]);

  if (!product) return null;

  const { name, price, currency, description, materials = [], sizes = [] } = product;
  const activeMedia = media[activeImage] || media[0] || { type: 'image', src: '' };

  const handleMouseMove = (e) => {
    if (!isDesktop || activeMedia.type !== 'image') return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomPos({ x, y });
  };

  const imageStyle = isDesktop && isHovered && activeMedia.type === 'image' ? {
    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
    transform: 'scale(1.8)',
    transition: 'transform 0.1s ease-out',
    cursor: 'zoom-in'
  } : {
    cursor: activeMedia.type === 'image' ? 'zoom-in' : 'default'
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar modal">
          &times;
        </button>

        <div className={styles.content}>
          {/* Left: Gallery */}
          <div className={styles.galleryCol}>
            <div 
              className={styles.mainImageWrapper}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {activeMedia.type === 'image' ? (
                <LazyImage 
                  src={activeMedia.src} 
                  alt={name} 
                  className={styles.mainImage} 
                  style={imageStyle}
                />
              ) : (
                <video 
                  src={activeMedia.src} 
                  className={styles.mainVideo} 
                  autoPlay 
                  muted 
                  loop 
                  controls 
                  playsInline 
                />
              )}
            </div>
            {media.length > 1 && (
              <div className={styles.thumbnails}>
                {media.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`${styles.thumb} ${activeImage === idx ? styles.activeThumb : ''} ${item.type === 'video' ? styles.videoThumb : ''}`}
                    onClick={() => setActiveImage(idx)}
                  >
                    {item.type === 'image' ? (
                      <img src={item.src} alt={`${name} vista ${idx + 1}`} />
                    ) : (
                      <div className={styles.videoIcon}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className={styles.infoCol}>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.price}>{currency} {price ? price.toFixed(2) : '0.00'}</p>
            
            <div className={styles.divider}></div>

            <div className={styles.details}>
              <h3 className={styles.sectionTitle}>Descripción</h3>
              <p className={styles.description}>{description}</p>
            </div>

            {materials.length > 0 && (
              <div className={styles.details}>
                <h3 className={styles.sectionTitle}>Materiales</h3>
                <ul className={styles.materialsList}>
                  {materials.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            )}

            <SizeSelector 
              sizes={sizes} 
              selectedSize={selectedSize} 
              onSelect={setSelectedSize} 
            />

            <div className={styles.actions}>
              <WhatsAppButton 
                productName={name} 
                size={selectedSize} 
                disabled={!selectedSize}
              >
                Comprar por WhatsApp
              </WhatsAppButton>
              {!selectedSize && (
                <p className={styles.hint}>* Selecciona una talla para continuar</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
