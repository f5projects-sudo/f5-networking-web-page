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
  ChevronDown,
  ArrowRight
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
const certs = [
  { name: 'Oracle', logo: 'https://api.iconify.design/logos:oracle.svg' },
  { name: 'Alura Latam', logo: 'https://raw.githubusercontent.com/alura-cursos/tipografia/master/img/logo-alura.svg' },
  { name: 'Santander Open Academy', logo: 'https://yt3.googleusercontent.com/oQkQKStMp7FgHQHZwqhm3shH6yum2_MdYSJZCHNNCoJ1c5pWX0J-qNVURDwmZzDtEJm6640vaqA=s900-c-k-c0x00ffffff-no-rj' },
  { name: 'AWS', logo: 'https://api.iconify.design/logos:aws.svg' }
];

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
      <section id="quienes-somos-hero" style={{ position: 'relative', zIndex: 10, minHeight: isMobile ? 'auto' : '80vh', display: 'flex', alignItems: 'center', padding: isMobile ? '100px 5% 50px' : '160px 5% 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 180, 255, 0.12) 0%, transparent 70%)', zIndex: -1, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, transparent 70%)', zIndex: -1, filter: 'blur(80px)' }} />

        <div className="section-container" style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%', padding: isMobile ? '0' : undefined }}>

          {/* Text + button */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ maxWidth: isMobile ? '100%' : '60%' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 7vw, 3.8rem)', marginBottom: isMobile ? '16px' : '28px', lineHeight: 1.15, fontWeight: 900, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              <span className="gradient-text">{t('nosotros.hero.titleHighlight', 'Facilitamos ')}</span>
              <span style={{ color: 'var(--color-secondary)' }}>{t('nosotros.hero.titleCrecimiento', 'crecimiento')}</span>
              {t('nosotros.hero.titleSuffix', ' a través de tecnología que escala tu operación')}
            </h1>
            {!isMobile && (
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: '1.9', maxWidth: '650px', marginBottom: '45px' }}>
                {t('nosotros.hero.desc', 'F5 Networking diseña e implementa soluciones de infraestructura, automatización y datos que convierten la complejidad operativa en eficiencia real.')}
              </p>
            )}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(91,156,246,0.25)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: isMobile ? '13px 28px' : '16px 36px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                color: 'white', border: 'none', fontSize: isMobile ? '0.95rem' : '1.05rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '12px'
              }}
              onClick={() => document.getElementById('elegirnos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('nosotros.hero.btn', 'Descubrir Valor')} <ChevronDown size={20} />
            </motion.button>
          </motion.div>

          {/* Stat cards — horizontal row on mobile, floating on desktop */}
          {isMobile ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', width: '100%' }}>
              {[
                { delay: 0.2, bg: 'rgba(0,180,255,0.15)', border: 'rgba(0,180,255,0.25)', icon: <Zap size={22} style={{ color: 'var(--color-accent)' }} />, title: t('nosotros.hero.c1Title', '+5 Años'), desc: t('nosotros.hero.c1Desc') },
                { delay: 0.4, bg: 'rgba(255,140,0,0.15)', border: 'rgba(255,140,0,0.3)', icon: <Users size={22} style={{ color: 'var(--color-secondary)' }} />, title: t('nosotros.hero.c2Title', '99.9%'), desc: t('nosotros.hero.c2Desc') },
                { delay: 0.6, bg: 'rgba(155,89,182,0.15)', border: 'rgba(155,89,182,0.25)', icon: <ShieldCheck size={22} style={{ color: '#9b59b6' }} />, title: t('nosotros.hero.c3Title', '24/7'), desc: t('nosotros.hero.c3Desc') },
              ].map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: card.delay }}
                  style={{ background: 'rgba(5,5,5,0.8)', border: `1px solid ${card.border}`, borderRadius: '16px', padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ background: card.bg, width: '38px', height: '38px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{card.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'white', margin: 0 }}>{card.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: 0, lineHeight: 1.4 }}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="floating-cards-container" style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', height: '600px', width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="glass floating-card" style={{ position: 'absolute', top: '0%', left: '0%', padding: '28px', borderRadius: '24px', width: '240px', border: '1px solid rgba(0, 180, 255, 0.25)', background: 'rgba(5, 5, 5, 0.8)', zIndex: 1 }}>
                <div style={{ background: 'rgba(0, 180, 255, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><Zap size={28} style={{ color: 'var(--color-accent)' }} /></div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px' }}>{t('nosotros.hero.c1Title', '+5 Años')}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{t('nosotros.hero.c1Desc')}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="glass floating-card-reverse" style={{ position: 'absolute', right: '-2%', top: '35%', padding: '28px', borderRadius: '24px', width: '260px', border: '1px solid rgba(255, 140, 0, 0.3)', background: 'rgba(5, 5, 5, 0.8)', zIndex: 2 }}>
                <div style={{ background: 'rgba(255, 140, 0, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><Users size={28} style={{ color: 'var(--color-secondary)' }} /></div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px' }}>{t('nosotros.hero.c2Title', '99.9%')}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{t('nosotros.hero.c2Desc')}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="glass floating-card-slow" style={{ position: 'absolute', bottom: '0%', left: '10%', padding: '28px', borderRadius: '24px', width: '240px', border: '1px solid rgba(155, 89, 182, 0.25)', background: 'rgba(5, 5, 5, 0.8)', zIndex: 1 }}>
                <div style={{ background: 'rgba(155, 89, 182, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><ShieldCheck size={28} style={{ color: '#9b59b6' }} /></div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px' }}>{t('nosotros.hero.c3Title', '24/7')}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{t('nosotros.hero.c3Desc')}</p>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* ── ¿Por qué elegirnos? ── */}
      <section id="elegirnos" className="section-container" style={{ position: 'relative', zIndex: 10, padding: isMobile ? '60px 5%' : '80px 5%' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)', fontWeight: 900 }}>{t('nosotros.choose.title1')}<span className="gradient-text">{t('nosotros.choose.titleHighlight')}</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '20px auto' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>{t('nosotros.choose.desc')}</p>
        </motion.div>

        {isMobile ? (
          /* ── Mobile: pill tabs + content card ── */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* 2×2 grid tabs — all visible at once */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { id: 0, title: t('nosotros.choose.t0Title'), icon: <Settings2 size={16} />, color: 'var(--color-primary)' },
                { id: 1, title: t('nosotros.choose.t1Title'), icon: <Zap size={16} />, color: 'var(--color-secondary)' },
                { id: 2, title: t('nosotros.choose.t2Title'), icon: <ShieldCheck size={16} />, color: 'var(--color-accent)' },
                { id: 3, title: t('nosotros.choose.t3Title'), icon: <HeadphonesIcon size={16} />, color: '#9b59b6' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveReason(tab.id)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    padding: '12px 10px',
                    borderRadius: '14px',
                    background: activeReason === tab.id ? tab.color : 'rgba(255,255,255,0.06)',
                    border: activeReason === tab.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    color: activeReason === tab.id ? 'white' : 'var(--color-text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: activeReason === tab.id ? 700 : 500,
                    transition: 'all 0.25s ease',
                    textAlign: 'center',
                    lineHeight: 1.3
                  }}
                >
                  {tab.icon}
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Content panel */}
            <AnimatePresence mode="wait">
              {[
                { id: 0, title: t('nosotros.choose.d0Title'), desc: t('nosotros.choose.d0Desc'), detail: t('nosotros.choose.d0Detail'), color: 'var(--color-primary)' },
                { id: 1, title: t('nosotros.choose.d1Title'), desc: t('nosotros.choose.d1Desc'), detail: t('nosotros.choose.d1Detail'), color: 'var(--color-secondary)' },
                { id: 2, title: t('nosotros.choose.d2Title'), desc: t('nosotros.choose.d2Desc'), detail: t('nosotros.choose.d2Detail'), color: 'var(--color-accent)' },
                { id: 3, title: t('nosotros.choose.d3Title'), desc: t('nosotros.choose.d3Desc'), detail: t('nosotros.choose.d3Detail'), color: '#9b59b6' }
              ].filter(item => item.id === activeReason).map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'rgba(26,26,31,0.7)',
                    borderRadius: '20px',
                    padding: '28px 22px',
                    borderLeft: `4px solid ${item.color}`
                  }}
                >
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white', marginBottom: '14px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '18px' }}>{item.desc}</p>
                  <p style={{ color: 'white', fontWeight: 600, fontStyle: 'italic', fontSize: '0.9rem' }}>{item.detail}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* ── Desktop: original 2-column layout ── */
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '30px', background: 'rgba(5, 5, 8, 0.4)', borderRadius: '30px', padding: '40px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              {[
                { id: 0, title: t('nosotros.choose.t0Title'), icon: <Settings2 size={22} />, color: 'var(--color-primary)' },
                { id: 1, title: t('nosotros.choose.t1Title'), icon: <Zap size={22} />, color: 'var(--color-secondary)' },
                { id: 2, title: t('nosotros.choose.t2Title'), icon: <ShieldCheck size={22} />, color: 'var(--color-accent)' },
                { id: 3, title: t('nosotros.choose.t3Title'), icon: <HeadphonesIcon size={22} />, color: '#9b59b6' }
              ].map((tab) => (
                <button key={tab.id} onClick={() => setActiveReason(tab.id)} style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '24px 30px', borderRadius: '16px', background: activeReason === tab.id ? 'rgba(255, 255, 255, 0.08)' : 'transparent', border: 'none', color: activeReason === tab.id ? 'white' : 'var(--color-text-muted)', cursor: 'pointer', textAlign: 'left', transition: '0.3s' }}>
                  <div style={{ color: activeReason === tab.id ? tab.color : 'inherit' }}>{tab.icon}</div>
                  <span style={{ fontWeight: activeReason === tab.id ? 700 : 500, fontSize: '1.05rem' }}>{tab.title}</span>
                </button>
              ))}
            </div>
            <div style={{ background: 'rgba(26,26,31,0.5)', borderRadius: '24px', padding: '50px 60px', minHeight: '480px', display: 'flex', alignItems: 'center' }}>
              <AnimatePresence mode="wait">
                {[
                  { id: 0, title: t('nosotros.choose.d0Title'), desc: t('nosotros.choose.d0Desc'), detail: t('nosotros.choose.d0Detail'), color: 'var(--color-primary)' },
                  { id: 1, title: t('nosotros.choose.d1Title'), desc: t('nosotros.choose.d1Desc'), detail: t('nosotros.choose.d1Detail'), color: 'var(--color-secondary)' },
                  { id: 2, title: t('nosotros.choose.d2Title'), desc: t('nosotros.choose.d2Desc'), detail: t('nosotros.choose.d2Detail'), color: 'var(--color-accent)' },
                  { id: 3, title: t('nosotros.choose.d3Title'), desc: t('nosotros.choose.d3Desc'), detail: t('nosotros.choose.d3Detail'), color: '#9b59b6' }
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
        )}
      </section>

      {/* ── Quienes Somos (Team) ── */}
      <section id="quienes-somos" style={{ position: 'relative', zIndex: 10, padding: isMobile ? '80px 5%' : '160px 10%', background: '#0a0a0c' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '60px' : '120px', alignItems: 'center', maxWidth: '1300px', margin: '0 auto' }}>
          <motion.div {...fadeInUp}>
            <h3 style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 500, lineHeight: 1.35, color: 'white', marginBottom: '40px', letterSpacing: '-0.5px' }}>
              {t('nosotros.team.headline')}
            </h3>
            
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '50px', maxWidth: '600px', whiteSpace: 'pre-line' }}>
              {t('nosotros.team.desc')}
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
              <p style={{ fontSize: '0.85rem', color: 'white', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>
                F5 Networking Group
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {t('nosotros.team.title1')}{t('nosotros.team.titleHighlight')}
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: isMobile ? 'stretch' : 'flex-end' }}
          >
            <div style={{ borderRadius: '40px', overflow: 'hidden', width: '100%' }}>
              <img src={teamImg} alt="Team" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('soluciones')}
              className="glass" 
              style={{ 
                padding: '16px 32px', 
                borderRadius: '14px', 
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', 
                color: 'white', 
                fontWeight: 700, 
                border: 'none', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0, 86, 179, 0.2)'
              }}
            >
              {t('nosotros.team.btn')}
              <ArrowRight size={18} />
            </motion.button>
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

      {/* ── Qué nos diferencia (Enhanced 3D Isometric Infographic) ── */}
      <section id="diferenciadores" className="section-container" style={{ position: 'relative', zIndex: 10, padding: '60px 5%', overflow: 'visible' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px', marginBottom: '10px' }}>
            {t('nosotros.differentiator.title', 'Qué nos diferencia')}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 15px' }}>
            {t('nosotros.differentiator.subtitle', 'Innovación, precisión y acompañamiento estratégico en cada capa de su infraestructura.')}
          </p>
          <div style={{ width: '80px', height: '6px', background: 'var(--color-accent)', margin: '0 auto', borderRadius: '10px' }} />
        </motion.div>

        {isMobile ? (
          /* ── Mobile: simple 2x2 grid ── */
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px', width: '100%' }}>
            {[
              { num: 1, color: '#3b82f6', icon: <Target size={28} /> },
              { num: 2, color: '#a855f7', icon: <Cpu size={28} /> },
              { num: 3, color: '#ec4899', icon: <Layers size={28} /> },
              { num: 4, color: '#f97316', icon: <Handshake size={28} /> }
            ].map(({ num, color, icon }) => (
              <motion.div
                key={num}
                {...fadeInUp}
                style={{
                  background: `${color}18`,
                  border: `1px solid ${color}55`,
                  borderRadius: '20px',
                  padding: '24px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ color, width: '44px', height: '44px', background: `${color}25`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, color, textTransform: 'uppercase', letterSpacing: '1px' }}>0{num}</span>
                <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: 800, margin: 0, textTransform: 'uppercase' }}>
                  {t(`nosotros.differentiator.b${num}`).split(' ')[0]}
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>
                  {(() => { const full = t(`nosotros.differentiator.b${num}`); const rest = full.split(' ').slice(1).join(' '); return rest.charAt(0).toUpperCase() + rest.slice(1); })()}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '550px',
          position: 'relative'
        }}>
          {/* Isometric Canvas */}
          <div style={{ 
            position: 'relative', 
            width: isMobile ? '240px' : '380px', 
            height: '400px',
            perspective: '1200px',
            transformStyle: 'preserve-3d'
          }}>
            {[1, 2, 3, 4].map((num, i) => {
              const colors = [
                { top: '#3b82f6', side: '#1e40af', icon: <Target size={24} /> },
                { top: '#a855f7', side: '#6b21a8', icon: <Cpu size={24} /> },
                { top: '#ec4899', side: '#9d174d', icon: <Layers size={24} /> },
                { top: '#f97316', side: '#9a3412', icon: <Handshake size={24} /> }
              ];
              const config = colors[i];
              const isEven = num % 2 === 0;
              
              // Stagger offsets
              const xOffset = i * (isMobile ? 20 : 40);
              const yOffset = i * (isMobile ? -15 : -25);

              return (
                <div key={num} style={{ 
                  position: 'absolute', 
                  width: '100%', 
                  bottom: i * (isMobile ? 60 : 80), 
                  left: xOffset,
                  zIndex: 10 - i,
                  transform: `translateY(${yOffset}px)`
                }}>
                  {/* 3D Slab */}
                  <motion.div
                    initial={{ opacity: 0, y: -200, rotateX: 60, rotateZ: -45 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 60, rotateZ: -45 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 90, damping: 14, delay: i * 0.3 }}
                    style={{
                      width: '100%',
                      height: isMobile ? '80px' : '100px',
                      position: 'relative',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Top Face */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(135deg, ${config.top}, #ffffff20)`,
                      borderRadius: '8px',
                      boxShadow: 'inset 0 0 20px rgba(255,255,255,0.3)',
                      border: '1px solid rgba(255,255,255,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      paddingRight: '20px'
                    }}>
                       <span style={{ 
                         fontSize: isMobile ? '1.5rem' : '2.5rem', 
                         fontWeight: 900, 
                         color: 'rgba(255,255,255,0.4)',
                         transform: 'rotateZ(45deg)' 
                       }}>
                         0{num}
                       </span>
                    </div>

                    {/* Right Side (Depth) */}
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      width: '100%',
                      height: '25px',
                      background: config.side,
                      transform: 'rotateX(-90deg)',
                      transformOrigin: 'top',
                      borderRadius: '0 0 8px 8px',
                      border: '1px solid rgba(0,0,0,0.2)'
                    }} />

                    {/* Left Side (Depth) */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: '100%',
                      width: '25px',
                      height: '100%',
                      background: config.side,
                      transform: 'rotateY(-90deg)',
                      transformOrigin: 'right',
                      borderRadius: '8px 0 0 8px',
                      border: '1px solid rgba(0,0,0,0.2)',
                      filter: 'brightness(0.8)'
                    }} />
                  </motion.div>

                  {/* Label & Description */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: (i * 0.3) + 0.4 }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      [isEven ? 'left' : 'right']: isMobile ? '100%' : 'calc(100% + 30px)',
                      transform: 'translateY(-50%)',
                      width: isMobile ? '160px' : '260px',
                      textAlign: isEven ? 'left' : 'right',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: isEven ? 'flex-start' : 'flex-end',
                      gap: '10px',
                      zIndex: 20
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: isEven ? 'row' : 'row-reverse', 
                      alignItems: 'center', 
                      gap: '12px' 
                    }}>
                      <div style={{ 
                        padding: '8px', 
                        background: `${config.top}20`, 
                        borderRadius: '12px', 
                        color: config.top,
                        border: `1px solid ${config.top}40`
                      }}>
                        {config.icon}
                      </div>
                      <div style={{ 
                        background: config.top, 
                        color: 'white', 
                        padding: '4px 12px', 
                        borderRadius: '20px', 
                        fontSize: '0.75rem', 
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {t('nosotros.differentiator.badge', 'DETALLE')}
                      </div>
                    </div>

                    <h4 style={{ 
                      color: 'white', 
                      fontSize: isMobile ? '0.9rem' : '1.25rem', 
                      fontWeight: 800, 
                      margin: 0,
                      textTransform: 'uppercase'
                    }}>
                      {t(`nosotros.differentiator.b${num}`).split(' ')[0]}
                    </h4>
                    
                    <p style={{ 
                      color: 'var(--color-text-muted)', 
                      fontSize: isMobile ? '0.7rem' : '0.9rem', 
                      lineHeight: 1.4, 
                      margin: 0,
                      maxWidth: '260px'
                    }}>
                      {(() => {
                        const fullText = t(`nosotros.differentiator.b${num}`);
                        const remaining = fullText.split(' ').slice(1).join(' ');
                        return remaining.charAt(0).toUpperCase() + remaining.slice(1);
                      })()}
                    </p>

                    {/* Progress line decoration */}
                    <div style={{ 
                      width: '100%', 
                      height: '3px', 
                      background: 'rgba(255,255,255,0.05)', 
                      borderRadius: '10px',
                      marginTop: '5px',
                      overflow: 'hidden'
                    }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (i * 0.3) + 0.6 }}
                        style={{ height: '100%', background: `linear-gradient(to right, ${config.top}, transparent)` }}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
        )}
      </section>

      {/* ── Certificaciones ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, padding: '80px 5%' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '15px' }}>{t('nosotros.certifications.title1')}<span className="gradient-text">{t('nosotros.certifications.titleHighlight')}</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto' }}></div>
        </motion.div>
        <div style={isMobile
          ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }
          : { display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', alignItems: 'center' }
        }>
          {certs.map((cert, i) => (
            <motion.div 
              key={i} 
              className="glass" 
              style={{ 
                padding: isMobile ? '20px 12px' : '20px 40px', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.08)', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                minWidth: isMobile ? '0' : '240px',
                height: isMobile ? '150px' : '160px',
                background: 'rgba(255,255,255,0.02)',
                gap: '12px',
                overflow: 'hidden'
              }} 
              {...fadeInUp} 
              transition={{ delay: i * 0.1 }} 
              whileHover={{ 
                scale: 1.05, 
                border: '1px solid var(--color-accent)',
                background: 'rgba(255,255,255,0.05)'
              }}
            >
              <img 
                src={cert.logo} 
                alt={cert.name} 
                style={{ 
                  maxHeight: isMobile ? '60px' : (cert.name === 'AWS' ? '50px' : '85px'),
                  maxWidth: '80%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: cert.name === 'Santander Open Academy' ? '50%' : '0',
                  filter: (cert.name === 'AWS' || cert.name === 'Alura Latam') ? 'brightness(0) invert(1)' : 'none'
                }} 
              />
              <span style={{ 
                fontSize: isMobile ? '0.62rem' : '0.7rem',
                fontWeight: 700, 
                color: 'var(--color-text-muted)', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                textAlign: 'center',
                lineHeight: 1.3
              }}>
                {cert.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <Navbar onNavigate={onNavigate} activePage="nosotros" />
    </div>
  );
}
