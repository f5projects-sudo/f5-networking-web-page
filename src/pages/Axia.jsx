import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Bot, Zap, Globe, MessageSquareText, Clock, ChevronDown } from 'lucide-react';
import BubbleBackground from '../components/BubbleBackground';
import N8nWorkflow from '../components/N8nWorkflow';
import IndustryAgents from '../components/IndustryAgents';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

      <Navbar onNavigate={onNavigate} activePage="axia" />

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
          <source src={`${import.meta.env.BASE_URL}Axia_video.webm`} type="video/webm" />
          <source src={`${import.meta.env.BASE_URL}Axia_video.mp4`} type="video/mp4" />
        </video>
        {/* Eliminado el contenedor glass y textos superpuestos para dar protagonismo total al video */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
            <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 180, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '12px 30px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', border: '1px solid var(--color-accent)', borderRadius: '50px', color: 'white', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
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
      <section id="axia-features" className="section-container" style={{ position: 'relative', zIndex: 10, scrollMarginTop: '80px' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', marginBottom: '15px' }}>Potencia tu Negocio con <span className="gradient-text">AXIA</span>, nuestros Asistentes virtuales para tu negocio</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px',
            padding: window.innerWidth < 400 ? '0 10px' : '0'
          }}
        >
          {/* Feature 1 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '30px 20px', borderRadius: '20px', textAlign: 'center' }} whileHover={{ y: -10, border: '1px solid var(--color-accent)' }}>
            <Clock size={40} style={{ color: 'var(--color-accent)', margin: '0 auto 15px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'white' }}>Disponibilidad 24/7</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', fontSize: '0.95rem' }}>Tus clientes recibirán atención ininterrumpida, sin importar la hora o el día. AXIA nunca duerme.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '30px 20px', borderRadius: '20px', textAlign: 'center' }} whileHover={{ y: -10, border: '1px solid var(--color-primary)' }}>
            <Bot size={40} style={{ color: 'var(--color-primary)', margin: '0 auto 15px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'white' }}>IA Avanzada</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', fontSize: '0.95rem' }}>Utiliza algoritmos de vanguardia para entender y responder preguntas complejas ofreciendo soluciones precisas.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '30px 20px', borderRadius: '20px', textAlign: 'center' }} whileHover={{ y: -10, border: '1px solid var(--color-secondary)' }}>
            <MessageSquareText size={40} style={{ color: 'var(--color-secondary)', margin: '0 auto 15px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'white' }}>Procesamiento del Lenguaje</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', fontSize: '0.95rem' }}>Interactúa de manera conversacional, comprendiendo el contexto y las intenciones del usuario de forma natural.</p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '30px 20px', borderRadius: '20px', textAlign: 'center' }} whileHover={{ y: -10, border: '1px solid var(--color-accent)' }}>
            <Globe size={40} style={{ color: 'var(--color-accent)', margin: '0 auto 15px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'white' }}>Integración Omnicanal</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', fontSize: '0.95rem' }}>Integra AXIA sin esfuerzo en tu sitio web, WhatsApp, redes sociales y CRMs para una cobertura total.</p>
          </motion.div>

          {/* Feature 5 */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '30px 20px', borderRadius: '20px', textAlign: 'center' }} whileHover={{ y: -10, border: '1px solid var(--color-primary)' }}>
            <Zap size={40} style={{ color: 'var(--color-primary)', margin: '0 auto 15px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'white' }}>Eficiencia Operativa</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', fontSize: '0.95rem' }}>Reduce la carga de trabajo de tu equipo, automatizando tareas repetitivas y escalando tu soporte al instante.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Interactive Workflow Section ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '60px', scrollMarginTop: '80px' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', marginBottom: '15px' }}>¿Cómo funciona nuestro <span className="gradient-text">Agente IA?</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.6', fontSize: '0.95rem', padding: '0 15px' }}>
            Observa en tiempo real cómo AXIA procesa la información, toma decisiones inteligentes y ejecuta acciones a través de tus herramientas empresariales favoritas.
          </p>
        </motion.div>

        <N8nWorkflow />
      </section>

      {/* ── Multi-Industry Agents Section ── */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '80px', scrollMarginTop: '80px' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', marginBottom: '15px' }}>Tu aliado en <span className="gradient-text">múltiples industrias</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.6', fontSize: '0.95rem', padding: '0 15px' }}>
            Nuestros agentes de IA están diseñados para adaptarse a las necesidades específicas de tu sector, optimizando procesos y elevando la experiencia de tus usuarios.
          </p>
        </motion.div>

        <IndustryAgents />
      </section>

      {/* ── CTA Section ── */}
      <section className="section-container" style={{ textAlign: 'center', paddingBottom: '100px', position: 'relative', zIndex: 10 }}>
        <motion.div {...fadeInUp} className="glass" style={{ padding: 'clamp(30px, 5vw, 60px) 20px', borderRadius: '30px', maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(0,86,179,0.1), rgba(0,180,255,0.05)) border-box' }}>
          <h3 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', marginBottom: '20px', color: 'white' }}>Revoluciona tu <span className="gradient-text">Atención al Cliente</span></h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '30px' }}>Contacta a nuestro equipo de expertos para una demostración personalizada.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 140, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '14px 30px', background: 'var(--color-secondary)', border: 'none', borderRadius: '50px', color: 'white', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            Solicitar Demostración
          </motion.button>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
