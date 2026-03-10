import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Headset,
  Bot,
  MessageSquare,
  Phone,
  ChevronRight,
  CheckCircle2,
  Globe,
  Cpu,
  Activity
} from 'lucide-react';
import BubbleBackground from './components/BubbleBackground';

const App = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  useEffect(() => {
    // Load ElevenLabs Widget Script
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  const services = [
    {
      title: "BPO Services",
      icon: <Headset size={40} className="text-secondary" />,
      description: "Soluciones de Call Center de alto impacto. Optimizamos la atención al cliente con procesos eficientes y talento especializado.",
      features: ["Atención 24/7", "Multilingüe", "KPIs en tiempo real"]
    },
    {
      title: "IA Asistentes Virtuales",
      icon: <Bot size={40} className="text-primary" />,
      description: "Automatización inteligente. Implementamos bots con lenguaje natural para resolver consultas al instante.",
      features: ["NLP Avanzado", "Integración API", "Aprendizaje continuo"]
    },
    {
      title: "ECHO - CRM Omnicanal",
      icon: <MessageSquare size={40} className="text-accent" />,
      description: "Centraliza todas tus comunicaciones. WhatsApp, Redes Sociales y Chat en una sola plataforma unificada.",
      features: ["Inbox Unificado", "Chatbots integrados", "Reportes avanzados"]
    },
    {
      title: "Telefonía SIP / PBX",
      icon: <Phone size={40} className="text-white" />,
      description: "Infraestructura robusta de voz. Telefonía IP escalable y segura para empresas que no pueden detenerse.",
      features: ["Voz sobre IP", "Troncales SIP", "Escalabilidad Global"]
    }
  ];

  return (
    <div className="app">
      <BubbleBackground />

      {/* Header */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '15px 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, var(--color-primary), var(--color-secondary))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>F5</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Networking</h2>
          </div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="#services">Servicios</a>
            <a href="#echo">ECHO CRM</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '10px' }}>
            F5 <span className="gradient-text">Networking</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 30px' }}>
            Redefiniendo la tecnología de comunicación. Facilitando el crecimiento a través de IA y conectividad omnicanal.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button className="glass" style={{ padding: '12px 30px', color: 'white', fontWeight: 'bold', border: '1px solid var(--color-primary)' }}>
              Ver Soluciones
            </button>
            <button style={{ backgroundColor: 'var(--color-secondary)', padding: '12px 30px', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>
              Contactar Experto
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-container">
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestras Soluciones</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass"
              style={{ padding: '40px', transition: 'transform 0.3s ease' }}
              whileHover={{ y: -10, border: '1px solid var(--color-primary)' }}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div style={{ marginBottom: '20px' }}>{service.icon}</div>
              <h3 style={{ marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
                {service.description}
              </p>
              <ul style={{ marginBottom: '25px' }}>
                {service.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" style={{ color: 'var(--color-secondary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                Saber más <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="section-container">
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Quiénes Somos</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '50px' }}>
          {/* Mission */}
          <motion.div
            className="glass"
            style={{ padding: '40px', borderRadius: '20px', borderTop: '3px solid var(--color-primary)' }}
            {...fadeInUp}
            transition={{ delay: 0 }}
            whileHover={{ y: -8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', background: 'rgba(0, 86, 179, 0.15)', borderRadius: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '1.5rem' }}>🎯</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--color-primary)' }}>Nuestra Misión</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
              Conectar empresas con el futuro mediante tecnología avanzada, soluciones automatizadas y atención personalizada.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="glass"
            style={{ padding: '40px', borderRadius: '20px', borderTop: '3px solid var(--color-secondary)' }}
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', background: 'rgba(255, 140, 0, 0.15)', borderRadius: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '1.5rem' }}>🚀</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--color-secondary)' }}>Nuestra Visión</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
              Ser líderes en innovación tecnológica y transformación digital en América Latina, ofreciendo soluciones que impulsen el crecimiento sostenible de nuestros clientes.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="glass"
            style={{ padding: '40px', borderRadius: '20px', borderTop: '3px solid var(--color-accent)' }}
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', background: 'rgba(0, 180, 255, 0.15)', borderRadius: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '1.5rem' }}>💎</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--color-accent)' }}>Nuestros Valores</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Innovación', 'Compromiso', 'Calidad', 'Eficiencia', 'Confianza'].map((valor) => (
                <span key={valor} style={{
                  padding: '6px 14px',
                  background: 'rgba(0,180,255,0.1)',
                  border: '1px solid rgba(0,180,255,0.3)',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  color: 'var(--color-accent)',
                  fontWeight: '500'
                }}>{valor}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ECHO CRM Dedicated Section */}
      <section id="echo" className="glass" style={{ margin: '80px 5%', padding: '80px 5%', borderRadius: '30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center', gap: '50px' }}>
          <motion.div {...fadeInUp}>
            <span style={{ color: 'var(--color-secondary)', fontWeight: 'bold', letterSpacing: '2px' }}>EXCLUSIVO</span>
            <h2 style={{ fontSize: '3rem', margin: '15px 0' }}>ECHO CRM <br /><span className="gradient-text">Omnicanalidad Real</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '30px' }}>
              No dejes que ningún lead se pierda. ECHO integra WhatsApp, Instagram, FB Messenger y Chat Web en un solo flujo de trabajo inteligente para tu equipo de ventas.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ padding: '10px', background: 'rgba(255,140,0,0.1)', borderRadius: '10px' }}><Globe className="text-secondary" /></div>
                <div>
                  <h4 style={{ margin: 0 }}>Alcance Global</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Conecta con clientes en cualquier plataforma.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ padding: '10px', background: 'rgba(0,180,255,0.1)', borderRadius: '10px' }}><Cpu className="text-accent" /></div>
                <div>
                  <h4 style={{ margin: 0 }}>Smart Routing</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Asigna conversaciones al agente correcto automáticamente.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...fadeInUp}
            style={{
              position: 'relative',
              aspectRatio: '16/10',
              background: 'linear-gradient(135deg, #1a1a1a, #0a0a0a)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Mockup UI Inner */}
            <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
              </div>
              <div style={{ flex: 1, display: 'flex', gap: '15px' }}>
                <div style={{ width: '60px', height: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ height: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '5px', width: '40%' }}></div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.02)', borderRadius: '10px' }}></div>
                </div>
              </div>
            </div>
            {/* Orbital Animation Overlay */}
            <motion.div
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div style={{ width: '400px', height: '400px', border: '1px dashed rgba(255,140,0,0.2)', borderRadius: '50%' }}></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section className="section-container" style={{ textAlign: 'center' }}>
        <motion.div {...fadeInUp}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Listo para llevar tu empresa al <span className="gradient-text">siguiente nivel</span>?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px' }}>Únete a las empresas que ya están optimizando su comunicación con F5 Networking.</p>
          <button style={{ backgroundColor: 'var(--color-primary)', padding: '15px 40px', borderRadius: '30px', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(0,86,179,0.3)' }}>
            Empieza Ahora
          </button>
        </motion.div>
      </section>

      <footer style={{ padding: '60px 5% 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
          <div>
            <h3>F5 Networking</h3>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '250px', marginTop: '10px' }}>Facilitando Crecimiento a través de tecnología disruptiva.</p>
          </div>
          <div style={{ display: 'flex', gap: '60px' }}>
            <div>
              <h4 style={{ marginBottom: '15px' }}>Empresa</h4>
              <ul style={{ color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>Sobre Nosotros</li>
                <li>Servicios</li>
                <li>Proyectos</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '15px' }}>Tecnología</h4>
              <ul style={{ color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>ECHO CRM</li>
                <li>IA Bots</li>
                <li>SIP PBX</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
          © {new Date().getFullYear()} F5 Networking. Todos los derechos reservados.
        </div>
      </footer>

      {/* Inline Styles for colors */}
      <style>{`
        .text-primary { color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .text-accent { color: var(--color-accent); }
      `}</style>

      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="agent_6801kkcgpzhgf4d9kcwgnbray3jz"></elevenlabs-convai>
    </div>
  );
};

export default App;
