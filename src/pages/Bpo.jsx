import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { 
  Headset, 
  CheckCircle2, 
  Lock, 
  Activity, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  TrendingUp, 
  UserCheck, 
  BarChart3, 
  GraduationCap, 
  FileText,
  MousePointer2,
  ChevronRight,
  Info
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const MethodologyStep = ({ id, title, desc, icon, color, delay, isEven }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`methodology-step ${isEven ? 'methodology-step-reverse' : ''}`}
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: 'clamp(30px, 5vw, 60px)',
        marginBottom: 'clamp(60px, 10vw, 120px)',
        position: 'relative'
      }}
    >
      {/* Massive Background Number */}
      <div 
        className="hide-mobile"
        style={{
          position: 'absolute',
          [isEven ? 'left' : 'right']: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(6rem, 15vw, 18rem)',
          fontWeight: '900',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.05)',
          zIndex: 0,
          pointerEvents: 'none',
          lineHeight: 1,
          fontFamily: 'Inter, sans-serif'
        }}>
        {id}
      </div>

      {/* Connection Path Line */}
      <div 
        className="hide-mobile"
        style={{
          position: 'absolute',
          [isEven ? 'right' : 'left']: '500px',
          top: '50%',
          width: '120px',
          height: '1px',
          background: `linear-gradient(to ${isEven ? 'right' : 'left'}, transparent, ${color}66, transparent)`,
          zIndex: 1
        }} />

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, translateY: -5 }}
        className="glass"
        style={{
          flex: '1',
          width: '100%',
          maxWidth: '550px',
          padding: 'clamp(25px, 5vw, 60px)',
          borderRadius: '40px',
          background: 'rgba(255,255,255,0.015)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          zIndex: 2,
          boxShadow: `0 40px 100px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
        }}
      >
        {/* Glowing Accent Top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '40%',
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`
        }} />

        <div style={{ 
          width: '70px', 
          height: '70px', 
          background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
          borderRadius: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: color,
          marginBottom: '35px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: `0 15px 30px -10px ${color}33`
        }}>
          {React.cloneElement(icon, { size: 34 })}
        </div>

        <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.5px' }}>
          {title}
        </h3>
        
        <p style={{ 
          color: 'rgba(255,255,255,0.5)', 
          lineHeight: '1.8', 
          fontSize: '1.2rem',
          maxWidth: '400px'
        }}>
          {desc}
        </p>

        {/* Decorative corner glow */}
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-20px',
          width: '100px',
          height: '100px',
          background: `radial-gradient(circle, ${color}11 0%, transparent 70%)`,
          zIndex: -1
        }} />
      </motion.div>

      {/* Visual Spacer / Connection Point Area with Technical Details */}
      <div 
        className="hide-mobile"
        style={{ flex: '0.8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
        {/* Pulse animate dot */}
        <motion.div 
          className="hardware-accelerated"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            width: '45px', 
            height: '45px', 
            borderRadius: '50%', 
            border: `1px solid ${color}66`,
            position: 'absolute',
            zIndex: 9
          }} 
        />
        <div style={{ 
          width: '14px', 
          height: '14px', 
          borderRadius: '50%', 
          background: color,
          boxShadow: `0 0 20px ${color}`,
          zIndex: 10,
          marginBottom: '25px'
        }} />
        
        {/* Phase Metadata Tag */}
        <div style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: '4px',
          textAlign: 'center',
          textTransform: 'uppercase',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '10px 20px',
          borderRadius: '10px',
          background: 'rgba(255,140,0,0.03)',
          backdropFilter: 'blur(10px)',
          zIndex: 10,
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
        }}>
          SYS_NODE_{id} <br/>
          <span style={{ color: color, opacity: 0.8, fontSize: '0.6rem', fontWeight: 'bold' }}>● STATUS: OPERATIONAL</span>
        </div>
      </div>
    </motion.div>
  );
};

