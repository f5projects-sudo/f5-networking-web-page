import React from 'react';
import MapFooter from './MapFooter';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Instagram, Facebook, Youtube, MessageCircle, Wrench, Handshake, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ onNavigate, scrollTo }) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    if (scrollTo) {
      scrollTo('hero');
    } else if (onNavigate) {
      onNavigate('home');
    }
  };

  const handleNavigation = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer style={{ padding: '80px 5% 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(15px)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* TOP SECTION: Logo & Socials */}
        <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '30px', marginBottom: '60px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleLogoClick}>
            <img 
              src={`${import.meta.env.BASE_URL}F5 finalizado 2.png`} 
              alt="F5 Networking" 
              width="225"
              height="100"
              style={{ 
                height: '100px', 
                width: 'auto', 
                display: 'block', 
                opacity: 0.9,
                filter: 'drop-shadow(0 0 8px rgba(0, 180, 255, 0.15))',
                transition: 'all 0.3s ease'
              }} 
            />
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '20px' }}>
            {[
              { icon: <Linkedin size={22} />, url: '#' },
              { icon: <Instagram size={22} />, url: '#' },
              { icon: <Facebook size={22} />, url: '#' },
              { icon: <Youtube size={22} />, url: '#' }
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: 'var(--color-primary)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'background 0.3s',
                  textDecoration: 'none'
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* MIDDLE SECTION: 3 CTAs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          {/* CTA 1: Iniciar Conversación */}
          <motion.a
            href="https://wa.me/5213341701107"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, border: '1px solid rgba(0, 180, 255, 0.5)', boxShadow: '0 10px 30px rgba(0, 180, 255, 0.15)' }}
            className="glass"
            style={{ padding: '35px 25px', borderRadius: '24px', textAlign: 'center', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
          >
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(0,180,255,0.2), rgba(0,86,179,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
              <MessageCircle size={35} />
            </div>
            <h3 style={{ color: 'white', fontSize: '1.3rem', margin: 0, fontWeight: 'bold' }}>{t('footer.cta.chat', 'Iniciar conversación')}</h3>
          </motion.a>

          {/* CTA 2: Soporte Técnico */}
          <motion.div
            onClick={(e) => handleNavigation('soporte', e)}
            whileHover={{ y: -8, border: '1px solid rgba(255, 140, 0, 0.5)', boxShadow: '0 10px 30px rgba(255, 140, 0, 0.15)' }}
            className="glass"
            style={{ padding: '35px 25px', borderRadius: '24px', textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
          >
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(255,140,0,0.2), rgba(200,80,0,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
              <Wrench size={35} />
            </div>
            <h3 style={{ color: 'white', fontSize: '1.3rem', margin: 0, fontWeight: 'bold' }}>{t('footer.cta.support', 'Soporte técnico')}</h3>
          </motion.div>

          {/* CTA 3: Alianzas Estratégicas */}
          <motion.div
            onClick={(e) => handleNavigation('alianzas', e)}
            whileHover={{ y: -8, border: '1px solid rgba(0, 180, 255, 0.5)', boxShadow: '0 10px 30px rgba(0, 180, 255, 0.15)' }}
            className="glass"
            style={{ padding: '35px 25px', borderRadius: '24px', textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
          >
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(0,180,255,0.2), rgba(0,86,179,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
              <Handshake size={35} />
            </div>
            <h3 style={{ color: 'white', fontSize: '1.3rem', margin: 0, fontWeight: 'bold' }}>{t('footer.cta.alliances', 'Alianzas Estratégicas')}</h3>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Info, Legal, and Map */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          padding: '50px 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          marginBottom: '40px',
          color: 'var(--color-text-muted)'
        }}>
          
          {/* Contáctanos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '5px', fontWeight: 'bold' }}>{t('footer.contact.title', 'Contáctanos')}</h4>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <MapPin size={20} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-primary)' }} />
              <span style={{ lineHeight: '1.6' }}>
                {t('footer.address.street', 'C. Miguel Blanco 1440')}<br/>
                {t('footer.address.colony', 'Col Americana, Americana')}<br/>
                {t('footer.address.city', '44160 Guadalajara, Jal.')}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Phone size={20} style={{ color: 'var(--color-secondary)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <a href="tel:+5213341701107" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='inherit'}>🇲🇽 +52 1 33 4170 1107</a>
                <a href="tel:+12545058090" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='inherit'}>🇺🇸 +1 254 505 8090</a>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Mail size={20} style={{ color: 'var(--color-accent)' }} />
              <a href="mailto:sales@f5networking.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='inherit'}>sales@f5networking.com</a>
            </div>
          </div>

          {/* Información Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '5px', fontWeight: 'bold' }}>{t('footer.legal.title', 'Información legal')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <a href="#terminos" onClick={(e) => handleNavigation('terminos', e)} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '10px' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='inherit'}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                {t('footer.legal.terms', 'Términos y condiciones')}
              </a>
              <a href="#privacidad" onClick={(e) => handleNavigation('privacidad', e)} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '10px' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='inherit'}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-secondary)' }} />
                {t('footer.legal.privacy', 'Aviso de privacidad')}
              </a>
              <a href="#pua" onClick={(e) => handleNavigation('pua', e)} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '10px' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='inherit'}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)' }} />
                {t('footer.legal.pua', 'Política de Uso Aceptable (PUA)')}
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '5px', fontWeight: 'bold' }}>{t('footer.map.title', 'Ubicación')}</h4>
            <div style={{ width: '100%', height: '200px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <MapFooter />
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          © {currentYear} F5 Networking. {t('footer.copyright', 'Todos los derechos reservados.')}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
