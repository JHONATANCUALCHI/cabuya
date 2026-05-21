import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, animation = 'fadeUp', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animationClass = isVisible ? `animate-${animation.replace(/([A-Z])/g, '-$1').toLowerCase()}` : '';

  return (
    <div
      ref={sectionRef}
      className={`${className} ${animationClass}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.6s ease-out`,
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