const OperationalCard = ({ icon, title, desc, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover="hover"
      className="glass"
      style={{
        padding: '40px',
        borderRadius: '30px',
        background: 'rgba(255,255,255,0.01)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        height: '100%'
      }}
    >
      {/* Scanning Light Bar (Hover) */}
      <motion.div
        className="hardware-accelerated"
        variants={{
          hover: { top: '100%', opacity: 0.5 }
        }}
        initial={{ top: '-10%', opacity: 0 }}
        transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--color-secondary), transparent)',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      />

      {/* Metadata Labels */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '1.5px' }}>
          SEC_ID: 0{index + 1}
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: 'var(--color-secondary)', opacity: 0.5 }}>
          [ PROTECTED ]
        </div>
      </div>

      <div style={{ 
        width: '56px', 
        height: '56px', 
        background: 'rgba(255,140,0,0.1)', 
        borderRadius: '14px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--color-secondary)',
        border: '1px solid rgba(255,140,0,0.2)'
      }}>
        {React.cloneElement(icon, { size: 28 })}
      </div>

      <div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '12px', color: 'white' }}>{title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', fontSize: '0.95rem' }}>{desc}</p>
      </div>

      {/* Corner Status */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '25px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-secondary)', boxShadow: '0 0 10px var(--color-secondary)' }} />
        <span style={{ fontFamily: 'monospace', fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px' }}>VERIFIED</span>
      </div>
    </motion.div>
  );
};

const ServiceNode = ({ icon, text, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    style={{ 
      display: 'flex', 
      gap: '20px', 
      alignItems: 'center',
      padding: '20px 25px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.05)',
      marginBottom: '15px'
    }}
  >
    <div style={{ position: 'relative' }}>
      <div style={{ color: 'var(--color-secondary)' }}>
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <motion.div 
        className="hardware-accelerated"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ 
          position: 'absolute', 
          top: -2, 
          right: -2, 
          width: '8px', 
          height: '8px', 
          borderRadius: '50%', 
          background: 'var(--color-secondary)',
          boxShadow: '0 0 10px var(--color-secondary)'
        }} 
      />
    </div>
    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: 'rgba(255,255,255,0.8)' }}>{text}</span>
  </motion.div>
);

