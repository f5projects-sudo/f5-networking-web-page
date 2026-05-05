import React from 'react';
import MapFooter from './MapFooter';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Instagram, Facebook, Youtube, MessageCircle, Wrench, Handshake } from 'lucide-react';
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
    <footer style={{ padding: '80px 5% 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* SECTION 1: Redes Sociales Oficiales */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '60px' }}>
          {[
            { icon: <Linkedin size={24} />, url: '#' },
            { icon: <Instagram size={24} />, url: '#' },
            { icon: <Facebook size={24} />, url: '#' },
            { icon: <Youtube size={24} />, url: '#' }
          ].map((social, idx) => (
            <motion.a 
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'background 0.3s',
                textDecoration: 'none'
              }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* SECTION 2: Call to Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          {/* CTA 1: Iniciar Conversación */}
          <motion.a
            href="https://wa.me/5213341701107"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 180, 255, 0.2)' }}
            className="glass"
            style={{ padding: '30px', borderRadius: '20px', textAlign: 'center', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,180,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
              <MessageCircle size={30} />
            </div>
            <h3 style={{ color: 'white', fontSize: '1.2rem', margin: 0 }}>{t('footer.cta.chat', 'Iniciar conversación')}</h3>
          </motion.a>

          {/* CTA 2: Soporte Técnico */}
          <motion.div
            onClick={(e) => handleNavigation('soporte', e)}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255, 140, 0, 0.2)' }}
            className="glass"
            style={{ padding: '30px', borderRadius: '20px', textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,140,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
              <Wrench size={30} />
            </div>
            <h3 style={{ color: 'white', fontSize: '1.2rem', margin: 0 }}>{t('footer.cta.support', 'Soporte técnico')}</h3>
          </motion.div>

          {/* CTA 3: Alianzas Estratégicas */}
          <motion.div
            onClick={(e) => handleNavigation('alianzas', e)}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 180, 255, 0.2)' }}
            className="glass"
            style={{ padding: '30px', borderRadius: '20px', textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,180,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
              <Handshake size={30} />
            </div>
            <h3 style={{ color: 'white', fontSize: '1.2rem', margin: 0 }}>{t('footer.cta.alliances', 'Alianzas Estratégicas')}</h3>
          </motion.div>
        </div>

        {/* SECTION 3: Inline Links & Map */}
        <div style={{ 
          display: 'flex', 
          flexDirection: window.innerWidth < 1024 ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: window.innerWidth < 1024 ? 'flex-start' : 'center',
          gap: '40px',
          padding: '40px 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          marginBottom: '40px'
        }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', color: 'var(--color-text-muted)' }}>
            {/* Contáctanos */}
            <div>
              <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '15px' }}>{t('footer.links.contact', 'Contáctanos')}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:+5213341701107" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--color-primary)'} onMouseOut={e => e.target.style.color='inherit'}>🇲🇽 +52 1 33 4170 1107</a>
                <a href="tel:+12545058090" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--color-secondary)'} onMouseOut={e => e.target.style.color='inherit'}>🇺🇸 +1 254 505 8090</a>
                <a href="mailto:sales@f5networking.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--color-accent)'} onMouseOut={e => e.target.style.color='inherit'}>✉ sales@f5networking.com</a>
              </div>
            </div>

            {/* Información Legal */}
            <div>
              <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '15px' }}>{t('footer.links.legal', 'Información Legal')}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="#terminos" onClick={(e) => handleNavigation('terminos', e)} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='inherit'}>{t('footer.legal.terms', 'Términos y condiciones')}</a>
                <a href="#privacidad" onClick={(e) => handleNavigation('privacidad', e)} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='inherit'}>{t('footer.legal.privacy', 'Aviso de privacidad')}</a>
                <a href="#pua" onClick={(e) => handleNavigation('pua', e)} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='inherit'}>{t('footer.legal.pua', 'PUA')}</a>
              </div>
            </div>

            {/* Dirección */}
            <div>
              <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '15px' }}>{t('footer.links.address', 'Dirección')}</h4>
              <p style={{ margin: 0, lineHeight: '1.6' }}>
                {t('footer.address.street', 'C. Miguel Blanco 1440')}<br />
                {t('footer.address.colony', 'Col Americana, Americana')}<br />
                {t('footer.address.city', '44160 Guadalajara, Jal.')}
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div style={{ width: window.innerWidth < 1024 ? '100%' : '350px', height: '180px', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <MapFooter />
          </div>

        </div>

        {/* Bottom Logo & Copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
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
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            © {currentYear} F5 Networking. {t('footer.copyright', 'Todos los derechos reservados.')}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
