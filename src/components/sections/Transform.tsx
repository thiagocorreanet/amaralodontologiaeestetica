'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CalendarDays } from 'lucide-react';

const SparkleIcon = ({
  className,
  fill = '#CFA15D',
}: {
  className?: string;
  fill?: string;
}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill={fill} />
  </svg>
);

export const Transform: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-0 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 z-10 mb-16 md:mb-20 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl leading-[1.1] mb-8">
            <span className="text-gold tracking-wide block">TRANSFORME SEU SORRISO</span>
            <span className="text-[#bf9b59] block mt-2 text-2xl md:text-3xl lg:text-4xl font-light">
              COM A CLINICA AMARAL ODONTOLOGIA E ESTÉTICA
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-10">
            Na <strong className="text-gold">Clinica Amaral Odontologia e Estética</strong>,
            acreditamos que um sorriso perfeito vai além da estética — é sobre confiança, bem-estar
            e qualidade de vida. Agende uma consulta e descubra como podemos transformar seu sorriso
            com a exclusividade e excelência que só a Amaral pode oferecer.
          </p>

          <Button
            variant="gold-gradient"
            size="lg"
            onClick={scrollToContact}
            className="flex items-center gap-3 px-10 py-4 text-lg shadow-[0_0_25px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all transform hover:-translate-y-1"
          >
            Agende sua consulta
            <CalendarDays size={20} strokeWidth={2.5} />
          </Button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative flex justify-end">
          <div className="relative w-full max-w-lg">
            {/* Sparkle Effects */}
            <div className="absolute top-10 right-10 z-20 animate-pulse">
              <SparkleIcon className="w-8 h-8 text-white" fill="white" />
            </div>
            <div className="absolute top-1/3 left-0 z-20 animate-pulse delay-700">
              <SparkleIcon className="w-6 h-6 text-gold" fill="#CFA15D" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 z-20 animate-pulse delay-300">
              <SparkleIcon className="w-5 h-5 text-white" fill="white" />
            </div>

            {/* Main Image */}
            <div className="relative z-10 w-full h-[500px] md:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop"
                alt="Sorriso Transformado"
                fill
                className="object-cover object-top"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                }}
              />
            </div>

            {/* Back Glow */}
            <div className="absolute inset-0 bg-gold/5 rounded-full blur-3xl transform scale-90 translate-y-10 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
