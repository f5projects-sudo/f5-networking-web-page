import React from 'react';

export default function MapFooter() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: '20px' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.936577322971!2d-103.36079602390176!3d20.67229859992523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1fd8cfb27dd%3A0xa9d349e3edc5505b!2sC.%20Miguel%20Blanco%201440%2C%20Col%20Americana%2C%20Americana%2C%2044160%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1742410515152!5m2!1ses-419!2smx" 
        width="100%" 
        height="100%" 
        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="F5 Networking Location"
      />
      {/* Overlay to catch interactions if needed or add styling */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        pointerEvents: 'none', 
        boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.1)'
      }} />
    </div>
  );
}
