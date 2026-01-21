'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/constants';
import { Button } from '@/components/ui/Button';
import { CalendarDays } from 'lucide-react';

export const Process: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Side: Sticky Content */}
          <div className="lg:w-5/12">
            <div className="sticky top-32">
              <span className="text-white text-lg block mb-2 font-normal">Entenda</span>
              <h2 className="text-gold font-serif text-4xl md:text-5xl lg:text-[3.5rem] uppercase leading-none mb-6">
                Como é realizado <br /> seu tratamento:
              </h2>

              <div className="w-full h-[1px] bg-gray-700 mb-8"></div>

              <div className="mb-12 text-lg leading-relaxed text-gray-400">
                <p>
                  <span className="text-gold italic block mb-4 text-xl">
                    Cuidamos de cada detalhe da sua jornada.
                  </span>
                  Do primeiro contato até a sua recuperação completa, oferecemos acompanhamento
                  contínuo, personalizado e humanizado, garantindo segurança, conforto e resultados
                  duradouros.
                </p>
              </div>

              <div className="hidden lg:block">
                <Button
                  variant="gold-gradient"
                  size="lg"
                  onClick={scrollToContact}
                  className="flex items-center gap-3 px-8 py-4 text-lg shadow-[0_0_20px_rgba(255,215,0,0.2)]"
                >
                  Agende sua consulta
                  <CalendarDays size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side: Timeline Steps */}
          <div className="lg:w-7/12 relative">
            <div className="absolute left-[20px] md:left-[24px] top-6 bottom-10 w-[2px] bg-gold/20 hidden md:block"></div>

            <div className="space-y-0">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFD700] text-black rounded-full flex items-center justify-center font-bold text-xl md:text-2xl shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`pt-1 pb-12 w-full ${
                      idx !== PROCESS_STEPS.length - 1 ? 'border-b border-gray-800' : ''
                    } mb-12`}
                  >
                    <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-4 lg:hidden">
              <Button
                variant="gold-gradient"
                size="lg"
                fullWidth
                onClick={scrollToContact}
                className="flex items-center justify-center gap-3 py-4 text-lg"
              >
                Agende sua consulta
                <CalendarDays size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
