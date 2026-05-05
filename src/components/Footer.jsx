import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Instagram, Facebook, Youtube, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ onNavigate, scrollTo }) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer style={{ backgroundColor: '#071822', color: 'white', padding: '80px 5% 40px', position: 'relative', overflow: 'hidden', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Decorative bubbles - Top Right */}
      <div style={{ position: 'absolute', top: '-50px', right: '5%', width: '350px', height: '350px', pointerEvents: 'none', zIndex: 0 }}>
        {/* We simulate the overlapping bubbles from the image using CSS gradients and border radiuses */}
        <div style={{ position: 'absolute', top: '20px', right: '20px', width: '200px', height: '200px', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', border: '2px solid rgba(236, 72, 153, 0.4)', background: 'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.1), transparent)', transform: 'rotate(20deg)', filter: 'blur(2px)' }} />
        <div style={{ position: 'absolute', top: '80px', right: '100px', width: '180px', height: '220px', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', border: '2px solid rgba(168, 85, 247, 0.4)', background: 'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.1), transparent)', transform: 'rotate(-15deg)', filter: 'blur(1px)' }} />
        <div style={{ position: 'absolute', top: '150px', right: '30px', width: '120px', height: '120px', borderRadius: '50% 50% 40% 60% / 50% 60% 40% 50%', border: '2px solid rgba(56, 189, 248, 0.4)', background: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1), transparent)', transform: 'rotate(45deg)', filter: 'blur(1px)' }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Top Section */}
        <div style={{ marginBottom: '80px', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '15px', lineHeight: '1.3' }}>
            {t('footer.hero.title', '¿Estás listo para llevar a')} <br />
            {t('footer.hero.title2', 'tu empresa al siguiente nivel?')}
          </h2>
          <h3 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '40px', letterSpacing: '-0.5px' }}>
            {t('footer.hero.subtitle', 'Habla con un experto hoy mismo.')}
          </h3>
          <motion.a 
            href="https://wa.me/5213341701107"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              display: 'inline-block',
              padding: '12px 35px', 
              borderRadius: '30px', 
              backgroundColor: 'rgba(255,255,255,0.25)', 
              color: 'white', 
              textDecoration: 'none',
              fontWeight: '500',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            {t('footer.hero.btn', 'Habla con un especialista')}
          </motion.a>
        </div>

        {/* Middle Section - 3 Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px', marginBottom: '80px' }}>
          
          {/* Col 1: México */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '20px' }}>México</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px', color: 'white' }} />
                <span>C. Miguel Blanco 1440<br/>Col Americana, Americana<br/>44160 Guadalajara, Jal., México.</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'white' }} />
                <a href="tel:+5213341701107" style={{ color: 'inherit', textDecoration: 'none' }}>+ 52 (33) 4170 1107</a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'white' }} />
                <a href="mailto:sales@f5networking.com" style={{ color: 'inherit', textDecoration: 'none' }}>sales@f5networking.com</a>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '35px' }}>
              {[
                { icon: <MessageCircle size={16} color="#071822" />, url: 'https://wa.me/5213341701107' },
                { icon: <Linkedin size={16} color="#071822" fill="#071822" />, url: '#' },
                { icon: <Facebook size={16} color="#071822" fill="#071822" />, url: '#' },
                { icon: <Youtube size={16} color="#071822" />, url: '#' },
                { icon: <Instagram size={16} color="#071822" />, url: '#' }
              ].map((social, idx) => (
                <motion.a 
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2: USA */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '20px' }}>USA</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px', color: 'white' }} />
                <span>950 SW 57th Ave. Suite 330<br/>West Miami, FL. C.P. 33144.</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'white' }} />
                <a href="tel:+12545058090" style={{ color: 'inherit', textDecoration: 'none' }}>+1 (254) 505 8090</a>
              </div>
            </div>
          </div>

          {/* Col 3: Links de interés */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '20px' }}>Links de interés</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
              {[
                { name: 'Nosotros', path: 'nosotros' },
                { name: 'Axia IA', path: 'axia' },
                { name: 'Desarrollo de Software', path: 'desarrollo' },
                { name: 'Soporte y Mantenimiento', path: 'bpo' },
                { name: 'Sistemas PBX', path: 'pbx' },
                { name: 'Equipamiento', path: 'equipamiento' },
              ].map((link, idx) => (
                <a 
                  key={idx} 
                  href={`#${link.path}`} 
                  onClick={(e) => handleNavigation(link.path, e)} 
                  style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={e => e.target.style.color='white'}
                  onMouseOut={e => e.target.style.color='rgba(255,255,255,0.85)'}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Support and Contact Buttons */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '35px', flexWrap: 'wrap' }}>
              <motion.div
                onClick={(e) => handleNavigation('soporte', e)}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  padding: '8px 28px', 
                  borderRadius: '30px', 
                  border: '1px solid white',
                  color: 'white', 
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                Soporte
              </motion.div>
              <motion.div
                onClick={(e) => handleNavigation('alianzas', e)}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  padding: '8px 28px', 
                  borderRadius: '30px', 
                  border: '1px solid white',
                  color: 'white', 
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                Alianzas
              </motion.div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px', paddingTop: '40px', fontSize: '0.85rem' }}>
          
          <div style={{ display: 'flex', gap: window.innerWidth < 768 ? '20px' : '60px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#pua" onClick={(e) => handleNavigation('pua', e)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>PUA</a>
            <a href="#terminos" onClick={(e) => handleNavigation('terminos', e)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Términos de Venta</a>
            <a href="#privacidad" onClick={(e) => handleNavigation('privacidad', e)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Aviso de privacidad</a>
          </div>

          <div style={{ color: 'white', fontWeight: '500', marginTop: '10px' }}>
            Copyright © {currentYear}, F5 Networking
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
