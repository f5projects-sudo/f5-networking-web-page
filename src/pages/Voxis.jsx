import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Mic, 
  Calendar, 
  TrendingUp, 
  Bot, 
  Zap, 
  Shield, 
  Activity,
  Phone,
  MessageSquare,
  Clock,
  Heart,
  Home,
  Hotel,
  GraduationCap,
  Store,
  Briefcase,
  ChevronRight,
  Headset
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const VoiceWave = () => {
  const heights = React.useMemo(() => [...Array(20)].map(() => Math.random() * 80 + 20), []);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '100px' }}>
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="hardware-accelerated"
          animate={{ 
            height: [20, h, 20],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: i * 0.05,
            ease: "easeInOut" 
          }}
          style={{ 
            width: '6px', 
            background: 'linear-gradient(to top, var(--color-primary), var(--color-accent))',
            borderRadius: '10px'
          }}
        />
      ))}
    </div>
  );
};

const CapacityCard = ({ icon, title, desc, result, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass"
      style={{
        padding: 'clamp(25px, 8vw, 50px)',
        borderRadius: '35px',
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }}
    >
      <div style={{ 
        width: '70px', 
        height: '70px', 
        background: 'rgba(0,180,255,0.1)', 
        borderRadius: '20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--color-accent)',
        marginBottom: '35px',
        border: '1px solid rgba(0,180,255,0.2)',
        boxShadow: '0 15px 30px -10px rgba(0,180,255,0.3)'
      }}>
        {React.cloneElement(icon, { size: 34 })}
      </div>

      <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px', color: 'white' }}>{title}</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
        {desc.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem' }}>
            <Zap size={16} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ 
        paddingTop: '25px', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'var(--color-secondary)',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Activity size={20} />
        {result}
      </div>

      {/* Decorative pulse */}
      <motion.div 
        className="hardware-accelerated"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          zIndex: -1
        }}
      />
    </motion.div>
  );
};

const IndustryTag = ({ icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05, background: 'rgba(0,180,255,0.15)' }}
    style={{
      padding: '20px 30px',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: 'rgba(255,255,255,0.8)',
      cursor: 'default'
    }}
  >
    <div style={{ color: 'var(--color-accent)' }}>{icon}</div>
    {text}
  </motion.div>
);

