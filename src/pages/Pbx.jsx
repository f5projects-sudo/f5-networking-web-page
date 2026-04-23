import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  Phone, 
  Cloud, 
  Zap, 
  ShieldCheck, 
  Mic2, 
  Activity, 
  Settings, 
  MessageSquare, 
  Smartphone,
  LayoutGrid,
  ChevronRight,
  Database,
  Lock,
  Globe,
  Building2,
  Cpu,
  ShoppingCart,
  Headset,
  Rocket
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const FloatingNumbers = () => {
  const [numbers, setNumbers] = React.useState([]);

  React.useEffect(() => {
    const prefixes = ['+52', '+1', '+44', '+34', '+54', '+55', '+49', '+33', '+81', '+86'];
    const generateNumber = () => ({
      id: Math.random(),
      text: `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${Math.floor(100 + Math.random() * 900)} ${Math.floor(1000 + Math.random() * 9000)}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (1.2 - 0.7) + 0.7,
      duration: Math.random() * (20 - 12) + 12,
      delay: Math.random() * 5
    });

    setNumbers(Array.from({ length: 25 }, generateNumber));
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {numbers.map((num) => (
        <motion.div
          key={num.id}
          initial={{ opacity: 0, top: '100%' }}
          animate={{ 
            opacity: [0, 0.7, 0.7, 0], 
            top: '-10%' 
          }}
          transition={{ 
            duration: num.duration, 
            repeat: Infinity, 
            delay: num.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: `${num.x}%`,
            fontSize: `${num.size}rem`,
            fontWeight: '900',
            color: 'rgba(0, 212, 255, 0.8)',
            whiteSpace: 'nowrap',
            fontFamily: "'Courier New', Courier, monospace",
            letterSpacing: '2px',
            textShadow: '0 0 15px rgba(0, 212, 255, 0.5)',
            zIndex: 0
          }}
        >
          {num.text}
        </motion.div>
      ))}
    </div>
  );
};

const SMSDashboard = ({ t }) => {
  const [percent, setPercent] = React.useState(82.4);
  const [sentCount, setSentCount] = React.useState(12431);
  const [logs, setLogs] = React.useState([
    { id: 1, phone: '+52 55 *** 1234', status: 'Delivered', time: 'Just now' },
    { id: 2, phone: '+1 718 *** 5678', status: 'Delivered', time: '1s ago' },
    { id: 3, phone: '+44 20 *** 9012', status: 'Delivered', time: '2s ago' },
  ]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSentCount(prev => prev + Math.floor(Math.random() * 5) + 1);
      setPercent(prev => Math.min(prev + 0.05, 100));
      
      const newLog = {
        id: Date.now(),
        phone: `+${Math.floor(Math.random() * 99)} ${Math.floor(100 + Math.random() * 900)} *** ${Math.floor(1000 + Math.random() * 9000)}`,
        status: 'Delivered',
        time: 'Just now'
      };
      setLogs(prev => [newLog, ...prev.slice(0, 4)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      background: 'rgba(5, 15, 25, 0.6)', 
      borderRadius: '28px', 
      padding: 'clamp(20px, 5vw, 35px)', 
      border: '1px solid rgba(0, 212, 255, 0.15)', 
      backdropFilter: 'blur(20px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      width: '100%',
      maxWidth: '450px',
      margin: '0 auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: '900', color: 'var(--color-accent)', letterSpacing: '2px' }}>{t('pbx.sms.smsActive', 'CAMPAÑA ACTIVA')}</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} 
          />
          <span style={{ fontSize: '0.75rem', fontWeight: '900', color: '#10b981' }}>{t('pbx.sms.smsLive', 'LIVE')}</span>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.85rem' }}>
          <span style={{ opacity: 0.5, fontWeight: '700' }}>{t('pbx.sms.smsProgress', 'Progreso de Envío')}</span>
          <span style={{ fontWeight: '900', color: '#fff' }}>{percent.toFixed(1)}%</span>
        </div>
        <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '5px', overflow: 'hidden' }}>
          <motion.div 
            style={{ height: '100%', background: 'linear-gradient(90deg, #00d4ff, #10b981)', width: `${percent}%`, boxShadow: '0 0 15px rgba(0,212,255,0.5)' }}
            initial={{ width: '0%' }}
            animate={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(10px, 3vw, 20px)', marginBottom: '30px' }}>
        <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: '0.65rem', opacity: 0.4, marginBottom: '8px', fontWeight: '800' }}>{t('pbx.sms.smsSent', 'ENVIADOS')}</div>
          <div style={{ fontSize: '1.4rem', fontWeight: '900', fontFamily: 'monospace', color: '#fff' }}>{sentCount.toLocaleString()}</div>
        </div>
        <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: '0.65rem', opacity: 0.4, marginBottom: '8px', fontWeight: '800' }}>{t('pbx.sms.smsDelivered', 'ENTREGA')}</div>
          <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#10b981' }}>99.9%</div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '25px' }}>
        <div style={{ fontSize: '0.7rem', opacity: 0.3, marginBottom: '15px', fontWeight: '800', letterSpacing: '1px' }}>{t('pbx.sms.smsActivityTitle', 'LOG DE ACTIVIDAD')}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {logs.map(log => (
            <motion.div 
              key={log.id} 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontFamily: 'monospace', color: 'rgba(255,255,255,0.7)' }}
            >
              <span style={{ fontWeight: '700' }}>{log.phone}</span>
              <span style={{ color: '#10b981', fontWeight: '900' }}>{t('pbx.sms.smsStatusDelivered', 'DELIVERED')}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TiltCard = ({ children, style, spotlightColor = "rgba(255,255,255,0.07)", ...props }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-200, 200], [7, -7]);
  const rotateY = useTransform(springX, [-200, 200], [-7, 7]);

  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
    
    spotX.set(event.clientX - rect.left);
    spotY.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const spotlightBg = useTransform(
    [spotX, spotY],
    ([sx, sy]) => `radial-gradient(450px circle at ${sx}px ${sy}px, ${spotlightColor}, transparent 80%)`
  );

  const borderBg = useTransform(
    [spotX, spotY],
    ([sx, sy]) => `radial-gradient(250px circle at ${sx}px ${sy}px, rgba(255,255,255,0.3), transparent 70%)`
  );

  return (
    <motion.div
      style={{
        ...style,
        padding: '1px', // For the glowing border
        background: borderBg,
        position: 'relative',
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        overflow: 'hidden',
        border: 'none', // Override default border
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      {...props}
    >
      <div style={{
        background: 'rgba(10, 10, 10, 0.95)',
        borderRadius: 'inherit',
        height: '100%',
        width: '100%',
        padding: style.padding || '40px',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1
      }}>
        {/* Spotlight Layer */}
        <motion.div 
          style={{
            position: 'absolute',
            inset: 0,
            background: spotlightBg,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
        
        {/* Background Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: '20px 20px',
          zIndex: 0,
          opacity: 0.5,
          pointerEvents: 'none'
        }} />

        {/* Content wrapper */}
        <div style={{ transform: 'translateZ(40px)', zIndex: 1, position: 'relative', height: '100%' }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default function Pbx({ onNavigate }) {
  const { t } = useLanguage();
  // Ensure view starts at top
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeInUp = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: fadeInVariants
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="app">
      
      {/* Dynamic Background with Technical Accent */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(0, 86, 179, 0.08), transparent 50%), radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.05), transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Navbar onNavigate={onNavigate} activePage="pbx" />

      {/* ── Hero Section (PBX) ── */}
      <section style={{ 
        minHeight: '100dvh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative', 
        overflow: 'hidden', 
        zIndex: 10, 
        padding: 'clamp(160px, 20vw, 220px) 0 80px' 
      }}>
        {/* Background Hero Image */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: -1 
        }}>
          <img 
            src={`${import.meta.env.BASE_URL}pbx_corporate_hero.png`} 
            alt="Corporate PBX Solutions"
            width="1920"
            height="1080"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              filter: 'brightness(0.6)'
            }}
          />
          {/* Gradients for better text contrast */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(to right, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.7) 40%, transparent 100%)' 
          }} />
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            width: '100%', 
            height: '40%', 
            background: 'linear-gradient(to top, rgba(5,5,5,1) 0%, transparent 100%)' 
          }} />
        </div>

        <div className="section-container" style={{ position: 'relative', zIndex: 20 }}>
          <div style={{ maxWidth: '850px' }}>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div 
                variants={fadeInVariants}
                style={{ 
                  display: 'inline-flex', 
                  padding: '8px 20px', 
                  background: 'rgba(0,86,179,0.2)', 
                  backdropFilter: 'blur(10px)',
                  borderRadius: '30px', 
                  border: '1px solid rgba(0,212,255,0.3)', 
                  marginBottom: '35px', 
                  color: 'var(--color-accent)', 
                  fontWeight: 'bold', 
                  fontSize: '0.9rem', 
                  letterSpacing: '2px', 
                  alignItems: 'center', 
                  gap: '10px' 
                }}
              >
                <Cloud size={18} /> {t('pbx.hero.tag', 'CLOUD COMMUNICATIONS')}
              </motion.div>
              
              <motion.h1 
                variants={fadeInVariants}
                style={{ 
                  fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
                  fontWeight: '900', 
                  lineHeight: 1.1, 
                  marginBottom: '30px',
                  textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}
              >
                {t('pbx.hero.title1', 'POWERFUL')} <br />
                <span className="gradient-text">{t('pbx.hero.title2', 'PBX SOLUTIONS')}</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInVariants}
                style={{ 
                  fontSize: '1.3rem', 
                  color: '#e0e0e0', 
                  lineHeight: '1.8', 
                  marginBottom: '50px',
                  maxWidth: '700px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}
              >
                {t('pbx.hero.desc', 'Nuestro PBX es una solución de telefonía empresarial en la nube que permite gestionar, centralizar y optimizar las comunicaciones de tu empresa desde una sola plataforma. Ofrece llamadas de alta calidad, estabilidad y seguridad.')}
              </motion.p>

              <motion.div 
                variants={fadeInVariants}
                style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}
              >
                <motion.button 
                  style={{
                    padding: '18px 45px',
                    background: 'var(--color-primary)',
                    border: 'none',
                    color: 'white',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 15px 35px rgba(0,86,179,0.4)'
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,86,179,0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  {t('pbx.hero.btn', 'Discover More')} <ChevronRight size={22} />
                </motion.button>

                {/* Floating Micro-specs */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  {[
                    { icon: <ShieldCheck size={20} />, text: t('pbx.hero.spec1', "Secure SIP") },
                    { icon: <Activity size={20} />, text: t('pbx.hero.spec2', "99.9% Uptime") }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: '500' }}>
                      <span style={{ color: 'var(--color-accent)' }}>{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Infrastructure Section ── */}
      <section style={{ padding: '100px 0', background: 'rgba(26,26,31,0.5)', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <TiltCard 
              style={{ 
                padding: '50px 40px', 
                borderRadius: '32px', 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer'
              }}
              spotlightColor="rgba(255,153,0,0.12)"
              {...fadeInUp}
            >
              <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" width="100" height="40" loading="lazy" style={{ height: '40px', filter: 'brightness(1.5)' }} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '20px', textAlign: 'center', letterSpacing: '-0.5px' }}>{t('pbx.infrastructure.awsTitle', 'Infraestructura AWS')}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'center' }}>
                {t('pbx.infrastructure.awsDesc', 'Nube de alta fiabilidad para una escalabilidad masiva y latencia mínima.')}
              </p>
            </TiltCard>

            <TiltCard 
              style={{ 
                padding: '50px 40px', 
                borderRadius: '32px', 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer'
              }}
              spotlightColor="rgba(29,185,84,0.12)"
              {...fadeInUp}
            >
              <div style={{ color: '#1db954', marginBottom: '30px', display: 'flex', justifyContent: 'center' }}><ShieldCheck size={55} strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '20px', textAlign: 'center', letterSpacing: '-0.5px' }}>{t('pbx.infrastructure.securityTitle', 'Seguridad de Clase Empresarial')}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'center' }}>
                {t('pbx.infrastructure.securityDesc', 'Monitorización 24/7 y encriptación de extremo a extremo en cada llamada.')}
              </p>
            </TiltCard>

            <TiltCard 
              style={{ 
                padding: '50px 40px', 
                borderRadius: '32px', 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer'
              }}
              spotlightColor="rgba(242, 47, 70, 0.12)"
              {...fadeInUp}
            >
              <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" alt="Twilio" width="100" height="35" loading="lazy" style={{ height: '35px' }} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '20px', textAlign: 'center', letterSpacing: '-0.5px' }}>{t('pbx.infrastructure.twilioTitle', 'Comunicaciones Twilio')}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'center' }}>
                {t('pbx.infrastructure.twilioDesc', 'Conectividad global ininterrumpida a través de la red más confiable del mundo.')}
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ── Features List ── */}
      <section style={{ padding: '120px 0', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <motion.div 
            {...fadeInUp}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
              {t('pbx.features.title1', 'Estabilidad que impulsa')} <span className="gradient-text">{t('pbx.features.title2', 'tu negocio')}</span>
            </h2>
            <div style={{ width: '100px', height: '4px', background: 'var(--color-primary)', margin: '0 auto 30px' }}></div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {[
              { icon: <Mic2 size={35} strokeWidth={1.5} />, title: t('pbx.features.f1Title', "Audio Superior"), desc: t('pbx.features.f1Desc', "Llamadas con claridad HD cristalina y latencia casi nula.") },
              { icon: <Activity size={35} strokeWidth={1.5} />, title: t('pbx.features.f2Title', "99.9% Uptime"), desc: t('pbx.features.f2Desc', "Sistemas redundantes para una operación que nunca se detiene.") },
              { icon: <Lock size={35} strokeWidth={1.5} />, title: t('pbx.features.f3Title', "Cifrado SSL/SIP"), desc: t('pbx.features.f3Desc', "Seguridad bancaria en todas tus líneas telefónicas.") }
            ].map((feature, i) => (
              <TiltCard 
                key={i}
                style={{ 
                  padding: '50px 40px', 
                  borderRadius: '32px', 
                  background: 'rgba(255,255,255,0.01)', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer'
                }}
                spotlightColor="rgba(0,212,255,0.15)"
                {...fadeInUp}
              >
                <div style={{ color: 'var(--color-accent)', marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '15px', color: '#fff', textAlign: 'center', letterSpacing: '-0.5px' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', textAlign: 'center', fontSize: '1rem' }}>{feature.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── DID'S Section ── */}
      <section style={{ padding: '120px 0', background: '#1a1a1f', position: 'relative', overflow: 'hidden' }}>
        <FloatingNumbers />
        {/* Transparent overlay to ensure background is behind but content is visible */}
        <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(0,180,255,0.1)', borderRadius: '30px', marginBottom: '25px', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '1px' }}>
                {t('pbx.dids.tag', 'IDENTIDAD TELEFÓNICA')}
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 'bold', marginBottom: '25px', wordBreak: 'break-word', lineHeight: 1.1 }}>
                {t('pbx.dids.title1', 'DIDS: Conexión')} <br />
                <span className="gradient-text">{t('pbx.dids.title2', 'Sin Fronteras')}</span>
              </h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '35px' }}>
                {t('pbx.dids.desc', 'DIDs es una solución diseñada para conectar empresas con sus clientes de manera simple, profesional y escalable. Permite asignar números directos a diferentes áreas o usuarios.')}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {[
                  t('pbx.dids.tags.t1', 'Directo'), 
                  t('pbx.dids.tags.t2', 'Escalable'), 
                  t('pbx.dids.tags.t3', 'Profesional'), 
                  t('pbx.dids.tags.t4', 'Organizado')
                ].map((tag, i) => (
                  <span key={i} style={{ padding: '6px 15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px' }}
            >
              {[
                { icon: <Headset size={30} />, label: t('pbx.dids.segments.s1', "Call Centers") },
                { icon: <Cpu size={30} />, label: t('pbx.dids.segments.s2', "Tech Companies") },
                { icon: <ShoppingCart size={30} />, label: t('pbx.dids.segments.s3', "E-Commerce") },
                { icon: <Building2 size={30} />, label: t('pbx.dids.segments.s4', "Support") },
                { icon: <Rocket size={30} />, label: t('pbx.dids.segments.s5', "Startups") }
              ].map((segment, i) => (
                <TiltCard
                  key={i}
                  variants={fadeInUp}
                  style={{ 
                    padding: '25px', 
                    borderRadius: '24px', 
                    textAlign: 'center', 
                    cursor: 'pointer' 
                  }}
                  spotlightColor="rgba(0,180,255,0.15)"
                >
                  <div style={{ color: 'var(--color-accent)', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{segment.icon}</div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#fff' }}>{segment.label}</div>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SMS Section ── */}
      <section style={{ padding: 'clamp(60px, 12vw, 120px) 0', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <TiltCard 
            className="cta-glass-card"
            style={{ 
              padding: 'clamp(30px, 8vw, 60px)', 
              borderRadius: '40px', 
              background: 'rgba(255,255,255,0.01)',
              border: 'none'
            }}
            spotlightColor="rgba(0,212,255,0.12)"
            {...fadeInUp}
          >
            <div 
              className="pbx-sms-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(30px, 6vw, 60px)', alignItems: 'center' }}>
              <div>
                <div style={{ color: 'var(--color-accent)', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <MessageSquare size={50} strokeWidth={1.5} />
                  <div style={{ height: '30px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" alt="Twilio" width="80" height="25" loading="lazy" style={{ height: '25px', opacity: 0.8 }} />
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: '900', marginBottom: '30px', letterSpacing: '-2px', lineHeight: 1.1, wordBreak: 'break-word' }}>
                  {t('pbx.sms.title1', 'SMS: CONEXIÓN')} <span className="gradient-text">{t('pbx.sms.title2', 'DIRECTA')}</span>
                </h2>
                <p style={{ maxWidth: '600px', marginBottom: '40px', fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>
                  {t('pbx.sms.desc1', 'Brindamos un servicio de SMS seguro, estable y fácil de integrar, impulsado por ')}
                  <span style={{ color: '#fff' }}>Twilio</span>
                  {t('pbx.sms.desc2', '. Ayudamos a las empresas a comunicarse con sus clientes de manera eficiente mediante campañas masivas y notificaciones críticas.')}
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', maxWidth: '500px' }}>
                  {[
                    { icon: <Zap size={20} />, label: t('pbx.sms.f1', "Entrega Inmediata") },
                    { icon: <ShieldCheck size={20} />, label: t('pbx.sms.f2', "Seguridad 2FA") },
                    { icon: <Smartphone size={20} />, label: t('pbx.sms.f3', "API Global") },
                    { icon: <Rocket size={20} />, label: t('pbx.sms.f4', "Escalabilidad") }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                      <div style={{ color: 'var(--color-accent)' }}>{item.icon}</div>
                      <span style={{ fontWeight: '600' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <SMSDashboard t={t} />
              </motion.div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
