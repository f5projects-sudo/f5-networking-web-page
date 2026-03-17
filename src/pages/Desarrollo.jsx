import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Cpu, Shield, Zap, Terminal, RefreshCw, Lock } from 'lucide-react';
import DecryptedText from '../components/DecryptedText';
import MapFooter from '../components/MapFooter';
import Navbar from '../components/Navbar';
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
    <div className="app bg-[#050505] min-h-screen">
      
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
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', zIndex: 10 }}>
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

        <div className="section-container" style={{ width: '100%', paddingTop: '100px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ maxWidth: '800px' }}
          >
            <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(0,180,255,0.1)', borderRadius: '30px', border: '1px solid rgba(0,180,255,0.2)', marginBottom: '20px', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '2px', alignItems: 'center', gap: '8px' }}>
              <Code size={16} /> ENGINEERING THE FUTURE
            </div>
            
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: '900', color: 'white', lineHeight: 1.1, marginBottom: '30px' }}>
              <DecryptedText 
                text="Desarrollo" 
                animateOn="view"
                speed={150} 
                className="gradient-text" 
                maxIterations={20}
              />
              <br />
              <DecryptedText 
                text="de Software" 
                animateOn="view"
                speed={150} 
                maxIterations={25}
                revealDirection="center"
              />
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8', maxWidth: '700px' }}>
              <DecryptedText 
                text="El desarrollo de software es el proceso integral de diseñar, crear, probar, implementar y mantener aplicaciones y sistemas informáticos, desde una app sencilla hasta plataformas complejas." 
                animateOn="view"
                speed={80}
                maxIterations={15}
              />
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content Details ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, paddingTop: '50px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
          
          <motion.div {...fadeInUp}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '30px', color: 'white', fontWeight: 'bold' }}>
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
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', opacity: 0.2, filter: 'blur(50px)', zIndex: -1, borderRadius: '30px' }} />
             <div className="glass" style={{ padding: '10px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
               <img 
                 src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800" 
                 alt="Código e Ingeniería de Software" 
                 style={{ width: '100%', borderRadius: '20px', display: 'block' }} 
               />
             </div>
          </motion.div>
        </div>

        {/* ── Specialized Services (CardSwap) ── */}
        <div style={{ marginTop: '100px', paddingBottom: '100px', position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '100px', alignItems: 'center' }}>
          <div style={{ order: window.innerWidth < 768 ? 2 : 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '550px', paddingRight: '40px' }}>
            <CardSwap width={window.innerWidth < 768 ? 320 : 500} height={window.innerWidth < 768 ? 380 : 450}>
              <Card>
                <img src={`${import.meta.env.BASE_URL}software_engineering.png`} alt="Ingeniería" />
                <div className="card-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Terminal size={20} color="var(--color-primary)" />
                    <h3 style={{ margin: 0 }}>Ingeniería de Software</h3>
                  </div>
                  <p>Desarrollo integral de proyectos tecnológicos con recursos y perfiles altamente especializados.</p>
                </div>
              </Card>
              <Card>
                <img src={`${import.meta.env.BASE_URL}software_refactoring.png`} alt="Refactoring" />
                <div className="card-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <RefreshCw size={20} color="var(--color-primary)" />
                    <h3 style={{ margin: 0 }}>Refactorización</h3>
                  </div>
                  <p>Transformamos sistemas heredados para disminuir riesgos operativos y maximizar el rendimiento.</p>
                </div>
              </Card>
              <Card>
                <img src={`${import.meta.env.BASE_URL}software_security.png`} alt="Seguridad" />
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

          <motion.div {...fadeInUp} style={{ order: window.innerWidth < 768 ? 1 : 2, paddingLeft: window.innerWidth < 768 ? '0' : '40px' }}>
            <div style={{ padding: '8px 16px', background: 'rgba(255,140,0,0.1)', borderRadius: '30px', border: '1px solid rgba(255,140,0,0.2)', marginBottom: '20px', color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '0.9rem', width: 'fit-content' }}>
              SERVICIOS ESPECIALIZADOS
            </div>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '25px', fontWeight: 'bold' }}>Nuestra <span style={{ color: 'var(--color-secondary)' }}>Experiencia</span></h2>
            
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
      <footer style={{ padding: '60px 5% 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', position: 'relative', zIndex: 10 }}>
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
