'use client';

import React from 'react';
import { LICENSES } from '@/constants';
import { Button } from '@/components/ui/Button';
import { CalendarDays } from 'lucide-react';

const CustomIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 text-[#FFD700]"
  >
    <path
      d="M10 20 Q 20 35 35 10"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const Licenses: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="institute" className="py-24 bg-[#111111] relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-white text-base block mb-2 font-medium tracking-wide">
            Especialidades
          </span>
          <div className="relative inline-block mb-8">
            <h2 className="text-[#CFA15D] font-serif text-4xl md:text-5xl uppercase tracking-widest relative z-10 px-4">
              Licenciados Amaral
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-[#CFA15D]"></div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Nossa rede de profissionais licenciados representa a extensão da excelência Amaral. Cada
            licenciado passa por um rigoroso processo de capacitação e certificação no Instituto
            Amaral, garantindo o mesmo padrão de qualidade em todas as unidades.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {LICENSES.map((item, idx) => (
            <div
              key={idx}
              className="group border border-[#FFD700] rounded-lg p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#FFD700]/5 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] hover:-translate-y-2"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                <CustomIcon />
              </div>

              <h3 className="text-[#FFD700] font-serif text-xl md:text-2xl uppercase mb-6 tracking-wider">
                {item.title}
              </h3>

              <p className="text-gray-300 text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            variant="gold-gradient"
            size="lg"
            onClick={scrollToContact}
            className="flex items-center gap-3 px-12 py-4 text-lg font-semibold shadow-[0_0_20px_rgba(255,215,0,0.25)] hover:shadow-[0_0_35px_rgba(255,215,0,0.4)] transition-all"
          >
            Agende sua consulta
            <CalendarDays size={20} strokeWidth={2.5} />
          </Button>
        </div>
      </div>
    </section>
  );
};
