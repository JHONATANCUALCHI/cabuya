import React, { useState, useRef, useEffect } from 'react';
import { products } from '../../../data/products';
import { categories } from '../../../data/categories';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import CategoryFilter from '../../ui/CategoryFilter/CategoryFilter';
import ProductCard from '../../ui/ProductCard/ProductCard';
import ProductModal from '../../ui/ProductModal/ProductModal';
import AnimatedSection from '../../common/AnimatedSection';
import styles from './FeaturedCatalog.module.css';

const FeaturedCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideWidth, setSlideWidth] = useState(85);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  useEffect(() => {
    const getWidth = () => {
      if (window.innerWidth >= 1024) return 70;
      if (window.innerWidth >= 768) return 80;
      return 90;
    };

    const handleResize = () => setSlideWidth(getWidth());
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Centrar en el segundo producto (índice 1) si hay suficientes productos
    setCurrentIndex(filteredProducts.length > 1 ? 1 : 0);
  }, [activeCategory, filteredProducts.length]);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  const offset = (100 - slideWidth) / 2;
  const translateX = -(currentIndex * slideWidth) + offset;

  return (
    <section id="catalog" className={`${styles.catalog} section-padding`}>
      <div className="container">
        <SectionHeader
          label="Tu colección perfecta para cada ocasión"
          align="center"
        />

        <AnimatedSection animation="fadeUp" delay={100}>
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </AnimatedSection>

        <div className={styles.sliderContainer}>
          <div 
            className={styles.sliderTrack}
            style={{ 
              transform: `translateX(${translateX}%)` 
            }}
          >
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''}`}
                style={{ flex: `0 0 ${slideWidth}%` }}
              >
                <ProductCard
                  product={product}
                  onClick={openModal}
                />
              </div>
            ))}
          </div>

          {filteredProducts.length > 1 && (
            <>
              <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide} aria-label="Producto anterior">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide} aria-label="Siguiente producto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
              
              <div className={styles.sliderDots}>
                {filteredProducts.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.sliderDot} ${currentIndex === idx ? styles.activeSliderDot : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir al producto ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {filteredProducts.length === 0 && (
          <div className={styles.empty}>
            <p>No se encontraron productos en esta categoría.</p>
          </div>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={closeModal}
      />
    </section>
  );
};

export default FeaturedCatalog;
