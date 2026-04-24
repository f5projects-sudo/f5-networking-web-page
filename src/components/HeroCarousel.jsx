import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 0,
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&auto=format&fit=crop&q=80',
    alt: 'Data Center Infrastructure',
    tag: 'Infraestructura Cloud',
    title: 'Soluciones de automatización e\ninteligencia artificial para empresas\nque buscan escalar su operación',
    subtitle: 'Diseñamos, desarrollamos e implementamos tecnología a la medida para optimizar procesos, reducir costos operativos y mejorar la eficiencia de tu negocio.',
  },
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop&q=80',
    alt: 'Corporate Technology Office',
    tag: 'Espacios de Trabajo',
    title: 'Entornos corporativos\nconectados e inteligentes',
    subtitle: 'Soluciones de conectividad unificada para oficinas modernas que demandan máxima productividad.',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=80',
    alt: 'Global Network Connectivity',
    tag: 'Conectividad Global',
    title: 'Alcance mundial,\noperación nearshore',
    subtitle: 'Red de telecomunicaciones con presencia en México, EUA y Canadá para una cobertura sin fronteras.',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&auto=format&fit=crop&q=80',
    alt: 'Enterprise Communication Hub',
    tag: 'BPO & Call Center',
    title: 'Atención al cliente\nal más alto nivel',
    subtitle: 'Servicios de Call Center y BPO con agentes especializados, KPIs en tiempo real y operación 24/7.',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&auto=format&fit=crop&q=80',
    alt: 'Business Technology Team',
    tag: 'Equipo Especializado',
    title: 'Talento humano y\ntecnología, juntos',
    subtitle: 'Profesionales certificados combinados con IA y automatización para resultados extraordinarios.',
  }
];

const INTERVAL = 6000;

const HeroCarousel = ({ onNavigate }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next, isPaused, current]);

  // Image slide variants
  const imageVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.85, ease: [0.32, 0.72, 0, 1] } },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.85, ease: [0.32, 0.72, 0, 1] } })
  };

  // Text stagger variants
  const textContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } }
  };

  const textItem = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.3 } }
  };

  const slide = slides[current];

  return (
    <div
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100dvh',
        overflow: 'hidden',
        background: '#1a1a1f',
        zIndex: 1
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Image Slides ── */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={`img-${current}`}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ position: 'absolute', inset: 0 }}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Gradient overlay — stronger at bottom-left for text legibility */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(105deg, rgba(10,10,15,0.82) 0%, rgba(10,10,15,0.55) 50%, rgba(10,10,15,0.2) 100%)'
          }} />
        </motion.div>
      </AnimatePresence>

      {/* ── Text Overlay ── */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center',
        paddingLeft: 'clamp(24px, 8vw, 120px)',
        paddingRight: 'clamp(24px, 8vw, 120px)',
        paddingTop: '80px', // clear navbar
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            variants={textContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            style={{ maxWidth: '680px', pointerEvents: 'auto' }}
          >
            {/* Tag pill */}
            <motion.div variants={textItem} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', marginBottom: '24px',
              background: 'rgba(255,140,0,0.18)',
              border: '1px solid rgba(255,140,0,0.4)',
              borderRadius: '50px',
              fontSize: '0.78rem', fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              color: '#ffb347'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff8c00', display: 'inline-block' }} />
              {slide.tag}
            </motion.div>

            {/* Title */}
            <motion.h1 variants={textItem} style={{
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '20px',
              color: '#ffffff',
              letterSpacing: '-0.5px',
              whiteSpace: 'pre-line'
            }}>
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={textItem} style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '540px'
            }}>
              {slide.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={textItem} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.04, background: '#ff8c00' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  padding: '14px 28px',
                  background: 'rgba(255,140,0,0.9)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  boxShadow: '0 4px 20px rgba(255,140,0,0.3)'
                }}
              >
                Ver Soluciones <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.18)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  padding: '14px 28px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '50px',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)'
                }}
              >
                Contactar Experto
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Slide counter (top-right) ── */}
      <div style={{
        position: 'absolute', top: '50%', right: 'clamp(20px, 4vw, 60px)',
        transform: 'translateY(-50%)',
        zIndex: 20, display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir a slide ${i + 1}`}
            style={{
              width: '3px',
              height: i === current ? '36px' : '16px',
              borderRadius: '2px',
              background: i === current ? '#ffffff' : 'rgba(255,255,255,0.3)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.35s ease'
            }}
          />
        ))}
      </div>

      {/* ── Prev / Next buttons ── */}
      {[{ dir: -1, pos: 'left', icon: <ChevronLeft size={22} />, onClick: prev },
        { dir: 1, pos: 'right', icon: <ChevronRight size={22} />, onClick: next }]
        .map(({ pos, icon, onClick }) => (
          <motion.button
            key={pos}
            onClick={() => {
              onClick();
              // Resetting the timer is handled by the useEffect dependency on 'current'
            }}
            whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.18)' }}
            whileTap={{ scale: 0.95 }}
            aria-label={pos === 'left' ? 'Anterior' : 'Siguiente'}
            style={{
              position: 'absolute',
              [pos]: '20px', 
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              background: 'rgba(26,26,31,0.55)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              borderRadius: '50%',
              width: '50px', height: '50px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'white'
            }}
          >
            {icon}
          </motion.button>
        ))}

      {/* ── Progress bar ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '3px', background: 'rgba(255,255,255,0.1)', zIndex: 20
      }}>
        <motion.div
          key={`bar-${current}`}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
          style={{ height: '100%', background: 'rgba(255,140,0,0.8)' }}
        />
      </div>

      {/* ── Slide number (bottom-left) ── */}
      <div style={{
        position: 'absolute', bottom: '18px', left: 'clamp(24px, 8vw, 120px)',
        zIndex: 20, display: 'flex', alignItems: 'center', gap: '10px'
      }}>
        <span style={{ fontSize: '1rem', fontWeight: 800, color: '#ff8c00' }}>
          {String(current + 1).padStart(2, '0')}
        </span>
        <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default HeroCarousel;
