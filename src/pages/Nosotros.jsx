import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Settings2,
  Zap,
  ShieldCheck,
  HeadphonesIcon,
  Users,
  ChevronRight,
  Send,
  Award,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import BubbleBackground from '../components/BubbleBackground';
import MapFooter from '../components/MapFooter';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
};

/* ── Rotating marquee brand strip ── */
const brands = ['AFISA', 'CREDITERIUM', 'RECYGLASS'];

/* ── Methodology steps ── */
const steps = [
  { num: '01', title: 'Reunir Información', desc: 'Centralización de la información de tu empresa o negocio y reconocimiento de tus objetivos.', color: 'var(--color-primary)', glow: '#0056B3', fromLeft: true },
  { num: '02', title: 'Análisis', desc: 'De diferentes soluciones y presentación de nuestras propuestas.', color: 'var(--color-secondary)', glow: '#FF8C00', fromLeft: false },
  { num: '03', title: 'Prototipo', desc: 'Primera vista de tu producto.', color: 'var(--color-accent)', glow: '#00B4FF', fromLeft: true },
  { num: '04', title: 'Feedback', desc: '¡Te escuchamos! Ajustes del prototipo y comentarios.', color: 'var(--color-primary)', glow: '#9b59b6', fromLeft: false },
  { num: '05', title: 'Pruebas', desc: 'Listo para probar en campo.', color: 'var(--color-secondary)', glow: '#27ae60', fromLeft: true },
  { num: '06', title: 'Implementación', desc: 'Tu producto 100% productivo.', color: 'var(--color-accent)', glow: '#FF8C00', fromLeft: false },
];

/* ── Certifications ── */
const certs = ['Codedex', 'Oracle', 'Alura Latam', 'Santander Open Academy', 'AWS'];

