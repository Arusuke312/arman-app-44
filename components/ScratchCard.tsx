import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScratchCardProps {
  logoUrl: string;
  offerText: string;
  color: string;
}

const ScratchCard: React.FC<ScratchCardProps> = ({ logoUrl, offerText, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill with foil
    ctx.fillStyle = '#C0C0C0'; // Silver foil
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add pattern
    ctx.fillStyle = '#A0A0A0';
    for(let i=0; i<50; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Logo on top of foil
    ctx.font = "20px Arial";
    ctx.fillStyle = "#555";
    ctx.fillText("SCRATCH ME", 20, 80);

  }, []);

  const handleScratch = (e: React.MouseEvent | React.TouchEvent) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if ('touches' in e) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
    } else {
        x = (e as React.MouseEvent).clientX - rect.left;
        y = (e as React.MouseEvent).clientY - rect.top;
    }

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();

    // Calculate revealed area (simple sampling)
    // In a real app, optimize this to not run on every move
    if (Math.random() > 0.9) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let clearPixels = 0;
        for (let i = 3; i < imageData.data.length; i += 4) {
            if (imageData.data[i] === 0) clearPixels++;
        }
        const percent = (clearPixels / (canvas.width * canvas.height)) * 100;
        setScratchedPercent(percent);
        if (percent > 40) {
            setIsRevealed(true);
            // Complete clear
            ctx.clearRect(0,0, canvas.width, canvas.height);
        }
    }
  };

  return (
    <div className="relative w-40 h-40 rounded-xl overflow-hidden shadow-lg mx-2 flex-shrink-0">
      {/* Underlying Reward */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-2 text-center bg-gray-800 border border-gray-700`}>
        <div className="text-2xl mb-1">{logoUrl}</div> {/* Using emoji as logo for simplicity */}
        <p className="text-xs font-bold text-accent">{offerText}</p>
        <div className="mt-2 text-[10px] text-gray-400 uppercase tracking-wide">
            {isRevealed ? "Unlocked" : "Hidden"}
        </div>
      </div>

      {/* Scratch Layer */}
      <motion.canvas
        ref={canvasRef}
        width={160}
        height={160}
        className={`absolute inset-0 touch-none cursor-pointer ${isRevealed ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
        onMouseMove={(e) => { if(e.buttons === 1) handleScratch(e) }}
        onTouchMove={handleScratch}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default ScratchCard;