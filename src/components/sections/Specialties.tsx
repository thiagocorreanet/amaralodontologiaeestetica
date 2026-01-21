'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SPECIALTIES } from '@/constants';
import { Button } from '@/components/ui/Button';
import { CalendarDays, ArrowRight } from 'lucide-react';

export const Specialties: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-32 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 animate-fade-in-up">
          <div className="max-w-2xl">
            <span className="text-[#CFA15D] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Nossas Soluções
            </span>
            <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-thin">
              Excelência em cada <br />
              <span className="italic text-gray-500">detalhe do sorriso</span>
            </h2>
          </div>
          <div className="hidden md:block pb-2">
            <p className="text-gray-400 text-sm max-w-xs text-right leading-relaxed">
              Tecnologia de ponta e materiais importados para resultados naturais e duradouros.
            </p>
          </div>
        </div>

        {/* Grid Layout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {SPECIALTIES.map((spec, idx) => (
            <Link
              key={idx}
              href={`/solucoes/${['clinica-geral', 'implantes', 'estetica'][idx] ?? 'clinica-geral'}`}
              className="group relative bg-[#0f0f0f] rounded-none overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image with Dark Overlay */}
              <div className="h-[400px] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-20 opacity-90"></div>

                <Image
                  src={spec.image}
                  alt={spec.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Text Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                  <h3 className="text-white font-serif text-2xl mb-3 leading-tight group-hover:text-[#CFA15D] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 mb-6">
                    {spec.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#CFA15D] text-xs tracking-widest uppercase font-medium group-hover:text-white transition-colors">
                    <span>Saiba Mais</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>

              {/* Thin gold line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CFA15D] transition-all duration-500 group-hover:w-full z-40"></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center justify-center animate-fade-in-up delay-200">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-[#CFA15D] mb-8 opacity-30"></div>
          <Button
            variant="gold-gradient"
            size="lg"
            onClick={scrollToContact}
            className="flex items-center gap-3 px-12 py-4 text-lg shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.25)]"
          >
            Iniciar Tratamento
            <CalendarDays size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
