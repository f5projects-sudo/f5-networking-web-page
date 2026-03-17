import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Cpu, Shield, Zap, Terminal, RefreshCw, Lock } from 'lucide-react';
import DecryptedText from '../components/DecryptedText';
import MapFooter from '../components/MapFooter';
import Navbar from '../components/Navbar';
import CardSwap, { Card } from '../components/CardSwap';

export default function Desarrollo({ onNavigate }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const features = [
    {
      icon: <Code size={40} className="text-secondary" />,
      title: "Desarrollo Integral",
      description: "Creamos soluciones desde cero, adaptadas exactamente a tus flujos de trabajo.",
      color: "var(--color-secondary)"
    },
    {
      icon: <RefreshCw size={40} className="text-primary" />,
      title: "Modernización",
      description: "Transformamos sistemas antiguos en plataformas modernas y eficientes.",
      color: "var(--color-primary)"
    },
    {
      icon: <Shield size={40} className="text-accent" />,
      title: "Seguridad Robusta",
      description: "Protección de datos y cumplimiento con los más altos estándares de la industria.",
      color: "var(--color-accent)"
    }
  ];

  return (
    <div className="app">
      <Navbar onNavigate={onNavigate} activePage="desarrollo" />

      {/* ── Hero Section ── */}
      <section style={{ 
        position: 'relative', 
        height: '85vh', 
        minHeight: '600px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '100px 5% 0',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 86, 179, 0.15) 0%, transparent 70%)',
          zIndex: 0 
        }}></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', zIndex: 1, maxWidth: '1000px' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ marginBottom: '30px' }}
          >
            <span style={{ 
              padding: '8px 20px', 
              background: 'rgba(0, 180, 255, 0.1)', 
              border: '1px solid var(--color-accent)', 
              borderRadius: '30px',
              color: 'var(--color-accent)',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Innovación Digital
            </span>
          </motion.div>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            lineHeight: 1.1,
            marginBottom: '30px',
            color: 'white'
          }}>
            <DecryptedText 
              text="Ingeniería de Software" 
              animateOn="view"
              revealVideo={true}
              speed={80}
              maxIterations={15}
              characters="ABCDEFGHIJKLMOPQRSTUVWXYZ0123456789"
              className="gradient-text"
              parentClassName="inline-block"
            />
            <br />
            para el Mundo Real
          </h1>

          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--color-text-muted)', 
            maxWidth: '750px', 
            margin: '0 auto 40px',
            lineHeight: 1.8 
          }}>
            Transformamos ideas complejas en infraestructuras digitales escalables, seguras y centradas en el usuario. No solo escribimos código; construimos el motor de tu crecimiento.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 86, 179, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 40px',
                background: 'var(--color-primary)',
                borderRadius: '50px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => {
                const servicesSection = document.getElementById('software-services');
                if(servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nuestras Soluciones
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 40px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
              onClick={() => onNavigate('home')}
            >
              Hablar con un Experto
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ── Interactive CardSwap Section ── */}
      <section style={{ padding: '40px 0', background: 'rgba(0,0,0,0.3)' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestro <span className="gradient-text">Enfoque</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
        </motion.div>

        <CardSwap>
          <Card customClass="software-engineering">
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', height: '100%' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '2.4rem', color: 'var(--color-primary)', marginBottom: '20px' }}>INGENIERÍA DE SOFTWARE</h3>
                <p style={{ fontSize: '1.15rem', color: '#ccc', lineHeight: '1.8' }}>
                  Nos especializamos en el desarrollo integral de proyectos tecnológicos, ofreciendo recursos, experiencia y perfiles altamente especializados.
                </p>
              </div>
              <div style={{ flex: 1.2, height: '100%', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={`${import.meta.env.BASE_URL}software_engineering.png`} alt="Ingeniería de Software" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </Card>

          <Card customClass="software-refactoring">
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', height: '100%' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '2.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>ACTUALIZACIÓN / REFACTORIZACIÓN</h3>
                <p style={{ fontSize: '1.15rem', color: '#ccc', lineHeight: '1.8' }}>
                  Transformamos sistemas heredados para disminuir riesgos operativos, adaptarlos a requisitos actuales y maximizar su rendimiento.
                </p>
              </div>
              <div style={{ flex: 1.2, height: '100%', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={`${import.meta.env.BASE_URL}software_refactoring.png`} alt="Refactorización" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </Card>

          <Card customClass="software-security">
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', height: '100%' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '2.4rem', color: 'var(--color-accent)', marginBottom: '20px' }}>SEGURIDAD Y PROTECCIÓN</h3>
                <p style={{ fontSize: '1.15rem', color: '#ccc', lineHeight: '1.8' }}>
                  Protegemos aplicaciones y datos frente a accesos no autorizados mediante prácticas de desarrollo seguro y controles de acceso continuos.
                </p>
              </div>
              <div style={{ flex: 1.2, height: '100%', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={`${import.meta.env.BASE_URL}software_security.png`} alt="Seguridad" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </Card>
        </CardSwap>
      </section>

      {/* ── Services Detail Grid ── */}
      <section id="software-services" className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="glass"
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, border: `1px solid ${feature.color}` }}
              style={{ padding: '50px 40px', borderRadius: '24px' }}
            >
              <div style={{ marginBottom: '25px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '15px', color: 'white' }}>{feature.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Tech Stack / CTA Section ── */}
      <section className="section-container" style={{ textAlign: 'center', paddingBottom: '120px' }}>
        <motion.div 
          {...fadeInUp}
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          <div className="glass" style={{ padding: '80px 50px', borderRadius: '30px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}></div>
            
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>¿Tienes un proyecto en mente?</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '40px' }}>
              Nuestro equipo está listo para ayudarte a construir la próxima gran innovación tecnológica de tu empresa.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 140, 0, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('home')}
                style={{
                  padding: '18px 50px',
                  background: 'var(--color-secondary)',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Solicitar Cotización Free
              </motion.button>
            </div>

            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '40px', opacity: 0.6 }}>
               {/* Iconos de stack tecnológico como símbolos */}
               <Terminal size={24} />
               <Lock size={24} />
               <Cpu size={24} />
               <Zap size={24} />
            </div>
          </div>
        </motion.div>
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