export default function Bpo({ onNavigate }) {
  const { t } = useLanguage();
  // Asegurar que la vista inicie arriba
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
 
  // Reducimos el damping para que responda instantáneamente al mouse
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 300,
    damping: 30, 
    restDelta: 0.001 
  });  

  // FASE 1: El badge se desplaza a la esquina rápido (0.0 a 0.4)
  const badgeOpacity = useTransform(smoothProgress, [0, 0.05], [1, 1]);
  const badgeY = useTransform(smoothProgress, [0, 0.4], ["0vh", "-36vh"]);
  const badgeX = useTransform(smoothProgress, [0, 0.4], ["0vw", "-36vw"]);
  const badgeScale = useTransform(smoothProgress, [0, 0.3], [1.5, 1]); 
  
  // FASE 2: El texto aparece una vez el badge llega a su lugar (0.4 a 0.8)
  const contentOpacity = useTransform(smoothProgress, [0.4, 0.8], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.4, 0.8], [60, 0]);

  // FASE 3: Pequeño paralaje al final antes de bajar (0.8 a 1.0)
  const imgScale = useTransform(smoothProgress, [0, 0.8, 1], [1.05, 1.05, 1.0]);
  const imgY = useTransform(smoothProgress, [0, 0.8, 1], ["0%", "0%", "-5%"]);
  const imgBrightness = useTransform(smoothProgress, [0, 0.5, 0.8], [0.85, 0.5, 0.35]); // Fondo oscuro para resaltar la letra blanca

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="app">
      
      {/* Dynamic Background */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(255, 140, 0, 0.05), transparent 50%), radial-gradient(circle at 90% 90%, rgba(0, 86, 179, 0.05), transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Navbar onNavigate={onNavigate} activePage="bpo" />

      {/* ── Scrollytelling Hero Section ── */}
      {isMobile ? (
        <section style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10, padding: '160px 20px 0' }}>
          <div className="hardware-accelerated" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <img 
              src={`${import.meta.env.BASE_URL}bpo_hero_image.png`} 
              alt="BPO" 
              width="1920"
              height="1080"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.7) 40%, transparent 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 50%)' }} />
          </div>
          
          <div style={{ position: 'relative', zIndex: 20, width: '100%', maxWidth: '1200px' }}>
            <div style={{ 
              display: 'inline-flex', padding: '10px 25px', background: 'rgba(25, 12, 0, 0.95)', 
              borderRadius: '40px', border: '1px solid rgba(255,140,0,0.4)', color: 'var(--color-secondary)', 
              fontWeight: '900', fontSize: '1rem', letterSpacing: '2px', alignItems: 'center', gap: '10px', 
              marginBottom: '20px' 
            }}>
              <Headset size={20} /> {t('bpo.hero.tag', 'BPO SERVICES')}
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '15px', textShadow: '0 5px 15px rgba(0,0,0,0.8)' }}>
              {t('bpo.hero.title1', 'UN SOCIO ESTRATÉGICO')} <br />
              <span className="gradient-text" style={{ fontSize: '0.85em' }}>{t('bpo.hero.title2', 'QUE ENTIENDE TU OPERACIÓN')}</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '30px', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              {t('bpo.hero.desc', 'En F5 conocemos que las mejores operaciones comienzan escuchando. Analizamos tus necesidades, entendemos tus prioridades y diseñamos soluciones BPO a la medida.')}
            </p>
 
            <motion.button 
              style={{
                padding: '16px 35px', background: 'var(--color-secondary)', border: 'none', color: 'white',
                borderRadius: '50px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(255,140,0,0.4)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onNavigate('home');
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
            >
              {t('bpo.hero.btn', '¡Me Interesa!')} <ChevronRight size={22} />
            </motion.button>
          </div>
        </section>
      ) : (
        <section ref={containerRef} style={{ height: '220vh', position: 'relative', zIndex: 10 }}>
          <div style={{ position: 'sticky', top: '70px', height: 'calc(100dvh - 70px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              className="hardware-accelerated"
              style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              zIndex: -1,
              scale: imgScale,
              y: imgY
            }}>
              <motion.img 
                src={`${import.meta.env.BASE_URL}bpo_hero_image.png`} 
                alt="Professional BPO Services"
                width="1920"
                height="1080"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  opacity: imgBrightness
                }}
              />
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.5) 30%, rgba(5,5,5,0.2) 60%, transparent 100%)' 
              }} />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                height: '50%', 
                background: 'linear-gradient(to top, rgba(5,5,5,0.8) 0%, transparent 100%)' 
              }} />
            </motion.div>

            <motion.div 
              style={{ 
                position: 'absolute',
                zIndex: 30,
                y: badgeY,
                x: badgeX,
                scale: badgeScale,
                opacity: badgeOpacity,
                display: 'inline-flex', 
                padding: '12px 30px', 
                background: 'rgba(255,140,0,0.25)', 
                backdropFilter: 'blur(15px)',
                borderRadius: '40px', 
                border: '1px solid rgba(255,140,0,0.4)', 
                color: 'var(--color-secondary)', 
                fontWeight: '900', 
                fontSize: '1.2rem', 
                letterSpacing: '4px', 
                alignItems: 'center', 
                gap: '15px' 
              }}
            >
              <Headset size={24} /> {t('bpo.hero.tag', 'BPO SERVICES')}
            </motion.div>

            <div style={{ position: 'relative', zIndex: 20, width: '100%', maxWidth: '1200px', padding: '40px clamp(15px, 5vw, 40px) 0', display: 'flex', justifyContent: 'flex-start' }}>
              <motion.div 
                style={{ 
                  maxWidth: '850px',
                  opacity: contentOpacity,
                  y: contentY
                }}
              >
                <h1 style={{ 
                  fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', 
                  fontWeight: '900', 
                  lineHeight: 1.1, 
                  marginBottom: '15px',
                  textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}>
                  {t('bpo.hero.title1', 'UN SOCIO ESTRATÉGICO')} <br />
                  <span className="gradient-text" style={{ fontSize: '0.9em' }}>{t('bpo.hero.title2', 'QUE ENTIENDE TU OPERACIÓN')}</span>
                </h1>

                <p style={{ 
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
                  color: 'rgba(255,255,255,0.7)', 
                  lineHeight: '1.7', 
                  marginBottom: '30px',
                  maxWidth: '650px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}>
                  {t('bpo.hero.desc', 'En F5 conocemos que las mejores operaciones comienzan escuchando. Analizamos tus necesidades, entendemos tus prioridades y diseñamos soluciones BPO a la medida.')}
                </p>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <motion.button 
                    style={{
                      padding: '14px 35px',
                      background: 'var(--color-secondary)',
                      border: 'none',
                      color: 'white',
                      borderRadius: '50px',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: '0 15px 35px rgba(255,140,0,0.3)'
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,140,0,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onNavigate('home');
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    {t('bpo.hero.btn', '¡Me Interesa!')} <ChevronRight size={22} />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ── Metodología Component (Floating Panels 2.0) ── */}
      <section style={{ padding: 'clamp(40px, 8vw, 100px) 0', position: 'relative', background: '#1a1a1f', overflow: 'hidden', zIndex: 10 }}>
        {/* Background Decorative Accents */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,140,0,0.03) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,86,179,0.03) 0%, transparent 70%)', zIndex: 0 }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            style={{ textAlign: 'center', marginBottom: 'clamp(60px, 10vw, 140px)' }}
            {...fadeInUp}
          >
            <div style={{ display: 'inline-flex', padding: '8px 20px', background: 'rgba(255,140,0,0.1)', borderRadius: '30px', border: '1px solid rgba(255,140,0,0.2)', color: 'var(--color-secondary)', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', marginBottom: '25px' }}>
              {t('bpo.process.tag', 'PROCESO ESTRATÉGICO')}
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', marginBottom: '30px', letterSpacing: '-2px', lineHeight: '1' }}>
              {t('bpo.process.title1', 'NUESTRA')} <span className="gradient-text">{t('bpo.process.title2', 'EXTENSIÓN')}</span> <br /> {t('bpo.process.title3', 'OPERATIVA')}
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.4)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              {t('bpo.process.desc', 'Diseñamos soluciones que trascienden la simple subcontratación. Somos el engranaje que potencia tu crecimiento con precisión quirúrgica.')}
            </p>
          </motion.div>

          <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Connecting Vertical Line */}
            <div 
              className="hide-mobile"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50px',
                bottom: '100px',
                width: '2px',
                background: 'linear-gradient(to bottom, transparent, var(--color-secondary) 10%, var(--color-accent) 50%, var(--color-primary) 90%, transparent)',
                opacity: 0.15,
                transform: 'translateX(-50%)',
                zIndex: 0
              }} />

            {[
              {
                id: '01',
                title: t('bpo.process.s1Title', 'Escucha Activa'),
                desc: t('bpo.process.s1Desc', 'Auditoría exhaustiva de tus flujos de trabajo para identificar los pilares de tu éxito.'),
                icon: <Headset />,
                color: 'var(--color-secondary)'
              },
              {
                id: '02',
                title: t('bpo.process.s2Title', 'Análisis Estratégico'),
                desc: t('bpo.process.s2Desc', 'Inteligencia de datos aplicada para transformar debilidades en ventajas competitivas.'),
                icon: <BarChart3 />,
                color: '#00b4ff'
              },
              {
                id: '03',
                title: t('bpo.process.s3Title', 'Implementación Ágil'),
                desc: t('bpo.process.s3Desc', 'Despliegue táctico de recursos con tecnología de punta y supervisión 24/7.'),
                icon: <Zap />,
                color: 'var(--color-primary)'
              },
              {
                id: '04',
                title: t('bpo.process.s4Title', 'Optimización PCL'),
                desc: t('bpo.process.s4Desc', 'Control de calidad basado en resultados reales y mejora continua perpetua.'),
                icon: <TrendingUp />,
                color: '#10b981'
              }
            ].map((step, index) => (
              <MethodologyStep 
                key={index} 
                {...step} 
                delay={index * 0.1} 
                isEven={index % 2 !== 0} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Modelo Operativo Section (Security Control Center) ── */}
      <section style={{ padding: 'clamp(60px, 10vw, 140px) 0', position: 'relative', zIndex: 10, background: '#1a1a1f', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="section-container">
          <motion.div 
            {...fadeInUp}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div style={{ display: 'inline-block', marginBottom: '20px', padding: '6px 15px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'monospace', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
              {t('bpo.model.tag', 'COMPLIANCE & SECURITY LAYERS')}
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', marginBottom: '25px', letterSpacing: '-1.5px' }}>
              {t('bpo.model.title1', 'NUESTRO')} <span className="gradient-text">{t('bpo.model.title2', 'MODELO OPERATIVO')}</span>
            </h2>
            <p style={{ maxWidth: '850px', margin: '0 auto', color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem', lineHeight: '1.8' }}>
              {t('bpo.model.desc', 'Implementamos protocolos de grado industrial para asegurar la integridad de tu información y la excelencia operativa constante.')}
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              { icon: <CheckCircle2 />, title: t('bpo.model.m1Title', "Consentimiento y Privacidad"), desc: t('bpo.model.m1Desc', "Gestión rigurosa de datos bajo estándares internacionales de protección.") },
              { icon: <Lock />, title: t('bpo.model.m2Title', "Acceso Restringido"), desc: t('bpo.model.m2Desc', "Doble factor de autenticación y control biométrico en todas nuestras capas.") },
              { icon: <Activity />, title: t('bpo.model.m3Title', "Monitoreo y Auditoría"), desc: t('bpo.model.m3Desc', "Supervisión proactiva en tiempo real con reportes de incidente automáticos.") },
              { icon: <Shield />, title: t('bpo.model.m4Title', "Respuesta a Incidentes"), desc: t('bpo.model.m4Desc', "Protocolos de acción inmediata para garantizar la continuidad del negocio.") },
              { icon: <Zap />, title: t('bpo.model.m5Title', "Integración Tecnológica"), desc: t('bpo.model.m5Desc', "Arquitectura robusta diseñada para un escalado sin interrupciones operativas.") },
              { icon: <Users />, title: t('bpo.model.m6Title', "Gestión de Talento"), desc: t('bpo.model.m6Desc', "Equipos certificados y en constante capacitación técnica y operativa.") }
            ].map((item, i) => (
              <OperationalCard key={i} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BPO Services Section (Global Support Hub 2.0) ── */}
      <section style={{ padding: '160px 0', background: 'radial-gradient(circle at 50% 50%, rgba(255,140,0,0.02) 0%, #1a1a1f 100%)', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <div className="bpo-services-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'center' }}>
            
            {/* Left Column: Mission Control */}
            <motion.div {...fadeInUp}>
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'inline-block', marginBottom: '20px', padding: '6px 15px', borderRadius: '10px', background: 'rgba(0,180,255,0.1)', border: '1px solid rgba(0,180,255,0.2)', fontFamily: 'monospace', fontSize: '0.8rem', color: '#00b4ff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  {t('bpo.services.tag', 'CORE OPERATIONS')}
                </div>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', marginBottom: '25px', letterSpacing: '-2px', lineHeight: 1 }}>
                  {t('bpo.services.title1', 'BPO')} <span className="gradient-text">{t('bpo.services.title2', 'SERVICES')}</span>
                </h2>
                <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.8', marginBottom: '40px' }}>
                  {t('bpo.services.desc', 'Diseñamos centros de mando operativos que integran talento bilingüe con tecnología de vanguardia para atención profesional 24/7.')}
                </p>
              </div>
              
              <div style={{ display: 'grid', gap: '10px' }}>
                {[
                  { icon: <Globe />, text: t('bpo.services.s1', "Agentes 100% Bilingües Certificados") },
                  { icon: <TrendingUp />, text: t('bpo.services.s2', "Infraestructura Escalable (10-300+ pos)") },
                  { icon: <UserCheck />, text: t('bpo.services.s3', "Liderazgo técnico dedicado por unidad") },
                  { icon: <BarChart3 />, text: t('bpo.services.s4', "Métricas y KPIs en tiempo real (SLA High-Tier)") }
                ].map((feature, i) => (
                  <ServiceNode key={i} {...feature} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Right Column: Visual Dashboard */}
            <div style={{ position: 'relative' }}>
              {/* Stats Overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{ 
                  position: 'absolute', 
                  top: '-40px', 
                  right: '25px', 
                  zIndex: 20,
                  display: 'flex',
                  gap: '15px'
                }}
              >
                <div style={{ background: 'rgba(26,26,31,0.85)', backdropFilter: 'blur(20px)', padding: '25px 35px', borderRadius: '25px', border: '1px solid rgba(255,140,0,0.4)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-secondary)', lineHeight: 1 }}>+300</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.5, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>{t('bpo.services.stat1', 'Posiciones Listas')}</div>
                </div>
              </motion.div>

              {/* Main Image Container (Enlarged) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="glass"
                style={{ padding: '20px', borderRadius: '40px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop" 
                  alt="BPO Control Center" 
                  width="800"
                  height="600"
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', borderRadius: '30px', display: 'block', opacity: 0.9, filter: 'grayscale(0.1)' }}
                />
                
                {/* Technical Overlays (Static only) */}
                <div style={{ position: 'absolute', inset: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: '35px', left: '35px', width: '50px', height: '50px', borderTop: '2px solid var(--color-secondary)', borderLeft: '2px solid var(--color-secondary)', opacity: 0.6 }} />
                <div style={{ position: 'absolute', bottom: '35px', right: '35px', width: '50px', height: '50px', borderBottom: '2px solid var(--color-secondary)', borderRight: '2px solid var(--color-secondary)', opacity: 0.6 }} />
              </motion.div>

              {/* Secondary Stat */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{ 
                  position: 'absolute', 
                  bottom: '-30px', 
                  left: '40px', 
                  background: 'rgba(5,5,5,0.92)', 
                  padding: '20px 30px', 
                  borderRadius: '20px', 
                  borderLeft: '4px solid #10b981',
                  zIndex: 20,
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                }}
              >
                <div style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '4px', letterSpacing: '1px' }}>{t('bpo.services.stat2Tag', 'ACCESO OPERATIVO')}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>24/7 <span style={{ color: '#10b981', fontSize: '0.9rem', verticalAlign: 'middle' }}>● {t('bpo.services.stat2Live', 'LIVE')}</span></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
