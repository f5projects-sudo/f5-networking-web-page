import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Network, Cpu, Shield, Zap, Info, Server, Settings, Tag, LayoutDashboard, ShieldCheck } from 'lucide-react';
import DecryptedText from '../components/DecryptedText';
import ScrambledText from '../components/ScrambledText';
import DataCenterFloorPlan from '../components/DataCenterFloorPlan';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cableado({ onNavigate }) {
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

  return (
    <div className="app bg-[#050505] min-h-screen">
      
      {/* Dynamic Background */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(255, 140, 0, 0.1), transparent 50%), radial-gradient(circle at 90% 90%, rgba(0, 86, 179, 0.1), transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Navbar onNavigate={onNavigate} activePage="cableado" />

      {/* ── Hero Section ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', zIndex: 10, padding: 'clamp(100px, 15vw, 120px) 0 80px' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${import.meta.env.BASE_URL}cableado_hero.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: -1
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.8), #050505)',
          zIndex: -1
        }} />

        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(255,140,0,0.1)', borderRadius: '30px', border: '1px solid rgba(255,140,0,0.2)', marginBottom: '20px', color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '2px', alignItems: 'center', gap: '8px' }}>
                <Network size={16} /> INFRAESTRUCTURA DE RED
              </div>
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', color: 'white', lineHeight: 1.2, marginBottom: '0px' }}>
                <ScrambledText 
                  className="gradient-text-secondary" 
                  style={{ margin: '0', padding: '0', display: 'block' }}
                >
                  Cableado
                </ScrambledText>
                <ScrambledText 
                  style={{ margin: '0', padding: '0', display: 'block' }}
                >
                  Estructurado
                </ScrambledText>
              </h1>

              <div style={{ marginTop: '30px' }}>
                <ScrambledText 
                  style={{ 
                    fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
                    color: 'var(--color-text-muted)', 
                    lineHeight: '1.8', 
                    margin: '0', 
                    maxWidth: '90%',
                    fontFamily: 'inherit',
                    display: 'block'
                  }}
                >
                  Diseñamos e instalamos infraestructuras de red eficientes, ordenadas y escalables. Analizamos tu espacio y tus necesidades actuales.
                </ScrambledText>
              </div>

              <motion.button 
                className="btn-neon-secondary"
                style={{
                  padding: '15px 35px',
                  background: 'transparent',
                  border: '1px solid var(--color-secondary)',
                  color: 'white',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,140,0,0.4)' }}
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass"
              style={{ padding: '20px', borderRadius: '24px', position: 'relative' }}
            >
              <div style={{ position: 'absolute', inset: -1, background: 'linear-gradient(45deg, var(--color-secondary), transparent)', borderRadius: '24px', zIndex: -1, opacity: 0.3 }} />
              <img 
                src={`${import.meta.env.BASE_URL}cableado_hero.png`} 
                alt="Infraestructura de Red" 
                style={{ width: '100%', borderRadius: '16px', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Maqueta Interactiva Section ── */}
      <section className="cableado-floor-plan-section" style={{ position: 'relative', zIndex: 10, padding: '40px 0' }}>
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '20px' }}
          >
            <h3 style={{ color: 'var(--color-secondary)', fontSize: '1rem', letterSpacing: '3px', fontWeight: 'bold' }}>SISTEMA INTERACTIVO</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Visualización de Servidores y Redes LAN (Desliza para ver más)</p>
          </motion.div>
        </div>
        <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '20px', WebkitOverflowScrolling: 'touch' }}>
          <div style={{ minWidth: '800px' }}>
            <DataCenterFloorPlan />
          </div>
        </div>
      </section>

      {/* ── Rack Organization Section ── */}
      <section className="section-container" style={{ padding: '100px 0', position: 'relative', zIndex: 10 }}>
        <motion.div 
          {...fadeInUp}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '25px', fontWeight: 'bold' }}>
            Organizamos y montamos racks de forma <span className="gradient-text-secondary">clara y funcional</span>
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--color-secondary), transparent)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {[
            { icon: <Network size={32} />, title: "Switches de red", desc: "Instalación, configuración y optimización de switches de alta capacidad." },
            { icon: <ShieldCheck size={32} />, title: "Seguridad con Fortinet", desc: "Implementación de firewalls y soluciones de seguridad perimetral líderes en el mercado." },
            { icon: <Server size={32} />, title: "Charola tipo charofil", desc: "Canalización profesional y ordenada para la protección física de tu cableado." },
            { icon: <Settings size={32} />, title: "Patch Panels", desc: "Terminación técnica y administración eficiente de todos los puntos de red." },
            { icon: <LayoutDashboard size={32} />, title: "Gestión Profesional", desc: "Organización exhaustiva horizontal y vertical para un mantenimiento sencillo." },
            { icon: <Tag size={32} />, title: "Sistemas de Etiquetado", desc: "Identificación lógica rigurosa de cada cable y puerto para diagnóstico rápido." }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ 
                padding: '35px', 
                borderRadius: '24px', 
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
              whileHover={{ 
                y: -10,
                borderColor: 'rgba(255, 140, 0, 0.3)',
                backgroundColor: 'rgba(255, 140, 0, 0.02)'
              }}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle at center, rgba(255,140,0,0.1), transparent 70%)',
                  opacity: 0,
                  zIndex: 0,
                  pointerEvents: 'none'
                }}
                whileHover={{ opacity: 1 }}
              />
              
              <div style={{ 
                color: 'var(--color-secondary)', 
                background: 'rgba(255,140,0,0.1)',
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10px',
                position: 'relative',
                zIndex: 1
              }}>
                {item.icon}
              </div>
              
              <h3 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 'bold', position: 'relative', zIndex: 1 }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '0.95rem', position: 'relative', zIndex: 1 }}>{item.desc}</p>
              
              <div style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '3px',
                background: 'var(--color-secondary)',
                transition: 'width 0.3s ease'
              }} className="hover-line" />
            </motion.div>
          ))}
        </div>
        
        <style>{`
          .glass:hover .hover-line {
            width: 100%;
          }
        `}</style>
      </section>

      {/* ── Core Value Section ── */}
      <section className="section-container" style={{ padding: '100px 0', position: 'relative', zIndex: 10 }}>
        <motion.div 
          {...fadeInUp}
          style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 80px' }}
        >
          <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '25px', fontWeight: 'bold' }}>
            Tu red no solo funciona hoy, <span style={{ color: 'var(--color-secondary)' }}>crece contigo</span>.
          </h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            Desarrollamos una infraestructura sólida y preparada para el futuro, ideal para empresas que no pueden darse el lujo de fallar. Si tu negocio depende de la red, estás en el lugar correcto.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
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
