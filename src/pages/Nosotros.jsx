import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
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

      {/* Hero / Intro Rediseño Split */}
      <section id="quienes-somos-hero" style={{ position: 'relative', zIndex: 10, minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '160px 5% 80px', overflow: 'hidden' }}>
        
        {/* Decorative Background Orbs */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 180, 255, 0.12) 0%, transparent 70%)', zIndex: -1, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, transparent 70%)', zIndex: -1, filter: 'blur(80px)' }} />

        <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', width: '100%' }}>
          
          {/* Lado Izquierdo: Textos */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ position: 'relative', zIndex: 2 }}>

            
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
              {t('nosotros.hero.btn', 'Descubrir Valor')} <ChevronDown size={20} />
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
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px', lineHeight: 1 }}>{t('nosotros.hero.c1Title', '+5 Años')}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, fontWeight: 500, whiteSpace: 'pre-line' }}>{t('nosotros.hero.c1Desc', 'Innovando en infraestructura digital corporativa')}</p>
            </motion.div>

            {/* Tarjeta 2: Centro Derecha */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="glass floating-card-reverse"
              style={{ position: 'absolute', right: '0%', top: '35%', padding: '28px', borderRadius: '24px', width: '260px', border: '1px solid rgba(255, 140, 0, 0.3)', background: 'rgba(26, 26, 31, 0.85)', zIndex: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
            >
              <div style={{ background: 'rgba(255, 140, 0, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Users size={28} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px', lineHeight: 1 }}>{t('nosotros.hero.c2Title', '99.9%')}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, fontWeight: 500, whiteSpace: 'pre-line' }}>{t('nosotros.hero.c2Desc', 'Fiabilidad sostenida en servicios implementados')}</p>
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
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '8px', lineHeight: 1 }}>{t('nosotros.hero.c3Title', '24/7')}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, fontWeight: 500, whiteSpace: 'pre-line' }}>{t('nosotros.hero.c3Desc', 'Monitoreo preventivo y soporte ininterrumpido')}</p>
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
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '15px', fontWeight: 900 }}>{t('nosotros.choose.title1', '¿Por qué ')}<span className="gradient-text">{t('nosotros.choose.titleHighlight', 'elegirnos?')}</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto 30px' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
            {t('nosotros.choose.desc', 'Transformamos retos complejos en soluciones tecnológicas innovadoras, escalables y diseñadas para el mundo de hoy.')}
          </p>
        </motion.div>

        {/* Dynamic SaaS Showcase */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', 
          gap: '30px', 
          background: 'rgba(5, 5, 8, 0.4)', 
          border: '1px solid rgba(255, 255, 255, 0.05)', 
          borderRadius: '30px', 
          padding: isMobile ? '20px' : '40px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
          overflow: 'hidden'
        }}>
          
          {/* Left: Tab Menu */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { id: 0, title: t('nosotros.choose.t0Title', 'Ajuste a la medida'), icon: <Settings2 size={20} />, color: 'var(--color-primary)' },
              { id: 1, title: t('nosotros.choose.t1Title', 'Automatización'), icon: <Zap size={20} />, color: 'var(--color-secondary)' },
              { id: 2, title: t('nosotros.choose.t2Title', 'Confiabilidad'), icon: <ShieldCheck size={20} />, color: 'var(--color-accent)' },
              { id: 3, title: t('nosotros.choose.t3Title', 'Soporte Continuo'), icon: <HeadphonesIcon size={20} />, color: '#9b59b6' }
            ].map((tab) => {
              const isActive = activeReason === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveReason(tab.id)}
                  whileHover={{ x: 5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '18px 20px',
                    borderRadius: '16px',
                    background: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    color: isActive ? 'white' : 'var(--color-text-muted)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ 
                    position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '4px', 
                    background: tab.color, 
                    borderRadius: '0 4px 4px 0',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.3s',
                    boxShadow: isActive ? `0 0 10px ${tab.color}` : 'none'
                  }} />
                  
                  <div style={{ 
                    color: isActive ? tab.color : 'inherit', 
                    background: isActive ? `${tab.color}15` : 'transparent',
                    padding: '8px',
                    borderRadius: '10px'
                  }}>
                    {tab.icon}
                  </div>
                  <span style={{ fontSize: '1.05rem', fontWeight: isActive ? 700 : 500 }}>{tab.title}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Display Panel */}
          <div style={{ position: 'relative', minHeight: isMobile ? '400px' : '480px', background: 'rgba(26,26,31,0.5)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)', overflow: 'hidden', padding: isMobile ? '30px 20px' : '50px 60px', display: 'flex', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              {[
                { 
                  id: 0, 
                  title: t('nosotros.choose.d0Title', 'Ingeniería a la Medida'), 
                  desc: t('nosotros.choose.d0Desc', 'Comprendemos que no existen dos empresas iguales. Por ello, diseñamos ecosistemas tecnológicos desde cero o reestructuramos tu core actual para que se adapte milimétricamente a tus flujos operativos reales.'), 
                  detail: t('nosotros.choose.d0Detail', 'Sin software enlatado. Solo tecnología que impulsa tu diferencial.'),
                  icon: <Settings2 size={isMobile ? 120 : 200} strokeWidth={1} />,
                  color: 'var(--color-primary)'
                },
                { 
                  id: 1, 
                  title: t('nosotros.choose.d1Title', 'Automatización Inteligente'), 
                  desc: t('nosotros.choose.d1Desc', 'Eliminamos el error humano y la fricción en tareas repetitivas. Construimos orquestadores robóticos y secuencias de eventos (RPA, Webhooks o IaaS) que multiplican la eficiencia de tu equipo dramáticamente.'), 
                  detail: t('nosotros.choose.d1Detail', 'Más tiempo para estrategia. Menos tiempo en tareas mecánicas.'),
                  icon: <Zap size={isMobile ? 120 : 200} strokeWidth={1} />,
                  color: 'var(--color-secondary)'
                },
                { 
                  id: 2, 
                  title: t('nosotros.choose.d2Title', 'Seguridad Zero Trust'), 
                  desc: t('nosotros.choose.d2Desc', 'Desplegamos infraestructura robusta bajo el modelo Zero Trust. Tus datos permanecen en bóvedas criptográficas con redundancia geográfica para garantizar un 99.9% de uptime constante.'), 
                  detail: t('nosotros.choose.d2Detail', 'Duerme tranquilo mientras tu red trabaja sin latencia ni brechas.'),
                  icon: <ShieldCheck size={isMobile ? 120 : 200} strokeWidth={1} />,
                  color: 'var(--color-accent)'
                },
                { 
                  id: 3, 
                  title: t('nosotros.choose.d3Title', 'Monitorización 24/7'), 
                  desc: t('nosotros.choose.d3Desc', 'Nuestro compromiso no termina en el despliegue. Tu organización dispondrá de un escuadrón técnico exclusivo que monitorea activamente tus nodos para prevenir caídas antes de que siquiera ocurran.'), 
                  detail: t('nosotros.choose.d3Detail', 'SLA líder en la industria con respuesta reactiva inmediata.'),
                  icon: <HeadphonesIcon size={isMobile ? 120 : 200} strokeWidth={1} />,
                  color: '#9b59b6'
                }
              ].filter(item => item.id === activeReason).map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ position: 'relative', width: '100%', zIndex: 2 }}
                >
                  <div style={{ position: 'absolute', right: isMobile ? '-20%' : '-15%', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, filter: 'blur(2px)' }}>
                    {React.cloneElement(item.icon, { color: item.color })}
                  </div>

                  <div style={{ display: 'inline-block', padding: '6px 16px', background: `${item.color}15`, border: `1px solid ${item.color}30`, borderRadius: '30px', color: item.color, fontWeight: 700, fontSize: '0.85rem', marginBottom: '25px', letterSpacing: '1px' }}>
                    {t('nosotros.choose.badge', 'VALOR DIFERENCIAL')}
                  </div>
                  <h3 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '25px', color: 'white', lineHeight: 1.1 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '40px' }}>
                    {item.desc}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '40px', height: '2px', background: item.color }} />
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontWeight: 600, fontSize: '1.05rem', margin: 0 }}>
              {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Quienes Somos ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, padding: '80px 5%' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>
            {t('nosotros.team.title1', 'Quienes ')}<span className="gradient-text">{t('nosotros.team.titleHighlight', 'somos')}</span>
          </h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--color-secondary)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', 
          gap: '60px', 
          alignItems: 'center' 
        }}>
          <motion.div {...fadeInUp}>
            <h3 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
              fontWeight: 900, 
              lineHeight: 1.1, 
              marginBottom: '35px', 
              color: 'white' 
            }}>
              {t('nosotros.team.headline', 'Construimos soluciones tecnológicas que escalan negocio')}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <p style={{ 
                color: 'var(--color-text-muted)', 
                lineHeight: '1.8', 
                fontSize: '1.15rem',
                margin: 0
              }}>
                {t('nosotros.team.desc', 'Es un grupo dinámico de expertos dedicados a la innovación y la excelencia, con habilidades en desarrollo de software, análisis de datos y diseño de experiencias de usuario. Creamos soluciones impactantes que empoderan a nuestros clientes.')}
              </p>
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              inset: '-15px',
              border: '1px solid rgba(255, 140, 0, 0.3)',
              borderRadius: '24px',
              zIndex: -1
            }} />
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <img 
                src={teamImg} 
                alt="F5 Networking Team" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,12,0.4), transparent)'
              }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Marcas que confían (marquee) ── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '40px 0', overflow: 'hidden' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '30px' }}>
          <p style={{ color: 'var(--color-text-muted)', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 600 }}>{t('nosotros.brands.tag', 'MARCAS QUE CONFÍAN EN NOSOTROS')}</p>
        </motion.div>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...brands, ...brands, ...brands].map((b, i) => (
              <span key={i} className="marquee-item">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué nos diferencia ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, padding: '60px 5%' }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.03)', 
          border: '1px solid rgba(255, 255, 255, 0.05)', 
          borderRadius: '40px', 
          padding: isMobile ? '40px 25px' : '60px 80px',
          boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <motion.div {...fadeInUp} style={{ textAlign: 'left', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '20px' }}>
              {t('nosotros.differentiator.title', 'Qué nos diferencia')}
            </h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--color-accent)', borderRadius: '2px' }}></div>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: '30px' 
          }}>
            {[1, 2, 3, 4].map((num) => (
              <motion.div 
                key={num}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: num * 0.15, 
                  ease: [0.21, 1.11, 0.81, 0.99] // Custom cubic-bezier for a smooth elegant pop
                }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '24px',
                  background: 'rgba(255,255,255,0.02)',
                  padding: '32px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1
                }}
                whileHover={{ 
                  y: -8, 
                  background: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(0, 180, 255, 0.3)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                {/* Background Number for Elegance */}
                <span style={{
                  position: 'absolute',
                  right: '-10px',
                  bottom: '-20px',
                  fontSize: '8rem',
                  fontWeight: 900,
                  color: 'rgba(255, 255, 255, 0.03)',
                  zIndex: -1,
                  userSelect: 'none'
                }}>
                  {num}
                </span>

                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(0, 180, 255, 0.2), rgba(0, 180, 255, 0.05))', 
                  minWidth: '56px', 
                  height: '56px', 
                  borderRadius: '16px',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(0, 180, 255, 0.2)'
                }}>
                  <CheckCircle2 size={28} strokeWidth={2.5} />
                </div>
                
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontSize: '1.2rem', 
                  lineHeight: '1.4', 
                  margin: 0,
                  fontWeight: 600,
                  letterSpacing: '-0.01em'
                }}>
                  {t(`nosotros.differentiator.b${num}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certificaciones ── */}

      <section className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{t('nosotros.certifications.title1', 'Nuestras ')}<span className="gradient-text">{t('nosotros.certifications.titleHighlight', 'Certificaciones')}</span></h2>
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
