import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Network, Cpu, Shield, Zap, Info } from 'lucide-react';
import DecryptedText from '../components/DecryptedText';
import MapFooter from '../components/MapFooter';
import Navbar from '../components/Navbar';

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
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', zIndex: 10, padding: '120px 0 80px' }}>
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
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', color: 'white', lineHeight: 1.1, marginBottom: '30px' }}>
                <DecryptedText 
                  text="Cableado" 
                  animateOn="view"
                  speed={100}
                  className="gradient-text-secondary" 
                />
                <br />
                <DecryptedText 
                  text="Estructurado" 
                  animateOn="view"
                  speed={120} 
                  revealDirection="end"
                />
              </h1>

              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '40px' }}>
                <DecryptedText 
                  text="Diseñamos e instalamos infraestructuras de red eficientes, ordenadas y escalables. No improvisamos: analizamos tu espacio, tus necesidades actuales y lo que vas a necesitar mañana."
                  animateOn="view"
                  speed={50}
                />
              </p>

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
              <div style={{ position: 'absolute', inset: -1, background: 'linear-gradient(45deg, var(--color-secondary), transparent)', borderRadius: '24px', zIZndex: -1, opacity: 0.3 }} />
              <img 
                src={`${import.meta.env.BASE_URL}cableado_hero.png`} 
                alt="Infraestructura de Red" 
                style={{ width: '100%', borderRadius: '16px', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }} 
              />
            </motion.div>
          </div>
        </div>
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
      <footer style={{ padding: '60px 5% 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px', color: 'var(--color-text-muted)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Contáctanos</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🇲🇽</span>
              <a href="tel:+523321012959" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>+52 (33) 2101 2959</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>✉</span>
              <a href="mailto:sales@f5networking.com" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>sales@f5networking.com</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Dirección</h4>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              C. Miguel Blanco 1449<br />
              Americana, 44160 Guadalajara, Jal.
            </p>
            <div style={{ marginTop: '10px', height: '200px', width: '100%', borderRadius: '15px', overflow: 'hidden' }}>
              <MapFooter />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
          <div onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <img src={`${import.meta.env.BASE_URL}f5networking_logo_original_safe.png`} style={{ height: '40px', opacity: 0.8 }} alt="Logo" />
          </div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} F5 Networking.
          </div>
        </div>
      </footer>
    </div>
  );
}
