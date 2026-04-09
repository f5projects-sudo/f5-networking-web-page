import React from 'react';
import { motion } from 'framer-motion';
import './DataCenterFloorPlan.css';
import floorPlanImg from '../assets/datacenter_iso_4k.png';

const BenefitItem = ({ icon, text, index }) => (
  <motion.div 
    className="benefit-item"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="benefit-icon">
      {icon}
    </div>
    <span className="benefit-text">{text}</span>
  </motion.div>
);

const Hotspot = ({ top, left, label }) => (
  <div className="hotspot" style={{ top, left }}>
    <div className="hotspot-pulse"></div>
    <div className="hotspot-label">{label}</div>
  </div>
);

const DataCenterFloorPlan = ({ t }) => {
  const benefits = [
    { text: t('cableado.floorPlan.benefits.b1', 'Estabilidad y alto rendimiento'), icon: "⚡" },
    { text: t('cableado.floorPlan.benefits.b2', 'Instalación certificable'), icon: "📋" },
    { text: t('cableado.floorPlan.benefits.b3', 'Preparado para futuras ampliaciones'), icon: "↗️" },
    { text: t('cableado.floorPlan.benefits.b4', 'Racks y patch panels'), icon: "🗄️" },
    { text: t('cableado.floorPlan.benefits.b5', 'Switches y seguridad'), icon: "🛡️" },
    { text: t('cableado.floorPlan.benefits.b6', 'Canalización profesional'), icon: "🏗️" }
  ];

  return (
    <section className="floorplan-section">
      <div className="floorplan-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('cableado.floorPlan.title', '¿Qué incluye?')}
        </motion.h2>
        
        <motion.p 
          className="floorplan-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t('cableado.floorPlan.desc', 'Diseñamos e instalamos infraestructura de red profesional para garantizar una conexión estable, segura y lista para crecer con tu empresa. Nuestro enfoque asegura orden, rendimiento y una instalación confiable que soporta las necesidades actuales y futuras de tu operación.')}
        </motion.p>

        <div className="benefit-list">
          {benefits.map((b, i) => (
            <BenefitItem key={i} index={i} text={b.text} icon={b.icon} />
          ))}
        </div>
      </div>

      <div className="floorplan-right">
        <motion.div 
          className="floorplan-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={floorPlanImg} alt="Data Center Floor Plan 4K" width="1200" height="800" loading="lazy" className="floorplan-image" />
          
          {/* Adjusted Hotspots for 4K layout */}
          <Hotspot top="25%" left="15%" label={t('cableado.floorPlan.hotspots.h1', 'SOC / NOC Center')} />
          <Hotspot top="45%" left="35%" label={t('cableado.floorPlan.hotspots.h2', 'Server Racks')} />
          <Hotspot top="40%" left="65%" label={t('cableado.floorPlan.hotspots.h3', 'Cabling Trays')} />
          <Hotspot top="65%" left="80%" label={t('cableado.floorPlan.hotspots.h4', 'Cooling Units')} />
          <Hotspot top="15%" left="75%" label={t('cableado.floorPlan.hotspots.h5', 'Power Systems')} />
          <Hotspot top="85%" left="50%" label={t('cableado.floorPlan.hotspots.h6', 'Connectivity Ingress')} />
        </motion.div>
      </div>
    </section>
  );
};

export default DataCenterFloorPlan;
