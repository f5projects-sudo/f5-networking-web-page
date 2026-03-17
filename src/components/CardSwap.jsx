import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import './CardSwap.css';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} className={`card-swap-card ${customClass}`} {...rest} />
));

const CardSwap = ({
  children,
  className = '',
  perspective = '1000px',
  cardWidth = '300px',
  cardHeight = '400px',
  spacing = 20,
  rotateX = 20,
  scaleReduction = 0.1,
  animationDuration = 0.6,
  animationEase = 'power2.inOut',
  swipeThreshold = 50,
}) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const activeIndexRef = useRef(0);
  const totalCards = useRef(0);
  const isAnimatingRef = useRef(false);

  // Filter valid children
  const validChildren = useMemo(() => 
    Children.toArray(children).filter(child => isValidElement(child)),
    [children]
  );

  useEffect(() => {
    totalCards.current = validChildren.length;
    activeIndexRef.current = 0;
    
    // Initial setup with GSAP
    setupCards();
  }, [validChildren]);

  const setupCards = () => {
    if (!cardsRef.current.length) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const zIndex = totalCards.current - index;
      const translateY = index * spacing;
      const scale = 1 - index * scaleReduction;
      const opacity = index === 0 ? 1 : 0.8 / (index + 1);

      gsap.set(card, {
        zIndex,
        y: translateY,
        scale,
        opacity,
        rotateX: -index * 5,
        transformOrigin: 'bottom center',
        display: index < 4 ? 'block' : 'none', // Show only top 4 for performance
      });
    });
  };

  const handleNext = () => {
    if (isAnimatingRef.current || totalCards.current < 2) return;
    isAnimatingRef.current = true;

    const cards = cardsRef.current;
    if (!cards.length) return;

    const topCard = cards[0];

    // Animation timeline for the swap
    const tl = gsap.timeline({
      onComplete: () => {
        // Move top card to back of array
        const shiftedCard = cardsRef.current.shift();
        cardsRef.current.push(shiftedCard);
        
        // Re-stack
        cardsRef.current.forEach((card, index) => {
          const zIndex = totalCards.current - index;
          const translateY = index * spacing;
          const scale = 1 - index * scaleReduction;
          const opacity = index === 0 ? 1 : 0.8 / (index + 1);

          gsap.to(card, {
            zIndex,
            y: translateY,
            scale,
            opacity,
            rotateX: -index * 2,
            duration: animationDuration * 0.5,
            ease: animationEase,
            display: index < 4 ? 'block' : 'none',
          });
        });

        isAnimatingRef.current = false;
      }
    });

    // 1. Move top card away
    tl.to(topCard, {
      x: 350,
      rotateZ: 15,
      opacity: 0,
      scale: 0.8,
      duration: animationDuration,
      ease: animationEase,
    });
  };

  // Touch handlers
  const touchStartRef = useRef(0);
  const handleTouchStart = (e) => (touchStartRef.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const delta = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > swipeThreshold) handleNext();
  };

  return (
    <div 
      ref={containerRef}
      className={`card-swap-container ${className}`}
      style={{ perspective }}
      onClick={handleNext}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="card-swap-inner"
        style={{ width: cardWidth, height: cardHeight }}
      >
        {validChildren.map((child, index) => (
          cloneElement(child, {
            key: index,
            ref: (el) => (cardsRef.current[index] = el),
            style: { ...child.props.style, width: cardWidth, height: cardHeight }
          })
        ))}
      </div>
    </div>
  );
};

export default CardSwap;
