import React, { useEffect, useRef, useState } from 'react';

const NovaParticles = ({ targetShape = 'none' }) => {
  const canvasRef = useRef(null);
  
  // Guardamos las partículas en una referencia para que sobrelleven los renders
  const particlesRef = useRef([]);
  const animationRef = useRef();
  
  // Guardamos las coordenadas del mouse
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 100 });
  
  // Colores de F5 Networking
  const colors = ['#0056b3', '#FF8C00', '#00B4FF', '#ffffff', '#1E90FF'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Función para ajustar el tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      // Usamos innerHeight para que cubra la pantalla y luego lo fijamos con position: fixed
      canvas.height = window.innerHeight; 
      initParticles(); 
    };

    // Función auxiliar para obtener datos de píxeles a partir de un texto
    const getTextPixelData = () => {
      const offscreen = document.createElement('canvas');
      const offCtx = offscreen.getContext('2d', { willReadFrequently: true });
      offscreen.width = window.innerWidth;
      offscreen.height = window.innerHeight;
      
      const text = "NOVA CORE";
      // Ajuste responsivo del tamaño de letra
      let fontSize = window.innerWidth < 768 ? 60 : 120;
      
      offCtx.fillStyle = 'white';
      offCtx.font = `bold ${fontSize}px "Inter", sans-serif`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillText(text, offscreen.width / 2, offscreen.height / 2 - 50);

      const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
      const pixels = [];
      const density = window.innerWidth < 768 ? 6 : 8; // Menos partículas para NOVA CORE (valores más altos)
      
      for (let y = 0; y < offscreen.height; y += density) {
        for (let x = 0; x < offscreen.width; x += density) {
          const alpha = imageData.data[((offscreen.width * y) + x) * 4 + 3];
          if (alpha > 128) {
            pixels.push({ x, y });
          }
        }
      }
      return pixels;
    };

    // Función auxiliar para obtener datos de píxeles a partir de una tarjeta VISA
    const getCardPixelData = () => {
      const offscreen = document.createElement('canvas');
      offscreen.width = window.innerWidth;
      offscreen.height = window.innerHeight;
      const offCtx = offscreen.getContext('2d', { willReadFrequently: true });
      
      const cardWidth = window.innerWidth < 768 ? Math.floor(window.innerWidth * 0.8) : 600;
      const cardHeight = Math.floor(cardWidth * 0.6);
      // Forzar coordenadas enteras para evitar anti-aliasing severo
      const x = Math.floor((window.innerWidth - cardWidth) / 2);
      const y = Math.floor((window.innerHeight - cardHeight) / 2);
      const radius = 20;

      // Dibujar borde de tarjeta redonda
      offCtx.strokeStyle = 'white';
      offCtx.lineWidth = window.innerWidth < 768 ? 5 : 7; // Más ancho para que el density=6 no lo salte
      offCtx.beginPath();
      offCtx.moveTo(x + radius, y);
      offCtx.lineTo(x + cardWidth - radius, y);
      offCtx.quadraticCurveTo(x + cardWidth, y, x + cardWidth, y + radius);
      offCtx.lineTo(x + cardWidth, y + cardHeight - radius);
      offCtx.quadraticCurveTo(x + cardWidth, y + cardHeight, x + cardWidth - radius, y + cardHeight);
      offCtx.lineTo(x + radius, y + cardHeight);
      offCtx.quadraticCurveTo(x, y + cardHeight, x, y + cardHeight - radius);
      offCtx.lineTo(x, y + radius);
      offCtx.quadraticCurveTo(x, y, x + radius, y);
      offCtx.closePath();
      offCtx.stroke();

      // (Se remueven las líneas del chip que estorbaban la lectura central)

      // Dibujar texto "VISA" abajo a la derecha
      const fontSize = window.innerWidth < 768 ? 35 : 70;
      offCtx.fillStyle = 'white';
      offCtx.font = `italic bold ${fontSize}px "Inter", sans-serif`;
      offCtx.textAlign = 'right';
      offCtx.textBaseline = 'bottom';
      offCtx.fillText("VISA", x + cardWidth - cardWidth * 0.08, y + cardHeight - cardHeight * 0.1);

      // Dibujar números de la tarjeta (fuente fina, hilera espaciada)
      const numFontSize = window.innerWidth < 768 ? 22 : 45;
      offCtx.font = `lighter ${numFontSize}px "Inter", sans-serif`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      const textX = x + cardWidth / 2;
      const textY = y + cardHeight / 2;
      offCtx.fillText("1234 5678 9101 1112", textX, textY);

      const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
      const pixels = [];
      const density = window.innerWidth < 768 ? 5 : 6; // Menos partículas para la tarjeta VISA en general
      
      for (let y = 0; y < offscreen.height; y += density) {
        for (let x = 0; x < offscreen.width; x += density) {
          const alpha = imageData.data[((offscreen.width * y) + x) * 4 + 3];
          if (alpha > 128) {
            pixels.push({ x, y });
          }
        }
      }
      return pixels;
    };

    // Obtenemos los data sets
    const textPixels = getTextPixelData();
    const cardPixels = getCardPixelData();
    
    // Determinamos un conteo razonable de partículas balanceado.
    const maxParticles = Math.max(textPixels.length, cardPixels.length, window.innerWidth < 768 ? 600 : 1200);

    // Inicializar array de partículas
    const initParticles = () => {
       let particleArray = [];
        for (let i = 0; i < maxParticles; i++) {
         const tpx = textPixels[i % textPixels.length];
         const cpx = cardPixels[i % cardPixels.length];
         
         const color = colors[Math.floor(Math.random() * colors.length)];
         const size = Math.random() * 2 + 1;
         
         // Posiciones base para cada estado
         const baseText = { x: tpx.x, y: tpx.y };
         const baseCard = { x: cpx.x, y: cpx.y };
         // Para dispersión, un punto aleatorio dentro del canvas expandido
         const baseScatter = {
            x: Math.random() * canvas.width * 1.5 - (canvas.width * 0.25),
            y: Math.random() * canvas.height * 1.5 - (canvas.height * 0.25)
         };

         particleArray.push({
           x: baseText.x + (Math.random() * 20 - 10), // Iniciar muy cerca del texto
           y: baseText.y + (Math.random() * 20 - 10),
           vx: 0,
           vy: 0,
           color: color,
           size: size,
           baseText: baseText,
           baseCard: baseCard,
           baseScatter: baseScatter,
           // Asignamos el hover offset
           hoverOffsetX: 0,
           hoverOffsetY: 0
         });
       }
       particlesRef.current = particleArray;
    };

    resizeCanvas();

    // Loop de animación
    const animate = () => {
      // Limpiamos con leve alpha para efecto estela
      ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        let targetX, targetY;

        // Selección del objetivo en base al targetShape de las props
        if (targetShape === 'text') {
           targetX = p.baseText.x;
           targetY = p.baseText.y;
        } else if (targetShape === 'card') {
           targetX = p.baseCard.x;
           targetY = p.baseCard.y;
        } else {
           // scatter por defecto
           targetX = p.baseScatter.x;
           targetY = p.baseScatter.y;
        }

        // Interacción con el mouse
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius && targetShape !== 'scatter') {
           // Calcular fuerza de repulsión
           let forceDirectionX = dx / distance;
           let forceDirectionY = dy / distance;
           let force = (mouse.radius - distance) / mouse.radius;
           
           // Max repel distance
           let repelX = forceDirectionX * force * 5;
           let repelY = forceDirectionY * force * 5;
           
           p.hoverOffsetX -= repelX;
           p.hoverOffsetY -= repelY;
        } else {
           // Retorno orgánico a su propia posición en su estado correspondiente
           p.hoverOffsetX *= 0.9;
           p.hoverOffsetY *= 0.9;
        }

        // Spring physics
        let tx = targetX + p.hoverOffsetX;
        let ty = targetY + p.hoverOffsetY;
        
        // Atracción hacia su destino
        let ax = (tx - p.x) * 0.05; // Stiffness
        let ay = (ty - p.y) * 0.05;

        // Si es scatter, agregamos una oscilación lenta browniana
        if (targetShape === 'scatter') {
           ax += Math.sin(Date.now() * 0.001 + i) * 0.2;
           ay += Math.cos(Date.now() * 0.001 + i) * 0.2;
        }

        p.vx += ax;
        p.vy += ay;
        
        p.vx *= 0.85; // Damping
        p.vy *= 0.85;

        p.x += p.vx;
        p.y += p.vy;

        // Dibujar partícula
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Event Listeners
    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    // Si sale de ventana, el mouse desaparece
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [targetShape]); // Re-ejecutar solo si cambia el shape, aunque el loop lo lea en caliente igual.

  return (
    <canvas 
      ref={canvasRef} 
      style={{
         position: 'fixed',
         top: 0,
         left: 0,
         width: '100vw',
         height: '100vh',
         zIndex: 0,
         pointerEvents: 'none',
         background: 'transparent'
      }}
    />
  );
};

export default NovaParticles;
