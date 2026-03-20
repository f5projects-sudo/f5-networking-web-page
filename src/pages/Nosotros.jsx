import React, { useState } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import {
  Settings2,
  Zap,
  ShieldCheck,
  HeadphonesIcon,
  Users,
  ChevronRight,
  Send,
  Award,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import BubbleBackground from '../components/BubbleBackground';
import Footer from '../components/Footer';
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
  { num: '03', title: 'Prototipo', desc: 'Primera vista de tu producto.', color: 'var(--color-accent)', glow: '#00B4FF', fromLeft: true },
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

      {/* Hero / Intro */}
      <section style={{ position: 'relative', zIndex: 10, minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '160px 5% 80px' }}>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <p style={{ color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '3px', fontSize: '0.85rem', marginBottom: '16px' }}>QUIÉNES SOMOS</p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 8vw, 4rem)', marginBottom: '24px', lineHeight: 1.1, wordBreak: 'break-word' }}>
            F5 <span className="gradient-text">Networking</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '780px', margin: '0 auto', lineHeight: '1.9' }}>
            Es una empresa dedicada a crear soluciones de conectividad, automatización e infraestructura digital que impulsan la eficiencia, mejoran la comunicación y aceleran la transformación tecnológica de las organizaciones.
          </p>
        </motion.div>
      </section>

      {/* ── ¿Por qué elegirnos? ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10 }}>
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
              <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: item.color }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Nuestro Equipo ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestro <span className="gradient-text">Equipo</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="glass"
          style={{ padding: '60px', borderRadius: '24px', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', background: 'linear-gradient(135deg, rgba(0,86,179,0.08), rgba(0,180,255,0.05))' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '90px', height: '90px', background: 'rgba(0,180,255,0.15)', borderRadius: '50%', flexShrink: 0 }}>
            <Users size={44} style={{ color: 'var(--color-accent)' }} />
          </div>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.9', fontSize: '1.1rem', flex: 1, minWidth: '280px' }}>
            Es un grupo dinámico de expertos dedicados a la innovación y la excelencia, con habilidades en desarrollo de software, análisis de datos y diseño de experiencias de usuario. Creamos soluciones impactantes que empoderan a nuestros clientes.
          </p>
        </motion.div>
      </section>

      {/* ── Marcas que confían (marquee) ── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '40px 0', overflow: 'hidden' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '30px' }}>
          <p style={{ color: 'var(--color-text-muted)', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 600 }}>MARCAS QUE CONFÍAN EN NOSOTROS</p>
        </motion.div>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...brands, ...brands, ...brands].map((b, i) => (
              <span key={i} className="marquee-item">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metodología ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestra <span className="gradient-text">Metodología</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '50px' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ padding: '36px 28px', borderRadius: '20px', borderLeft: `3px solid ${step.color}`, position: 'relative', overflow: 'hidden' }}
              {...fadeInUp}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1, background: `linear-gradient(135deg, ${step.glow}, ${step.color})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: 0.25, marginBottom: '8px' }}>{step.num}</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', marginTop: '-8px' }}>{step.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '0.92rem' }}>{step.desc}</p>
              <div style={{ position: 'absolute', bottom: '16px', right: '20px', opacity: 0.15 }}>
                <CheckCircle2 size={40} style={{ color: step.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Certificaciones ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestras <span className="gradient-text">Certificaciones</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ padding: '18px 32px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', gap: '10px' }}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.06, border: '1px solid var(--color-accent)' }}
            >
              <Award size={18} style={{ color: 'var(--color-secondary)' }} />
              <span style={{ fontWeight: 600, letterSpacing: '0.5px' }}>{cert}</span>
            </motion.div>
          ))}
        </div>
      </section>


      <Footer onNavigate={onNavigate} />
      
      <Navbar onNavigate={onNavigate} activePage="nosotros" />
    </div>
  );
}
