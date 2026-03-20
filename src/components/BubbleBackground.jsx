import React, { useEffect, useRef, useState } from 'react';

// Tech-palette: Deep blues, vibrant but subtle orange, and bright cyan
const colors = ['#0056b3', '#ff8c00', '#00d4ff', '#ffffff'];

const BubbleBackground = () => {
    const canvasRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState(20);
    const particles = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });
    const isExploding = useRef(false);
    const timerRef = useRef(null);
    const requestRef = useRef(null);

    const init = React.useCallback(() => {
        const createParticle = (x, y) => ({
            x,
            y,
            size: Math.random() * 3 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            baseX: x,
            baseY: y,
            density: (Math.random() * 20) + 1,
            opacity: Math.random() * 0.4 + 0.1,

            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;

                const hexOpacity = Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
                ctx.fillStyle = this.color + hexOpacity;
                ctx.fill();

                ctx.shadowBlur = 0;
            },

            update() {
                if (isExploding.current) {
                    this.x += this.vx * 20;
                    this.y += this.vy * 20;
                    this.opacity -= 0.01;
                    if (this.opacity < 0) this.opacity = 0;
                } else {
                    this.x += this.vx;
                    this.y += this.vy;

                    let dx = mouse.current.x - this.x;
                    let dy = mouse.current.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let maxDistance = 250;

                    if (distance < maxDistance) {
                        let force = (maxDistance - distance) / maxDistance;
                        let directionX = (dx / distance) * force * this.density * 0.5;
                        let directionY = (dy / distance) * force * this.density * 0.5;
                        this.x += directionX;
                        this.y += directionY;
                    }

                    if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
                    if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
                }
            }
        });

        particles.current = [];
        // Increase density because particles are smaller and more subtle
        const numberOfParticles = (window.innerWidth * window.innerHeight) / 6000;
        for (let i = 0; i < numberOfParticles; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            particles.current.push(createParticle(x, y));
        }
    }, []);

    const animate = React.useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Using a very slight clear alpha could create trails, but for professionalism we keep it clean
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.current.forEach(p => {
            p.update();
            p.draw(ctx);
        });

        requestRef.current = requestAnimationFrame(animate);
    }, []);

    const explode = React.useCallback(() => {
        isExploding.current = true;
        setTimeout(() => {
            isExploding.current = false;
            init();
            setTimeLeft(20);
        }, 1500); // Shorter explosion duration
    }, [init]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        updateCanvasSize();
        animate();

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const handleResize = () => {
            updateCanvasSize();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    explode();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            clearInterval(timerRef.current);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [init, animate, explode]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)' // Darker base gradient
            }}
        >
            <canvas ref={canvasRef} />
            <div
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    right: '30px',
                    fontSize: '0.8rem', // Smaller tech-label style
                    fontWeight: '300',
                    color: timeLeft <= 5 ? 'var(--color-secondary)' : 'rgba(255,255,255,0.4)',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                }}
            >
                {timeLeft > 0 ? `System Sync: ${timeLeft}s` : 'Initializing Explosion...'}
            </div>
        </div>
    );
};

export default BubbleBackground;
