import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Zap, 
  BarChart3, 
  Users, 
  Share2, 
  Smartphone, 
  Globe, 
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Info,
  Cpu,
  Mail
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollVelocity from '../components/ScrollVelocity';

export default function Echo({ onNavigate }) {
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
          backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(0, 180, 255, 0.1), transparent 50%), radial-gradient(circle at 90% 90%, rgba(255, 140, 0, 0.1), transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Navbar onNavigate={onNavigate} activePage="echo" />

      {/* ── Hero Section ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', zIndex: 10, padding: 'clamp(100px, 15vw, 120px) 0 0' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.8), #050505)',
          zIndex: -1
        }} />

        <div className="section-container" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', width: '100%' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(0,180,255,0.1)', borderRadius: '30px', border: '1px solid rgba(0,180,255,0.2)', marginBottom: '20px', color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '2px', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={16} /> CRM OMNICANAL
              </div>
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', lineHeight: 1.2, marginBottom: '0px' }}>
                <motion.span 
                  className="gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{ display: 'inline-block' }}
                >
                  ECHO
                </motion.span>
              </h1>
              <h2 style={{ fontSize: '2rem', color: 'white', opacity: 0.9, marginTop: '-5px' }}>
                Comunicación más inteligente para tu negocio
              </h2>

              <div style={{ marginTop: '30px' }}>
                <p style={{ 
                  fontSize: '1.2rem', 
                  color: 'var(--color-text-muted)', 
                  lineHeight: '1.8', 
                  margin: '0', 
                  maxWidth: '100%'
                }}>
                  Hoy los clientes esperan respuestas rápidas, atención clara y comunicación constante, sin importar el canal que utilicen. ECHO nace para ayudarte a mantener el control total de cada conversación y convertir la comunicación en una ventaja competitiva.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                <motion.button 
                  style={{
                    padding: '15px 35px',
                    background: 'transparent',
                    border: '1px solid var(--color-primary)',
                    color: 'white',
                    borderRadius: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,86,179,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Solicitar Demo <Info size={18} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 180, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(26, 26, 26, 0.8)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
              </div>
              <img 
                src={`${import.meta.env.BASE_URL}echo_crm_mockup.png`} 
                alt="ECHO CRM Preview" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  opacity: 0.95
                }} 
              />
              
              <motion.div 
                className="hardware-accelerated"
                style={{ position: 'absolute', top: '10px', right: '10px', padding: '12px', borderRadius: '12px', background: 'rgba(0,180,255,0.3)', backdropFilter: 'blur(10px)', border: '1px solid var(--color-accent)', zIndex: 20 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap size={20} color="var(--color-accent)" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Marquee */}
        <div style={{ marginTop: '80px', position: 'relative', zIndex: 1 }}>
          <ScrollVelocity 
            texts={['ECHO CRM • OMNICANALIDAD • ', 'MENSAJERÍA INTELIGENTE • ']} 
            velocity={50} 
            className="custom-scroll-text"
          />
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="section-container" style={{ padding: 'clamp(60px, 12vw, 100px) 0', position: 'relative', zIndex: 10 }}>
        <motion.div 
          {...fadeInUp}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '25px', fontWeight: 'bold' }}>
            Centraliza cada <span className="gradient-text">interacción</span>
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--color-primary), transparent)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {[
            { 
              icon: <Share2 size={32} />, 
              title: "Inbox Unificado", 
              desc: "WhatsApp, Instagram, FB Messenger y más en un solo lugar. Di adiós a saltar entre pestañas.",
              color: "rgba(0,180,255,0.1)"
            },
            { 
              icon: <Zap size={32} />, 
              title: "Chatbots Inteligentes", 
              desc: "Automatiza respuestas comunes y califica prospectos 24/7 sin intervención humana.",
              color: "rgba(255,140,0,0.1)"
            },
            { 
              icon: <BarChart3 size={32} />, 
              title: "Reportes Avanzados", 
              desc: "Mide el rendimiento de tu equipo, tiempos de respuesta y tasas de conversión en tiempo real.",
              color: "rgba(0,180,255,0.1)"
            },
            { 
              icon: <Users size={32} />, 
              title: "Gestión de Agentes", 
              desc: "Asigna conversaciones automáticamente según la carga de trabajo o especialidad del agente.",
              color: "rgba(255,140,0,0.1)"
            },
            { 
              icon: <Smartphone size={32} />, 
              title: "Multiplataforma", 
              desc: "Accede desde tu navegador o dispositivos móviles. Mantén el control donde quiera que estés.",
              color: "rgba(0,180,255,0.1)"
            },
            { 
              icon: <Globe size={32} />, 
              title: "API & Integraciones", 
              desc: "Conecta ECHO con tu stack tecnológico actual mediante Webhooks y nuestra API robusta.",
              color: "rgba(255,140,0,0.1)"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ 
                padding: '40px', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
              whileHover={{ 
                y: -10,
                borderColor: 'rgba(0, 180, 255, 0.3)',
                backgroundColor: 'rgba(0, 180, 255, 0.02)'
              }}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ 
                color: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
                background: item.color,
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
              
              <h3 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 'bold' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Solución de CRM Omnicanal ── */}
      <section className="section-container" style={{ padding: 'clamp(80px, 15vw, 120px) 0', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <motion.div {...fadeInUp}>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '30px', fontWeight: 'bold', lineHeight: '1.3' }}>
              Solución de <span className="gradient-text">CRM omnicanal</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '30px' }}>
              ECHO es una plataforma de CRM omnicanal que centraliza todos tus canales de mensajería en un solo lugar, permitiéndote gestionar conversaciones, automatizar procesos y medir resultados en tiempo real. 
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              Optimiza la operación, mejora la atención al cliente y garantiza una experiencia más eficiente, ordenada y profesional en cada interacción.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '40px', borderRadius: '30px', borderLeft: '4px solid var(--color-primary)' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {[
                'Centralización Absoluta',
                'Automatización Inteligente',
                'Escalabilidad de Negocio'
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ color: 'var(--color-primary)' }}><CheckCircle2 size={24} /></div>
                  <p style={{ color: 'white', fontWeight: '600', margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Diferenciadores ── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(to bottom, #050505, rgba(0,180,255,0.05), #050505)', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <motion.div 
            {...fadeInUp}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '2.8rem', color: 'white', fontWeight: 'bold' }}>Diferenciadores</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '20px auto' }}></div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {[
              { icon: <MessageSquare size={28} />, title: "Centraliza tus canales de texto", desc: "WhatsApp, FB, IG y más en una interfaz única." },
              { icon: <Zap size={28} />, title: "Gestiona conversaciones en un solo sistema", desc: "Flujo de trabajo optimizado para tu equipo de ventas." },
              { icon: <Cpu size={28} />, title: "Automatiza procesos operativos", desc: "Bots que califican y derivan chats automáticamente." },
              { icon: <TrendingUp size={28} />, title: "Mide resultados con reportes y métricas", desc: "Datos precisos para decisiones estratégicas." },
              { icon: <Users size={28} />, title: "Mejora la experiencia del cliente", desc: "Respuestas inmediatas que generan confianza." }
            ].map((diff, i) => (
              <motion.div
                key={i}
                className="glass"
                style={{ padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}
                whileHover={{ scale: 1.03, borderColor: 'rgba(0,180,255,0.2)' }}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>{diff.icon}</div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>{diff.title}</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA Section ── */}
      <section className="section-container" style={{ textAlign: 'center', padding: '120px 0', position: 'relative', zIndex: 10 }}>
        <motion.div 
          {...fadeInUp}
          className="glass cta-glass-card" 
          style={{ 
            padding: '80px 40px', 
            borderRadius: '40px', 
            maxWidth: '900px', 
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(0,180,255,0.1), rgba(255,140,0,0.05))',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,180,255,0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}></div>
          
          <h3 style={{ fontSize: '3rem', marginBottom: '25px', color: 'white', fontWeight: 'bold' }}>
            ¿Listo para llevar tu comunicación al <span className="gradient-text">siguiente nivel?</span>
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '45px', maxWidth: '600px', margin: '0 auto 45px' }}>
            Únete a las empresas que ya están transformando su atención al cliente con ECHO.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 180, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '18px 45px', background: 'var(--color-primary)', border: 'none', borderRadius: '50px', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              ¡Envíanos Un Mensaje! <Mail size={20} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
