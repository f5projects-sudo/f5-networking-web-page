import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  PhoneOutgoing, 
  Filter, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  ChevronDown
} from 'lucide-react';
import NovaParticles from '../components/NovaParticles';
import Navbar from '../components/Navbar';

export default function NovaCore({ onNavigate }) {
  const [targetShape, setTargetShape] = useState('text'); // 'text', 'scatter', 'card'
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  // Asegurar que la vista inicie arriba ANTES del render mediante useLayoutEffect
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Top sections observer (Hero, Info, Features, Cash Particles)
    const upperObserverOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const lowerObserverOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    const handleUpperIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'hero-section' || entry.target.id === 'info-section') {
            setTargetShape('text');
          } else if (entry.target.id === 'nova-cash-particles') {
            setTargetShape('card');
          } else if (entry.target.id === 'nova-features') {
            setTargetShape('scatter');
          }
        }
      });
    };

    const handleLowerIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'nova-cash-info' || entry.target.id === 'nova-cta' || entry.target.id === 'nova-footer') {
            setTargetShape('scatter');
          }
        }
      });
    };

    const upperObserver = new IntersectionObserver(handleUpperIntersect, upperObserverOptions);
    const lowerObserver = new IntersectionObserver(handleLowerIntersect, lowerObserverOptions);

    const upperSections = [
      document.getElementById('hero-section'),
      document.getElementById('info-section'),
      document.getElementById('nova-features'),
      document.getElementById('nova-cash-particles')
    ];

    const lowerSections = [
      document.getElementById('nova-cash-info'),
      document.getElementById('nova-cta'),
      document.getElementById('nova-footer')
    ];

    upperSections.forEach(sec => sec && upperObserver.observe(sec));
    lowerSections.forEach(sec => sec && lowerObserver.observe(sec));

    return () => {
      upperObserver.disconnect();
      lowerObserver.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="app">
      <NovaParticles targetShape={targetShape} />
      
      <Navbar onNavigate={onNavigate} activePage="nova-core" />

      {/* ── Hero Section (Solo para trigger the observer) ── */}
      <section id="hero-section" style={{ height: '100vh', marginBottom: '5vh', position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        {/* Las partículas dibujarán "NOVA CORE" aquí */}
      </section>

      {/* ── Intro Information ── */}
      <section id="info-section" className="section-container" style={{ position: 'relative', zIndex: 10, paddingTop: '20px', paddingBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <motion.div {...fadeInUp}>
            <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(0,180,255,0.1)', borderRadius: '30px', border: '1px solid rgba(0,180,255,0.2)', marginBottom: '20px', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>
              TECNOLOGÍA DE VANGUARDIA
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '25px', fontWeight: 'bold', lineHeight: 1.2 }}>
              Atención Al Cliente <br/><span className="gradient-text">Inteligente 24/7</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.9' }}>
              NOVA CORE es una plataforma inteligente que replica las funciones de un equipo completo de atención al cliente, escala en segundos, opera 24/7 y transforma cada interacción en resultados medibles.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} style={{ position: 'relative' }}>
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', opacity: 0.3, filter: 'blur(40px)', zIndex: -1, borderRadius: '24px' }} />
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
               alt="Nova Core Analytics" 
               style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', display: 'block' }} 
             />
          </motion.div>
        </div>
      </section>

      {/* ── Intro / What sets us apart ── */}
      <section id="nova-features" className="section-container" style={{ position: 'relative', zIndex: 10, paddingTop: '100px' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>¿QUÉ NOS <span className="gradient-text">CARACTERIZA?</span></h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}
        >
          {/* Feature 1 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '40px', borderRadius: '20px' }} whileHover={{ y: -10, border: '1px solid var(--color-primary)' }}>
            <Activity size={40} style={{ color: 'var(--color-primary)', marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'white' }}>Visibilidad y control en tiempo real</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Monitorea y analiza la actividad de tu operación con herramientas avanzadas de seguimiento. Obtén datos claros para optimizar procesos, mejorar el rendimiento y tomar decisiones con mayor precisión.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '40px', borderRadius: '20px' }} whileHover={{ y: -10, border: '1px solid var(--color-secondary)' }}>
            <PhoneOutgoing size={40} style={{ color: 'var(--color-secondary)', marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'white' }}>Visualiza todas las llamadas salientes</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Accede a un historial completo de llamadas realizadas y mantén un control detallado de la actividad en tiempo real.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '40px', borderRadius: '20px' }} whileHover={{ y: -10, border: '1px solid var(--color-accent)' }}>
            <Filter size={40} style={{ color: 'var(--color-accent)', marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'white' }}>Filtra por fecha, hora y rangos</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Encuentra información específica rápidamente aplicando filtros avanzados según el periodo que necesites analizar.</p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '40px', borderRadius: '20px' }} whileHover={{ y: -10, border: '1px solid var(--color-primary)' }}>
            <Clock size={40} style={{ color: 'var(--color-primary)', marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'white' }}>Consulta duración y número de intentos</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Revisa métricas clave como duración de llamadas y cantidad de intentos para medir eficiencia y rendimiento.</p>
          </motion.div>

          {/* Feature 5 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '40px', borderRadius: '20px' }} whileHover={{ y: -10, border: '1px solid var(--color-secondary)' }}>
            <TrendingUp size={40} style={{ color: 'var(--color-secondary)', marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'white' }}>Analiza el tráfico por hora</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Identifica picos de llamadas para optimizar recursos. Detecta los horarios con mayor actividad para mejorar la distribución de personal, automatización y capacidad operativa.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Nova Cash Particles Showcase ── */}
      <section id="nova-cash-particles" style={{ height: '70vh', position: 'relative', zIndex: 10, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Aquí se formará la tarjeta de crédito de las partículas */}
      </section>

      {/* ── Nova Cash Information ── */}
      <section id="nova-cash-info" className="section-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <motion.div {...fadeInUp} style={{ position: 'relative' }}>
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--color-secondary), #FF4500)', opacity: 0.2, filter: 'blur(40px)', zIndex: -1, borderRadius: '24px' }} />
             <img 
               src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800" 
               alt="Nova Cash Financial Operations" 
               style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,140,0,0.2)', display: 'block' }} 
             />
          </motion.div>
          <motion.div {...fadeInUp}>
            <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(255,140,0,0.15)', color: 'var(--color-secondary)', borderRadius: '30px', border: '1px solid rgba(255,140,0,0.2)', marginBottom: '20px', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} /> SEGURIDAD TOTAL
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '20px', fontWeight: 'bold' }}>
              <span style={{ color: 'var(--color-secondary)' }}>NOVA</span> CASH
            </h2>
            <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '25px', fontWeight: '500', lineHeight: 1.4 }}>
              Control, validación y seguridad para tus operaciones financieras.
            </h3>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '20px', fontWeight: 'bold' }}>
              <span style={{ color: 'var(--color-secondary)' }}>NOVA</span> CASH
            </h2>
            <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '25px', fontWeight: '500', lineHeight: 1.4 }}>
              Control, validación y seguridad para tus operaciones financieras.
            </h3>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              Nova Cash es una solución diseñada para brindar visibilidad total de la operación, optimizar la validación de préstamos y garantizar altos estándares de seguridad y control en cada paso de tus transacciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA / Other Services ── */}
      <section id="nova-cta" className="section-container" style={{ textAlign: 'center', paddingBottom: '100px', position: 'relative', zIndex: 10 }}>
        <motion.div {...fadeInUp} className="glass" style={{ padding: '60px', borderRadius: '30px', maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'white' }}>¡Conoce nuestros <span className="gradient-text">otros servicios!</span></h3>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 140, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '16px 40px', background: 'transparent', border: '2px solid var(--color-secondary)', borderRadius: '50px', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: 'background 0.3s' }}
            onMouseOver={(e) => e.target.style.background = 'var(--color-secondary)'}
            onMouseOut={(e) => e.target.style.background = 'transparent'}
            onClick={() => onNavigate('home')}
          >
            Volver a Inicio
          </motion.button>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer id="nova-footer" style={{ padding: '60px 5% 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px', color: 'var(--color-text-muted)' }}>
          {/* Column 1: Contáctanos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Contáctanos</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem' }}>🇲🇽</span>
              <a href="tel:+523321012959" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--color-primary)'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>+52 (33) 2101 2959</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem' }}>🇺🇸</span>
              <a href="tel:+12147304939" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--color-secondary)'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>+1 214 730 4939</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem' }}>✉</span>
              <a href="mailto:sales@f5networking.com" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--color-accent)'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>sales@f5networking.com</a>
            </div>
          </div>

          {/* Column 2: Información Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Información legal</h4>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>Términos y condiciones</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>Aviso de privacidad</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>PUA</a>
          </div>

          {/* Column 3: Dirección */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Dirección</h4>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              Miguel Blanco #1440 int 102<br />
              Col. Americana, Guadalajara Jalisco<br />
              C.P. 44170
            </p>
          </div>
        </div>

        {/* Bottom Logo & Copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
            <img 
              src={`${import.meta.env.BASE_URL}f5networking_logo_original_safe.png`} 
              alt="F5 Networking" 
              style={{ height: '40px', width: 'auto', display: 'block', opacity: 0.8 }} 
            />
          </div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} F5 Networking. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
