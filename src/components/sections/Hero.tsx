'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CalendarDays } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speedY: number; opacity: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 25000);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2,
          speedY: Math.random() * 0.1 + 0.05,
          opacity: Math.random() * 0.3,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speedY;
        if (p.y < 0) p.y = canvas.height;
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('solutions');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
          poster="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2550&auto=format&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/3761617/3761617-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.9)_100%)] z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      {/* Diamond Dust */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-30 pointer-events-none" />

      {/* Center Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center justify-center text-center h-full pt-20">
        <div className="animate-fade-in-up space-y-12 flex flex-col items-center max-w-4xl">
          {/* Logo */}
          <div className="relative hover:scale-105 transition-transform duration-1000">
            {!imgError ? (
              <Image
                src="/logobanner.png"
                alt="Amaral Odontologia"
                width={720}
                height={360}
                quality={100}
                priority
                onError={() => setImgError(true)}
                className="h-52 md:h-[24rem] lg:h-[28rem] w-auto object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                sizes="(max-width: 768px) 400px, 680px"
              />
            ) : (
              <div className="flex flex-col items-center">
                <h1 className="font-serif text-8xl md:text-[10rem] leading-none text-white tracking-widest font-medium drop-shadow-2xl">
                  AMARAL
                </h1>
                <span className="text-gold tracking-[0.5em] text-sm md:text-xl uppercase mt-4">
                  Odontologia
                </span>
              </div>
            )}
          </div>

          {/* Slogan */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-white font-serif text-2xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight">
              Transforme sorrisos, transforme vidas.
            </h2>
            <div className="w-24 h-[1px] bg-[#CFA15D]/50"></div>
            <p className="text-gray-300 font-sans text-xs md:text-sm tracking-[0.3em] uppercase opacity-80">
              Ofereça a perfeição que seus pacientes desejam.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              variant="gold-gradient"
              size="lg"
              onClick={scrollToContact}
              className="flex items-center gap-3 px-16 py-5 text-lg rounded-full shadow-[0_0_50px_rgba(207,161,93,0.2)] hover:shadow-[0_0_80px_rgba(207,161,93,0.4)] transition-all duration-500 hover:scale-105"
            >
              AGENDE SUA AVALIAÇÃO
              <CalendarDays size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-500"
        onClick={handleScrollDown}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#CFA15D] mb-2 animate-pulse"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#CFA15D]">Scroll</span>
      </div>
    </section>
  );
};
