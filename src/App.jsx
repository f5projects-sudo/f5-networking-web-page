import React, { useEffect, useState } from 'react';
import Nosotros from './pages/Nosotros';
import Axia from './pages/Axia';
import NovaCore from './pages/NovaCore';
import Desarrollo from './pages/Desarrollo';
import Cableado from './pages/Cableado';
import Echo from './pages/Echo';
import Bpo from './pages/Bpo';
import Pbx from './pages/Pbx';
import Voxis from './pages/Voxis';
import Equipamiento from './pages/Equipamiento';
import { motion } from 'framer-motion';
import {
  Headset,
  Bot,
  MessageSquare,
  Phone,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  Globe,
  Cpu,
  Activity,
  Zap,
  Network,
  AlertCircle,
  Smartphone,
  Shield,
  MessageCircle,
  Mail,
  Send,
  HeadphonesIcon,
  ShieldCheck,
  Award,
  Settings2
} from 'lucide-react';
import BubbleBackground from './components/BubbleBackground';
import MapFooter from './components/MapFooter';
import Navbar from './components/Navbar';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
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

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

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
      title: "Desarrollo de Software",
      icon: <Cpu size={40} className="text-secondary" />,
      description: "Software a medida. Desarrollamos aplicaciones web y móviles escalables, seguras y robustas.",
      features: ["Web & Mobile", "Cloud Ready", "UX Premium"]
    },
    {
      title: "Cableado Estructurado",
      icon: <Network size={40} className="text-accent" />,
      description: "Diseñamos e instalamos infraestructuras de red eficientes, ordenadas y escalables. Analizamos tu espacio y necesidades para una red que crece contigo hoy y mañana.",
      features: ["Redes Escalables", "Infraestructura Sólida", "Seguridad de Red"]
    }
  ];

  if (currentPage === 'nosotros') return <Nosotros onNavigate={handleNavigate} />;
  if (currentPage === 'axia') return <Axia onNavigate={handleNavigate} />;
  if (currentPage === 'novacore') return <NovaCore onNavigate={handleNavigate} />;
  if (currentPage === 'desarrollo') return <Desarrollo onNavigate={handleNavigate} />;
  if (currentPage === 'cableado') return <Cableado onNavigate={handleNavigate} />;
  if (currentPage === 'echo') return <Echo onNavigate={handleNavigate} />;
  if (currentPage === 'bpo') return <Bpo onNavigate={handleNavigate} />;
  if (currentPage === 'pbx') return <Pbx onNavigate={handleNavigate} />;
  if (currentPage === 'voxis') return <Voxis onNavigate={handleNavigate} />;
  if (currentPage === 'equipamiento') return <Equipamiento onNavigate={handleNavigate} />;

  return (
    <div className="app">
      <BubbleBackground />
      <Navbar onNavigate={handleNavigate} activePage="home" />

      {/* Hero Section */}
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 5%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '30px' }}>
            <span style={{ color: 'var(--color-secondary)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '2px' }}>EVOLUCIÓN DIGITAL</span>
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '20px' }}>
            Potenciamos tu <span className="gradient-text">Conectividad</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Soluciones integrales de infraestructura, automatización y comunicación inteligente para empresas que miran hacia el futuro.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-neon" onClick={() => scrollTo('services')}>Nuestros Servicios</button>
            <button
              style={{ padding: '16px 44px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontWeight: '700' }}
              onClick={() => handleNavigate('nosotros')}
            >Conócenos</button>
          </div>
        </motion.div>
      </section>

      {/* Brand Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="marquee-item">AFISA</div>
              <div className="marquee-item">CREDITERIUM</div>
              <div className="marquee-item">RECYGLASS</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <section id="services" className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Nuestros <span className="gradient-text">Servicios</span></h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Tecnología de vanguardia para cada necesidad de tu negocio.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass"
              style={{
                padding: '50px 40px',
                borderRadius: '30px',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, borderColor: 'rgba(255,255,255,0.2)' }}
              onClick={() => {
                if (service.title === "BPO Services") handleNavigate('bpo');
                if (service.title === "IA Asistentes Virtuales") handleNavigate('voxis');
                if (service.title === "ECHO - CRM Omnicanal") handleNavigate('echo');
                if (service.title === "Telefonía SIP / PBX") handleNavigate('pbx');
                if (service.title === "Desarrollo de Software") handleNavigate('desarrollo');
                if (service.title === "Cableado Estructurado") handleNavigate('cableado');
              }}
            >
              <div style={{ marginBottom: '30px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{service.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px', lineHeight: 1.7 }}>{service.description}</p>
              <ul style={{ marginBottom: '25px' }}>
                {service.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.9rem' }}>
                    <CheckCircle size={16} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent)', fontWeight: '700' }}>
                Saber más <ChevronRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Nuestra <span className="gradient-text">Metodología</span></h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.3rem' }}>De la idea a la implementación con precisión absoluta.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', position: 'relative' }}>
          {/* Connector Line (Desktop) */}
          <div style={{
            position: 'absolute', left: '50%', top: '50px', bottom: '50px',
            width: '2px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
            display: 'none' // Hidden for now, can enable with media queries
          }}></div>

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
          ].map((step, index) => (
            <div key={index} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexDirection: step.fromLeft ? 'row' : 'row-reverse',
              gap: '60px', flexWrap: 'wrap'
            }}>
              <motion.div
                initial={{ opacity: 0, x: step.fromLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ flex: '1', minWidth: '300px' }}
              >
                <div style={{
                  position: 'relative', borderRadius: '30px', overflow: 'hidden',
                  border: `1px solid ${step.colors.border}44`,
                  boxShadow: `0 20px 50px -20px ${step.colors.glow}44`
                }}>
                  <img src={step.img} alt={step.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(${step.fromLeft ? 'to right' : 'to left'}, rgba(5,5,5,0.8), transparent)`
                  }}></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: step.fromLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ flex: '1', minWidth: '300px', textAlign: step.fromLeft ? 'left' : 'right' }}
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


      {/* CTA / Contact */}
      <section id="contact" className="section-container" style={{ textAlign: 'center' }}>
        <motion.div {...fadeInUp}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Listo para llevar tu empresa al <span className="gradient-text">siguiente nivel</span>?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '50px' }}>Únete a las empresas que ya están optimizando su comunicación con F5 Networking.</p>
          <div className="contact-grid">
            <motion.div 
              className="contact-button-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button-inner btn-whatsapp-premium"
              >
                <MessageCircle size={24} />
                WhatsApp
              </a>
              <div className="contact-glow"></div>
            </motion.div>

            <motion.div 
              className="contact-button-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:contacto@f5networking.com"
                className="contact-button-inner btn-email-premium"
              >
                <Mail size={24} />
                Enviar Email
              </a>
              <div className="contact-glow"></div>
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
              { id: 'name', label: 'Nombre', type: 'text', placeholder: 'Tu nombre completo' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'correo@empresa.com' },
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
              <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>Mensaje</label>
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

            <button
              type="submit"
              className="btn-neon"
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
                transition: 'opacity 0.2s, transform 0.2s',
                boxShadow: '0 0 20px rgba(0,144,255,0.3)'
              }}
            >
              {sent ? '✅ ¡Mensaje enviado!' : <><Send size={18} /> Enviar Mensaje</>}
            </button>
          </motion.form>
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
              C. Miguel Blanco 1440<br />
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

      {/* Inline Styles for colors */}
      <style>{`
        .text-primary { color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .text-accent { color: var(--color-accent); }
      `}</style>

      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai id="elevenlabs-widget" agent-id="agent_6801kkcgpzhgf4d9kcwgnbray3jz"></elevenlabs-convai>
    </div>
  );
};

export default App;
