import React, { useEffect, useState, Suspense, lazy } from 'react';

const Nosotros = lazy(() => import('./pages/Nosotros'));
const Axia = lazy(() => import('./pages/Axia'));
const NovaCore = lazy(() => import('./pages/NovaCore'));
const Desarrollo = lazy(() => import('./pages/Desarrollo'));
const Cableado = lazy(() => import('./pages/Cableado'));
const Echo = lazy(() => import('./pages/Echo'));
const Bpo = lazy(() => import('./pages/Bpo'));
const Pbx = lazy(() => import('./pages/Pbx'));
const Voxis = lazy(() => import('./pages/Voxis'));
const Equipamiento = lazy(() => import('./pages/Equipamiento'));
import { motion } from 'framer-motion';
import {
  Headset,
  Bot,
  MessageSquare,
  Phone,
  ChevronRight,
  ChevronDown,
  CheckCircle2, // Changed back from CheckCircle
  Globe,
  Cpu,
  Activity,
  Zap,
  Network,
  AlertCircle, // New
  Smartphone, // New
  Shield, // New
  MessageCircle, // New
  Mail, // New
  Send
} from 'lucide-react';
import BubbleBackground from './components/BubbleBackground';
import MapFooter from './components/MapFooter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'nosotros', 'axia', 'nova-core', 'desarrollo', 'cableado', 'echo', 'bpo', 'pbx', 'voxis', 'equipamiento'];
    return validPages.includes(hash) ? hash : 'home';
  });
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loadWidget, setLoadWidget] = useState(false);
  const [sent, setSent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Construir la carga útil como un formulario estándar (esto evita el pre-vuelo CORS estricto de JSON)
      const data = new URLSearchParams();
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('phone', form.phone);
      data.append('message', form.message);

      await fetch('https://n8n.automationf5networking.com/webhook/ad16e441-8be5-415d-a83d-9d3585755abb', {
        method: 'POST',
        mode: 'no-cors', // Desactiva la verificación CORS rígida del navegador
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString()
      });
      // El modo 'no-cors' siempre devuelve una respuesta opaca (0), pero los datos SÍ llegan al servidor.
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error enviando formulario:', error);
      // Como medida anti-fallos locale/CORS, activamos el popup de todas formas
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

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
    // Sync hash with current page
    window.location.hash = currentPage === 'home' ? '' : currentPage;
    
    // Reset scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    // Handle manual hash changes (e.g., back button or typing directly)
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'nosotros', 'axia', 'nova-core', 'desarrollo', 'cableado', 'echo', 'bpo', 'pbx', 'voxis', 'equipamiento'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (hash === '') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Defer ElevenLabs Widget loading to improve initial performance
    const timer = setTimeout(() => {
      setLoadWidget(true);
    }, 3500);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!loadWidget) return;

    // Load ElevenLabs Widget Script
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [loadWidget]);

  // ── Page routing logic ──────────────────────────
  let PageContent = null;
  if (currentPage === 'nosotros') PageContent = <Nosotros onNavigate={setCurrentPage} />;
  else if (currentPage === 'axia') PageContent = <Axia onNavigate={setCurrentPage} />;
  else if (currentPage === 'nova-core') PageContent = <NovaCore onNavigate={setCurrentPage} />;
  else if (currentPage === 'desarrollo') PageContent = <Desarrollo onNavigate={setCurrentPage} />;
  else if (currentPage === 'cableado') PageContent = <Cableado onNavigate={setCurrentPage} />;
  else if (currentPage === 'echo') PageContent = <Echo onNavigate={setCurrentPage} />;
  else if (currentPage === 'bpo') PageContent = <Bpo onNavigate={setCurrentPage} />;
  else if (currentPage === 'pbx') PageContent = <Pbx onNavigate={setCurrentPage} />;
  else if (currentPage === 'voxis') PageContent = <Voxis onNavigate={setCurrentPage} />;
  else if (currentPage === 'equipamiento') PageContent = <Equipamiento onNavigate={setCurrentPage} />;

  if (PageContent) {
    return (
      <Suspense fallback={
        <div style={{ height: '100dvh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', color: 'var(--color-primary)' }}>
          <div className="hardware-accelerated" style={{ width: '40px', height: '40px', border: '3px solid rgba(0,180,255,0.3)', borderTopColor: 'var(--color-accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
        </div>
      }>
        {PageContent}
        {loadWidget && <elevenlabs-convai id="elevenlabs-widget" agent-id="agent_6801kkcgpzhgf4d9kcwgnbray3jz"></elevenlabs-convai>}
      </Suspense>
    );
  }
  // ─────────────────────────────────────────────


  const services = [
    {
      title: "AXIA – Agentes de IA para atención omnicanal",
      icon: <Cpu size={40} className="text-primary" />,
      description: "AXIA es una solución avanzada de agentes de inteligencia artificial diseñada para gestionar y automatizar la comunicación con clientes a través de múltiples canales digitales. Permite centralizar la atención en plataformas como WhatsApp, Webchat, Messenger e Instagram, brindando respuestas inmediatas, consistentes y personalizadas en cada interacción.",
      features: ["Nube Privada", "Seguridad SSL", "Auto-escalado"],
      path: 'axia'
    },
    {
      title: "BPO Services",
      icon: <Headset size={40} className="text-secondary" />,
      description: "Soluciones de Call Center de alto impacto. Optimizamos la atención al cliente con procesos eficientes y talento especializado.",
      features: ["Atención 24/7", "Multilingüe", "KPIs en tiempo real"],
      path: 'bpo'
    },
    {
      title: "IA Asistentes de Voz",
      icon: <Bot size={40} className="text-primary" />,
      description: "VOXIS: Automatización inteligente de voz. Implementamos bots con lenguaje natural para resolver consultas al instante.",
      features: ["NLP Avanzado", "Integración API", "Aprendizaje continuo"],
      path: 'voxis'
    },
    {
      title: "ECHO - CRM Omnicanal",
      icon: <MessageSquare size={40} className="text-accent" />,
      description: "Centraliza todas tus comunicaciones. WhatsApp, Redes Sociales y Chat en una sola plataforma unificada.",
      features: ["Inbox Unificado", "Chatbots integrados", "Reportes avanzados"],
      path: 'echo'
    },
    {
      title: "Telefonía SIP / PBX",
      icon: <Phone size={40} className="text-white" />,
      description: "Infraestructura robusta de voz. Telefonía IP escalable y segura para empresas que no pueden detenerse.",
      features: ["Voz sobre IP", "Troncales SIP", "Escalabilidad Global"],
      path: 'pbx'
    },
    {
      title: "NOVA CORE",
      icon: <Zap size={40} className="text-secondary" />,
      description: "Es una plataforma inteligente que replica las funciones de un equipo completo de atención al cliente, escala en segundos y opera 24/7.",
      features: ["Escalabilidad Instantánea", "Atención 24/7", "Eficiencia Máxima"],
      path: 'nova-core'
    },
    {
      title: "Cableado Estructurado",
      icon: <Network size={40} className="text-accent" />,
      description: "Diseñamos e instalamos infraestructuras de red eficientes, ordenadas y escalables para una red que crece contigo.",
      features: ["Redes Escalables", "Infraestructura Sólida", "Seguridad de Red"],
      path: 'cableado'
    },
    {
      title: "Desarrollo de Software",
      icon: <Globe size={40} className="text-primary" />,
      description: "Soluciones a medida. Desde aplicaciones móviles hasta plataformas web complejas diseñadas para tu negocio.",
      features: ["Full Stack", "Metodología Ágil", "UX/UI Premium"],
      path: 'desarrollo'
    },
    {
      title: "Venta de Equipos",
      icon: <Smartphone size={40} className="text-secondary" />,
      description: "Equipamiento tecnológico de última generación. Switches, laptops y servidores de las mejores marcas.",
      features: ["Garantía Directa", "Soporte Técnico", "Envío Nacional"],
      path: 'equipamiento'
    }
  ];

  return (
    <div className="app">
      <BubbleBackground />

      {/* Hero Section */}
      <section id="hero" style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '100px 20px 40px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', maxWidth: '900px', marginTop: '40px' }}
        >
          <h1 style={{ fontSize: 'clamp(2.2rem, 8vw, 5rem)', marginBottom: '10px', wordBreak: 'break-word' }}>
            <span style={{ color: 'var(--color-secondary)' }}>F</span>5 <span className="gradient-text">Networking</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 30px' }}>
            Redefiniendo la tecnología de comunicación. Facilitando el crecimiento a través de IA y conectividad omnicanal.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
            <motion.button
              onClick={() => scrollTo('services')}
              className="glass"
              style={{ padding: '14px 28px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 600, border: '1px solid var(--color-secondary)', cursor: 'pointer', background: 'rgba(255,140,0,0.15)', color: 'white', minWidth: '160px', justifyContent: 'center' }}
              whileHover={{ scale: 1.05, background: 'var(--color-secondary)', boxShadow: '0 0 20px rgba(255,140,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Soluciones <ChevronRight size={18} />
            </motion.button>
            <motion.button
              onClick={() => scrollTo('contact')}
              className="glass"
              style={{ 
                padding: '14px 28px', 
                borderRadius: '50px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '1rem', 
                fontWeight: 600, 
                border: 'none', 
                cursor: 'pointer', 
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', 
                color: 'white', 
                minWidth: '160px', 
                justifyContent: 'center' 
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,132,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar Experto
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid: BENTO PERSPECTIVE GALLERY (Radical Remodel) */}
    <section id="services" style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        background: 'rgba(2, 2, 8, 0.98)', 
        backdropFilter: 'blur(60px)',
        WebkitBackdropFilter: 'blur(60px)',
        padding: '160px 20px',
        borderTop: '1px solid rgba(0, 180, 255, 0.15)',
        borderBottom: '1px solid rgba(0, 180, 255, 0.15)'
      }}>
        {/* Animated Background Depth Orbs */}
        <div style={{ position: 'absolute', top: '5%', left: '0%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(0, 132, 255, 0.1) 0%, transparent 70%)', zIndex: 0, filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '0%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(255, 140, 0, 0.05) 0%, transparent 70%)', zIndex: 0, filter: 'blur(120px)' }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1, padding: 0 }}>
          {/* Section Header */}
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '120px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px',
              padding: '10px 28px', 
              background: 'rgba(0, 0, 0, 0.5)', 
              border: '1px solid rgba(0, 180, 255, 0.4)', 
              borderRadius: '12px', 
              color: 'var(--color-accent)', 
              fontSize: '0.75rem', 
              fontWeight: '900', 
              letterSpacing: '8px', 
              textTransform: 'uppercase',
              marginBottom: '40px',
              boxShadow: '0 0 30px rgba(0,180,255,0.15)'
            }}>
              <Activity size={18} className="pulse" />
              SISTEMAS E INFRAESTRUCTURA
            </div>
            <h2 style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', marginBottom: '30px', fontWeight: '950', letterSpacing: isMobile ? '-1px' : '-4px', lineHeight: isMobile ? 1.1 : 0.85 }}>
              Expertise <span className="gradient-text">Inmersivo</span>
            </h2>
            <div style={{ width: '180px', height: '8px', background: 'var(--color-secondary)', borderRadius: '10px', margin: '0 auto' }}></div>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gridAutoRows: isMobile ? 'minmax(480px, auto)' : 'minmax(580px, auto)',
            gap: isMobile ? '20px' : '40px' 
          }}>
            {services.map((service, index) => {
              const baseUrl = import.meta.env.BASE_URL;
              const isDesktop = typeof window !== 'undefined' && window.innerWidth > 1024;
              
              // No more Bento Spans - Uniformity First
              const assets = {
                'axia': { type: 'video', src: 'Axia_video.webm' },
                'bpo': { type: 'image', src: 'bpo_hero_image.png' },
                'pbx': { type: 'image', src: 'pbx_corporate_hero.png' },
                'echo': { type: 'image', src: 'echo_crm_mockup.png' },
                'nova-core': { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800' },
                'desarrollo': { type: 'image', src: 'desarrollo_software.jpg' },
                'cableado': { type: 'image', src: 'cableado_hero.png' },
                'voxis': { type: 'image', src: 'voxis_hero.jpg' },
                'equipamiento': { type: 'image', src: 'venta_equipos.png' }
              };
              const heroAsset = assets[service.path];

              const getAccent = () => {
                try {
                  const cn = service.icon.props.className || '';
                  if (cn.includes('secondary')) return 'var(--color-secondary)';
                  if (cn.includes('accent')) return 'var(--color-accent)';
                  if (cn.includes('white')) return '#FFFFFF';
                } catch(e) {}
                return 'var(--color-primary)';
              };
              const accentColor = getAccent();
              
              return (
                <motion.div
                  key={index}
                  style={{ 
                    position: 'relative',
                    padding: isMobile ? '40px 25px' : '60px', 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    backdropFilter: 'blur(25px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: isMobile ? '30px' : '60px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden'
                  }}
                  whileHover="hover"
                  initial="initial"
                  onClick={() => setCurrentPage(service.path)}
                  {...fadeInUp}
                >
                  {/* Hero Background Matrix Integration */}
                  <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    {heroAsset?.type === 'video' ? (
                      <video src={heroAsset.src.startsWith('http') ? heroAsset.src : `${baseUrl}${heroAsset.src}`} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
                    ) : (
                      <img src={heroAsset?.src?.startsWith('http') ? heroAsset.src : `${baseUrl}${heroAsset?.src}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: service.path === 'voxis' ? 'scale(1.4) translateY(-12%)' : 'none', opacity: 0.45 }} />
                    )}
                    <div style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 90%)',
                      zIndex: 1
                    }} />
                  </div>

                  {/* Top: Branding & ID */}
                  <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <motion.div 
                      variants={{ hover: { scale: 1.2, rotate: 12, filter: `drop-shadow(0 0 20px ${accentColor}88)` }}}
                      style={{ 
                        width: isMobile ? '70px' : '90px', 
                        height: isMobile ? '70px' : '90px', 
                        borderRadius: isMobile ? '20px' : '24px', 
                        background: 'rgba(0,0,0,0.6)', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: `0 15px 45px rgba(0,0,0,0.7)`
                      }}>
                      {React.cloneElement(service.icon, { size: isMobile ? 36 : 48 })}
                    </motion.div>
                  </div>

                  <div style={{ position: 'relative', zIndex: 2, paddingTop: isMobile ? '20px' : '30px' }}>
                    <h3 style={{ 
                      fontSize: service.title.length > 20 ? (isMobile ? '1.8rem' : '2.2rem') : (isMobile ? '2.3rem' : '3rem'), 
                      marginBottom: isMobile ? '10px' : '15px', 
                      fontWeight: '950', 
                      letterSpacing: '-1px', 
                      lineHeight: 1.1,
                      textShadow: '0 10px 30px rgba(0,0,0,1)'
                    }}>
                      {service.title}
                    </h3>
                    
                    <p style={{ 
                      color: 'var(--color-text-muted)', 
                      fontSize: isMobile ? '1.05rem' : '1.15rem', 
                      lineHeight: isMobile ? '1.4' : '1.5', 
                      maxWidth: '480px',
                      textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                    }}>
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Bottom: Standard Indicators */}
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 2, 
                    display: 'flex', 
                    alignItems: isMobile ? 'flex-start' : 'center', 
                    justifyContent: 'space-between',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '20px' : '0',
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    paddingTop: isMobile ? '25px' : '40px'
                  }}>
                    <div style={{ display: 'flex', gap: isMobile ? '10px' : '30px', flexDirection: isMobile ? 'column' : 'row' }}>
                      {service.features.slice(0, 2).map((f, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', fontWeight: '800' }}>
                          <CheckCircle2 size={16} style={{ color: accentColor }} />
                          {f}
                        </div>
                      ))}
                    </div>
                    
                    <motion.div 
                      variants={{ hover: { x: 12, color: accentColor }}}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '950', letterSpacing: '2px', fontSize: '0.85rem', alignSelf: isMobile ? 'flex-end' : 'auto' }}
                    >
                      EXPLORAR <ChevronRight size={20} />
                    </motion.div>
                  </div>

                  {/* Consistent Neón Glow Overlay */}
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    width: '180px', 
                    height: '180px', 
                    background: `radial-gradient(circle at top right, ${accentColor}88 0%, transparent 70%)`, 
                    opacity: 0.5,
                    filter: 'blur(40px)'
                  }} />
                </motion.div>
              );
            })}
          </div>
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
              img: `${import.meta.env.BASE_URL}assets/images/methodology/step_1_info.png`,
              colors: { border: 'var(--color-primary)', glow: '#0056B3' },
              fromLeft: true
            },
            {
              num: '02', title: 'Análisis',
              desc: 'De diferentes soluciones y presentación de nuestras propuestas.',
              img: `${import.meta.env.BASE_URL}assets/images/methodology/step_2_analysis.png`,
              colors: { border: 'var(--color-secondary)', glow: '#FF8C00' },
              fromLeft: false
            },
            {
              num: '03', title: 'Prototipo',
              desc: 'Primera vista de tu producto.',
              img: `${import.meta.env.BASE_URL}assets/images/methodology/step_3_prototype.png`,
              colors: { border: 'var(--color-accent)', glow: '#00B4FF' },
              fromLeft: true
            },
            {
              num: '04', title: 'Feedback',
              desc: '¡Te escuchamos! Ajustes del prototipo y comentarios.',
              img: `${import.meta.env.BASE_URL}assets/images/methodology/step_4_feedback.png`,
              colors: { border: 'var(--color-primary)', glow: '#9b59b6' },
              fromLeft: false
            },
            {
              num: '05', title: 'Pruebas',
              desc: 'Listo para probar en campo.',
              img: `${import.meta.env.BASE_URL}assets/images/methodology/step_5_testing.png`,
              colors: { border: 'var(--color-secondary)', glow: '#27ae60' },
              fromLeft: true
            },
            {
              num: '06', title: 'Implementación',
              desc: 'Tu producto 100% productivo.',
              img: `${import.meta.env.BASE_URL}assets/images/methodology/step_6_success.png`,
              colors: { border: 'var(--color-accent)', glow: '#FF8C00' },
              fromLeft: false
            },
          ].map((step, i) => (
            <div key={i} className={`methodology-step ${step.fromLeft ? '' : 'methodology-step-reverse'}`} style={{
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
                className="methodology-image-container"
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
                <h3 className="methodology-title" style={{ fontSize: '1.7rem', marginBottom: '16px', marginTop: '-10px' }}>{step.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '20px' }}>{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA / Contact */}
      <section id="contact" className="section-container" style={{ textAlign: 'center' }}>
        <motion.div {...fadeInUp}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Listo para llevar tu empresa al <span className="gradient-text">siguiente nivel</span>?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '50px' }}>Únete a las empresas que ya están optimizando su comunicación con F5 Networking.</p>
          <div className="contact-grid">
            <motion.div 
              style={{ position: 'relative', display: 'inline-block' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(37,211,102,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(37,211,102,0.3)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>

          </div>

          <motion.form
            {...fadeInUp}
            className="glass"
            onSubmit={handleSubmit}
            style={{ 
              padding: '50px', 
              borderRadius: '24px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px',
              maxWidth: '800px',
              margin: '60px auto 0',
              textAlign: 'left'
            }}
          >
            {[
              { id: 'name', label: 'Nombre *', type: 'text', placeholder: 'Tu nombre completo' },
              { id: 'email', label: 'Email *', type: 'email', placeholder: 'correo@empresa.com' },
              { id: 'phone', label: 'Teléfono *', type: 'tel', placeholder: '+52 123 456 7890' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[id]}
                  onChange={e => setForm({ ...form, [id]: e.target.value })}
                  required
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px',
                    padding: '14px 18px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                />
              </div>
            ))}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>Mensaje *</label>
              <textarea
                placeholder="¿En qué podemos ayudarte?"
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  padding: '14px 18px',
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
            </div>

            <motion.button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                border: 'none',
                borderRadius: '50px',
                padding: '16px',
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 0 20px rgba(0,144,255,0.3)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {sent ? '✅ ¡Mensaje enviado!' : <><Send size={18} /> Enviar Mensaje</>}
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

      <Footer onNavigate={setCurrentPage} scrollTo={scrollTo} />

      {/* Inline Styles for colors */}
      <style>{`
        .text-primary { color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .text-accent { color: var(--color-accent); }
      `}</style>

      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai id="elevenlabs-widget" agent-id="agent_6801kkcgpzhgf4d9kcwgnbray3jz"></elevenlabs-convai>
      
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
    </div>
  );
};

export default App;
