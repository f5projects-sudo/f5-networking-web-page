import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Printer, 
  Monitor, 
  Headphones, 
  HardDrive, 
  Cpu, 
  MousePointer2,
  Settings,
  ShieldCheck,
  Zap,
  ShoppingCart
} from 'lucide-react';
import Navbar from '../components/Navbar';

const ProductCard = ({ icon, title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass"
      style={{
        padding: '40px',
        borderRadius: '30px',
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        width: '80px', 
        height: '80px', 
        background: 'linear-gradient(135deg, rgba(255,140,0,0.1), rgba(255,255,255,0.05))', 
        borderRadius: '24px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--color-secondary)',
        marginBottom: '25px',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 10px 20px -5px rgba(0,0,0,0.3)'
      }}>
        {React.cloneElement(icon, { size: 36 })}
      </div>

      <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px' }}>{title}</h3>
      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6' }}>
        Equipamiento de alto rendimiento seleccionado para potenciar el talento de tu equipo.
      </p>

      <motion.div 
        initial={{ width: 0 }}
        whileHover={{ width: '40%' }}
        style={{
          height: '2px',
          background: 'var(--color-secondary)',
          marginTop: '25px',
          borderRadius: '2px'
        }}
      />
    </motion.div>
  );
};

export default function Equipamiento({ onNavigate }) {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const products = [
    { icon: <Printer />, title: "Impresoras" },
    { icon: <Monitor />, title: "Monitores" },
    { icon: <Headphones />, title: "Auriculares" },
    { icon: <HardDrive />, title: "Almacenamiento" },
    { icon: <Cpu />, title: "Procesadores" },
    { icon: <MousePointer2 />, title: "Ratones" }
  ];

  return (
    <div className="app bg-[#050505] min-h-screen text-white overflow-hidden">
      
      {/* Human-Centric Background Image with Parallax & Blur */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <motion.div 
          style={{ 
            y,
            backgroundImage: `url('${import.meta.env.BASE_URL}assets/images/backgrounds/office_human.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '140vh',
            opacity: 0.7
          }} 
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.85) 100%)',
          backdropFilter: 'blur(3px)'
        }} />
      </div>

      <Navbar onNavigate={onNavigate} activePage="equipamiento" />

      {/* ── Hero Section ── */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <motion.div style={{ opacity: opacityHero }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ 
                display: 'inline-flex', 
                padding: '10px 30px', 
                background: 'rgba(255,140,0,0.1)', 
                borderRadius: '30px', 
                border: '1px solid rgba(255,140,0,0.3)', 
                color: 'var(--color-secondary)', 
                fontSize: '0.9rem', 
                fontWeight: '900', 
                letterSpacing: '5px', 
                marginBottom: '40px',
                textTransform: 'uppercase'
              }}
            >
              Technology for People
            </motion.div>

            <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', fontWeight: '900', lineHeight: 0.95, marginBottom: '30px', letterSpacing: '-4px' }}>
              INFRAESTRUCTURA <br />
              <span className="gradient-text">CON PROPÓSITO</span>
            </h1>

            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'rgba(255,255,255,0.8)', maxWidth: '850px', margin: '0 auto 50px', lineHeight: 1.5, fontWeight: '500' }}>
              Espacios pensados para las personas. Aseguramos el equipamiento necesario para que tu equipo trabaje con comodidad, eficiencia y sin límites tecnológicos.
            </p>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
               <button className="btn-neon" style={{ padding: '15px 45px', fontSize: '1.1rem' }}>
                 Explorar Soluciones
               </button>
               <button className="glass" style={{ padding: '15px 45px', borderRadius: '35px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '15px', fontWeight: 'bold' }}>
                 <ShieldCheck size={24} color="var(--color-secondary)" />
                 Calidad Humana
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Product Matrix ── */}
      <section style={{ padding: '120px 5%', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-2px', marginBottom: '20px' }}>
              HERRAMIENTAS PARA EL <span className="gradient-text">ÉXITO</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
              Diseñamos la implementación considerando el bienestar de tu equipo y el máximo rendimiento operativo.
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {products.map((item, index) => (
              <ProductCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Human Optimization Section ── */}
      <section style={{ padding: '140px 5%', position: 'relative', zIndex: 10 }}>
        <div className="section-container">
           <div className="glass" style={{ padding: '80px', borderRadius: '50px', border: '1px solid rgba(255,140,0,0.1)', textAlign: 'center', background: 'rgba(255,140,0,0.03)' }}>
              <Zap size={60} color="var(--color-secondary)" style={{ marginBottom: '30px', margin: '0 auto' }} />
              <h2 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px', marginBottom: '30px' }}>
                EXPERIENCIA QUE <br /> <span className="gradient-text">INSPIRA</span>
              </h2>
              <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.6)', maxWidth: '800px', margin: '0 auto 50px', lineHeight: 1.6 }}>
                Ponemos el hardware al servicio del talento humano. Configuramos espacios que no solo funcionan, sino que motivan a dar lo mejor cada día.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                 {[
                   { icon: <ShieldCheck />, text: "Distribución Pensada en el Usuario" },
                   { icon: <Settings />, text: "Configuración Ergonómica" },
                   { icon: <ShoppingCart />, text: "Soporte Continuo F5" }
                 ].map((feat, i) => (
                   <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'rgba(255,255,255,0.8)', fontWeight: 'bold' }}>
                      <div style={{ color: 'var(--color-secondary)' }}>{feat.icon}</div>
                      {feat.text}
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: '100px 5% 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px', color: 'var(--color-text-muted)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Equipamiento F5</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🇲🇽</span>
              <a href="tel:+523321012959" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>+52 (33) 2101 2959</a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>Asesoría Directa</h4>
            <p style={{ margin: 0 }}>Consultoría personalizada para infraestructura de oficinas y centros de contacto.</p>
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
