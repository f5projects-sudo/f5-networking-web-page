import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Headset, 
  CheckCircle2, 
  Lock, 
  Activity, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  TrendingUp, 
  UserCheck, 
  BarChart3, 
  GraduationCap, 
  FileText,
  MousePointer2,
  ChevronRight,
  Info
} from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Bpo({ onNavigate }) {
  // Asegurar que la vista inicie arriba
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Transformaciones para el Badge (BPO SERVICES)
  const badgeOpacity = useTransform(smoothProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);
  const badgeY = useTransform(smoothProgress, [0, 0.4, 0.7], ["0vh", "0vh", "-38vh"]);
  const badgeX = useTransform(smoothProgress, [0, 0.4, 0.7], ["0vw", "0vw", "-36.5vw"]);
  const badgeScale = useTransform(smoothProgress, [0, 0.4], [3, 1]);
  
  // Transformaciones para la imagen de fondo
  const imgScale = useTransform(smoothProgress, [0, 0.8], [1.2, 1]);
  const imgY = useTransform(smoothProgress, [0.3, 0.8], ["0%", "-15%"]);
  const imgBrightness = useTransform(smoothProgress, [0, 0.5, 0.8], [0.5, 0.3, 0.4]);

  // Transformaciones para el Contenido (Títulos, Texto)
  const contentOpacity = useTransform(smoothProgress, [0.65, 0.85], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.65, 0.85], [100, 0]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="app bg-[#050505] min-h-screen text-white">
      
      {/* Dynamic Background */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(255, 140, 0, 0.05), transparent 50%), radial-gradient(circle at 90% 90%, rgba(0, 86, 179, 0.05), transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <Navbar onNavigate={onNavigate} activePage="bpo" />

      {/* ── Scrollytelling Hero Section ── */}
      <section ref={containerRef} style={{ height: '300vh', position: 'relative', zIndex: 10 }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {/* Background Hero Image */}
          <motion.div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: -1,
            scale: imgScale,
            y: imgY
          }}>
            <motion.img 
              src={`${import.meta.env.BASE_URL}bpo_hero_image.png`} 
              alt="Professional BPO Services"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                opacity: imgBrightness
              }}
            />
            {/* Cinema Gradients */}
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(to right, rgba(5,5,5,1) 0%, rgba(5,5,5,0.8) 35%, rgba(5,5,5,0.3) 70%, transparent 100%)' 
            }} />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              width: '100%', 
              height: '50%', 
              background: 'linear-gradient(to top, rgba(5,5,5,1) 0%, transparent 100%)' 
            }} />
          </motion.div>

          {/* Centralized Badge (Stage 1) that moves (Stage 2) */}
          <motion.div 
            style={{ 
              position: 'absolute',
              zIndex: 30,
              y: badgeY,
              x: badgeX,
              scale: badgeScale,
              opacity: badgeOpacity,
              display: 'inline-flex', 
              padding: '12px 30px', 
              background: 'rgba(255,140,0,0.25)', 
              backdropFilter: 'blur(15px)',
              borderRadius: '40px', 
              border: '1px solid rgba(255,140,0,0.4)', 
              color: 'var(--color-secondary)', 
              fontWeight: '900', 
              fontSize: '1.2rem', 
              letterSpacing: '4px', 
              alignItems: 'center', 
              gap: '15px' 
            }}
          >
            <Headset size={24} /> BPO SERVICES
          </motion.div>

          <div className="section-container" style={{ position: 'relative', zIndex: 20, width: '100%' }}>
            <motion.div 
              style={{ 
                maxWidth: '850px',
                opacity: contentOpacity,
                y: contentY
              }}
            >
              <h1 style={{ 
                fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', 
                fontWeight: '900', 
                lineHeight: 1.1, 
                marginBottom: '30px',
                textShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}>
                UN SOCIO ESTRATÉGICO <br />
                <span className="gradient-text" style={{ fontSize: '0.9em' }}>QUE ENTIENDE TU OPERACIÓN</span>
              </h1>
              
              <h2 style={{ 
                fontSize: '1.8rem', 
                color: 'white', 
                opacity: 0.95, 
                marginBottom: '35px', 
                fontWeight: '500',
                maxWidth: '700px',
                lineHeight: '1.4'
              }}>
                BPO diseñado para escuchar, actuar y transformar
              </h2>

              <p style={{ 
                fontSize: '1.25rem', 
                color: 'rgba(255,255,255,0.7)', 
                lineHeight: '1.8', 
                marginBottom: '50px',
                maxWidth: '650px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                En F5 conocemos que las mejores operaciones comienzan escuchando. Analizamos tus necesidades, entendemos tus prioridades y diseñamos soluciones BPO a la medida.
              </p>

              <div style={{ display: 'flex', gap: '25px', alignItems: 'center', flexWrap: 'wrap' }}>
                <motion.button 
                  className="btn-neon"
                  style={{
                    padding: '18px 45px',
                    background: 'var(--color-secondary)',
                    border: 'none',
                    color: 'white',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 15px 35px rgba(255,140,0,0.3)'
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,140,0,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  ¡Me Interesa! <ChevronRight size={22} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Metodología Section ── */}
      <section style={{ padding: '100px 0', position: 'relative', zIndex: 10, background: 'rgba(255,255,255,0.02)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div {...fadeInUp}>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '30px' }}>
                Nuestra <span className="gradient-text">metodología</span>
              </h2>
              <div style={{ width: '80px', height: '4px', background: 'var(--color-secondary)', marginBottom: '40px' }}></div>
              
              <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '25px' }}>
                En F5 trabajamos con una metodología clara y efectiva, basada en un principio fundamental: <strong>escuchar primero y después atender la prioridad de nuestro cliente</strong>. Creemos que una operación exitosa no se construye desde suposiciones, sino desde el entendimiento real de tus necesidades, tus procesos y los objetivos que quieres alcanzar.
              </p>
              
              <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                A partir de esa base, diseñamos operaciones a medida, alineadas con tu mercado, tu tipo de cliente y el ritmo de tu negocio. No buscamos encajar tu empresa en un modelo estándar, sino construir una solución que funcione para ti.
              </p>
            </motion.div>

            <motion.div 
              className="glass"
              style={{ padding: '40px', borderRadius: '30px', borderLeft: '4px solid var(--color-secondary)' }}
              {...fadeInUp}
            >
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic', color: 'white' }}>
                "En F5 no existen soluciones genéricas: cada estrategia es única, porque cada empresa tiene retos distintos y merece una operación diseñada con propósito, estructura y resultados medibles."
              </p>
              <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                  onClick={() => onNavigate('home')}
                >
                  ¡Explora Otros Servicios! <MousePointer2 size={16} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Modelo Operativo Section ── */}
      <section style={{ padding: '120px 0', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <motion.div 
            {...fadeInUp}
            style={{ textAlign: 'center', marginBottom: '70px' }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '25px' }}>
              Nuestro <span className="gradient-text">modelo operativo</span>
            </h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: '1.8' }}>
              Diseñamos operaciones sólidas, seguras y alineadas a estándares profesionales, garantizando control total, protección de datos y continuidad en cada proceso.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}
          >
            {[
              { icon: <CheckCircle2 size={30} />, title: "Consentimiento y privacidad", desc: "Cumplimiento estricto de normativas de protección de datos." },
              { icon: <Lock size={30} />, title: "Acceso restringido", desc: "Protocolos de seguridad física y digital para proteger tu información." },
              { icon: <Activity size={30} />, title: "Monitoreo y auditoría", desc: "Supervisión constante para garantizar la calidad y el cumplimiento." },
              { icon: <Shield size={30} />, title: "Plan de respuesta a incidentes", desc: "Estrategias listas para actuar ante cualquier imprevisto." },
              { icon: <Zap size={30} />, title: "Metodología PCL", desc: "Procesos de Calidad Lograda para optimizar cada interacción." },
              { icon: <Users size={30} />, title: "Programa de Retención de Personal (PRP – PCL)", desc: "Garantizamos equipos estables y motivados para tu operación." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass"
                style={{ padding: '35px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '20px' }}
                whileHover={{ y: -10, borderColor: 'rgba(255,140,0,0.3)', background: 'rgba(255,140,0,0.02)' }}
              >
                <div style={{ color: 'var(--color-secondary)', background: 'rgba(255,140,0,0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BPO Services Section ── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(to bottom, #050505, rgba(255,140,0,0.05), #050505)', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div {...fadeInUp}>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '25px' }}>
                BPO <span className="gradient-text">Services</span>
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '40px' }}>
                Ofrecemos servicios BPO diseñados para empresas que necesitan atención profesional, control operativo y equipos preparados para crecer según la demanda.
              </p>
              
              <div style={{ display: 'grid', gap: '20px' }}>
                {[
                  { icon: <Globe size={22} />, text: "Agentes 100% Bilingües (Eng/Spa)" },
                  { icon: <TrendingUp size={22} />, text: "Equipos escalables desde 10 hasta 300 posiciones" },
                  { icon: <UserCheck size={22} />, text: "Líderes de equipo dedicados por pod" },
                  { icon: <BarChart3 size={22} />, text: "Tableros de KPIs personalizados" },
                  { icon: <GraduationCap size={22} />, text: "Formación continua y control de calidad" },
                  { icon: <FileText size={22} />, text: "Protocolos de recuperación ante desastres establecidos" }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div style={{ color: 'var(--color-secondary)' }}>{feature.icon}</div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass"
              style={{ padding: '20px', borderRadius: '30px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(255,140,0,0.1), transparent)', zIndex: 0 }}></div>
              <img 
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop" 
                alt="BPO Team" 
                style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block', position: 'relative', zIndex: 1 }}
              />
              <div style={{ position: 'absolute', bottom: '40px', left: '40px', zIndex: 2 }}>
                <div style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', padding: '15px 25px', borderRadius: '15px', border: '1px solid rgba(255,140,0,0.3)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-secondary)' }}>+300</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Posiciones disponibles</div>
                </div>
              </div>
            </motion.div>
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
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>BPO Platform</h4>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              Tu socio estratégico en gestión operativa <br />
              y atención al cliente.
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
