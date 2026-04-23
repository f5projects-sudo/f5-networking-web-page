import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Bot, FileWarning, Globe, Lock } from 'lucide-react';
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

export default function Pua({ onNavigate }) {
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
      <Navbar onNavigate={onNavigate} activePage="pua" />

      {/* Hero Header */}
      <section style={{ 
        paddingTop: '150px', 
        paddingBottom: '80px', 
        position: 'relative', 
        zIndex: 10,
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(255,140,0,0.1) 0%, rgba(5,5,5,0) 100%)'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 20px 0 20px' }}>
          <motion.div {...fadeInUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }}>
            <ShieldCheck size={20} color="var(--color-secondary)" />
            <span style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{t('pua.hero.badge', 'Seguridad Digital')}</span>
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
            {t('pua.hero.title1', 'Política de ')}<span style={{ color: 'var(--color-secondary)' }}>{t('pua.hero.titleHighlight', 'Uso Aceptable')}</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            {t('pua.hero.desc', 'La presente Política de Uso Aceptable (PUA) regula el acceso y uso de los servicios digitales, incluyendo el sitio web, formularios de contacto, chatbot y canales de comunicación operados por F5 Networking Group.')}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '40px 20px 100px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(255, 140, 0, 0.1)', borderRadius: '12px' }}>
                <UserCheck size={28} color="var(--color-secondary)" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('pua.use.title', 'Uso adecuado de los servicios')}</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              {t('pua.use.desc', 'El usuario se compromete a utilizar los servicios de manera responsable, lícita y conforme a las buenas prácticas, absteniéndose de:')}
            </p>
            <ul style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>{t('pua.use.li1', 'Proporcionar información falsa, inexacta o incompleta.')}</li>
              <li>{t('pua.use.li2', 'Utilizar lenguaje ofensivo, discriminatorio o inapropiado.')}</li>
              <li>{t('pua.use.li3', 'Intentar vulnerar la seguridad de los sistemas o interferir con su funcionamiento.')}</li>
              <li>{t('pua.use.li4', 'Utilizar los canales de contacto para fines distintos a los ofrecidos por la empresa.')}</li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '12px' }}>
                <Bot size={28} color="var(--color-accent)" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('pua.chatbot.title', 'Chatbot y Canales Automatizados')}</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              {t('pua.chatbot.desc', 'El chatbot y otros canales automatizados son herramientas de apoyo para la atención inicial. El usuario reconoce que:')}
            </p>
            <ul style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>{t('pua.chatbot.li1', 'Las respuestas pueden ser generadas automáticamente.')}</li>
              <li>{t('pua.chatbot.li2', 'La información proporcionada es de carácter informativo.')}</li>
              <li>{t('pua.chatbot.li3', 'No constituye asesoría profesional ni compromiso contractual.')}</li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(0, 86, 179, 0.1)', borderRadius: '12px' }}>
                <Globe size={28} color="var(--color-primary)" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('pua.policies.title', 'Políticas Generales')}</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#fff' }}>{t('pua.policies.privacyTitle', 'Protección de datos y privacidad')}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                  {t('pua.policies.privacyDesc', 'El uso de los servicios implica el tratamiento de datos personales conforme al Aviso de Privacidad disponible en el sitio web.')}
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#fff' }}>{t('pua.policies.limitsTitle', 'Limitaciones del servicio')}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                  {t('pua.policies.limitsDesc', 'La empresa no garantiza la disponibilidad continua o libre de errores de los servicios digitales, ni la exactitud absoluta de la información proporcionada a través de herramientas automatizadas.')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,140,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(255, 0, 85, 0.1)', borderRadius: '12px' }}>
                <FileWarning size={28} color="#FF0055" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('pua.security.title', 'Seguridad y Jurisdicción')}</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong>{t('pua.security.label1', 'Medidas en caso de uso indebido:')}</strong>{t('pua.security.text1', ' F5 Networking Group se reserva el derecho de restringir o bloquear el acceso a los servicios en caso de detectar un uso indebido, sin previo aviso.')}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong>{t('pua.security.label2', 'Modificaciones:')}</strong>{t('pua.security.text2', ' La empresa podrá actualizar la presente política en cualquier momento, siendo efectivas dichas modificaciones desde su publicación en el sitio web.')}
            </p>
            <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: 1.7, padding: '20px', background: 'rgba(255,140,0,0.05)', borderRadius: '10px', borderLeft: '4px solid var(--color-secondary)' }}>
              <strong>{t('pua.security.label3', 'Jurisdicción:')}</strong>{t('pua.security.text3', ' Para la interpretación y cumplimiento de la presente política, las partes se someten a las leyes aplicables en Guadalajara, Jalisco, México.')}
            </p>
          </motion.div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} scrollTo={scrollTo} />
    </div>
  );
}
