// src/components/effects/MatrixRain.tsx
import React, { useEffect, useRef, useState } from 'react';

interface MatrixRainProps {
  characterSet?: string;
  fontSize?: number;
  fallSpeed?: number; // Pixels per frame
  fadeSpeed?: number; // 0 to 1 (e.g., 0.05 for slower fade)
  color?: string;
  className?: string;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘ",
  fontSize = 14,
  fallSpeed = 1.5,
  fadeSpeed = 0.04,
  color = "rgba(0, 255, 70, 0.8)", // Greenish
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
        if (canvasRef.current?.parentElement) {
            setDimensions({
                width: canvasRef.current.parentElement.clientWidth,
                height: canvasRef.current.parentElement.clientHeight,
            });
        }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1 - Math.floor(Math.random() * (canvas.height / fontSize)); // Start some off-screen
    }

    let animationFrameId: number;
    const draw = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeSpeed})`; // Fading effect for trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characterSet[Math.floor(Math.random() * characterSet.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) { // Reset drop
          drops[i] = 0;
        }
        drops[i] += fallSpeed * (Math.random() * 0.5 + 0.75) ; // Add some randomness to fall speed
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [characterSet, fontSize, fallSpeed, fadeSpeed, color, dimensions]);

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
};
export default MatrixRain;