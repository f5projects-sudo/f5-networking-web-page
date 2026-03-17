import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Network, ShieldCheck, Zap, Activity, Clock, Users, ChevronDown } from 'lucide-react';
import DecryptedText from '../components/DecryptedText';
import MapFooter from '../components/MapFooter';
import Navbar from '../components/Navbar';

export default function Cableado({ onNavigate }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const steps = [
    {
      icon: <Activity size={32} className="text-secondary" />,
      title: "Análisis de Espacio",
      description: "Evaluamos tu infraestructura física para diseñar la ruta de cableado más eficiente y ordenada."
    },
    {
      icon: <Network size={32} className="text-primary" />,
      title: "Diseño Escalable",
      description: "No solo resolvemos hoy; preparamos tu red para las demandas tecnológicas de los próximos 10 años."
    },
    {
      icon: <ShieldCheck size={32} className="text-accent" />,
      title: "Certificación y Prueba",
      description: "Cada punto de red es testeado y certificado bajo estándares internacionales para garantizar cero fallos."
    }
  ];

  return (
    <div className="app">
      <Navbar onNavigate={onNavigate} activePage="cableado" />

      {/* ── Hero Section ── */}
      <section style={{ 
        position: 'relative', 
        height: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '0 5%',
        background: `linear-gradient(rgba(5,5,5,0.7), rgba(5,5,5,0.7)), url('${import.meta.env.BASE_URL}cableado_hero.png') center/cover no-repeat`
      }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', maxWidth: '900px', zIndex: 1 }}
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '25px' }}>
            <DecryptedText 
              text="Cableado Estructurado" 
              className="gradient-text"
              speed={70}
              maxIterations={15}
            />
            <br />
            Infraestructura Inmortal
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '40px', lineHeight: 1.8 }}>
            Diseñamos e instalamos infraestructuras de red eficientes, ordenadas y escalables. No improvisamos: analizamos tu espacio, tus necesidades actuales y lo que vas a necesitar mañana.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 140, 0, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '16px 40px', background: 'var(--color-secondary)', borderRadius: '50px', color: 'white', fontWeight: 'bold' }}
              onClick={() => {
                const infoSection = document.getElementById('cableado-info');
                if(infoSection) infoSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Más Información
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ── Value Proposition Section ── */}
      <section id="cableado-info" className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
          <motion.div {...fadeInUp}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>Conexiones que <span className="gradient-text">no fallan</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '20px' }}>
              Desarrollamos una infraestructura sólida y preparada para el futuro, ideal para empresas que no pueden darse el lujo de fallar. Si tu negocio depende de la red, estás en el lugar correcto.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {['Orden Absoluto', 'Máxima Velocidad', 'Cero Interferencias', 'Fácil de Escalar'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Zap size={18} className="text-secondary" />
                  <span style={{ fontWeight: '500' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            className="glass"
            style={{ padding: '20px', borderRadius: '30px', position: 'relative', overflow: 'hidden' }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}cableado_final_proof_1773768953716.png`} 
              alt="Instalación Profesional" 
              style={{ width: '100%', borderRadius: '20px', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 70%, rgba(5,5,5,0.9))' }}></div>
          </motion.div>
        </div>

        {/* ── Step Cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ padding: '40px', borderRadius: '24px' }}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, border: '1px solid var(--color-primary)' }}
            >
              <div style={{ marginBottom: '20px' }}>{step.icon}</div>
              <h3 style={{ marginBottom: '15px' }}>{step.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: '60px 5% 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px', color: 'var(--color-text-muted)' }}>
          {/* Column 1: Contáctanos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Contáctanos</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem' }}>🇲🇽</span>
              <a href="tel:+523321012959" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--color-primary)'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>+52 (33) 2101 2959</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem' }}>🇺🇸</span>
              <a href="tel:+12147304939" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--color-secondary)'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>+1 214 730 4939</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem' }}>✉</span>
              <a href="mailto:sales@f5networking.com" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--color-accent)'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>sales@f5networking.com</a>
            </div>
          </div>

          {/* Column 2: Información Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Información legal</h4>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>Términos y condiciones</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>Aviso de privacidad</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>PUA</a>
          </div>

          {/* Column 3: Dirección */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Dirección</h4>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              C. Miguel Blanco 1449<br />
              Col Americana, Americana<br />
              44160 Guadalajara, Jal.
            </p>
            <div style={{ marginTop: '10px', height: '200px', width: '100%', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <MapFooter />
            </div>
          </div>
        </div>

        {/* Bottom Logo & Copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
            <img 
              src={`${import.meta.env.BASE_URL}f5networking_logo_original_safe.png`} 
              alt="F5 Networking" 
              style={{ height: '40px', width: 'auto', display: 'block', opacity: 0.8 }} 
            />
          </div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} F5 Networking. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