export default function Nosotros({ onNavigate }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="app">
      <BubbleBackground />

      {/* ── Navbar ── */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '5px 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => onNavigate('home')}
          >
            <img
              src="/f5-networking-web-page/f5networking_logo_original_safe.png"
              alt="F5 Networking"
              style={{ height: '110px', width: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Inicio</span>
            <span className="nav-link" style={{ cursor: 'pointer', color: 'var(--color-accent)', borderBottom: '2px solid var(--color-accent)', paddingBottom: '2px' }}>Nosotros</span>
            <div className="nav-dropdown">
              <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                Soluciones <ChevronDown size={16} />
              </span>
              <div className="nav-dropdown-content glass" style={{ minWidth: '220px', left: '0' }}>
                <span onClick={() => onNavigate('axia')} style={{ cursor: 'pointer', color: 'var(--color-accent)' }}>AXIA</span>
                <span onClick={() => onNavigate('nova-core')} style={{ cursor: 'pointer' }}>NOVA CORE</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>Desarrollo de Software</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>Cableado Estructurado</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>ECHO CRM</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>BPO SERVICES</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>VOXIS</span>
              </div>
            </div>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Contacto</span>
          </div>
        </div>
      </nav>

      {/* ── Hero / Intro ── */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '160px 5% 80px' }}>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <p style={{ color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '3px', fontSize: '0.85rem', marginBottom: '16px' }}>QUIÉNES SOMOS</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '24px', lineHeight: 1.1 }}>
            F5 <span className="gradient-text">Networking</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '780px', margin: '0 auto', lineHeight: '1.9' }}>
            Es una empresa dedicada a crear soluciones de conectividad, automatización e infraestructura digital que impulsan la eficiencia, mejoran la comunicación y aceleran la transformación tecnológica de las organizaciones.
          </p>
        </motion.div>
      </section>

      {/* ── ¿Por qué elegirnos? ── */}
      <section className="section-container">
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>¿Por qué <span className="gradient-text">elegirnos?</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto 20px' }}></div>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
            Elegir F5 Networking significa trabajar con un socio tecnológico que entiende tus retos y construye soluciones diseñadas para tu realidad.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {[
            { icon: <Settings2 size={36} />, title: 'Ajuste a la medida', desc: 'Soluciones diseñadas según las necesidades reales de cada empresa.', color: 'var(--color-primary)', bg: 'rgba(0,86,179,0.12)' },
            { icon: <Zap size={36} />, title: 'Automatización', desc: 'Optimización de procesos para mejorar eficiencia y control.', color: 'var(--color-secondary)', bg: 'rgba(255,140,0,0.12)' },
            { icon: <ShieldCheck size={36} />, title: 'Confiabilidad y seguridad', desc: 'Infraestructura estable, protegida y preparada para crecer.', color: 'var(--color-accent)', bg: 'rgba(0,180,255,0.12)' },
            { icon: <HeadphonesIcon size={36} />, title: 'Soporte continuo', desc: 'Acompañamiento técnico constante antes y después de la implementación.', color: '#9b59b6', bg: 'rgba(155,89,182,0.12)' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ padding: '36px 28px', borderRadius: '20px', borderBottom: `3px solid ${item.color}` }}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', background: item.bg, borderRadius: '14px', marginBottom: '18px', color: item.color }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: item.color }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Nuestro Equipo ── */}
      <section className="section-container">
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestro <span className="gradient-text">Equipo</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="glass"
          style={{ padding: '60px', borderRadius: '24px', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', background: 'linear-gradient(135deg, rgba(0,86,179,0.08), rgba(0,180,255,0.05))' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '90px', height: '90px', background: 'rgba(0,180,255,0.15)', borderRadius: '50%', flexShrink: 0 }}>
            <Users size={44} style={{ color: 'var(--color-accent)' }} />
          </div>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.9', fontSize: '1.1rem', flex: 1, minWidth: '280px' }}>
            Es un grupo dinámico de expertos dedicados a la innovación y la excelencia, con habilidades en desarrollo de software, análisis de datos y diseño de experiencias de usuario. Creamos soluciones impactantes que empoderan a nuestros clientes.
          </p>
        </motion.div>
      </section>

      {/* ── Marcas que confían (marquee) ── */}
      <section style={{ padding: '40px 0', overflow: 'hidden' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '30px' }}>
          <p style={{ color: 'var(--color-text-muted)', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 600 }}>MARCAS QUE CONFÍAN EN NOSOTROS</p>
        </motion.div>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...brands, ...brands, ...brands].map((b, i) => (
              <span key={i} className="marquee-item">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metodología ── */}
      <section className="section-container">
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestra <span className="gradient-text">Metodología</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '50px' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ padding: '36px 28px', borderRadius: '20px', borderLeft: `3px solid ${step.color}`, position: 'relative', overflow: 'hidden' }}
              {...fadeInUp}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1, background: `linear-gradient(135deg, ${step.glow}, ${step.color})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: 0.25, marginBottom: '8px' }}>{step.num}</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', marginTop: '-8px' }}>{step.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '0.92rem' }}>{step.desc}</p>
              <div style={{ position: 'absolute', bottom: '16px', right: '20px', opacity: 0.15 }}>
                <CheckCircle2 size={40} style={{ color: step.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Certificaciones ── */}
      <section className="section-container">
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestras <span className="gradient-text">Certificaciones</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-secondary)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className="glass"
              style={{ padding: '18px 32px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', gap: '10px' }}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.06, border: '1px solid var(--color-accent)' }}
            >
              <Award size={18} style={{ color: 'var(--color-secondary)' }} />
              <span style={{ fontWeight: 600, letterSpacing: '0.5px' }}>{cert}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Formulario de Contacto ── */}
      <section className="section-container" style={{ maxWidth: '680px', margin: '0 auto', paddingBottom: '100px' }}>
        <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>¡Envíanos un <span className="gradient-text">Mensaje!</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
        </motion.div>

        <motion.form
          {...fadeInUp}
          className="glass"
          onSubmit={handleSubmit}
          style={{ padding: '50px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}
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
            onMouseOver={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {sent ? '✅ ¡Mensaje enviado!' : <><Send size={18} /> Enviar Mensaje</>}
          </button>
        </motion.form>
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
    </div>
  );
}
