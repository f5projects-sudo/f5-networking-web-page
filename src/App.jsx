import React, { useEffect, useState } from 'react';
import Nosotros from './pages/Nosotros';
import Axia from './pages/Axia';
import NovaCore from './pages/NovaCore';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import {
  Headset,
  Bot,
  MessageSquare,
  Phone,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Globe,
  Cpu,
  Activity,
  Zap,
  Network
} from 'lucide-react';
import BubbleBackground from './components/BubbleBackground';
import MapFooter from './components/MapFooter';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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

  // ── Page routing ───────────────────────────────
  if (currentPage === 'nosotros') {
    return <Nosotros onNavigate={setCurrentPage} />;
  }
  if (currentPage === 'axia') {
    return <Axia onNavigate={setCurrentPage} />;
  }
  if (currentPage === 'nova-core') {
    return <NovaCore onNavigate={setCurrentPage} />;
  }
  // ─────────────────────────────────────────────


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
    },
    {
      title: "NOVA CORE",
      icon: <Zap size={40} className="text-secondary" />,
      description: "Es una plataforma inteligente que replica las funciones de un equipo completo de atención al cliente, escala en segundos, opera 24/7 y transforma cada interacción en resultados medibles.",
      features: ["Escalabilidad Instantánea", "Atención 24/7", "Eficiencia Máxima"]
    },
    {
      title: "Cableado Estructurado",
      icon: <Network size={40} className="text-accent" />,
      description: "Diseñamos e instalamos infraestructuras de red eficientes, ordenadas y escalables. Analizamos tu espacio y necesidades para una red que crece contigo hoy y mañana.",
      features: ["Redes Escalables", "Infraestructura Sólida", "Seguridad de Red"]
    }
  ];

  return (
    <div className="app">
      <BubbleBackground />

      {/* Header */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '5px 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
            <img 
              src="/f5-networking-web-page/f5networking_logo_original_safe.png" 
              alt="F5 Networking" 
              style={{ height: '110px', width: 'auto', display: 'block' }} 
            />
          </div>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="nav-link">Inicio</a>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('nosotros')}>Nosotros</span>
            <div className="nav-dropdown">
              <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                Soluciones <ChevronDown size={16} />
              </span>
              <div className="nav-dropdown-content glass" style={{ minWidth: '220px', left: '0' }}>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('axia'); }} style={{ color: 'var(--color-accent)' }}>AXIA</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('nova-core'); }}>NOVA CORE</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Desarrollo de Software</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Cableado Estructurado</a>
                <a href="#echo" onClick={(e) => { e.preventDefault(); scrollTo('echo'); }}>ECHO CRM</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>BPO SERVICES</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>VOXIS</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>PBX DIDS & SMS</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>VENTA DE EQUIPOS</a>
              </div>
            </div>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="nav-link">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px' }}>
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
            <motion.button 
              className="glass" 
              onClick={() => scrollTo('services')} 
              style={{ 
                padding: '12px 30px', 
                color: 'white', 
                fontWeight: 'bold', 
                border: '1px solid var(--color-primary)', 
                cursor: 'pointer' 
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 20px rgba(0, 86, 179, 0.6)', 
                backgroundColor: 'rgba(0, 86, 179, 0.15)' 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Ver Soluciones
            </motion.button>
            <motion.button 
              onClick={() => scrollTo('contact')} 
              style={{ 
                backgroundColor: 'var(--color-secondary)', 
                border: 'none',
                padding: '12px 30px', 
                borderRadius: '8px', 
                color: 'white', 
                fontWeight: 'bold', 
                cursor: 'pointer' 
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 25px rgba(255, 140, 0, 0.8)',
                filter: 'brightness(1.1)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Contactar Experto
            </motion.button>
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
      <section id="about" className="section-container">
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

      {/* Why Choose Us Section */}
      <section className="section-container">
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>¿Por qué elegirnos?</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto 30px' }}></div>
        </motion.div>

        {/* Intro block */}
        <motion.div
          {...fadeInUp}
          className="glass"
          style={{
            padding: '50px',
            borderRadius: '24px',
            marginBottom: '40px',
            background: 'linear-gradient(135deg, rgba(0,86,179,0.08), rgba(255,140,0,0.05))',
            borderLeft: '4px solid var(--color-primary)',
          }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
            <span className="gradient-text">F5 Networking</span>
          </h3>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '20px' }}>
            Es una empresa dedicada a crear soluciones de conectividad, automatización e infraestructura digital que impulsan la eficiencia, mejoran la comunicación y aceleran la transformación tecnológica de las organizaciones.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.9', fontSize: '1.05rem', fontStyle: 'italic' }}>
            Elegir F5 Networking significa trabajar con un socio tecnológico que entiende tus retos y construye soluciones diseñadas para tu realidad.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px' }}>
          {[
            {
              icon: '🎛️',
              title: 'Ajuste a la medida',
              desc: 'Soluciones diseñadas según las necesidades reales de cada empresa.',
              color: 'var(--color-primary)',
              bg: 'rgba(0,86,179,0.1)',
            },
            {
              icon: '⚙️',
              title: 'Automatización',
              desc: 'Optimización de procesos para mejorar eficiencia y control.',
              color: 'var(--color-secondary)',
              bg: 'rgba(255,140,0,0.1)',
            },
            {
              icon: '🛡️',
              title: 'Confiabilidad y seguridad',
              desc: 'Infraestructura estable, protegida y preparada para crecer.',
              color: 'var(--color-accent)',
              bg: 'rgba(0,180,255,0.1)',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ padding: '35px', borderRadius: '18px', borderBottom: `3px solid ${item.color}` }}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '55px', height: '55px', background: item.bg,
                borderRadius: '14px', marginBottom: '20px', fontSize: '1.6rem'
              }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: item.color }}>{item.title}</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nuestra Metodología Section */}
      <section className="section-container">
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestra Metodología</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto 25px' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.8', fontSize: '1rem' }}>
            Trabajamos con un proceso claro, estructurado y colaborativo que nos permite transformar ideas en soluciones funcionales y eficientes. Desde la recopilación de información hasta la implementación final, cada etapa está pensada para entender tus objetivos, validar propuestas y asegurar resultados reales para tu negocio.
          </p>
        </motion.div>

        {/* Vertical timeline steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginTop: '70px', position: 'relative' }}>

          {/* Vertical center line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: '2px', background: 'linear-gradient(to bottom, var(--color-primary), var(--color-secondary), var(--color-accent))',
            transform: 'translateX(-50%)', opacity: 0.3,
            display: 'none'
          }} className="timeline-line"></div>

          {[
            {
              num: '01', title: 'Reunir Información',
              desc: 'Centralización de la información de tu empresa o negocio y reconocimiento de tus objetivos.',
              img: `${import.meta.env.BASE_URL}step_reunir_info_1773243319702.png`,
              colors: { border: 'var(--color-primary)', glow: '#0056B3' },
              fromLeft: true
            },
            {
              num: '02', title: 'Análisis',
              desc: 'De diferentes soluciones y presentación de nuestras propuestas.',
              img: `${import.meta.env.BASE_URL}step_analisis_1773243343222.png`,
              colors: { border: 'var(--color-secondary)', glow: '#FF8C00' },
              fromLeft: false
            },
            {
              num: '03', title: 'Prototipo',
              desc: 'Centralización de la información de tu empresa o negocio y reconocimiento de tus objetivos.',
              img: `${import.meta.env.BASE_URL}step_prototipo_1773243392190.png`,
              colors: { border: 'var(--color-accent)', glow: '#00B4FF' },
              fromLeft: true
            },
            {
              num: '04', title: 'Feedback',
              desc: '¡Te escuchamos! Ajustes del prototipo y comentarios.',
              img: `${import.meta.env.BASE_URL}step_feedback_1773243461422.png`,
              colors: { border: 'var(--color-primary)', glow: '#9b59b6' },
              fromLeft: false
            },
            {
              num: '05', title: 'Pruebas',
              desc: 'Listo para probar en campo.',
              img: `${import.meta.env.BASE_URL}step_pruebas_1773243483294.png`,
              colors: { border: 'var(--color-secondary)', glow: '#27ae60' },
              fromLeft: true
            },
            {
              num: '06', title: 'Implementación',
              desc: 'Tu producto 100% productivo.',
              img: `${import.meta.env.BASE_URL}step_implementacion_1773243789918.png`,
              colors: { border: 'var(--color-accent)', glow: '#FF8C00' },
              fromLeft: false
            },
          ].map((step, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: step.fromLeft ? 'row' : 'row-reverse',
              gap: '40px',
              alignItems: 'center',
            }}>
              {/* Visual / Image Panel */}
              <motion.div
                initial={{ opacity: 0, x: step.fromLeft ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  flex: 1,
                  aspectRatio: '16/9',
                  border: `1px solid ${step.colors.border}`,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: `0 0 50px ${step.colors.glow}33`,
                  minHeight: '220px',
                  background: '#000',
                }}
              >
                {/* Real image */}
                <img
                  src={step.img}
                  alt={step.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    opacity: 0.92,
                  }}
                />
                {/* Subtle overlay gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, ${step.colors.glow}22, transparent 60%)`,
                  pointerEvents: 'none'
                }} />
                {/* Step number badge */}
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  background: step.colors.border,
                  color: 'white', fontWeight: 'bold', fontSize: '0.8rem',
                  padding: '4px 10px', borderRadius: '20px', letterSpacing: '1px'
                }}>PASO {step.num}</div>
              </motion.div>

              {/* Text Panel */}
              <motion.div
                initial={{ opacity: 0, x: step.fromLeft ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                style={{ flex: 1, padding: '10px 20px' }}
              >
                <div style={{
                  display: 'inline-block',
                  fontSize: '3.5rem', fontWeight: '900', lineHeight: 1,
                  background: `linear-gradient(135deg, ${step.colors.glow}, ${step.colors.border})`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  marginBottom: '12px', opacity: 0.3
                }}>{step.num}</div>
                <h3 style={{ fontSize: '1.7rem', marginBottom: '16px', marginTop: '-10px' }}>{step.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '20px' }}>{step.desc}</p>
                <a href="#services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: step.colors.border, fontWeight: '600', fontSize: '0.9rem',
                  textDecoration: 'none', borderBottom: `1px solid ${step.colors.border}44`,
                  paddingBottom: '3px'
                }}>
                  Ver Nuestros Servicios →
                </a>
              </motion.div>
            </div>
          ))}
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

      {/* CTA / Contact */}
      <section id="contact" className="section-container" style={{ textAlign: 'center' }}>
        <motion.div {...fadeInUp}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Listo para llevar tu empresa al <span className="gradient-text">siguiente nivel</span>?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '50px' }}>Únete a las empresas que ya están optimizando su comunicación con F5 Networking.</p>
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon btn-neon-whatsapp"
            >
              <span className="btn-neon-icon">💬</span>
              WhatsApp
            </a>
            <a
              href="mailto:contacto@f5networking.com"
              className="btn-neon btn-neon-email"
            >
              <span className="btn-neon-icon">✉️</span>
              Enviar Email
            </a>
          </div>
        </motion.div>
      </section>

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
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
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
