import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, FileSignature, AlertOctagon, Bot, Globe } from 'lucide-react';
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

export default function Terminos({ onNavigate }) {
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
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <BubbleBackground />
      <Navbar onNavigate={onNavigate} activePage="terminos" />

      {/* Hero Header */}
      <section style={{ 
        paddingTop: '150px', 
        paddingBottom: '80px', 
        position: 'relative', 
        zIndex: 10,
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(37,211,102,0.1) 0%, rgba(5,5,5,0) 100%)'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 20px 0 20px' }}>
          <motion.div {...fadeInUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }}>
            <Scale size={20} color="#25D366" />
            <span style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{t('terminos.hero.tag', 'Documento Legal')}</span>
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
            {t('terminos.hero.title1', 'Términos y')} <span style={{ color: '#25D366' }}>{t('terminos.hero.title2', 'Condiciones')}</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            {t('terminos.hero.desc', 'El presente sitio web es operado por F5 BPO Services S. de R.L. de C.V., bajo el nombre comercial F5 Networking Group. El acceso y uso de este sitio web implica la aceptación de los presentes términos y condiciones de uso.')}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '40px 20px 100px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '12px' }}>
                <Globe size={28} color="var(--color-primary)" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('terminos.uso.title', 'Uso del sitio e Información')}</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong>{t('terminos.uso.item1Key', 'Uso del sitio:')}</strong> {t('terminos.uso.item1Desc', 'El usuario se compromete a utilizar este sitio de manera lícita y conforme a las disposiciones aplicables, absteniéndose de realizar cualquier actividad que pueda dañar, sobrecargar o afectar el funcionamiento del sitio o sus servicios.')}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              <strong>{t('terminos.uso.item2Key', 'Naturaleza de la información:')}</strong> {t('terminos.uso.item2Desc', 'La información contenida en este sitio tiene fines informativos y comerciales, y no constituye una oferta vinculante. Los servicios ofrecidos están sujetos a evaluación, propuesta y formalización mediante acuerdos comerciales específicos.')}
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(255, 140, 0, 0.1)', borderRadius: '12px' }}>
                <Bot size={28} color="var(--color-secondary)" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('terminos.herramientas.title', 'Herramientas Automatizadas')}</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              <strong>{t('terminos.herramientas.item1Key', 'Uso de herramientas automatizadas:')}</strong> {t('terminos.herramientas.item1Desc', 'El sitio puede incorporar herramientas como chatbots para la atención de usuarios. Las respuestas generadas por dichas herramientas tienen fines informativos y no constituyen asesoría profesional ni compromisos contractuales.')}
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(255, 0, 85, 0.1)', borderRadius: '12px' }}>
                <AlertOctagon size={28} color="#FF0055" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{t('terminos.legal.title', 'Responsabilidad y Propiedad Legal')}</h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong>{t('terminos.legal.item1Key', 'Limitación de responsabilidad:')}</strong> {t('terminos.legal.item1Desc', 'F5 Networking Group no será responsable por daños derivados del uso o interpretación de la información contenida en el sitio o proporcionada a través de herramientas automatizadas.')}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong>{t('terminos.legal.item2Key', 'Propiedad intelectual:')}</strong> {t('terminos.legal.item2Desc', 'Todos los contenidos del sitio, incluyendo textos, diseños, logotipos y materiales, son propiedad de la empresa o se encuentran debidamente licenciados, quedando prohibido su uso no autorizado.')}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              <strong>{t('terminos.legal.item3Key', 'Modificaciones:')}</strong> {t('terminos.legal.item3Desc', 'La empresa se reserva el derecho de modificar en cualquier momento los presentes términos y condiciones.')}
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="glass" style={{ padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(37,211,102,0.05)' }}>
            <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: 1.7, borderLeft: '4px solid #25D366', paddingLeft: '20px' }}>
              <strong>{t('terminos.jurisdiccion.key', 'Jurisdicción:')}</strong> {t('terminos.jurisdiccion.desc', 'Para la interpretación y cumplimiento de estos términos, las partes se someten a las leyes aplicables en Guadalajara, Jalisco, México.')}
            </p>
          </motion.div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} scrollTo={scrollTo} />
    </div>
  );
}
