import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Send, Paperclip } from 'lucide-react';
import BubbleBackground from '../components/BubbleBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function Soporte({ onNavigate }) {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    category: '',
    priority: '',
    summary: '',
    description: '',
    file: null,
    privacy: false,
    smsConsent: false
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
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setForm(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append('formType', 'Soporte');
      Object.keys(form).forEach(key => {
        if (form[key] !== null && form[key] !== undefined) {
          data.append(key, form[key]);
        }
      });

      await fetch('https://n8nv2.automationf5networking.com/webhook/033f73b9-c1d3-445b-aaa4-5ad17dd54145', {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      
      setSent(true);
      setTimeout(() => setSent(false), 5000);
      setForm({
        company: '',
        name: '',
        phone: '',
        email: '',
        category: '',
        priority: '',
        summary: '',
        description: '',
        file: null,
        privacy: false,
        smsConsent: false
      });
      // Reset file input manually
      const fileInput = document.getElementById('file-upload');
      if(fileInput) fileInput.value = '';
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
          <ShieldAlert size={60} style={{ color: 'var(--color-secondary)', margin: '0 auto 20px' }} />
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px', fontWeight: '950', letterSpacing: '-1px' }}>
            {t('soporte.title', 'Soporte Técnico')}
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: '1.6' }}>
            {t('soporte.subtitle', 'Estamos aquí para ayudarte a resolver cualquier incidente')}
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
        <motion.div {...fadeInUp} className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', borderRadius: '30px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '80px', height: '80px', background: 'rgba(0, 180, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <ShieldAlert size={40} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{t('soporte.form.success', 'Tu solicitud ha sido recibida. Nuestro equipo la revisará y te contactará a la brevedad.')}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Row 1 */}
              <div style={{ gridColumn: window.innerWidth < 768 ? '1 / -1' : '1' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('soporte.form.company', 'Empresa')}</label>
                <input required type="text" name="company" value={form.company} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }} />
              </div>
              <div style={{ gridColumn: window.innerWidth < 768 ? '1 / -1' : '2' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('soporte.form.name', 'Nombre')}</label>
                <input required type="text" name="name" value={form.name} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }} />
              </div>

              {/* Row 2 */}
              <div style={{ gridColumn: window.innerWidth < 768 ? '1 / -1' : '1' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('soporte.form.phone', 'Teléfono')}</label>
                <input required type="tel" name="phone" value={form.phone} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }} />
              </div>
              <div style={{ gridColumn: window.innerWidth < 768 ? '1 / -1' : '2' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('soporte.form.email', 'Correo')}</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }} />
              </div>

              {/* Row 3 */}
              <div style={{ gridColumn: window.innerWidth < 768 ? '1 / -1' : '1' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('soporte.form.category', 'Categoría del incidente')}</label>
                <select required name="category" value={form.category} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }}>
                  <option value="" disabled>Seleccione...</option>
                  <option value="Hardware">Hardware / Equipo físico</option>
                  <option value="Software">Software / Aplicaciones</option>
                  <option value="Red">Redes / Conectividad</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div style={{ gridColumn: window.innerWidth < 768 ? '1 / -1' : '2' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('soporte.form.priority', 'Prioridad')}</label>
                <select required name="priority" value={form.priority} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }}>
                  <option value="" disabled>Seleccione...</option>
                  <option value="Alta">{t('soporte.form.catHigh', 'Alta → operación detenida')}</option>
                  <option value="Media">{t('soporte.form.catMed', 'Media → afecta parcialmente')}</option>
                  <option value="Baja">{t('soporte.form.catLow', 'Baja → no bloquea operación')}</option>
                </select>
              </div>

              {/* Row 4 */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('soporte.form.summary', 'Resumen del incidente')}</label>
                <input required type="text" name="summary" value={form.summary} onChange={handleChange} className="glass" style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white' }} />
              </div>

              {/* Row 5 */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('soporte.form.description', 'Descripción detallada')}</label>
                <textarea required name="description" value={form.description} onChange={handleChange} placeholder={t('soporte.form.descPlaceholder', 'Describe qué ocurrió, desde cuándo sucede y en qué sistema o proceso')} rows="5" className="glass" style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white', resize: 'vertical' }}></textarea>
              </div>

              {/* Row 6: File upload */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{t('soporte.form.evidence', 'Soporte documental / Evidencia adjunta')}</label>
                <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
                  <input id="file-upload" type="file" name="file" onChange={handleChange} style={{ display: 'none' }} />
                  <label htmlFor="file-upload" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', borderRadius: '12px', border: '1px dashed var(--color-primary)', background: 'rgba(0,180,255,0.05)', color: 'white', cursor: 'pointer', width: '100%', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background='rgba(0,180,255,0.1)'} onMouseOut={e => e.currentTarget.style.background='rgba(0,180,255,0.05)'}>
                    <Paperclip size={20} style={{ color: 'var(--color-primary)' }} />
                    <span style={{ color: form.file ? 'white' : 'var(--color-text-muted)' }}>
                      {form.file ? form.file.name : 'Seleccionar archivo (opcional)'}
                    </span>
                  </label>
                </div>
              </div>

              {/* Row 7: Privacy */}
              <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '10px' }}>
                <input required type="checkbox" id="privacy" name="privacy" checked={form.privacy} onChange={handleChange} style={{ marginTop: '5px', accentColor: 'var(--color-primary)', width: '18px', height: '18px', cursor: 'pointer' }} />
                <label htmlFor="privacy" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', cursor: 'pointer' }}>
                  {t('soporte.form.privacy', 'Al enviar este formulario, autorizas el tratamiento de tus datos personales para la atención de tu solicitud, conforme a nuestro Aviso de Privacidad.')}
                </label>
              </div>

              {/* Row 8: SMS Consent */}
              <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '5px' }}>
                <input 
                  required 
                  type="checkbox" 
                  id="smsConsent" 
                  name="smsConsent" 
                  checked={form.smsConsent} 
                  onChange={handleChange} 
                  style={{ marginTop: '5px', accentColor: 'var(--color-primary)', width: '18px', height: '18px', cursor: 'pointer', flexShrink: 0 }} 
                />
                <label htmlFor="smsConsent" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', cursor: 'pointer' }}>
                  {t('home.contact.smsConsent', 'Al proporcionar su número telefónico y enviar este formulario, usted acepta recibir mensajes SMS de F5 Networking relacionados con soporte al cliente, notificaciones de cuenta, recordatorios y actualizaciones de servicio. La frecuencia de los mensajes puede variar. Pueden aplicar tarifas de mensajes y datos. Responda STOP para dejar de recibir mensajes o HELP para obtener ayuda. Consulte nuestros Términos y Condiciones y Aviso de Privacidad.')}
                </label>
              </div>

              {/* Submit Button */}
              <div style={{ gridColumn: '1 / -1', marginTop: '20px' }}>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 180, 255, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  style={{ width: '100%', padding: '16px', background: 'var(--color-primary)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? 'Enviando...' : t('soporte.form.submit', 'Reportar incidencia')}
                  {!loading && <Send size={20} />}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </section>

      <Footer onNavigate={onNavigate} />
      <Navbar onNavigate={onNavigate} activePage="soporte" />
    </div>
  );
}
