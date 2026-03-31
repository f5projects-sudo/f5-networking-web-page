import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Cpu, Shield, Zap, Terminal, RefreshCw, Lock } from 'lucide-react';
import DecryptedText from '../components/DecryptedText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardSwap, { Card } from '../components/CardSwap';

export default function Desarrollo({ onNavigate }) {
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
    <div className="app">
      
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(0, 86, 179, 0.15), transparent 70%), radial-gradient(circle at 100% 100%, rgba(0, 180, 255, 0.1), transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Navbar onNavigate={onNavigate} activePage="desarrollo" />

      {/* ── Hero Section ── */}
      <section style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10, padding: 'clamp(160px, 20vh, 220px) 20px 80px' }}>
        {/* Background Image Setup */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2, // Subtle background image
          zIndex: -1
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent, #050505 95%)',
          zIndex: -1
        }} />

        <div className="section-container" style={{ width: '100%' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ maxWidth: '800px' }}
          >
            <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(0,180,255,0.1)', borderRadius: '30px', border: '1px solid rgba(0,180,255,0.2)', marginBottom: '20px', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '2px', alignItems: 'center', gap: '8px' }}>
              <Code size={16} /> 
              <DecryptedText 
                text="ENGINEERING THE FUTURE" 
                animateOn="view"
                speed={30}
                maxIterations={10}
              />
            </div>
            
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: '900', color: 'white', lineHeight: 1.1, marginBottom: '30px' }}>
              <DecryptedText 
                text="Desarrollo" 
                animateOn="view"
                speed={40} 
                className="gradient-text" 
                maxIterations={15}
              />
              <br />
              <DecryptedText 
                text="de Software" 
                animateOn="view"
                speed={40} 
                maxIterations={20}
                revealDirection="center"
              />
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8', maxWidth: '700px' }}>
              <DecryptedText 
                text="El desarrollo de software es el proceso integral de diseñar, crear, probar, implementar y mantener aplicaciones y sistemas informáticos, desde una app sencilla hasta plataformas complejas." 
                animateOn="view"
                speed={40}
                maxIterations={10}
              />
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content Details ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, paddingTop: '50px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
          
          <motion.div {...fadeInUp}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '30px', color: 'white', fontWeight: 'bold' }}>
              Transformamos ideas en <span style={{ color: 'var(--color-primary)' }}>soluciones</span> funcionales
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.9', marginBottom: '30px' }}>
              Este proceso utiliza lenguajes de programación y metodologías especializadas para convertir conceptos en herramientas poderosas. Resolvemos problemas operativos, optimizamos procesos internos y mejoramos drásticamente la experiencia del usuario final.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ padding: '12px', background: 'rgba(0,180,255,0.1)', borderRadius: '12px', color: 'var(--color-accent)' }}><Cpu size={24} /></div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '5px' }}>Arquitectura Robusta</h4>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Sistemas diseñados para escalar y soportar altas demandas comerciales.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ padding: '12px', background: 'rgba(0,86,179,0.1)', borderRadius: '12px', color: 'var(--color-primary)' }}><Shield size={24} /></div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '5px' }}>Seguridad Integral</h4>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Protección de datos y código construido bajo los mejores estándares de la industria.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ padding: '12px', background: 'rgba(255,140,0,0.1)', borderRadius: '12px', color: 'var(--color-secondary)' }}><Zap size={24} /></div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '5px' }}>Despliegue Rápido</h4>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Metodologías ágiles que garantizan entregas eficientes y continuas.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} style={{ position: 'relative' }}>
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', opacity: 0.2, filter: 'blur(15px)', zIndex: -1, borderRadius: '30px' }} />
             <div className="glass" style={{ padding: '10px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
               <img 
                 src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800" 
                 alt="Código e Ingeniería de Software" 
                 width="800"
                 height="533"
                 loading="lazy"
                 style={{ width: '100%', borderRadius: '20px', display: 'block' }} 
               />
             </div>
          </motion.div>
        </div>

        {/* ── Specialized Services (CardSwap) ── */}
        <div className="specialized-services-grid" style={{ 
          marginTop: 'clamp(50px, 8vw, 100px)', 
          paddingBottom: 'clamp(50px, 8vw, 100px)', 
          position: 'relative', 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '1.2fr 1fr', 
          gap: 'clamp(30px, 5vw, 100px)', 
          alignItems: 'center' 
        }}>
          <div style={{ 
            order: window.innerWidth < 1024 ? 2 : 1, 
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: window.innerWidth < 768 ? '450px' : '550px', 
            paddingRight: window.innerWidth < 1024 ? '0' : '40px' 
          }}>
            <CardSwap width={window.innerWidth < 768 ? Math.min(window.innerWidth - 30, 320) : 500} height={window.innerWidth < 768 ? 400 : 450}>
              <Card>
                <img src={`${import.meta.env.BASE_URL}software_engineering.png`} alt="Ingeniería" width="500" height="300" loading="lazy" />
                <div className="card-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Terminal size={20} color="var(--color-primary)" />
                    <h3 style={{ margin: 0 }}>Ingeniería de Software</h3>
                  </div>
                  <p>Desarrollo integral de proyectos tecnológicos con recursos y perfiles altamente especializados.</p>
                </div>
              </Card>
              <Card>
                <img src={`${import.meta.env.BASE_URL}software_refactoring.png`} alt="Refactoring" width="500" height="300" loading="lazy" />
                <div className="card-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <RefreshCw size={20} color="var(--color-primary)" />
                    <h3 style={{ margin: 0 }}>Refactorización</h3>
                  </div>
                  <p>Transformamos sistemas heredados para disminuir riesgos operativos y maximizar el rendimiento.</p>
                </div>
              </Card>
              <Card>
                <img src={`${import.meta.env.BASE_URL}software_security.png`} alt="Seguridad" width="500" height="300" loading="lazy" />
                <div className="card-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Lock size={20} color="var(--color-primary)" />
                    <h3 style={{ margin: 0 }}>Seguridad y Protección</h3>
                  </div>
                  <p>Prácticas de desarrollo seguro y pruebas continuas para asegurar la integridad de la información.</p>
                </div>
              </Card>
            </CardSwap>
          </div>

          <motion.div {...fadeInUp} style={{ 
            order: window.innerWidth < 1024 ? 1 : 2, 
            paddingLeft: window.innerWidth < 1024 ? '0' : '40px',
            textAlign: window.innerWidth < 1024 ? 'center' : 'left'
          }}>
            <div style={{ 
              padding: '8px 16px', 
              background: 'rgba(255,140,0,0.1)', 
              borderRadius: '30px', 
              border: '1px solid rgba(255,140,0,0.2)', 
              marginBottom: '20px', 
              color: 'var(--color-secondary)', 
              fontWeight: 'bold', 
              fontSize: '0.8rem', 
              width: 'fit-content',
              margin: window.innerWidth < 1024 ? '0 auto 20px auto' : '0 0 20px 0'
            }}>
              SERVICIOS ESPECIALIZADOS
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', color: 'white', marginBottom: '25px', fontWeight: 'bold' }}>Nuestra <span style={{ color: 'var(--color-secondary)' }}>Experiencia</span></h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div>
                <h4 style={{ color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Terminal size={18} /> INGENIERÍA DE SOFTWARE
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                  Nos especializamos en el desarrollo integral de proyectos tecnológicos, ofreciendo recursos, experiencia y perfiles altamente especializados.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <RefreshCw size={18} /> ACTUALIZACIÓN / REFACTORIZACIÓN
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                  Transformamos sistemas heredados para disminuir riesgos operativos, adaptarlos a requisitos actuales y maximizar su rendimiento.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Lock size={18} /> SEGURIDAD Y PROTECCIÓN
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                  La seguridad del software consiste en proteger aplicaciones y datos frente a accesos no autorizados mediante prácticas de desarrollo seguro y pruebas continuas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer onNavigate={onNavigate} />
      
      <Navbar onNavigate={onNavigate} activePage="desarrollo" />
    </div>
  );
}
