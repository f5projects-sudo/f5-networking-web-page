import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Network, Cpu, Shield, Zap, Info, Server, Settings, Tag, LayoutDashboard, ShieldCheck } from 'lucide-react';
import DecryptedText from '../components/DecryptedText';
import ScrambledText from '../components/ScrambledText';
import DataCenterFloorPlan from '../components/DataCenterFloorPlan';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ConnectivityBackground = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0, opacity: 0.4 }}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[...Array(15)].map((_, i) => (
        <motion.circle
          key={i}
          r={Math.random() * 2 + 1}
          fill="url(#nodeGradient)"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            opacity: 0.2
          }}
          animate={{ 
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ 
            duration: Math.random() * 20 + 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      ))}
    </svg>
  </div>
);

export default function Cableado({ onNavigate }) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "30%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.3, isMobile ? 0.3 : 0]);

  // Asegurar que la vista inicie arriba
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggeredContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
          backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(255, 140, 0, 0.08), transparent 50%), radial-gradient(circle at 90% 90%, rgba(0, 86, 179, 0.08), transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Navbar onNavigate={onNavigate} activePage="cableado" />

      {/* ── Hero Section ── */}
      <section ref={containerRef} style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10, padding: 'clamp(160px, 20vh, 220px) 20px 80px' }}>
        <ConnectivityBackground />
        <motion.div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${import.meta.env.BASE_URL}cableado_hero.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
          opacity: backgroundOpacity,
          zIndex: -1
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.7), #050505)',
          zIndex: -1
        }} />

        <div className="section-container" style={{ width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(30px, 8vw, 60px)', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(255,140,0,0.1)', borderRadius: '30px', border: '1px solid rgba(255,140,0,0.2)', marginBottom: '20px', color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '2px', alignItems: 'center', gap: '8px' }}>
                <Network size={16} /> INFRAESTRUCTURA DE RED
              </div>
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', color: 'white', lineHeight: 1.1, marginBottom: '0px' }}>
                <ScrambledText 
                  className="gradient-text-secondary" 
                  style={{ margin: '0', padding: '0', display: 'block' }}
                  speed={0.1}
                >
                  Cableado
                </ScrambledText>
                <ScrambledText 
                  style={{ margin: '0', padding: '0', display: 'block' }}
                  speed={0.1}
                >
                  Estructurado
                </ScrambledText>
              </h1>

              <div style={{ marginTop: '30px' }}>
                <ScrambledText 
                  style={{ 
                    fontSize: 'clamp(1rem, 3vw, 1.25rem)', 
                    color: 'var(--color-text-muted)', 
                    lineHeight: '1.7', 
                    margin: '0', 
                    maxWidth: '90%',
                    fontFamily: 'inherit',
                    display: 'block'
                  }}
                  speed={0.05}
                >
                  Diseñamos e instalamos infraestructuras de red eficientes, ordenadas y escalables. Analizamos tu espacio y tus necesidades actuales para construir el futuro de tu conectividad.
                </ScrambledText>
              </div>

              <motion.button 
                className="btn-neon-secondary"
                style={{
                  marginTop: '40px',
                  padding: '16px 40px',
                  background: 'transparent',
                  border: '1px solid var(--color-secondary)',
                  color: 'white',
                  borderRadius: '14px',
                  fontWeight: '800',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,140,0,0.4)', backgroundColor: 'rgba(255,140,0,0.05)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Más Información <Info size={18} />
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="glass"
              style={{ padding: 'clamp(10px, 3vw, 20px)', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', inset: -1, background: 'linear-gradient(45deg, var(--color-secondary), transparent)', borderRadius: '32px', zIndex: -1, opacity: 0.2 }} />
              <img 
                src={`${import.meta.env.BASE_URL}cableado_hero.png`} 
                alt="Infraestructura de Red" 
                width="1920"
                height="1080"
                loading="lazy"
                style={{ width: '100%', borderRadius: '24px', display: 'block', boxShadow: '0 25px 50px rgba(0,0,0,0.7)' }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Maqueta Interactiva Section ── */}
      <section className="cableado-floor-plan-section" style={{ position: 'relative', zIndex: 10, padding: '60px 0' }}>
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <h3 style={{ color: 'var(--color-secondary)', fontSize: '1rem', letterSpacing: '4px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px' }}>SISTEMA INTERACTIVO</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', maxWidth: '600px', margin: '0 auto' }}>Visualización inyectada de Servidores y Redes LAN. (Explora desplazándote lateralmente)</p>
          </motion.div>
        </div>
        
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Scroll Hint Overlay (Visible only on mobile/tablet until scroll) */}
          <motion.div 
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            style={{ 
              position: 'absolute', 
              right: 0, 
              top: 0, 
              bottom: 20, 
              width: '100px', 
              background: 'linear-gradient(to left, #050505, transparent)', 
              zIndex: 5, 
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: '20px'
            }}
            className="hide-desktop-flex"
          >
            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ color: 'var(--color-secondary)', opacity: 0.6 }}
            >
              <ChevronDown size={30} style={{ transform: 'rotate(-90deg)' }} />
            </motion.div>
          </motion.div>

          <div 
            style={{ 
              width: '100%', 
              overflowX: 'visible', 
              paddingBottom: '20px', 
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <DataCenterFloorPlan />
          </div>
        </div>
      </section>

      {/* ── Rack Organization Section ── */}
      <section className="section-container" style={{ padding: '100px 0', position: 'relative', zIndex: 10 }}>
        <motion.div 
          {...fadeInUp}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 70px)' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: 'white', marginBottom: '25px', fontWeight: 'bold' }}>
            Organizamos y montamos racks de forma <span className="gradient-text-secondary">clara y funcional</span>
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--color-secondary), transparent)', margin: '0 auto' }}></div>
        </motion.div>

        <motion.div 
          variants={staggeredContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(20px, 4vw, 30px)' }}
        >
          {[
            { icon: <Network size={32} />, title: "Switches de red", desc: "Instalación, configuración y optimización de switches de alta capacidad para flujos constantes." },
            { icon: <ShieldCheck size={32} />, title: "Seguridad con Fortinet", desc: "Implementación de firewalls y soluciones de seguridad perimetral líderes en el mercado mundial." },
            { icon: <Server size={32} />, title: "Charola tipo charofil", desc: "Canalización profesional, aérea y organizada para la máxima protección física de tu fibra y cobre." },
            { icon: <Settings size={32} />, title: "Patch Panels", desc: "Terminación técnica de precisión y administración eficiente de todos los puntos críticos de red." },
            { icon: <LayoutDashboard size={32} />, title: "Gestión Profesional", desc: "Organización exhaustiva horizontal y vertical diseñada para mantenimientos sin interrupciones." },
            { icon: <Tag size={32} />, title: "Sistemas de Etiquetado", desc: "Identificación lógica rigurosa bajo normas internacionales para un diagnóstico veloz." }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="glass"
              style={{ 
                padding: 'clamp(25px, 5vw, 40px)', 
                borderRadius: '28px', 
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)'
              }}
              whileHover={{ 
                y: -12,
                borderColor: 'rgba(255, 140, 0, 0.4)',
                backgroundColor: 'rgba(255, 140, 0, 0.04)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }}
            >
              <div style={{ 
                color: 'var(--color-secondary)', 
                background: 'rgba(255,140,0,0.12)',
                width: '64px',
                height: '64px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
                position: 'relative',
                zIndex: 1,
                border: '1px solid rgba(255,140,0,0.2)'
              }}>
                {item.icon}
              </div>
              
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '800', position: 'relative', zIndex: 1, letterSpacing: '-0.5px' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '1rem', position: 'relative', zIndex: 1 }}>{item.desc}</p>
              
              <div style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '4px',
                background: 'linear-gradient(90deg, var(--color-secondary), var(--color-primary))',
                transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }} className="hover-line" />
            </motion.div>
          ))}
        </motion.div>
        
        <style>{`
          .glass:hover .hover-line {
            width: 100%;
          }
        `}</style>
      </section>

      {/* ── Core Value Section ── */}
      <section className="section-container" style={{ padding: '100px 0', position: 'relative', zIndex: 10, overflow: 'hidden' }}>
        <ConnectivityBackground />
        <motion.div 
          {...fadeInUp}
          style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto clamp(40px, 8vw, 80px)' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: 'white', marginBottom: '25px', fontWeight: 'bold' }}>
            Tu red no solo funciona hoy, <span style={{ color: 'var(--color-secondary)' }}>crece contigo</span>.
          </h2>
          <p style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            Desarrollamos una infraestructura sólida y preparada para el futuro, ideal para empresas que no pueden darse el lujo de fallar. Si tu negocio depende de la red, estás en el lugar correcto.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(20px, 4vw, 30px)' }}>
          {[
            {
              icon: <Cpu size={30} />,
              title: "Eficiencia Garantizada",
              desc: "Optimización del flujo de datos y reducción de latencia mediante un diseño estructurado inteligente."
            },
            {
              icon: <Zap size={30} />,
              title: "Escalabilidad Real",
              desc: "Infraestructuras pensadas para soportar la expansión de tu empresa sin necesidad de re-cableados costosos."
            },
            {
              icon: <Shield size={30} />,
              title: "Sólida y Confiable",
              desc: "Materiales de alta calidad y estándares internacionales para asegurar que tu red nunca sea el cuello de botella."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ padding: '40px', borderRadius: '20px', borderBottom: '3px solid var(--color-secondary)' }}
              whileHover={{ y: -10 }}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ color: 'var(--color-secondary)', marginBottom: '20px' }}>{item.icon}</div>
              <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '15px' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
