import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Database, RefreshCw, FileText } from 'lucide-react';
import BubbleBackground from '../components/BubbleBackground';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function Privacidad({ onNavigate }) {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const scrollTo = (id) => {
    onNavigate('home');
    setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div style={{ backgroundColor: '#1a1a1f', minHeight: '100vh', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <BubbleBackground />
      <Navbar onNavigate={onNavigate} activePage="privacidad" />

      {/* Hero Header */}
      <section style={{ 
        paddingtop: '150px', 
        paddingBottom: '80px', 
        position: 'relative', 
        zIndex: 10,
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(0,86,179,0.1) 0%, rgba(5,5,5,0) 100%)'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 20px 0 20px' }}>
          <motion.div {...fadeInUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }}>
            <ShieldCheck size={20} color="var(--color-primary)" />
            <span style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{t('privacidad.hero.badge', 'Documento Legal')}</span>
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
            {t('privacidad.hero.title1', 'Aviso de ')}<span style={{ color: 'var(--color-primary)' }}>{t('privacidad.hero.titleHighlight', 'Privacidad')}</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            {t('privacidad.hero.desc', 'F5 BPO Services S. de R.L. de C.V., comercialmente conocida como F5 Networking Group, con domicilio en Guadalajara, Jalisco, México, es responsable del uso y protección de sus datos personales, en cumplimiento con lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.')}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '40px 20px 100px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '12px' }}>
                <Database size={28} color="var(--color-accent)" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('privacidad.data.title', 'Datos personales que recabamos')}</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              {t('privacidad.data.desc', 'Recabamos datos personales a través de nuestro sitio web, formularios de contacto, chatbot y canales de comunicación como WhatsApp, incluyendo: nombre, correo electrónico, número telefónico y cualquier información adicional que el usuario proporcione voluntariamente.')}
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(255, 140, 0, 0.1)', borderRadius: '12px' }}>
                <FileText size={28} color="var(--color-secondary)" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('privacidad.purposes.title', 'Finalidades del tratamiento de datos')}</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              {t('privacidad.purposes.desc', 'Los datos personales que recabamos serán utilizados para las siguientes finalidades:')}
            </p>
            <ul style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ position: 'relative' }}>{t('privacidad.purposes.p1', 'Dar seguimiento a solicitudes de información y contacto.')}</li>
              <li>{t('privacidad.purposes.p2', 'Brindar información sobre nuestros servicios.')}</li>
              <li>{t('privacidad.purposes.p3', 'Establecer comunicación comercial.')}</li>
              <li>{t('privacidad.purposes.p4', 'Integrar la información en sistemas de gestión interna (CRM) para seguimiento de clientes.')}</li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(0, 86, 179, 0.1)', borderRadius: '12px' }}>
                <RefreshCw size={28} color="var(--color-primary)" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('privacidad.tech.title', 'Uso de tecnologías automatizadas & Transferencia')}</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong>{t('privacidad.tech.label1', 'Uso de tecnologías automatizadas:')}</strong>{t('privacidad.tech.text1', ' Nuestro sitio web puede utilizar herramientas automatizadas como chatbots para la atención y recopilación de información. Las conversaciones podrán ser almacenadas con fines de seguimiento, mejora del servicio y control de calidad.')}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              <strong>{t('privacidad.tech.label2', 'Transferencia de datos:')}</strong>{t('privacidad.tech.text2', ' Los datos personales podrán ser compartidos con herramientas tecnológicas utilizadas por la empresa para la gestión de clientes, como plataformas CRM (por ejemplo, Monday.com), únicamente para las finalidades descritas en el presente aviso.')}
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px' }}>
                <Mail size={28} color="#fff" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('privacidad.rights.title', 'Derechos ARCO y Consentimiento')}</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong>{t('privacidad.rights.label1', 'Medios para ejercer derechos ARCO:')}</strong>{t('privacidad.rights.text1', ' Usted tiene derecho a acceder, rectificar y cancelar sus datos personales, así como a oponerse al tratamiento de los mismos. Para ejercer estos derechos, deberá enviar una solicitud al correo electrónico: ')}<a href="mailto:info@f5networking.com" style={{ color: 'var(--color-primary)' }}>info@f5networking.com</a>
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong>{t('privacidad.rights.label2', 'Cambios al aviso de privacidad:')}</strong>{t('privacidad.rights.text2', ' Nos reservamos el derecho de modificar o actualizar el presente aviso de privacidad en cualquier momento. Las modificaciones estarán disponibles en nuestro sitio web.')}
            </p>
            <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: 1.7, padding: '20px', background: 'rgba(0, 212, 255, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--color-accent)' }}>
              <strong>{t('privacidad.rights.label3', 'Consentimiento:')}</strong>{t('privacidad.rights.text3', ' Al proporcionar sus datos personales a través de nuestros formularios, chatbot o canales de contacto, usted acepta el presente aviso de privacidad.')}
            </p>
          </motion.div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} scrollTo={scrollTo} />
    </div>
  );
}
