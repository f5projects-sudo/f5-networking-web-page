import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import {
  Settings2,
  Zap,
  ShieldCheck,
  HeadphonesIcon,
  Users,
  Award,
  CheckCircle,
  ChevronDown
} from 'lucide-react';
import BubbleBackground from '../components/BubbleBackground';
import MapFooter from '../components/MapFooter';
import Navbar from '../components/Navbar';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
};

/* ── Rotating marquee brand strip ── */
const brands = ['AFISA', 'CREDITERIUM', 'RECYGLASS'];

/* ── Methodology steps ── */
const steps = [
  { num: '01', title: 'Reunir Información', desc: 'Centralización de la información de tu empresa o negocio y reconocimiento de tus objetivos.', color: 'var(--color-primary)', glow: '#0056B3', fromLeft: true },
  { num: '02', title: 'Análisis', desc: 'De diferentes soluciones y presentación de nuestras propuestas.', color: 'var(--color-secondary)', glow: '#FF8C00', fromLeft: false },
  { num: '03', title: 'Prototipo', desc: 'Primera vista de tu product.', color: 'var(--color-accent)', glow: '#00B4FF', fromLeft: true },
  { num: '04', title: 'Feedback', desc: '¡Te escuchamos! Ajustes del prototipo y comentarios.', color: 'var(--color-primary)', glow: '#9b59b6', fromLeft: false },
  { num: '05', title: 'Pruebas', desc: 'Listo para probar en campo.', color: 'var(--color-secondary)', glow: '#27ae60', fromLeft: true },
  { num: '06', title: 'Implementación', desc: 'Tu producto 100% productivo.', color: 'var(--color-accent)', glow: '#FF8C00', fromLeft: false },
];

/* ── Certifications ── */
const certs = ['Codedex', 'Oracle', 'Alura Latam', 'Santander Open Academy', 'AWS'];

export default function Nosotros({ onNavigate }) {
  return (
    <div className="app">
      <BubbleBackground />

      {/* ── Navbar ── */}
      <Navbar onNavigate={onNavigate} activePage="nosotros" />

      {/* ── Hero / Intro ── */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '160px 5% 80px' }}>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <p style={{ color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '3px', fontSize: '0.85rem', marginBottom: '16px' }}>QUIÉNES SOMOS</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '24px', lineHeight: 1.1 }}>
            F5 <span className="gradient-text">Networking</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '780px', margin: '0 auto', lineHeight: '1.9' }}>
            Es una empresa dedicada a crear soluciones de conectividad, automatización e infraestructura digital que impulsan la eficiencia, mejoran la comunicación y aceleran la transformación tecnológica de las organizaciones.
          </p>
        </motion.div>
      </section>

      {/* ── ¿Por qué elegirnos? ── */}
      <section className="section-container">
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>¿Por qué <span className="gradient-text">elegirnos?</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto 20px' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
            Elegir F5 Networking significa trabajar con un socio tecnológico que entiende tus retos y construye soluciones diseñadas para tu realidad.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {[
            { icon: <Settings2 size={36} />, title: 'Ajuste a la medida', desc: 'Soluciones diseñadas según las necesidades reales de cada empresa.', color: 'var(--color-primary)', bg: 'rgba(0,86,179,0.12)' },
            { icon: <Zap size={36} />, title: 'Automatización', desc: 'Optimización de procesos para mejorar eficiencia y control.', color: 'var(--color-secondary)', bg: 'rgba(255,140,0,0.12)' },
            { icon: <ShieldCheck size={36} />, title: 'Confiabilidad y seguridad', desc: 'Infraestructura estable, protegida y preparada para crecer.', color: 'var(--color-accent)', bg: 'rgba(0,180,255,0.12)' },
            { icon: <HeadphonesIcon size={36} />, title: 'Soporte continuo', desc: 'Acompañamiento técnico constante antes y después de la implementación.', color: '#9b59b6', bg: 'rgba(155,89,182,0.12)' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ padding: '36px 28px', borderRadius: '20px', borderBottom: `3px solid ${item.color}` }}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', background: item.bg, borderRadius: '14px', marginBottom: '18px', color: item.color }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Our Brand Strip ── */}
      <section style={{ padding: '100px 5%', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', gap: '80px', animation: 'marquee 30s linear infinite' }}>
           {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
             <span key={i} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, opacity: 0.1, whiteSpace: 'nowrap' }}>{b}</span>
           ))}
        </div>
      </section>

      {/* ── Certifications / Tech Stack ── */}
      <section className="section-container" style={{ textAlign: 'center' }}>
        <motion.div {...fadeInUp}>
          <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Respaldados por <span className="gradient-text">Certificaciones</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', opacity: 0.6 }}>
            {certs.map((c, i) => (
              <div key={i} style={{ padding: '10px 25px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                {c}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: '60px 5% 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
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
              C. Miguel Blanco 1440<br />
              Col Americana, Americana<br />
              44160 Guadalajara, Jal.
            </p>
            <div style={{ marginTop: '10px', height: '200px', width: '100%', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <MapFooter />
            </div>
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
