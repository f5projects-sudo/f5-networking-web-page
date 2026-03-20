import React, { useEffect, useRef } from 'react';

// Colores de F5 Networking
const colors = ['#0056b3', '#FF8C00', '#00B4FF', '#ffffff', '#1E90FF'];

const NovaParticles = ({ targetShape = 'none' }) => {
  const canvasRef = useRef(null);
  
  // Guardamos las partículas en una referencia para que sobrelleven los renders
  const particlesRef = useRef([]);
  const animationRef = useRef();
  
  // Guardamos las coordenadas del mouse
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 100 });

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
      
      const isMobile = window.innerWidth < 768;
      const isUltraMobile = window.innerWidth < 480;
      
      offCtx.fillStyle = 'white';
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      
      if (isUltraMobile) {
        // Dos líneas para máxima legibilidad en móviles pequeños
        const fontSize = 70;
        offCtx.font = `700 ${fontSize}px "Inter", sans-serif`;
        // Centrados verticalmente con ajuste de línea
        offCtx.fillText("NOVA", offscreen.width / 2, offscreen.height / 2 - 80);
        offCtx.fillText("CORE", offscreen.width / 2, offscreen.height / 2 + 10);
      } else {
        const fontSize = isMobile ? 60 : 120;
        offCtx.font = `700 ${fontSize}px "Inter", sans-serif`;
        offCtx.fillText("NOVA CORE", offscreen.width / 2, offscreen.height / 2 - 50);
      }

      const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
      const pixels = [];
      const density = isMobile ? 5 : 8; // Un poco más de aire para móvil
      
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
      
      const cardWidth = window.innerWidth < 768 ? Math.floor(window.innerWidth * 0.85) : 600;
      const cardHeight = Math.floor(cardWidth * 0.6);
      const x = (window.innerWidth - cardWidth) / 2;
      const y = (window.innerHeight - cardHeight) / 2;
      const radius = 30;

      // Dibujar borde de tarjeta redonda
      offCtx.strokeStyle = 'white';
      // Línea refinada para look digital
      offCtx.lineWidth = window.innerWidth < 768 ? 8 : 10; 
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

      const fontSize = window.innerWidth < 768 ? 32 : 70;
      offCtx.fillStyle = 'white';
      offCtx.font = `italic 700 ${fontSize}px "Inter", sans-serif`;
      offCtx.textAlign = 'right';
      offCtx.textBaseline = 'bottom';
      offCtx.fillText("VISA", x + cardWidth - 25, y + cardHeight - 20);

      const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
      const pixels = [];
      const density = window.innerWidth < 768 ? 5 : 6; 
      
      for (let y = 0; y < offscreen.height; y += density) {
        for (let x = 0; x < offscreen.width; x += density) {
          const alpha = imageData.data[((offscreen.width * y) + x) * 4 + 3];
          if (alpha > 128) {
            pixels.push({ x, y });
          }
        }
      }

      // Añadir números de tarjeta manualmente como una sola fila de partículas interactivas
      const digitMatrix = {
        '0': [[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]],
        '1': [[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,1]],
        '2': [[1,1,1],[0,0,1],[1,1,1],[1,0,0],[1,1,1]],
        '3': [[1,1,1],[0,0,1],[1,1,1],[0,0,1],[1,1,1]],
        '4': [[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]],
        '5': [[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]],
        '6': [[1,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]],
        '7': [[1,1,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]],
        '8': [[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]],
        '9': [[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,1]]
      };

      const dotSpacing = window.innerWidth < 768 ? 4 : 8;
      const cardNumStr = "1234 5678 9101 1112";
      const totalCols = 16 * 4 - 1 + 6; // 69 cols
      const blockWidth = totalCols * dotSpacing;
      
      const startX = x + (cardWidth - blockWidth) / 2;
      const startY = y + (cardHeight / 2) - (2 * dotSpacing);

      let currX = startX;
      for (let i = 0; i < cardNumStr.length; i++) {
        const char = cardNumStr[i];
        if (char === ' ') {
          currX += dotSpacing * 2;
          continue;
        }
        const matrix = digitMatrix[char];
        if (matrix) {
          for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
              if (matrix[r][c]) {
                 pixels.push({ x: currX + c * dotSpacing, y: startY + r * dotSpacing });
              }
            }
          }
        }
        currX += dotSpacing * 4;
      }

      return pixels;
    };

    // Obtenemos los data sets
    const textPixels = getTextPixelData();
    const cardPixels = getCardPixelData();
    
    // Determinamos un conteo razonable de partículas balanceado.
    const maxParticles = Math.max(textPixels.length, cardPixels.length, window.innerWidth < 768 ? 1000 : 1200);

    // Inicializar array de partículas
    const initParticles = () => {
       let particleArray = [];
        for (let i = 0; i < maxParticles; i++) {
         const tpx = textPixels[i % textPixels.length];
         const cpx = cardPixels[i % cardPixels.length];
         
         const color = colors[Math.floor(Math.random() * colors.length)];
         const size = window.innerWidth < 768 ? Math.random() * 1.2 + 0.5 : Math.random() * 2 + 1;
         
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
        let stiffness = window.innerWidth < 768 ? 0.03 : 0.05;
        let ax = (tx - p.x) * stiffness; 
        let ay = (ty - p.y) * stiffness;

        // Si es scatter, agregamos una oscilación lenta browniana
        if (targetShape === 'scatter') {
           ax += Math.sin(Date.now() * 0.001 + i) * 0.2;
           ay += Math.cos(Date.now() * 0.001 + i) * 0.2;
        }

        p.vx += ax;
        p.vy += ay;
        
        let damping = window.innerWidth < 768 ? 0.8 : 0.85;
        p.vx *= damping;
        p.vy *= damping;

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