export default function Voxis({ onNavigate }) {
  const { t } = useLanguage();
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const handleOpenDemo = () => {
    const widget = document.getElementById('elevenlabs-widget');
    if (widget && widget.shadowRoot) {
      // Intenta encontrar el botón dentro del shadow DOM y hacer clic
      const button = widget.shadowRoot.querySelector('button');
      if (button) {
        button.click();
      }
    } else if (widget) {
      // Alternativa si no hay shadowRoot expuesto o el método es directo
      widget.click();
    }
  };

  return (
    <div className="app">
      
      {/* Background Neural Network Simulation */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 180, 255, 0.05), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 140, 0, 0.03), transparent 40%)',
        zIndex: 0 
      }} />

      <Navbar onNavigate={onNavigate} activePage="voxis" />

      {/* ── Hero Section ── */}
      <section style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10, paddingTop: 'clamp(160px, 20vh, 200px)', paddingBottom: '100px', paddingLeft: '20px', paddingRight: '20px' }}>
        <motion.div 
          style={{ textAlign: 'center', scale, opacity, width: '100%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{ 
              display: 'inline-flex', 
              padding: '10px 25px', 
              background: 'rgba(0,180,255,0.1)', 
              borderRadius: '30px', 
              border: '1px solid rgba(0,180,255,0.3)', 
              color: 'var(--color-accent)', 
              fontSize: '0.9rem', 
              fontWeight: '800', 
              letterSpacing: '3px', 
              marginBottom: 'clamp(15px, 3vh, 30px)',
              textTransform: 'uppercase'
            }}
          >
            {t('voxis.hero.tag', 'Conversational AI Core')}
          </motion.div>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 15vw, 9rem)', 
            fontWeight: '900', 
            lineHeight: 1.2, 
            marginBottom: 'clamp(10px, 2vh, 20px)', 
            letterSpacing: 'clamp(-2px, -0.5vw, 0px)',
            padding: '5px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline'
          }}>
            VØ<span className="gradient-text" style={{ paddingRight: '0.05em' }}>XIS</span>
          </h1>
          
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 2rem)', fontWeight: '500', color: 'rgba(255,255,255,0.6)', maxWidth: '800px', margin: '0 auto clamp(20px, 4vh, 40px)', lineHeight: 1.3 }}>
            {t('voxis.hero.desc', 'La voz inteligente que trabaja por tu empresa')}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(25px, 5vh, 50px)', transform: 'scale(0.8)' }}>
            <VoiceWave />
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <motion.button 
               style={{ padding: '15px 40px', fontSize: '1.2rem', border: '1px solid var(--color-primary)', borderRadius: '50px', background: 'transparent', color: 'white', cursor: 'pointer', transition: 'all 0.3s' }}
               whileHover={{ backgroundColor: 'rgba(0,180,255,0.1)' }}
               whileTap={{ scale: 0.95 }}
               onClick={handleOpenDemo}
             >
               {t('voxis.hero.btn', 'Probar Demo')}
             </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', opacity: 0.3 }}
        >
          <div style={{ width: '30px', height: '50px', border: '2px solid white', borderRadius: '15px', display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <div style={{ width: '4px', height: '8px', background: 'white', borderRadius: '2px' }} />
          </div>
        </motion.div>
      </section>

      {/* ── Intro Section: Neural Nexus (Reinvented ¿Qué es Voxis?) ── */}
      <section style={{ padding: '160px 0', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-accent)', letterSpacing: '8px', marginBottom: '20px', textTransform: 'uppercase' }}>
              {t('voxis.nexus.tag', 'Arquitectura Cognitiva')}
            </h2>
            <h3 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: '900', letterSpacing: '-3px', lineHeight: 1 }}>
              {t('voxis.nexus.title1', 'EL')} <span className="gradient-text">{t('voxis.nexus.title2', 'NÚCLEO')}</span> {t('voxis.nexus.title3', 'DE VØXIS')}
            </h3>
          </motion.div>

          <div 
            className="voxis-cognitive-grid"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'minmax(300px, 0.8fr) 1.5fr minmax(300px, 0.8fr)', 
              gap: '40px', 
              alignItems: 'center',
              position: 'relative'
            }}>
            
            {/* Left HUD: Intent Analysis */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '30px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', height: 'fit-content' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', opacity: 0.8 }}>
                <Activity size={18} color="var(--color-accent)" />
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', fontFamily: 'monospace', letterSpacing: '2px' }}>{t('voxis.nexus.hud1Title', 'INTENT_SCANNER v4')}</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { label: t('voxis.nexus.lbl1', "CONFIDENCE"), value: "99.8%", color: "var(--color-primary)" },
                  { label: t('voxis.nexus.lbl2', "SEMANTIC_MATCH"), value: t('voxis.nexus.val2', "HIGH"), color: "var(--color-accent)" },
                  { label: t('voxis.nexus.lbl3', "LATENCY"), value: "118ms", color: "#4ade80" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
                      <span>{stat.label}</span>
                      <span>{stat.value}</span>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        style={{ height: '100%', background: stat.color }}
                      />
                    </div>
                  </div>
                ))}
            </div>

              <div style={{ marginTop: '30px', padding: '15px', background: 'rgba(0,0,0,0.3)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                  {t('voxis.nexus.hud1Desc', 'VØXIS entiende la intención detrás de cada palabra, permitiendo respuestas precisas y ejecución de tareas complejas en segundos.')}
                </p>
              </div>
            </motion.div>

            {/* Central Neural Nexus Core */}
            <div 
              className="voxis-core-container"
              style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Pulsing Spheres and Rings */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ position: 'absolute', width: '450px', height: '450px', border: '1px solid rgba(0, 180, 255, 0.1)', borderRadius: '50%' }}
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', width: '380px', height: '380px', border: '1px dashed rgba(255, 255, 255, 0.05)', borderRadius: '50%' }}
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', width: '300px', height: '300px', border: '2px solid rgba(255, 140, 0, 0.05)', borderRadius: '50%' }}
              />

              {/* Central Core Element */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass"
                style={{ 
                  zIndex: 5, 
                  width: '240px', 
                  height: '240px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(0, 180, 255, 0.05)',
                  boxShadow: '0 0 80px rgba(0, 180, 255, 0.15)',
                  cursor: 'pointer'
                }}
              >
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Bot size={70} color="var(--color-accent)" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 180, 255, 0.5))' }} />
                </motion.div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1rem', fontWeight: '900', letterSpacing: '2px' }}>{t('voxis.nexus.core', 'CORE_VØXIS')}</div>
                  <div style={{ fontSize: '0.6rem', color: '#4ade80', fontWeight: 'bold', fontFamily: 'monospace' }}>{t('voxis.nexus.status', '● ACTIVE_REASONING')}</div>
                </div>
              </motion.div>

              {/* Data Floating Nodes */}
              {[
                { icon: <Mic />, label: t('voxis.nexus.n1', "LISTEN"), color: "var(--color-primary)", top: "10%", left: "15%" },
                { icon: <MessageSquare />, label: t('voxis.nexus.n2', "THINK"), color: "var(--color-accent)", top: "15%", right: "10%" },
                { icon: <Zap />, label: t('voxis.nexus.n3', "ACT"), color: "var(--color-secondary)", bottom: "15%", left: "10%" },
                { icon: <Shield />, label: t('voxis.nexus.n4', "SECURE"), color: "white", bottom: "10%", right: "20%" }
              ].map((node, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{ 
                    position: 'absolute', 
                    top: node.top, 
                    bottom: node.bottom, 
                    left: node.left, 
                    right: node.right,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    background: 'rgba(0,0,0,0.4)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: `1px solid ${node.color}55`,
                    color: node.color,
                    boxShadow: `0 0 20px ${node.color}22`
                  }}>
                    {React.cloneElement(node.icon, { size: 22 })}
                  </div>
                  <span style={{ fontSize: '0.6rem', fontWeight: '900', letterSpacing: '2px', opacity: 0.6 }}>{node.label}</span>
                </motion.div>
              ))}

              {/* Connections (Visual SVG) */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', opacity: 0.15 }}>
                <line x1="15%" y1="15%" x2="50%" y2="50%" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="85%" y1="20%" x2="50%" y2="50%" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="15%" y1="80%" x2="50%" y2="50%" stroke="var(--color-secondary)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="80%" y1="85%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              </svg>
            </div>

            {/* Right HUD: Sentiment & Advantage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '30px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', height: 'fit-content' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', opacity: 0.8 }}>
                <Headset size={18} color="var(--color-secondary)" />
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', fontFamily: 'monospace', letterSpacing: '2px' }}>{t('voxis.nexus.hud2Title', 'HUMAN_LIKE_XP v2')}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  t('voxis.nexus.h1', "Conversación sin 'robots' torpes"),
                  t('voxis.nexus.h2', "Escalabilidad 24/7 sin esperas"),
                  t('voxis.nexus.h3', "0% llamadas perdidas"),
                  t('voxis.nexus.h4', "IA con empatía real")
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      background: 'var(--color-secondary)',
                      boxShadow: '0 0 10px var(--color-secondary)'
                    }} />
                    <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>{point}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '35px', textAlign: 'center', padding: '20px', background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.05), transparent)', borderRadius: '20px', border: '1px solid rgba(255,140,0,0.1)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-secondary)', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '5px' }}>{t('voxis.nexus.opState', 'ESTADO DE OPERACIÓN')}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'white' }}>{t('voxis.nexus.infalible', 'INFALIBLE')}</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Capabilities Section: Qué hace ── */}
      <section style={{ padding: '140px 0', background: 'rgba(255,255,255,0.01)', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '25px', letterSpacing: '-2px' }}>
              {t('voxis.cap.title1', 'REDEFINE TU')} <span className="gradient-text">{t('voxis.cap.title2', 'ALCANCE')}</span>
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.4)', maxWidth: '700px', margin: '0 auto' }}>
              {t('voxis.cap.desc', 'Automatización de voz que no solo responde, sino que ejecuta acciones estratégicas para tu negocio.')}
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            <CapacityCard 
              index={0}
              icon={<Phone />}
              title={t('voxis.cap.c1Title', "Atención Automática")}
              desc={[
                t('voxis.cap.c1_1', "Responde en segundos"),
                t('voxis.cap.c1_2', "Entiende preguntas reales"),
                t('voxis.cap.c1_3', "Da respuestas claras"),
                t('voxis.cap.c1_4', "Escala solo cuando hace falta")
              ]}
              result={t('voxis.cap.c1Res', "Resultado: ningún cliente se queda sin atención.")}
            />
            <CapacityCard 
              index={1}
              icon={<Calendar />}
              title={t('voxis.cap.c2Title', "Agendamiento Inteligente")}
              desc={[
                t('voxis.cap.c2_1', "Reserva, confirma y reprograma"),
                t('voxis.cap.c2_2', "Integración con calendarios y CRM"),
                t('voxis.cap.c2_3', "Sincronización bidireccional"),
                t('voxis.cap.c2_4', "Recordatorios automáticos")
              ]}
              result={t('voxis.cap.c2Res', "Resultado: más citas confirmadas, menos caos.")}
            />
            <CapacityCard 
              index={2}
              icon={<TrendingUp />}
              title={t('voxis.cap.c3Title', "Calificación & Ventas")}
              desc={[
                t('voxis.cap.c3_1', "Llama leads automáticamente"),
                t('voxis.cap.c3_2', "Detecta intención de compra"),
                t('voxis.cap.c3_3', "Entrega oportunidades listas"),
                t('voxis.cap.c3_4', "Cierre de ventas guiado")
              ]}
              result={t('voxis.cap.c3Res', "Resultado: tu equipo vende, no persigue.")}
            />
          </div>
        </div>
      </section>

      {/* ── Industries Section: Para quién es ── */}
      <section style={{ padding: 'clamp(80px, 15vw, 160px) 0', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'center' }}>
            <motion.div {...fadeInUp}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '30px', letterSpacing: '-2px' }}>
                {t('voxis.industry.title', 'PARA QUIÉN ES')} <br /> <span className="gradient-text">VØXIS</span>
              </h2>
              <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.8', marginBottom: '40px' }}>
                {t('voxis.industry.desc', 'VØXIS funciona donde la voz importa. Si tu negocio recibe llamadas y busca eficiencia sin sacrificar la calidad humana, VØXIS es tu aliado perfecto.')}
              </p>
              <motion.button 
                style={{
                  padding: '14px 35px',
                  background: 'var(--color-primary)',
                  border: 'none',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 15px 35px rgba(0,86,179,0.3)',
                  transition: 'box-shadow 0.3s'
                }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', boxShadow: '0 0 40px rgba(0,86,179,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                {t('voxis.industry.btn', 'Solicitar Diagnóstico')} <ChevronRight size={22} />
              </motion.button>
            </motion.div>

            <div 
              className="industry-tags-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <IndustryTag icon={<Heart size={24} />} text={t('voxis.industry.i1', "Clínicas y Salud")} />
              <IndustryTag icon={<Home size={24} />} text={t('voxis.industry.i2', "Inmobiliarias")} />
              <IndustryTag icon={<Hotel size={24} />} text={t('voxis.industry.i3', "Hotelería y Reservas")} />
              <IndustryTag icon={<GraduationCap size={24} />} text={t('voxis.industry.i4', "Educación")} />
              <IndustryTag icon={<Store size={24} />} text={t('voxis.industry.i5', "E-commerce")} />
              <IndustryTag icon={<Briefcase size={24} />} text={t('voxis.industry.i6', "Empresas de Servicios")} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
