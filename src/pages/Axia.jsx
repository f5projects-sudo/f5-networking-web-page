import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Bot, Zap, Globe, MessageSquareText, Clock, ChevronDown } from 'lucide-react';
import BubbleBackground from '../components/BubbleBackground';
import N8nWorkflow from '../components/N8nWorkflow';
import IndustryAgents from '../components/IndustryAgents';

export default function Axia({ onNavigate }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="app">
      <BubbleBackground />

      {/* ── Navbar ── */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '5px 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => onNavigate('home')}
          >
            <img
              src="/f5-networking-web-page/f5networking_logo_original_safe.png"
              alt="F5 Networking"
              style={{ height: '110px', width: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Inicio</span>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => onNavigate('nosotros')}>Nosotros</span>
            <div className="nav-dropdown">
              <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                Soluciones <ChevronDown size={16} />
              </span>
              <div className="nav-dropdown-content glass" style={{ minWidth: '220px', left: '0' }}>
                <span onClick={() => onNavigate('axia')} style={{ cursor: 'pointer', color: 'var(--color-accent)' }}>AXIA</span>
                <span onClick={() => onNavigate('nova-core')} style={{ cursor: 'pointer' }}>NOVA CORE</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>Desarrollo de Software</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>Cableado Estructurado</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>ECHO CRM</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>BPO SERVICES</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>VOXIS</span>
              </div>
            </div>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Contacto</span>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', willChange: 'transform', pointerEvents: 'none' }}
        >
          <source src="/f5-networking-web-page/Axia_video.webm" type="video/webm" />
          <source src="/f5-networking-web-page/Axia_video.mp4" type="video/mp4" />
        </video>
        {/* Eliminado el contenedor glass y textos superpuestos para dar protagonismo total al video */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
           <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 180, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '16px 40px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', border: '1px solid var(--color-accent)', borderRadius: '50px', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }}
            onClick={() => {
              const featuresSection = document.getElementById('axia-features');
              if(featuresSection) featuresSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Descubrir Beneficios ↓
          </motion.button>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section id="axia-features" className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Potencia tu Negocio con <span className="gradient-text">AXIA</span>, nuestros Asistentes virtuales para tu negocio</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
        >
          {/* Feature 1 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '40px', borderRadius: '20px', textAlign: 'center' }} whileHover={{ y: -10, border: '1px solid var(--color-accent)' }}>
            <Clock size={50} style={{ color: 'var(--color-accent)', margin: '0 auto 20px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'white' }}>Disponibilidad 24/7</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Tus clientes recibirán atención ininterrumpida, sin importar la hora o el día. AXIA nunca duerme.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '40px', borderRadius: '20px', textAlign: 'center' }} whileHover={{ y: -10, border: '1px solid var(--color-primary)' }}>
            <Bot size={50} style={{ color: 'var(--color-primary)', margin: '0 auto 20px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'white' }}>IA Avanzada</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Utiliza algoritmos de vanguardia para entender y responder preguntas complejas ofreciendo soluciones precisas.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '40px', borderRadius: '20px', textAlign: 'center' }} whileHover={{ y: -10, border: '1px solid var(--color-secondary)' }}>
            <MessageSquareText size={50} style={{ color: 'var(--color-secondary)', margin: '0 auto 20px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'white' }}>Procesamiento del Lenguaje</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Interactúa de manera conversacional, comprendiendo el contexto y las intenciones del usuario de forma natural.</p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '40px', borderRadius: '20px', textAlign: 'center' }} whileHover={{ y: -10, border: '1px solid var(--color-accent)' }}>
            <Globe size={50} style={{ color: 'var(--color-accent)', margin: '0 auto 20px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'white' }}>Integración Omnicanal</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Integra AXIA sin esfuerzo en tu sitio web, WhatsApp, redes sociales y CRMs para una cobertura total.</p>
          </motion.div>

          {/* Feature 5 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '40px', borderRadius: '20px', textAlign: 'center' }} whileHover={{ y: -10, border: '1px solid var(--color-primary)' }}>
            <Zap size={50} style={{ color: 'var(--color-primary)', margin: '0 auto 20px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'white' }}>Eficiencia Operativa</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Reduce la carga de trabajo de tu equipo, automatizando tareas repetitivas y escalando tu soporte al instante.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Interactive Workflow Section ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '60px' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>¿Cómo funciona nuestro <span className="gradient-text">Agente IA?</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.6' }}>
            Observa en tiempo real cómo AXIA procesa la información, toma decisiones inteligentes y ejecuta acciones a través de tus herramientas empresariales favoritas.
          </p>
        </motion.div>

        <N8nWorkflow />
      </section>

      {/* ── Multi-Industry Agents Section ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '80px' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Tu aliado en <span className="gradient-text">múltiples industrias</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.6' }}>
            Nuestros agentes de IA están diseñados para adaptarse a las necesidades específicas de tu sector, optimizando procesos y elevando la experiencia de tus usuarios.
          </p>
        </motion.div>

        <IndustryAgents />
      </section>

      {/* ── CTA Section ── */}
      <section className="section-container" style={{ textAlign: 'center', paddingBottom: '100px', position: 'relative', zIndex: 10 }}>
        <motion.div {...fadeInUp} className="glass" style={{ padding: '60px', borderRadius: '30px', maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(0,86,179,0.1), rgba(0,180,255,0.05)) border-box' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>Revoluciona tu <span className="gradient-text">Atención al Cliente</span></h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '40px' }}>Contacta a nuestro equipo de expertos para una demostración personalizada.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 140, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '16px 40px', background: 'var(--color-secondary)', border: 'none', borderRadius: '50px', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
            onClick={() => onNavigate('home')}
          >
            Solicitar Demostración
          </motion.button>
        </motion.div>
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
              Miguel Blanco #1440 int 102<br />
              Col. Americana, Guadalajara Jalisco<br />
              C.P. 44170
            </p>
          </div>
        </div>

        {/* Bottom Logo & Copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
            <img 
              src="/f5-networking-web-page/f5networking_logo_original_safe.png" 
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