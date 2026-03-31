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
const brands = ['AFISA', 'CREDITERIUM', 'RECYGLASS', 'BIZARRO', 'PINKCREARTE', 'KREDIAPAY'];

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

      {/* Hero / Intro Rediseño Split */}
      <section id="quienes-somos-hero" style={{ position: 'relative', zIndex: 10, minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '160px 5% 80px', overflow: 'hidden' }}>
        
        {/* Decorative Background Orbs */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 180, 255, 0.12) 0%, transparent 70%)', zIndex: -1, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, transparent 70%)', zIndex: -1, filter: 'blur(80px)' }} />

        <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', width: '100%' }}>
          
          {/* Lado Izquierdo: Textos */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'inline-block', padding: '8px 24px', background: 'rgba(255, 140, 0, 0.1)', border: '1px solid rgba(255, 140, 0, 0.3)', borderRadius: '30px', marginBottom: '28px', boxShadow: '0 0 20px rgba(255, 140, 0, 0.1)' }}>
              <p style={{ color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '4px', fontSize: '0.75rem', margin: 0, textTransform: 'uppercase' }}>QUIÉNES SOMOS</p>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', marginBottom: '28px', lineHeight: 1.05, fontWeight: 900, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Evolución <br/>
              <span className="gradient-text">Tecnológica</span>
            </h1>
            
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: '1.9', maxWidth: '540px', marginBottom: '45px' }}>
              F5 Networking es una compañía pionera en crear soluciones escalables de conectividad, automatización e infraestructura digital. Simplificamos lo complejo y aceleramos la transformación corporativa para el mundo de hoy.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 180, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 36px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                color: 'white',
                border: 'none',
                fontSize: '1.05rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.3s'
              }}
              onClick={() => {
                document.getElementById('elegirnos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Descubrir Valor <ChevronDown size={20} />
            </motion.button>
          </motion.div>

          {/* Lado Derecho: Tarjetas Glassmorphism Flotantes */}
          <div className="floating-cards-container" style={{ position: 'relative', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Tarjeta 1: Arriba Izquierda */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="glass floating-card"
              style={{ position: 'absolute', top: '5%', left: '0%', padding: '28px', borderRadius: '24px', width: '240px', border: '1px solid rgba(0, 180, 255, 0.25)', background: 'rgba(5, 5, 5, 0.75)', zIndex: 2 }}
            >
              <div style={{ background: 'rgba(0, 180, 255, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Zap size={28} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px', lineHeight: 1 }}>+5 Años</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>Innovando en infraestructura digital corporativa</p>
            </motion.div>

            {/* Tarjeta 2: Centro Derecha */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="glass floating-card-reverse"
              style={{ position: 'absolute', right: '0%', top: '35%', padding: '28px', borderRadius: '24px', width: '260px', border: '1px solid rgba(255, 140, 0, 0.3)', background: 'rgba(5, 5, 5, 0.8)', zIndex: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
            >
              <div style={{ background: 'rgba(255, 140, 0, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Users size={28} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px', lineHeight: 1 }}>99.9%</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>Fiabilidad sostenida en servicios implementados</p>
            </motion.div>

            {/* Tarjeta 3: Abajo Izquierda */}
            <motion.div 
              initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="glass floating-card-slow"
              style={{ position: 'absolute', bottom: '0%', left: '15%', padding: '28px', borderRadius: '24px', width: '240px', border: '1px solid rgba(155, 89, 182, 0.25)', background: 'rgba(5, 5, 5, 0.75)', zIndex: 1 }}
            >
              <div style={{ background: 'rgba(155, 89, 182, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={28} style={{ color: '#9b59b6' }} />
              </div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px', lineHeight: 1 }}>24/7</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>Monitoreo preventivo y soporte ininterrumpido</p>
            </motion.div>
          </div>

          <style>{`
            .floating-card {
              animation: float-cycle 6s ease-in-out infinite;
            }
            .floating-card-reverse {
              animation: float-cycle-reverse 7s ease-in-out infinite;
            }
            .floating-card-slow {
              animation: float-cycle 8s ease-in-out infinite reverse;
            }

            @keyframes float-cycle {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
            @keyframes float-cycle-reverse {
              0% { transform: translateY(0px); }
              50% { transform: translateY(15px); }
              100% { transform: translateY(0px); }
            }

            @media (max-width: 968px) {
              #quienes-somos-hero .section-container {
                grid-template-columns: 1fr !important;
                gap: 60px !important;
                text-align: center;
              }
              #quienes-somos-hero .section-container > div:first-child {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
              }
              #quienes-somos-hero .section-container > div:first-child p {
                text-align: center;
              }
              .floating-cards-container {
                height: auto !important;
                flex-direction: column;
                gap: 20px;
                padding-bottom: 40px;
              }
              .floating-card, .floating-card-reverse, .floating-card-slow {
                position: relative !important;
                top: auto !important;
                left: auto !important;
                right: auto !important;
                bottom: auto !important;
                width: 100% !important;
                max-width: 400px;
                margin: 0 auto;
              }
            }
          `}</style>
        </div>
      </section>

      {/* ── ¿Por qué elegirnos? ── */}
      <section id="elegirnos" className="section-container" style={{ position: 'relative', zIndex: 10, paddingTop: '40px' }}>
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
