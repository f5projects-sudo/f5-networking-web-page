import React from 'react';
import { motion } from 'framer-motion';
import { 
  Receipt, 
  Bot, 
  Home, 
  LineChart, 
  Activity, 
  ShoppingCart, 
  FileText, 
  GraduationCap, 
  Wrench, 
  Landmark, 
  Briefcase, 
  Headset 
} from 'lucide-react';

const industries = [
  {
    icon: <Receipt size={32} />,
    title: "Collections",
    description: "Automatización de cobranza y seguimiento de pagos de forma eficiente.",
    color: "var(--color-primary)" // blue
  },
  {
    icon: <Bot size={32} />,
    title: "Asistente virtual",
    description: "Atención automática 24/7 para resolver dudas y guiar a tus usuarios.",
    color: "var(--color-secondary)" // orange
  },
  {
    icon: <Home size={32} />,
    title: "Bienes raíces",
    description: "Gestión inteligente de prospectos, citas y seguimiento comercial.",
    color: "var(--color-accent)" // teal/cyan
  },
  {
    icon: <LineChart size={32} />,
    title: "Finanzas",
    description: "Optimización de procesos financieros, reportes y atención a clientes.",
    color: "var(--color-primary)" // blue
  },
  {
    icon: <Activity size={32} />,
    title: "Hospitales",
    description: "Automatización de citas, información médica y atención al paciente.",
    color: "#ff4d4f" // red
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "E-commerce",
    description: "Soporte de ventas, seguimiento de pedidos y atención postventa.",
    color: "var(--color-secondary)" // orange
  },
  {
    icon: <FileText size={32} />,
    title: "Información",
    description: "Clasificación, gestión y respuesta automática a solicitudes frecuentes.",
    color: "var(--color-accent)" // teal/cyan
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Educación",
    description: "Atención a estudiantes, inscripciones y soporte académico automatizado.",
    color: "#9b59b6" // purple
  },
  {
    icon: <Wrench size={32} />,
    title: "Utilidades",
    description: "Gestión de servicios, reportes y comunicación con usuarios.",
    color: "var(--color-primary)" // blue
  },
  {
    icon: <Landmark size={32} />,
    title: "Bancos",
    description: "Atención segura, automatización de consultas y procesos internos.",
    color: "#52c41a" // green
  },
  {
    icon: <Briefcase size={32} />,
    title: "Negocios",
    description: "Optimización operativa y atención inteligente para distintos giros.",
    color: "var(--color-secondary)" // orange
  },
  {
    icon: <Headset size={32} />,
    title: "Atención al cliente",
    description: "Respuestas rápidas, seguimiento y mejora de la experiencia del usuario.",
    color: "var(--color-accent)" // teal/cyan
  }
];

const IndustryAgents = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '25px',
          padding: '20px'
        }}
      >
        {industries.map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '16px', 
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              transition: 'box-shadow 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 10px 30px -10px ${item.color}40`;
              e.currentTarget.style.borderColor = `${item.color}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
            }}
          >
            <div style={{ 
              background: `${item.color}15`, 
              color: item.color,
              padding: '12px', 
              borderRadius: '12px',
              marginBottom: '20px'
            }}>
              {item.icon}
            </div>
            <h3 style={{ 
              color: 'white', 
              fontSize: '1.25rem', 
              marginBottom: '12px',
              fontWeight: '600'
            }}>
              {item.title}
            </h3>
            <p style={{ 
              color: 'var(--color-text-muted)', 
              fontSize: '0.95rem',
              lineHeight: '1.6',
              margin: 0
            }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IndustryAgents;
