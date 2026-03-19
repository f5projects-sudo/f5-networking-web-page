import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Mic, 
  Calendar, 
  TrendingUp, 
  Bot, 
  Zap, 
  Shield, 
  Activity,
  Phone,
  MessageSquare,
  Clock,
  Heart,
  Home,
  Hotel,
  GraduationCap,
  Store,
  Briefcase,
  ChevronRight,
  Headset
} from 'lucide-react';
import Navbar from '../components/Navbar';

const VoiceWave = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '100px' }}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            height: [20, Math.random() * 80 + 20, 20],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: i * 0.05,
            ease: "easeInOut" 
          }}
          style={{ 
            width: '6px', 
            background: 'linear-gradient(to top, var(--color-primary), var(--color-accent))',
            borderRadius: '10px'
          }}
        />
      ))}
    </div>
  );
};

const CapacityCard = ({ icon, title, desc, result, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass"
      style={{
        padding: '50px',
        borderRadius: '35px',
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(30px)',
        border: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }}
    >
      <div style={{ 
        width: '70px', 
        height: '70px', 
        background: 'rgba(0,180,255,0.1)', 
        borderRadius: '20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--color-accent)',
        marginBottom: '35px',
        border: '1px solid rgba(0,180,255,0.2)',
        boxShadow: '0 15px 30px -10px rgba(0,180,255,0.3)'
      }}>
        {React.cloneElement(icon, { size: 34 })}
      </div>

      <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px', color: 'white' }}>{title}</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
        {desc.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem' }}>
            <Zap size={16} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ 
        paddingTop: '25px', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'var(--color-secondary)',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Activity size={20} />
        {result}
      </div>

      {/* Decorative pulse */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          zIndex: -1
        }}
      />
    </motion.div>
  );
};

const IndustryTag = ({ icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05, background: 'rgba(0,180,255,0.15)' }}
    style={{
      padding: '20px 30px',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: 'rgba(255,255,255,0.8)',
      cursor: 'default'
    }}
  >
    <div style={{ color: 'var(--color-accent)' }}>{icon}</div>
    {text}
  </motion.div>
);

