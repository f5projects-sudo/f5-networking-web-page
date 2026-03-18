import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './DataCenterMaqueta.css';

// Importing assets (assumed to be in src/assets)
import cablingImg from '../assets/cabling_pro.png';

const ServerUnit = ({ id, x, y, z, delay = 0 }) => {
  return (
    <motion.div 
      className="server-unit-card"
      style={{ 
        position: 'absolute',
        left: x,
        top: y,
        transform: `translateZ(${z}px)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      <div className="unit-header">
        <div className="unit-label">SYSTEM_RACK_{id}</div>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#28a745', boxShadow: '0 0 8px #28a745' }}></div>
      </div>
      
      <div className="led-status-vertical">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="led-node"></div>
        ))}
      </div>

      <div className="ip-label-float">
        10.0.{Math.floor(Math.random() * 254)}.{id === "A" ? "1" : Math.floor(Math.random() * 254)}
      </div>
    </motion.div>
  );
};

const DataCenterMaqueta = () => {
  const containerRef = useRef(null);
  
  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springConfig = { stiffness: 40, damping: 25 };
  const camX = useSpring(useTransform(mouseX, [-500, 500], [-40, 40]), springConfig);
  const camY = useSpring(useTransform(mouseY, [-400, 400], [-30, 30]), springConfig);
  
  // Immersive Zoom
  const zoomZ = useSpring(useTransform(mouseY, [-400, 400], [200, 800]), springConfig);
  
  const rotX = useSpring(useTransform(mouseY, [-400, 400], [8, -8]), springConfig);
  const rotY = useSpring(useTransform(mouseX, [-500, 500], [-10, 10]), springConfig);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className="maqueta-container" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="maqueta-overlay"></div>
      
      <motion.div 
        className="maqueta-perspective-wrapper"
        style={{ 
          x: camX, 
          y: camY, 
          z: zoomZ,
          rotateX: rotX,
          rotateY: rotY
        }}
      >
        <div className="maqueta-aisle-container">
          {/* Aisle Structure */}
          <div className="aisle-surface aisle-wall left"></div>
          <div className="aisle-surface aisle-wall right"></div>
          <div className="aisle-surface aisle-floor"></div>
          <div className="aisle-surface aisle-ceiling"></div>
          
          {/* LED Edges for Depth Definition */}
          <div className="aisle-led-strip left"></div>
          <div className="aisle-led-strip right"></div>

          {/* Solid Back wall fixes the "middle line" glitch */}
          <div className="aisle-back"></div>
          
          {/* Ambient depth glow */}
          <div className="aisle-end-glow"></div>

          {/* Parallax Layers - Random distributed units along Z axis */}
          <ServerUnit id="PRIME" x="10%" y="20%" z="-150" delay={0.2} />
          <ServerUnit id="BETA" x="65%" y="55%" z="-400" delay={0.4} />
          <ServerUnit id="NODE-7" x="5%" y="60%" z="-650" delay={0.6} />
          <ServerUnit id="HOST-X" x="70%" y="10%" z="-850" delay={0.8} />

          {/* Floating Data Bits / IPs in 3D Space */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                transform: `translateZ(-${Math.random() * 1000}px)`,
                fontSize: '10px',
                color: 'var(--color-secondary)',
                opacity: 0.3,
                fontFamily: 'monospace'
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              0x{Math.floor(Math.random() * 1000).toString(16)}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DataCenterMaqueta;
