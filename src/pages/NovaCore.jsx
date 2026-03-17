import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Settings, 
  Users, 
  MessageSquare, 
  Activity,
  BarChart3,
  Globe,
  ChevronDown
} from 'lucide-react';
import Navbar from '../components/Navbar';
import MapFooter from '../components/MapFooter';
import BubbleBackground from '../components/BubbleBackground';
import DecryptedText from '../components/DecryptedText';

export default function NovaCore({ onNavigate }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const features = [
    {
      icon: <Users size={40} className="text-primary" />,
      title: "Réplica de Equipo",
      description: "Nova Core no solo responde, actúa como un equipo completo de soporte, ventas y atención, manteniendo la coherencia de tu marca."
    },
    {
      icon: <Zap size={40} className="text-secondary" />,
      title: "Escalabilidad Instantánea",
      description: "Atiende a 10 o 10,000 clientes al mismo tiempo sin degradar la calidad del servicio ni aumentar los costos operativos."
    },
    {
      icon: <Shield size={40} className="text-accent" />,
      title: "Seguridad y Control",
      description: "Tus datos y los de tus clientes están protegidos con encriptación de grado empresarial y protocolos de seguridad rigurosos."
    }
  ];

  const stats = [
    { value: "24/7", label: "Operación Continua" },
    { value: "95%", label: "Tasa de Resolución" },
    { value: "< 1s", label: "Tiempo de Respuesta" },
    { value: "X10", label: "Eficiencia Operativa" }
  ];

  return (
    <div className="app">
      <BubbleBackground />
      <Navbar onNavigate={onNavigate} activePage="nova-core" />

      {/* ── Hero Section ── */}
      <section style={{ 
        height: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 5%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 86, 179, 0.1) 0%, transparent 60%)',
          zIndex: 0
        }}></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 1, maxWidth: '1000px' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ marginBottom: '20px' }}
          >
            <span style={{ 
              padding: '6px 16px', 
              background: 'rgba(0, 180, 255, 0.1)', 
              border: '1px solid var(--color-accent)', 
              borderRadius: '20px',
              color: 'var(--color-accent)',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>
              Inteligencia Artificial Proactiva
            </span>
          </motion.div>

          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', marginBottom: '20px', lineHeight: 1 }}>
            <DecryptedText 
              text="NOVA CORE" 
              animateOn="view"
              revealVideo={true}
              className="gradient-text"
              parentClassName="inline-block"
            />
          </h1>
          
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'white', marginBottom: '30px' }}>
            El motor inteligente de tu empresa
          </h2>

          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--color-text-muted)', 
            maxWidth: '800px', 
            margin: '0 auto 40px',
            lineHeight: 1.8 
          }}>
            La plataforma que replica las funciones de un equipo completo de atención al cliente. Escala en segundos, opera sin descanso y transforma cada interacción en una oportunidad de crecimiento medible.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 86, 179, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 40px',
                background: 'var(--color-primary)',
                borderRadius: '50px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => {
                const solutionSection = document.getElementById('nova-solution');
                if(solutionSection) solutionSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explorar Potencial
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ── Stats Grid ── */}
      <section style={{ padding: '40px 5%', zIndex: 10, position: 'relative' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass"
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '30px', textAlign: 'center', borderRadius: '20px' }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-secondary)', marginBottom: '5px' }}>{stat.value}</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Core Solution Section ── */}
      <section id="nova-solution" className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <motion.div {...fadeInUp}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '25px', lineHeight: 1.2 }}>
              ¿Por qué <span className="gradient-text">Nova Core</span> es diferente?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '30px' }}>
              A diferencia de los chatbots tradicionales, Nova Core utiliza modelos de lenguaje de última generación entrenados específicamente con los datos de tu negocio para ofrecer una experiencia humana y resolutiva.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { title: "Personalización Total", desc: "Se adapta al tono y voz de tu marca.", icon: <Settings size={20} /> },
                { title: "Análisis de Datos", desc: "Genera reportes detallados en tiempo real.", icon: <BarChart3 size={20} /> },
                { title: "Integración Fluida", desc: "Conecta con cualquier CRM o base de datos.", icon: <Activity size={20} /> }
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '5px' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '5px' }}>{item.title}</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="glass"
            style={{ 
              height: '500px', 
              borderRadius: '30px', 
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(0,86,179,0.1), rgba(0,180,255,0.05))'
            }}
          >
             {/* Animación visual de núcleo */}
             <motion.div
               animate={{ 
                 scale: [1, 1.1, 1],
                 rotate: 360
               }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               style={{
                 width: '250px',
                 height: '250px',
                 border: '2px solid var(--color-primary)',
                 borderRadius: '35% 65% 70% 30% / 30% 30% 70% 70%',
                 position: 'absolute'
               }}
             />
             <motion.div
               animate={{ 
                 scale: [1, 1.2, 1],
                 rotate: -360
               }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               style={{
                 width: '180px',
                 height: '180px',
                 border: '2px solid var(--color-accent)',
                 borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                 position: 'absolute'
               }}
             />
             <div style={{ zIndex: 1, textAlign: 'center' }}>
                <Cpu size={80} className="text-primary" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── Features Cards ── */}
      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="glass"
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, border: '1px solid var(--color-primary)' }}
              style={{ padding: '40px', borderRadius: '24px' }}
            >
              <div style={{ marginBottom: '20px' }}>{feature.icon}</div>
              <h3 style={{ marginBottom: '15px', color: 'white' }}>{feature.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="section-container" style={{ textAlign: 'center', paddingBottom: '100px' }}>
        <motion.div {...fadeInUp} className="glass" style={{ padding: '60px', borderRadius: '30px', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Potencia tu empresa con <span className="gradient-text">Nova Core</span></h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>Solicita una auditoría gratuita de tus procesos de atención y descubre cuánto puedes optimizar.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 140, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 40px',
              background: 'var(--color-secondary)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
            onClick={() => onNavigate('home')}
          >
            Obtener Auditoría Gratuita
          </motion.button>
        </motion.div>
      </section>

      {/* ── Footer ── */}
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
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
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
    </div>
  );
}
