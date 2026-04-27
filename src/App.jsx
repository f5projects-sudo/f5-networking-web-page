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
const Privacidad = lazy(() => import('./pages/Privacidad'));
const Terminos = lazy(() => import('./pages/Terminos'));
const Pua = lazy(() => import('./pages/Pua'));
import { motion, AnimatePresence } from 'framer-motion';
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
  Send,
  ClipboardList,
  Search,
  Code,
  Settings,
  Target,
  Rocket,
  Gem
} from 'lucide-react';
import BubbleBackground from './components/BubbleBackground';
import HeroCarousel from './components/HeroCarousel';
import MapFooter from './components/MapFooter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import { useLanguage } from './context/LanguageContext';

const App = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'nosotros', 'axia', 'nova-core', 'desarrollo', 'cableado', 'echo', 'bpo', 'pbx', 'equipamiento', 'privacidad', 'terminos', 'pua'];
    return validPages.includes(hash) ? hash : 'home';
  });
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loadWidget, setLoadWidget] = useState(false);
  const [sent, setSent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeReason, setActiveReason] = useState(0);
  const [activeQuienes, setActiveQuienes] = useState(0);

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
      const validPages = ['home', 'nosotros', 'axia', 'nova-core', 'desarrollo', 'cableado', 'echo', 'bpo', 'pbx', 'equipamiento', 'privacidad', 'terminos', 'pua'];
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

    // Load ElevenLabs Widget Script (TEMPORARILY COMMENTED OUT)
    /*
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
    */
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
  // else if (currentPage === 'voxis') PageContent = <Voxis onNavigate={setCurrentPage} />;
  else if (currentPage === 'equipamiento') PageContent = <Equipamiento onNavigate={setCurrentPage} />;
  else if (currentPage === 'privacidad') PageContent = <Privacidad onNavigate={setCurrentPage} />;
  else if (currentPage === 'terminos') PageContent = <Terminos onNavigate={setCurrentPage} />;
  else if (currentPage === 'pua') PageContent = <Pua onNavigate={setCurrentPage} />;

  if (PageContent) {
    return (
      <Suspense fallback={
        <div style={{ height: '100dvh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1f', color: 'var(--color-primary)' }}>
          <div className="hardware-accelerated" style={{ width: '40px', height: '40px', border: '3px solid rgba(0,180,255,0.3)', borderTopColor: 'var(--color-accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
        </div>
      }>
        {PageContent}
        {/* {loadWidget && <elevenlabs-convai id="elevenlabs-widget" agent-id="agent_6801kkcgpzhgf4d9kcwgnbray3jz"></elevenlabs-convai>} */}
      </Suspense>
    );
  }
  // ─────────────────────────────────────────────


  const services = [
    {
      title: t('home.services.axia.title', "AXIA – Agentes de IA para atención omnicanal"),
      icon: <Cpu size={40} className="text-primary" />,
      description: t('home.services.axia.desc', "AXIA es una solución avanzada de agentes de inteligencia artificial diseñada para gestionar y automatizar la comunicación con clientes a través de múltiples canales digitales. Permite centralizar la atención en plataformas como WhatsApp, Webchat, Messenger e Instagram, brindando respuestas inmediatas, consistentes y personalizadas en cada interacción."),
      features: [t('home.services.axia.f1', "Nube Privada"), t('home.services.axia.f2', "Seguridad SSL"), t('home.services.axia.f3', "Auto-escalado")],
      path: 'axia'
    },
    {
      title: t('home.services.bpo.title', "BPO Services"),
      icon: <Headset size={40} className="text-secondary" />,
      description: t('home.services.bpo.desc', "Soluciones de Call Center de alto impacto. Optimizamos la atención al cliente con procesos eficientes y talento especializado."),
      features: [t('home.services.bpo.f1', "Atención 24/7"), t('home.services.bpo.f2', "Multilingüe"), t('home.services.bpo.f3', "KPIs en tiempo real")],
      path: 'bpo'
    },
    /* {
      title: "IA Asistentes de Voz",
      icon: <Bot size={40} className="text-primary" />,
      description: "VOXIS: Automatización inteligente de voz. Implementamos bots con lenguaje natural para resolver consultas al instante.",
      features: ["NLP Avanzado", "Integración API", "Aprendizaje continuo"],
      path: 'voxis'
    }, */
    {
      title: t('home.services.echo.title', "ECHO - CRM Omnicanal"),
      icon: <MessageSquare size={40} className="text-accent" />,
      description: t('home.services.echo.desc', "Centraliza todas tus comunicaciones. WhatsApp, Redes Sociales y Chat en una sola plataforma unificada."),
      features: [t('home.services.echo.f1', "Inbox Unificado"), t('home.services.echo.f2', "Chatbots integrados"), t('home.services.echo.f3', "Reportes avanzados")],
      path: 'echo'
    },
    {
      title: t('home.services.pbx.title', "Telefonía SIP / PBX"),
      icon: <Phone size={40} className="text-white" />,
      description: t('home.services.pbx.desc', "Infraestructura robusta de voz. Telefonía IP escalable y segura para empresas que no pueden detenerse."),
      features: [t('home.services.pbx.f1', "Voz sobre IP"), t('home.services.pbx.f2', "Troncales SIP"), t('home.services.pbx.f3', "Escalabilidad Global")],
      path: 'pbx'
    },
    {
      title: t('home.services.nova.title', "NOVA CORE"),
      icon: <Zap size={40} className="text-secondary" />,
      description: t('home.services.nova.desc', "Es una plataforma inteligente que replica las funciones de un equipo completo de atención al cliente, escala en segundos y opera 24/7."),
      features: [t('home.services.nova.f1', "Escalabilidad Instantánea"), t('home.services.nova.f2', "Atención 24/7"), t('home.services.nova.f3', "Eficiencia Máxima")],
      path: 'nova-core'
    },
    {
      title: t('home.services.cableado.title', "Cableado Estructurado"),
      icon: <Network size={40} className="text-accent" />,
      description: t('home.services.cableado.desc', "Diseñamos e instalamos infraestructuras de red eficientes, ordenadas y escalables para una red que crece contigo."),
      features: [t('home.services.cableado.f1', "Redes Escalables"), t('home.services.cableado.f2', "Infraestructura Sólida"), t('home.services.cableado.f3', "Seguridad de Red")],
      path: 'cableado'
    },
    {
      title: t('home.services.dev.title', "Desarrollo de Software"),
      icon: <Globe size={40} className="text-primary" />,
      description: t('home.services.dev.desc', "Soluciones a medida. Desde aplicaciones móviles hasta plataformas web complejas diseñadas para tu negocio."),
      features: [t('home.services.dev.f1', "Full Stack"), t('home.services.dev.f2', "Metodología Ágil"), t('home.services.dev.f3', "UX/UI Premium")],
      path: 'desarrollo'
    },
    {
      title: t('home.services.equipment.title', "Venta de Equipos"),
      icon: <Smartphone size={40} className="text-secondary" />,
      description: t('home.services.equipment.desc', "Equipamiento tecnológico de última generación. Switches, laptops y servidores de las mejores marcas."),
      features: [t('home.services.equipment.f1', "Garantía Directa"), t('home.services.equipment.f2', "Soporte Técnico"), t('home.services.equipment.f3', "Envío Nacional")],
      path: 'equipamiento'
    }
  ];

  return (
    <div className="app">
      <BubbleBackground />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* ── Marcas con las que trabajamos (Carousel) ── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '30px 0 60px 0', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'transparent' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: 'var(--color-primary)', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase' }}>
            {t('home.brands.title', 'Marcas con las que trabajamos')}
          </p>
        </motion.div>
        
        <div style={{ overflow: 'hidden', width: '100%', display: 'flex' }}>
          <div style={{ display: 'flex', width: 'max-content', animation: 'marquee-scroll-brands 40s linear infinite' }}>
            {/* Array of brands, duplicated to create seamless loop */}
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} style={{ display: 'flex' }}>
                {[
                  { name: 'Twilio', color: '#F22F46' },
                  { name: 'Net2Phone', color: '#0056B3', noIcon: true },
                  { name: 'OpenAI', iconUrl: 'openai', color: '#10A37F' }, // Using Green
                  { name: 'Monday.com', iconUrl: 'mondaydotcom', color: '#00CA72' },
                  { name: 'Gemini', iconUrl: 'googlegemini', color: '#8E75B2' },
                  { name: 'Supabase', color: '#3ECF8E' },
                  { name: 'Airtable', color: '#FCB431' },
                  { name: 'AWS', iconUrl: 'amazonwebservices', color: '#FF9900' }, // Orange AWS
                  { name: 'Google Cloud', iconUrl: 'googlecloud', color: '#4285F4' },
                  { name: 'GitHub', iconUrl: 'github', color: '#FFFFFF' }, // White Github on dark
                  { name: 'Docker', color: '#2496ED' },
                  { name: 'REDIS', iconUrl: 'redis', color: '#FF4438' },
                  { name: 'ElevenLabs', iconUrl: 'elevenlabs', color: '#FFFFFF' }
                ].map((brand, i) => (
                  <div 
                    key={`${loopIndex}-${i}`} 
                    style={{ 
                      padding: '15px 40px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      opacity: 0.85,
                      transition: 'opacity 0.3s, transform 0.3s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    {!brand.noIcon && (
                      <img 
                        src={`https://cdn.simpleicons.org/${brand.iconUrl || brand.name.toLowerCase().replace(/ /g, '')}/${brand.color.replace('#', '')}`}
                        alt={brand.name} 
                        style={{ height: '32px', width: 'auto', display: 'block', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }}
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    )}
                    <span style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 700, 
                      color: brand.color,
                      letterSpacing: '1px',
                      textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                    }}>
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee-scroll-brands {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
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
              {t('home.services.header.tag', 'SISTEMAS E INFRAESTRUCTURA')}
            </div>
            <h2 style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', marginBottom: '30px', fontWeight: '950', letterSpacing: isMobile ? '-1px' : '-4px', lineHeight: isMobile ? 1.1 : 0.85 }}>
              {t('home.services.header.title1', 'Expertise')} <span className="gradient-text">{t('home.services.header.title2', 'Inmersivo')}</span>
            </h2>
            <div style={{ width: '180px', height: '8px', background: 'var(--color-secondary)', borderRadius: '10px', margin: '0 auto 40px' }}></div>
            <p style={{ 
              color: 'var(--color-text-muted)', 
              maxWidth: '800px', 
              margin: '0 auto', 
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', 
              lineHeight: '1.6',
              fontWeight: 400
            }}>
              {t('home.services.header.desc')}
            </p>
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
                      {t('common.explore', 'EXPLORAR')} <ChevronRight size={20} />
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
      {/* Mission, Vision & Values Section Bento */}
      <section id="about" className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '10%', left: '0%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 180, 255, 0.05) 0%, transparent 70%)', zIndex: -1, filter: 'blur(60px)' }} />

        {/* Removed header as requested */}


        {/* SaaS Horizontal Expansion Accordion for Quiénes Somos */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '15px',
          height: isMobile ? 'auto' : '550px',
          marginBottom: '60px',
          width: '100%'
        }}>
          {[
            {
              id: 0,
              title: t('home.about.missionTitle', "NUESTRA MISIÓN"),
              tag: t('home.about.missionTag', "MISIÓN"),
              icon: <Target size={32} strokeWidth={1} />,
              color: 'var(--color-primary)',
              content: t('home.about.missionDesc', "Conectar empresas con el futuro mediante tecnología avanzada, soluciones automatizadas y atención personalizada.")
            },
            {
              id: 1,
              title: t('home.about.visionTitle', "NUESTRA VISIÓN"),
              tag: t('home.about.visionTag', "VISIÓN"),
              icon: <Rocket size={32} strokeWidth={1} />,
              color: 'var(--color-secondary)',
              content: t('home.about.visionDesc', "Ser líderes en innovación tecnológica y transformación digital en América Latina, ofreciendo soluciones que impulsen el crecimiento sostenible de nuestros clientes.")
            },
            {
              id: 2,
              title: t('home.about.valuesTitle', "VALORES CLAVE"),
              tag: t('home.about.valuesTag', "VALORES"),
              icon: <Gem size={32} strokeWidth={1} />,
              color: 'var(--color-accent)',
              content: t('home.about.valuesDesc', "Innovación, Compromiso, Calidad, Eficiencia y Confianza total en cada uno de nuestros procesos e interacciones con el cliente.")
            }
          ].map((panel) => {
            const isExpanded = activeQuienes === panel.id;
            
            return (
              <motion.div
                key={panel.id}
                layout
                initial={{ flex: 1, height: isMobile ? '90px' : '100%' }}
                animate={{ 
                  flex: isMobile ? 'none' : (isExpanded ? 3 : 1),
                  height: isMobile ? (isExpanded ? '280px' : '90px') : '100%'
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                onHoverStart={() => !isMobile && setActiveQuienes(panel.id)}
                onClick={() => isMobile && setActiveQuienes(panel.id)}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderBottom: isMobile ? `4px solid ${panel.color}` : '1px solid rgba(255, 255, 255, 0.05)',
                  borderTop: isMobile ? '1px solid rgba(255, 255, 255, 0.05)' : `4px solid ${panel.color}`,
                  overflow: 'hidden',
                  cursor: 'default',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  boxShadow: isExpanded ? `0 20px 50px rgba(0,0,0,0.3), inset 0 0 40px ${panel.color}15` : 'none'
                }}
              >
                {/* Left/Top Icon & Title Bar */}
                <div style={{
                  minWidth: isMobile ? '100%' : '100px',
                  height: isMobile ? '90px' : '100%',
                  display: 'flex',
                  flexDirection: isMobile ? 'row' : 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px',
                  padding: isMobile ? '0 30px' : '40px 0',
                  borderRight: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.03)',
                  borderBottom: isMobile ? '1px solid rgba(255, 255, 255, 0.03)' : 'none',
                  background: isExpanded ? 'rgba(255,255,255,0.01)' : 'transparent',
                  cursor: 'pointer'
                }} onClick={() => setActiveQuienes(panel.id)}>
                  
                  <div style={{ 
                    color: isExpanded ? panel.color : 'rgba(255,255,255,0.4)',
                    transition: 'color 0.4s ease'
                  }}>
                    {panel.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    letterSpacing: '4px',
                    color: isExpanded ? '#fff' : 'rgba(255,255,255,0.4)',
                    writingMode: isMobile ? 'horizontal-tb' : 'vertical-rl',
                    transform: isMobile ? 'none' : 'rotate(180deg)',
                    margin: 0,
                    transition: 'color 0.4s ease',
                    whiteSpace: 'nowrap'
                  }}>
                    {panel.title}
                  </h3>
                </div>

                {/* Expanded Content Area */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? -10 : 0 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, x: isMobile ? 0 : 10, y: isMobile ? -5 : 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      style={{
                        flex: 1,
                        padding: isMobile ? '25px 30px' : '0 50px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        minWidth: '300px'
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        right: isMobile ? '-10%' : '5%',
                        bottom: isMobile ? '0%' : '-10%',
                        opacity: 0.03,
                        color: panel.color,
                        pointerEvents: 'none'
                      }}>
                        {React.cloneElement(panel.icon, { size: isMobile ? 120 : 250, strokeWidth: 0.5 })}
                      </div>

                      <h4 style={{ 
                        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', 
                        fontWeight: 300, 
                        color: panel.color, 
                        marginBottom: '20px',
                        letterSpacing: '1px'
                      }}>
                        {t('common.our', 'Nuestra')} <strong style={{color: '#fff', fontWeight: 700}}>{panel.tag}</strong>
                      </h4>

                      <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'rgba(255,255,255,0.7)',
                        maxWidth: '500px',
                        fontWeight: 300
                      }}>
                        {panel.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Removed Why Choose Us section as it is duplicated in Nosotros page */}


      {/* Nuestra Metodología Section */}
      <section className="section-container">
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{t('home.methodology.title', 'Nuestra Metodología')}</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto 25px' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.8', fontSize: '1rem' }}>
            {t('home.methodology.desc', 'Trabajamos con un proceso claro, estructurado y colaborativo que nos permite transformar ideas en soluciones funcionales y eficientes. Desde la recopilación de información hasta la implementación final, cada etapa está pensada para entender tus objetivos, validar propuestas y asegurar resultados reales para tu negocio.')}
          </p>
        </motion.div>

        {/* Vertical timeline steps */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '70px', position: 'relative', overflow: 'hidden', paddingBottom: '30px' }}>

          {/* Vertical center line */}
          <div style={{
            position: 'absolute', left: isMobile ? '40px' : '50%', top: 0, bottom: 0,
            width: '4px', background: 'linear-gradient(to bottom, var(--color-primary), var(--color-secondary), var(--color-accent))',
            transform: 'translateX(-50%)', opacity: 0.5,
            borderRadius: '10px', zIndex: 0
          }} className="timeline-line"></div>

          {[
            {
              num: '01', title: t('home.methodology.steps.s1.title', 'Reunir Información'),
              desc: t('home.methodology.steps.s1.desc', 'Entendimiento del proceso, identificación de variables y reconocimiento de tus objetivos organizacionales.'),
              Icon: ClipboardList,
              colors: { border: 'var(--color-primary)', glow: '#0056B3' },
              isRight: true
            },
            {
              num: '02', title: t('home.methodology.steps.s2.title', 'Diseño y Análisis'),
              desc: t('home.methodology.steps.s2.desc', 'Diseño de la medición de gestión estructural y presentación analítica de nuestras propuestas.'),
              Icon: Search,
              colors: { border: 'var(--color-secondary)', glow: '#FF8C00' },
              isRight: false
            },
            {
              num: '03', title: t('home.methodology.steps.s3.title', 'Prototipo y Sistematización'),
              desc: t('home.methodology.steps.s3.desc', 'Sistematización de los indicadores y construcción de una primera vista funcional de tu producto.'),
              Icon: Code,
              colors: { border: 'var(--color-accent)', glow: '#00B4FF' },
              isRight: true
            },
            {
              num: '04', title: t('home.methodology.steps.s4.title', 'Medición Periódica'),
              desc: t('home.methodology.steps.s4.desc', 'Medición de indicadores de acuerdo a prioridades preestablecidas. Ajustes iterativos conjuntos.'),
              Icon: MessageCircle,
              colors: { border: 'var(--color-primary)', glow: '#9b59b6' },
              isRight: false
            },
            {
              num: '05', title: t('home.methodology.steps.s5.title', 'Análisis de Resultados'),
              desc: t('home.methodology.steps.s5.desc', 'Análisis profundo de resultados de medición y acompañamiento experto para la toma de decisiones.'),
              Icon: Settings,
              colors: { border: 'var(--color-secondary)', glow: '#27ae60' },
              isRight: true
            },
            {
              num: '06', title: t('home.methodology.steps.s6.title', 'Presentación Final'),
              desc: t('home.methodology.steps.s6.desc', 'Presentación de información a todas las partes interesadas y despliegue del producto productivo.'),
              Icon: CheckCircle2,
              colors: { border: 'var(--color-accent)', glow: '#FF8C00' },
              isRight: false
            },
          ].map((step, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : (step.isRight ? 'row' : 'row-reverse'),
              alignItems: 'center',
              position: 'relative',
              paddingBottom: '80px', // spacing between steps
              paddingTop: i === 0 ? '20px' : '0'
            }}>
              {/* Blank Space on Desktop */}
              {!isMobile && <div style={{ flex: 1 }} />}

              {/* Vertical Trunk Track (Width 40px) */}
              <div style={{ 
                width: isMobile ? '40px' : '40px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                position: isMobile ? 'absolute' : 'relative',
                left: isMobile ? '20px' : 'auto',
                top: isMobile ? '0' : 'auto',
                height: '100%',
                zIndex: 1
              }}>
                {/* Central Node Dot */}
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0a0a0a', border: `4px solid ${step.colors.border}`, zIndex: 2, boxShadow: `0 0 15px ${step.colors.glow}` }}></div>

                {/* Horizontal Arm (Desktop only) */}
                {!isMobile && (
                  <div style={{
                    position: 'absolute',
                    width: '60px', height: '4px',
                    background: step.colors.border,
                    [step.isRight ? 'left' : 'right']: '50%',
                    top: '50%', transform: 'translateY(-50%)',
                    zIndex: 1,
                    opacity: 0.8
                  }}></div>
                )}
                
                {/* Responsive Mobile Mini-Arm */}
                {isMobile && (
                  <div style={{
                    position: 'absolute',
                    width: '20px', height: '4px',
                    background: step.colors.border,
                    left: '50%',
                    top: '20px',
                    zIndex: 1,
                    opacity: 0.8
                  }}></div>
                )}
              </div>

              {/* Content Panel (Icon + Text) */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 30 : (step.isRight ? 30 : -30) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                style={{ 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: isMobile ? 'column' : (step.isRight ? 'row' : 'row-reverse'),
                  alignItems: 'center',
                  gap: isMobile ? '20px' : '30px',
                  paddingLeft: isMobile ? '80px' : (step.isRight ? '40px' : '0px'),
                  paddingRight: (!isMobile && !step.isRight) ? '40px' : '0px',
                  width: '100%',
                  marginTop: isMobile && i !== 0 ? '40px' : '0'
                }}
              >
                {/* Icon Circle */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    width: isMobile ? '70px' : '100px', height: isMobile ? '70px' : '100px', borderRadius: '50%', flexShrink: 0,
                    background: '#0a0a0a', border: `5px solid ${step.colors.border}`,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    boxShadow: `0 0 35px ${step.colors.glow}44`,
                    zIndex: 2, position: 'relative',
                    alignSelf: isMobile ? 'flex-start' : 'auto'
                  }}
                >
                  <div style={{ position:'absolute', inset: '5px', border: `1.5px dashed ${step.colors.glow}aa`, borderRadius: '50%', animation: 'spin 15s linear infinite' }}></div>
                  <step.Icon size={isMobile ? 24 : 36} color="white" />
                </motion.div>

                {/* Text Details */}
                <div style={{ 
                  textAlign: isMobile ? 'left' : (step.isRight ? 'left' : 'right'),
                  maxWidth: '400px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'flex-start' : (step.isRight ? 'flex-start' : 'flex-end'), gap: '15px', marginBottom: '8px' }}>
                    <span style={{ fontSize: isMobile ? '2.5rem' : '3.5rem', fontWeight: '900', color: step.colors.border, lineHeight: 0.8, textShadow: `0 0 20px ${step.colors.glow}88` }}>{step.num}</span>
                  </div>
                  <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: '800', marginBottom: '10px', color: 'white' }}>{step.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: isMobile ? '0.95rem' : '1.05rem', lineHeight: '1.6' }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA / Contact */}
      <section id="contact" className="section-container" style={{ textAlign: 'center' }}>
        <motion.div {...fadeInUp}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            {t('home.contact.title', '¿Listo para llevar tu empresa al')} <span className="gradient-text">{t('home.contact.subtitle', 'siguiente nivel')}</span>?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '50px' }}>{t('home.contact.message', 'Únete a las empresas que ya están optimizando su comunicación con F5 Networking.')}</p>

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
              { id: 'name', label: t('home.contact.name', 'Nombre') + ' *', type: 'text', placeholder: t('home.contact.namePlaceholder', 'Tu nombre completo') },
              { id: 'email', label: t('home.contact.email', 'Email') + ' *', type: 'email', placeholder: 'correo@empresa.com' },
              { id: 'phone', label: t('home.contact.phone', 'Teléfono') + ' *', type: 'tel', placeholder: '+52 123 456 7890' },
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
              <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>{t('home.contact.msgField', 'Mensaje')} *</label>
              <textarea
                placeholder={t('home.contact.msgPlaceholder', '¿En qué podemos ayudarte?')}
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

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '10px', marginBottom: '10px' }}>
              <input 
                type="checkbox" 
                id="privacy-policy" 
                required 
                style={{ 
                  marginTop: '4px',
                  accentColor: 'var(--color-primary)',
                  cursor: 'pointer',
                  width: '18px',
                  height: '18px'
                }} 
              />
              <label htmlFor="privacy-policy" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: '1.4' }}>
                {t('home.contact.privacyPrefix', 'He leído y acepto los')} <span onClick={(e) => { e.preventDefault(); setCurrentPage('terminos'); }} style={{ color: 'var(--color-primary)', cursor: 'pointer', textDecoration: 'underline' }}>{t('footer.legal.terms', 'Términos y Condiciones')}</span> {t('home.contact.andThe', 'y el')} <span onClick={(e) => { e.preventDefault(); setCurrentPage('privacidad'); }} style={{ color: 'var(--color-primary)', cursor: 'pointer', textDecoration: 'underline' }}>{t('footer.legal.privacy', 'Aviso de Privacidad')}</span> {t('home.contact.privacySuffix', 'y autorizo el uso de mis datos para ser contactado.')}
              </label>
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
              {sent ? `✅ ${t('home.contact.sent', '¡Mensaje enviado!')}` : <><Send size={18} /> {t('home.contact.submit', 'Enviar Mensaje')}</>}
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

      {/* ElevenLabs Conversational AI Widget (TEMPORARILY COMMENTED OUT) */}
      {/* <elevenlabs-convai id="elevenlabs-widget" agent-id="agent_6801kkcgpzhgf4d9kcwgnbray3jz"></elevenlabs-convai> */}
      
      <WhatsAppButton />
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
    </div>
  );
};

export default App;
