import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings2,
  Zap,
  ShieldCheck,
  HeadphonesIcon,
  Users,
  ChevronRight,
  Send,
  Award,
  Target,
  Cpu,
  Layers,
  Handshake,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import teamImg from '../assets/quienes-somos.jpg';
import BubbleBackground from '../components/BubbleBackground';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
};

/* ── Rotating marquee brand strip ── */
const brands = ['AFISA', 'CREDITERIUM', 'RECYGLASS', 'BIZZARRO', 'PINKCREARTE', 'KREDIAPAY'];

/* ── Certifications ── */
const certs = ['Codedex', 'Oracle', 'Alura Latam', 'Santander Open Academy', 'AWS'];

export default function Nosotros({ onNavigate }) {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [activeReason, setActiveReason] = useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app">
      <BubbleBackground />

      {/* Hero / Intro */}
      <section id="quienes-somos-hero" style={{ position: 'relative', zIndex: 10, minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '160px 5% 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 180, 255, 0.12) 0%, transparent 70%)', zIndex: -1, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, transparent 70%)', zIndex: -1, filter: 'blur(80px)' }} />

        <div className="section-container" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '60px', alignItems: 'center', width: '100%' }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', marginBottom: '28px', lineHeight: 1.05, fontWeight: 900, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              {t('nosotros.hero.title1', 'Evolución')} <br/>
              <span className="gradient-text">{t('nosotros.hero.titleHighlight', 'Tecnológica')}</span>
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: '1.9', maxWidth: '540px', marginBottom: '45px' }}>
              {t('nosotros.hero.desc', 'F5 Networking es una compañía pionera en crear soluciones escalables de conectividad, automatización e infraestructura digital. Simplificamos lo complejo y aceleramos la transformación corporativa para el mundo de hoy.')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(91,156,246,0.25)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 36px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                color: 'white', border: 'none', fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '12px'
              }}
              onClick={() => document.getElementById('elegirnos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('nosotros.hero.btn', 'Descubrir Valor')} <ChevronDown size={20} />
            </motion.button>
          </motion.div>

          <div className="floating-cards-container" style={{ position: 'relative', height: isMobile ? 'auto' : '550px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="glass floating-card" style={{ position: isMobile ? 'relative' : 'absolute', top: '5%', left: '0%', padding: '28px', borderRadius: '24px', width: isMobile ? '100%' : '240px', border: '1px solid rgba(0, 180, 255, 0.25)', background: 'rgba(5, 5, 5, 0.75)' }}>
              <div style={{ background: 'rgba(0, 180, 255, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><Zap size={28} style={{ color: 'var(--color-accent)' }} /></div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px' }}>{t('nosotros.hero.c1Title', '+5 Años')}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{t('nosotros.hero.c1Desc')}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="glass floating-card-reverse" style={{ position: isMobile ? 'relative' : 'absolute', right: '0%', top: '35%', padding: '28px', borderRadius: '24px', width: isMobile ? '100%' : '260px', border: '1px solid rgba(255, 140, 0, 0.3)', background: 'rgba(26, 26, 31, 0.85)' }}>
              <div style={{ background: 'rgba(255, 140, 0, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><Users size={28} style={{ color: 'var(--color-secondary)' }} /></div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px' }}>{t('nosotros.hero.c2Title', '99.9%')}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{t('nosotros.hero.c2Desc')}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="glass floating-card-slow" style={{ position: isMobile ? 'relative' : 'absolute', bottom: '0%', left: '15%', padding: '28px', borderRadius: '24px', width: isMobile ? '100%' : '240px', border: '1px solid rgba(155, 89, 182, 0.25)', background: 'rgba(5, 5, 5, 0.75)' }}>
              <div style={{ background: 'rgba(155, 89, 182, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><ShieldCheck size={28} style={{ color: '#9b59b6' }} /></div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px' }}>{t('nosotros.hero.c3Title', '24/7')}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{t('nosotros.hero.c3Desc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ¿Por qué elegirnos? ── */}
      <section id="elegirnos" className="section-container" style={{ position: 'relative', zIndex: 10, padding: '80px 5%' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900 }}>{t('nosotros.choose.title1')}<span className="gradient-text">{t('nosotros.choose.titleHighlight')}</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '20px auto' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem' }}>{t('nosotros.choose.desc')}</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '30px', background: 'rgba(5, 5, 8, 0.4)', borderRadius: '30px', padding: isMobile ? '20px' : '40px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { id: 0, title: t('nosotros.choose.t0Title'), icon: <Settings2 size={20} />, color: 'var(--color-primary)' },
              { id: 1, title: t('nosotros.choose.t1Title'), icon: <Zap size={20} />, color: 'var(--color-secondary)' },
              { id: 2, title: t('nosotros.choose.t2Title'), icon: <ShieldCheck size={20} />, color: 'var(--color-accent)' },
              { id: 3, title: t('nosotros.choose.t3Title'), icon: <HeadphonesIcon size={20} />, color: '#9b59b6' }
            ].map((tab) => (
              <button key={tab.id} onClick={() => setActiveReason(tab.id)} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '18px 20px', borderRadius: '16px', background: activeReason === tab.id ? 'rgba(255, 255, 255, 0.08)' : 'transparent', border: 'none', color: activeReason === tab.id ? 'white' : 'var(--color-text-muted)', cursor: 'pointer', textAlign: 'left', transition: '0.3s' }}>
                <div style={{ color: activeReason === tab.id ? tab.color : 'inherit' }}>{tab.icon}</div>
                <span style={{ fontWeight: activeReason === tab.id ? 700 : 500 }}>{tab.title}</span>
              </button>
            ))}
          </div>

          <div style={{ background: 'rgba(26,26,31,0.5)', borderRadius: '24px', padding: isMobile ? '30px 20px' : '50px 60px', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              {[
                { id: 0, title: t('nosotros.choose.d0Title'), desc: t('nosotros.choose.d0Desc'), detail: t('nosotros.choose.d0Detail'), icon: <Settings2 size={150} />, color: 'var(--color-primary)' },
                { id: 1, title: t('nosotros.choose.d1Title'), desc: t('nosotros.choose.d1Desc'), detail: t('nosotros.choose.d1Detail'), icon: <Zap size={150} />, color: 'var(--color-secondary)' },
                { id: 2, title: t('nosotros.choose.d2Title'), desc: t('nosotros.choose.d2Desc'), detail: t('nosotros.choose.d2Detail'), icon: <ShieldCheck size={150} />, color: 'var(--color-accent)' },
                { id: 3, title: t('nosotros.choose.d3Title'), desc: t('nosotros.choose.d3Desc'), detail: t('nosotros.choose.d3Detail'), icon: <HeadphonesIcon size={150} />, color: '#9b59b6' }
              ].filter(item => item.id === activeReason).map(item => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '20px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>{item.desc}</p>
                  <p style={{ color: 'white', fontWeight: 600, fontStyle: 'italic' }}>{item.detail}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Quienes Somos (Team) ── */}
      <section id="quienes-somos" className="section-container" style={{ position: 'relative', zIndex: 10, padding: '80px 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
          <motion.div {...fadeInUp}>
            <h2 style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px' }}>{t('nosotros.team.title1')} {t('nosotros.team.titleHighlight')}</h2>
            <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '30px', color: 'white' }}>{t('nosotros.team.headline')}</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1.15rem' }}>{t('nosotros.team.desc')}</p>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img src={teamImg} alt="Team" style={{ width: '100%', display: 'block' }} />
          </motion.div>
        </div>
      </section>

      {/* ── Marcas ── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '60px 0', overflow: 'hidden' }}>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...brands, ...brands, ...brands].map((b, i) => (
              <span key={i} className="marquee-item">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué nos diferencia (3D Isometric Stack) ── */}
      <section id="diferenciadores" className="section-container" style={{ position: 'relative', zIndex: 10, padding: '120px 5%', overflow: 'hidden' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '120px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase' }}>{t('nosotros.differentiator.title')}</h2>
          <div style={{ width: '100px', height: '6px', background: 'var(--color-accent)', margin: '20px auto', borderRadius: '10px' }} />
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '600px', position: 'relative' }}>
          <div style={{ position: 'relative', width: isMobile ? '280px' : '500px', height: '400px' }}>
            {[1, 2, 3, 4].map((num, i) => {
              const layerGradients = [
                'linear-gradient(135deg, #1e3a8a, #3b82f6)', 
                'linear-gradient(135deg, #6b21a8, #a855f7)', 
                'linear-gradient(135deg, #9d174d, #ec4899)', 
                'linear-gradient(135deg, #9a3412, #f97316)'
              ];
              const isEven = num % 2 === 0;

              return (
                <div key={num} style={{ position: 'absolute', width: '100%', bottom: i * 70, zIndex: 10 - i }}>
                  <motion.div
                    initial={{ opacity: 0, y: -300, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 80, damping: 12, delay: i * 0.4 }}
                    style={{ width: '100%', height: '120px', background: layerGradients[i], transform: 'rotateX(60deg) rotateZ(-45deg)', borderRadius: '12px', boxShadow: '15px 15px 40px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.3)' }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: (i * 0.4) + 0.3 }}
                    style={{ position: 'absolute', top: '20px', [isEven ? 'left' : 'right']: isMobile ? '105%' : '115%', width: isMobile ? '160px' : '300px', textAlign: isEven ? 'left' : 'right', display: 'flex', flexDirection: isEven ? 'row' : 'row-reverse', alignItems: 'center', gap: '15px' }}
                  >
                    <div style={{ width: isMobile ? '20px' : '50px', height: '2px', background: 'var(--color-accent)', opacity: 0.6 }} />
                    <div>
                      <h4 style={{ color: 'var(--color-accent)', fontSize: isMobile ? '0.9rem' : '1.3rem', fontWeight: 900, margin: 0, textTransform: 'uppercase' }}>{t(`nosotros.differentiator.b${num}`).split(' ')[0]}</h4>
                      <p style={{ color: 'white', fontSize: isMobile ? '0.75rem' : '1rem', fontWeight: 600, margin: '4px 0 0 0' }}>{t(`nosotros.differentiator.b${num}`)}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Certificaciones ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, padding: '80px 5%' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{t('nosotros.certifications.title1')}<span className="gradient-text">{t('nosotros.certifications.titleHighlight')}</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto' }}></div>
        </motion.div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {certs.map((cert, i) => (
            <motion.div key={i} className="glass" style={{ padding: '18px 32px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', gap: '10px' }} {...fadeInUp} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.06, border: '1px solid var(--color-accent)' }}>
              <Award size={18} style={{ color: 'var(--color-secondary)' }} />
              <span style={{ fontWeight: 600 }}>{cert}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <Navbar onNavigate={onNavigate} activePage="nosotros" />
    </div>
  );
}
