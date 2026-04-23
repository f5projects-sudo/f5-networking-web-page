import React from 'react';

// Static graphite background — particles removed for cleaner, faster experience
const BubbleBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100dvh',
        zIndex: 0,
        background: 'radial-gradient(ellipse at 30% 20%, rgba(0,86,179,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(255,140,0,0.04) 0%, transparent 60%), #1a1a1f',
        pointerEvents: 'none'
      }}
    />
  );
};

export default BubbleBackground;