export default function Voxis({ onNavigate }) {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const handleOpenDemo = () => {
    const widget = document.getElementById('elevenlabs-widget');
    if (widget && widget.shadowRoot) {
      // Intenta encontrar el botón dentro del shadow DOM y hacer clic
      const button = widget.shadowRoot.querySelector('button');
      if (button) {
        button.click();
      }
    } else if (widget) {
      // Alternativa si no hay shadowRoot expuesto o el método es directo
      widget.click();
    }
  };

  return (
    <div className="app bg-[#050505] min-h-screen text-white overflow-hidden">
      
      {/* Background Neural Network Simulation */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 180, 255, 0.05), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 140, 0, 0.03), transparent 40%)',
        zIndex: 0 
      }} />

      <Navbar onNavigate={onNavigate} activePage="voxis" />

      {/* ── Hero Section ── */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div 
          style={{ textAlign: 'center', scale, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{ 
              display: 'inline-flex', 
              padding: '10px 25px', 
              background: 'rgba(0,180,255,0.1)', 
              borderRadius: '30px', 
              border: '1px solid rgba(0,180,255,0.3)', 
              color: 'var(--color-accent)', 
              fontSize: '0.9rem', 
              fontWeight: '800', 
              letterSpacing: '3px', 
              marginBottom: '30px',
              textTransform: 'uppercase'
            }}
          >
            Conversational AI Core
          </motion.div>
          
          <h1 style={{ fontSize: 'clamp(4rem, 15vw, 9rem)', fontWeight: '900', lineHeight: 0.9, marginBottom: '20px', letterSpacing: '-5px' }}>
            VØ<span className="gradient-text">XIS</span>
          </h1>
          
          <p style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: '500', color: 'rgba(255,255,255,0.6)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.2 }}>
            La voz inteligente que trabaja por tu empresa
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
            <VoiceWave />
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <button 
               className="btn-neon" 
               style={{ padding: '15px 40px', fontSize: '1.2rem' }}
               onClick={handleOpenDemo}
             >
               Probar Demo
             </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.3 }}
        >
          <div style={{ width: '30px', height: '50px', border: '2px solid white', borderRadius: '15px', display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <div style={{ width: '4px', height: '8px', background: 'white', borderRadius: '2px' }} />
          </div>
        </motion.div>
      </section>

      {/* ── Intro Section: Neural Nexus (Reinvented ¿Qué es Voxis?) ── */}
      <section style={{ padding: '160px 0', position: 'relative', zIndex: 10, overflow: 'hidden' }}>
        <div className="section-container">
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-accent)', letterSpacing: '8px', marginBottom: '20px', textTransform: 'uppercase' }}>
              Arquitectura Cognitiva
            </h2>
            <h3 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: '900', letterSpacing: '-3px', lineHeight: 1 }}>
              EL <span className="gradient-text">NÚCLEO</span> DE VØXIS
            </h3>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(300px, 0.8fr) 1.5fr minmax(300px, 0.8fr)', 
            gap: '40px', 
            alignItems: 'center',
            position: 'relative'
          }}>
            
            {/* Left HUD: Intent Analysis */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '30px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', height: 'fit-content' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', opacity: 0.8 }}>
                <Activity size={18} color="var(--color-accent)" />
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', fontFamily: 'monospace', letterSpacing: '2px' }}>INTENT_SCANNER v4</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { label: "CONFIDENCE", value: "99.8%", color: "var(--color-primary)" },
                  { label: "SEMANTIC_MATCH", value: "HIGH", color: "var(--color-accent)" },
                  { label: "LATENCY", value: "118ms", color: "#4ade80" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
                      <span>{stat.label}</span>
                      <span>{stat.value}</span>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        style={{ height: '100%', background: stat.color }}
                      />
                    </div>
                  </div>
                ))}
            </div>

              <div style={{ marginTop: '30px', padding: '15px', background: 'rgba(0,0,0,0.3)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                  VØXIS entiende la intención detrás de cada palabra, permitiendo respuestas precisas y ejecución de tareas complejas en segundos.
                </p>
              </div>
            </motion.div>

            {/* Central Neural Nexus Core */}
            <div style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Pulsing Spheres and Rings */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ position: 'absolute', width: '450px', height: '450px', border: '1px solid rgba(0, 180, 255, 0.1)', borderRadius: '50%' }}
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', width: '380px', height: '380px', border: '1px dashed rgba(255, 255, 255, 0.05)', borderRadius: '50%' }}
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', width: '300px', height: '300px', border: '2px solid rgba(255, 140, 0, 0.05)', borderRadius: '50%' }}
              />

              {/* Central Core Element */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass"
                style={{ 
                  zIndex: 5, 
                  width: '240px', 
                  height: '240px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(0, 180, 255, 0.05)',
                  boxShadow: '0 0 80px rgba(0, 180, 255, 0.15)',
                  cursor: 'pointer'
                }}
              >
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Bot size={70} color="var(--color-accent)" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 180, 255, 0.5))' }} />
                </motion.div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1rem', fontWeight: '900', letterSpacing: '2px' }}>CORE_VØXIS</div>
                  <div style={{ fontSize: '0.6rem', color: '#4ade80', fontWeight: 'bold', fontFamily: 'monospace' }}>● ACTIVE_REASONING</div>
                </div>
              </motion.div>

              {/* Data Floating Nodes */}
              {[
                { icon: <Mic />, label: "LISTEN", color: "var(--color-primary)", top: "10%", left: "15%" },
                { icon: <MessageSquare />, label: "THINK", color: "var(--color-accent)", top: "15%", right: "10%" },
                { icon: <Zap />, label: "ACT", color: "var(--color-secondary)", bottom: "15%", left: "10%" },
                { icon: <Shield />, label: "SECURE", color: "white", bottom: "10%", right: "20%" }
              ].map((node, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{ 
                    position: 'absolute', 
                    top: node.top, 
                    bottom: node.bottom, 
                    left: node.left, 
                    right: node.right,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    background: 'rgba(0,0,0,0.4)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: `1px solid ${node.color}55`,
                    color: node.color,
                    boxShadow: `0 0 20px ${node.color}22`
                  }}>
                    {React.cloneElement(node.icon, { size: 22 })}
                  </div>
                  <span style={{ fontSize: '0.6rem', fontWeight: '900', letterSpacing: '2px', opacity: 0.6 }}>{node.label}</span>
                </motion.div>
              ))}

              {/* Connections (Visual SVG) */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', opacity: 0.15 }}>
                <line x1="15%" y1="15%" x2="50%" y2="50%" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="85%" y1="20%" x2="50%" y2="50%" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="15%" y1="80%" x2="50%" y2="50%" stroke="var(--color-secondary)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="80%" y1="85%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              </svg>
            </div>

            {/* Right HUD: Sentiment & Advantage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '30px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', height: 'fit-content' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', opacity: 0.8 }}>
                <Headset size={18} color="var(--color-secondary)" />
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', fontFamily: 'monospace', letterSpacing: '2px' }}>HUMAN_LIKE_XP v2</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  "Conversación sin 'robots' torpes",
                  "Escalabilidad 24/7 sin esperas",
                  "0% llamadas perdidas",
                  "IA con empatía real"
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      background: 'var(--color-secondary)',
                      boxShadow: '0 0 10px var(--color-secondary)'
                    }} />
                    <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>{point}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '35px', textAlign: 'center', padding: '20px', background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.05), transparent)', borderRadius: '20px', border: '1px solid rgba(255,140,0,0.1)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-secondary)', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '5px' }}>ESTADO DE OPERACIÓN</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'white' }}>INFALIBLE</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Capabilities Section: Qué hace ── */}
      <section style={{ padding: '140px 0', background: 'rgba(255,255,255,0.01)', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '25px', letterSpacing: '-2px' }}>
              REDEFINE TU <span className="gradient-text">ALCANCE</span>
            </h2>
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.4)', maxWidth: '700px', margin: '0 auto' }}>
              Automatización de voz que no solo responde, sino que ejecuta acciones estratégicas para tu negocio.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            <CapacityCard 
              index={0}
              icon={<Phone />}
              title="Atención Automática"
              desc={[
                "Responde en segundos",
                "Entiende preguntas reales",
                "Da respuestas claras",
                "Escala solo cuando hace falta"
              ]}
              result="Resultado: ningún cliente se queda sin atención."
            />
            <CapacityCard 
              index={1}
              icon={<Calendar />}
              title="Agendamiento Inteligente"
              desc={[
                "Reserva, confirma y reprograma",
                "Integración con calendarios y CRM",
                "Sincronización bidireccional",
                "Recordatorios automáticos"
              ]}
              result="Resultado: más citas confirmadas, menos caos."
            />
            <CapacityCard 
              index={2}
              icon={<TrendingUp />}
              title="Calificación & Ventas"
              desc={[
                "Llama leads automáticamente",
                "Detecta intención de compra",
                "Entrega oportunidades listas",
                "Cierre de ventas guiado"
              ]}
              result="Resultado: tu equipo vende, no persigue."
            />
          </div>
        </div>
      </section>

      {/* ── Industries Section: Para quién es ── */}
      <section style={{ padding: '160px 0', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '100px', alignItems: 'center' }}>
            <motion.div {...fadeInUp}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '30px', letterSpacing: '-2px' }}>
                PARA QUIÉN ES <br /> <span className="gradient-text">VØXIS</span>
              </h2>
              <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.8', marginBottom: '40px' }}>
                VØXIS funciona donde la voz importa. Si tu negocio recibe llamadas y busca eficiencia sin sacrificar la calidad humana, VØXIS es tu aliado perfecto.
              </p>
              <button 
                className="btn-neon" 
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
                onMouseOver={e => e.target.style.background = 'rgba(255,255,255,0.05)'}
                onMouseOut={e => e.target.style.background = 'transparent'}
              >
                Solicitar Diagnóstico
              </button>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <IndustryTag icon={<Heart size={24} />} text="Clínicas y Salud" />
              <IndustryTag icon={<Home size={24} />} text="Inmobiliarias" />
              <IndustryTag icon={<Hotel size={24} />} text="Hotelería y Reservas" />
              <IndustryTag icon={<GraduationCap size={24} />} text="Educación" />
              <IndustryTag icon={<Store size={24} />} text="E-commerce" />
              <IndustryTag icon={<Briefcase size={24} />} text="Empresas de Servicios" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: '60px 5% 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px', color: 'var(--color-text-muted)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Contáctanos</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🇲🇽</span>
              <a href="tel:+523321012959" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>+52 (33) 2101 2959</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>✉</span>
              <a href="mailto:sales@f5networking.com" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>sales@f5networking.com</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>VØXIS AI</h4>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              La vanguardia de la comunicación <br />
              conversacional por voz.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
          <div onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <img src={`${import.meta.env.BASE_URL}f5networking_logo_original_safe.png`} style={{ height: '40px', opacity: 0.8 }} alt="Logo" />
          </div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} F5 Networking.
          </div>
        </div>
      </footer>
    </div>
  );
}
