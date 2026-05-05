import React from 'react';
import MapFooter from './MapFooter';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Instagram, Facebook, Youtube, MessageCircle, Wrench, Handshake, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ onNavigate, scrollTo }) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    if (scrollTo) scrollTo('hero');
    else if (onNavigate) onNavigate('home');
  };

  const handleNavigation = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer style={{ position: 'relative', backgroundColor: '#030a10', color: 'white', marginTop: '150px', fontFamily: 'system-ui, -apple-system, sans-serif', overflow: 'hidden' }}>
      
      {/* Background Ambient Glows */}
      <div style={{ position: 'absolute', top: '0', left: '20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,180,255,0.05) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none', transform: 'translate(-50%, -50%)' }} />
      <div style={{ position: 'absolute', bottom: '0', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,140,0,0.05) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none', transform: 'translate(50%, 50%)' }} />

      {/* Elegant Abstract Growth Curve (Top Border) */}
      <div style={{ position: 'absolute', top: '-150px', left: 0, width: '100%', height: '150px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          <defs>
            <linearGradient id="elegantGlow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#030a10" stopOpacity="1" />
              <stop offset="40%" stopColor="#030a10" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(0, 180, 255, 0.15)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="elegantLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,180,255,0)" />
              <stop offset="50%" stopColor="rgba(0,180,255,0.2)" />
              <stop offset="100%" stopColor="rgba(0,180,255,0.8)" />
            </linearGradient>
          </defs>
          <path fill="url(#elegantGlow)" d="M0,150 L0,120 Q 720,120 1440,0 L1440,150 Z" />
          <path fill="none" stroke="url(#elegantLine)" strokeWidth="1" d="M0,120 Q 720,120 1440,0" />
        </svg>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '80px 5% 40px' }}>
        
        {/* TOP SECTION: Logo & Socials */}
        <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '30px', marginBottom: '80px' }}>
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
            onClick={handleLogoClick}
          >
            <img 
              src={`${import.meta.env.BASE_URL}F5 finalizado 2.png`} 
              alt="F5 Networking" 
              style={{ height: '80px', width: 'auto', display: 'block', opacity: 0.95, filter: 'drop-shadow(0 0 15px rgba(0, 180, 255, 0.2))' }} 
            />
          </motion.div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '15px' }}>
            {[
              { icon: <Linkedin size={20} strokeWidth={1.5} />, url: '#' },
              { icon: <Instagram size={20} strokeWidth={1.5} />, url: '#' },
              { icon: <Facebook size={20} strokeWidth={1.5} />, url: '#' },
              { icon: <Youtube size={20} strokeWidth={1.5} />, url: '#' }
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, backgroundColor: 'rgba(0,180,255,0.1)', color: '#00B4FF', borderColor: 'rgba(0,180,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* MIDDLE SECTION: Minimalist CTAs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '80px' }}>
          
          {/* CTA 1 */}
          <CTAButton 
            icon={<MessageCircle size={24} strokeWidth={1.5} />} 
            title={t('footer.cta.chat', 'Iniciar conversación')} 
            color="0, 180, 255" 
            href="https://wa.me/5213341701107" 
            external 
          />
          {/* CTA 2 */}
          <CTAButton 
            icon={<Wrench size={24} strokeWidth={1.5} />} 
            title={t('footer.cta.support', 'Soporte técnico')} 
            color="255, 140, 0" 
            onClick={(e) => handleNavigation('soporte', e)} 
          />
          {/* CTA 3 */}
          <CTAButton 
            icon={<Handshake size={24} strokeWidth={1.5} />} 
            title={t('footer.cta.alliances', 'Alianzas Estratégicas')} 
            color="0, 180, 255" 
            onClick={(e) => handleNavigation('alianzas', e)} 
          />
        </div>

        {/* BOTTOM SECTION: Info, Legal, Map */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', paddingBottom: '60px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)' }}>
          
          {/* Contáctanos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '500', letterSpacing: '0.5px' }}>{t('footer.contact.title', 'Contáctanos')}</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'rgba(255,255,255,0.4)', marginTop: '2px' }} />
                <span style={{ lineHeight: '1.5' }}>
                  {t('footer.address.street', 'C. Miguel Blanco 1440')}<br/>
                  {t('footer.address.colony', 'Col Americana, Americana')}<br/>
                  {t('footer.address.city', '44160 Guadalajara, Jal.')}
                </span>
              </div>
              
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Phone size={18} style={{ color: 'rgba(255,255,255,0.4)', marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <HoverLink href="tel:+5213341701107">🇲🇽 +52 1 33 4170 1107</HoverLink>
                  <HoverLink href="tel:+12545058090">🇺🇸 +1 254 505 8090</HoverLink>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
                <HoverLink href="mailto:sales@f5networking.com">sales@f5networking.com</HoverLink>
              </div>
            </div>
          </div>

          {/* Información Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '500', letterSpacing: '0.5px' }}>{t('footer.legal.title', 'Información legal')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
              <HoverLink onClick={(e) => handleNavigation('terminos', e)}>
                {t('footer.legal.terms', 'Términos y condiciones')}
              </HoverLink>
              <HoverLink onClick={(e) => handleNavigation('privacidad', e)}>
                {t('footer.legal.privacy', 'Aviso de privacidad')}
              </HoverLink>
              <HoverLink onClick={(e) => handleNavigation('pua', e)}>
                {t('footer.legal.pua', 'Política de Uso Aceptable (PUA)')}
              </HoverLink>
            </div>
          </div>

          {/* Mapa */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '500', letterSpacing: '0.5px' }}>{t('footer.map.title', 'Ubicación')}</h4>
            <div style={{ width: '100%', height: '180px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <MapFooter />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '30px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', flexDirection: window.innerWidth < 768 ? 'column' : 'row', gap: '10px' }}>
          <span>© {currentYear} F5 Networking. {t('footer.copyright', 'Todos los derechos reservados.')}</span>
          <span style={{ letterSpacing: '1px' }}>INNOVATION THROUGH CONNECTION</span>
        </div>
        
      </div>
    </footer>
  );
};

// Subcomponent for CTA Buttons
const CTAButton = ({ icon, title, color, href, onClick, external }) => {
  const content = (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ color: `rgb(${color})`, display: 'flex' }}>{icon}</div>
        <span style={{ color: 'white', fontSize: '1.05rem', fontWeight: '500' }}>{title}</span>
      </div>
      <ArrowUpRight size={18} style={{ color: 'rgba(255,255,255,0.3)' }} className="cta-arrow" />
    </>
  );

  const style = {
    padding: '25px 30px',
    borderRadius: '16px',
    backgroundColor: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden'
  };

  const hoverStyle = {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderColor: `rgba(${color}, 0.3)`,
    boxShadow: `0 10px 30px -10px rgba(${color}, 0.15)`
  };

  if (external) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" style={style} whileHover={hoverStyle} whileTap={{ scale: 0.98 }} initial="initial" whileInView="animate">
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div onClick={onClick} style={style} whileHover={hoverStyle} whileTap={{ scale: 0.98 }}>
      {content}
    </motion.div>
  );
};

// Subcomponent for Hover Links
const HoverLink = ({ children, href, onClick }) => {
  if (href) {
    return (
      <motion.a 
        href={href} 
        style={{ color: 'inherit', textDecoration: 'none', display: 'inline-block' }}
        whileHover={{ color: '#fff', x: 2 }}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.a 
      href="#" 
      onClick={(e) => { e.preventDefault(); onClick && onClick(e); }} 
      style={{ color: 'inherit', textDecoration: 'none', display: 'inline-block', cursor: 'pointer' }}
      whileHover={{ color: '#fff', x: 2 }}
    >
      {children}
    </motion.a>
  );
};

export default Footer;
