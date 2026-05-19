import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Send } from 'lucide-react';
import BubbleBackground from '../components/BubbleBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function Alianzas({ onNavigate }) {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    proposal: ''
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new URLSearchParams();
      data.append('formType', 'Alianzas Estratégicas');
      Object.keys(form).forEach(key => {
        data.append(key, form[key]);
      });

      await fetch('https://n8nv2.automationf5networking.com/webhook/b6c1f809-4c33-438f-9507-8c6e5008f2bf', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString()
      });
      
      setSent(true);
      setTimeout(() => setSent(false), 5000);
      setForm({
        company: '',
        name: '',
        phone: '',
        email: '',
        proposal: ''
      });
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <BubbleBackground />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', paddingTop: '150px', paddingBottom: '60px', textAlign: 'center', zIndex: 10 }}>
        <motion.div {...fadeInUp} style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <Handshake size={60} style={{ color: 'var(--color-primary)', margin: '0 auto 20px' }} />
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px', fontWeight: '950', letterSpacing: '-1px' }}>
            {t('alianzas.title', 'Alianzas Estratégicas')}
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: '1.6' }}>
            {t('alianzas.subtitle', 'Conéctate con nosotros para explorar nuevas oportunidades de negocio')}
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
        <motion.div {...fadeInUp} className="glass" style={{ maxWidth: '700px', margin: '0 auto', padding: '40px', borderRadius: '30px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '80px', height: '80px', background: 'rgba(0, 180, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Handshake size={40} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{t('alianzas.form.success', 'Gracias por tu interés. Hemos recibido tu propuesta y nos pondremos en contacto contigo pronto.')}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Row 1 */}
              <div style={{ gridColumn: window.innerWidth < 768 ? '1 / -1' : '1' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('alianzas.form.company', 'Empresa')}</label>
                <input required type="text" name="company" value={form.company} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }} />
              </div>
              <div style={{ gridColumn: window.innerWidth < 768 ? '1 / -1' : '2' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('alianzas.form.name', 'Nombre del representante')}</label>
                <input required type="text" name="name" value={form.name} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }} />
              </div>

              {/* Row 2 */}
              <div style={{ gridColumn: window.innerWidth < 768 ? '1 / -1' : '1' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('alianzas.form.phone', 'Teléfono')}</label>
                <input required type="tel" name="phone" value={form.phone} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }} />
              </div>
              <div style={{ gridColumn: window.innerWidth < 768 ? '1 / -1' : '2' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('alianzas.form.email', 'Correo corporativo')}</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }} />
              </div>

              {/* Row 3 */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('alianzas.form.proposal', 'Resumen de la propuesta')}</label>
                <textarea required name="proposal" value={form.proposal} onChange={handleChange} rows="5" className="glass" style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white', resize: 'vertical' }}></textarea>
              </div>

              {/* Submit Button */}
              <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 180, 255, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  style={{ width: '100%', padding: '16px', background: 'var(--color-primary)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? 'Enviando...' : t('alianzas.form.submit', 'Enviar propuesta')}
                  {!loading && <Send size={20} />}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </section>

      <Footer onNavigate={onNavigate} />
      <Navbar onNavigate={onNavigate} activePage="alianzas" />
    </div>
  );
}
