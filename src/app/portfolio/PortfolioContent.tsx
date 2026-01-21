'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_ITEMS } from '@/constants';
import { Button } from '@/components/ui/Button';
import { CalendarDays, X } from 'lucide-react';
import { PortfolioItemProps } from '@/types';

export const PortfolioContent: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemProps | null>(null);

  const openModal = (item: PortfolioItemProps) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-gray-400 text-sm tracking-[0.3em] uppercase block mb-4">
            Casos Reais
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            Portfólio <span className="text-[#CFA15D]">Amaral</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-light text-lg">
            Confira alguns dos sorrisos transformados em nossas clínicas. Cada rosto conta uma
            história de autoestima recuperada e excelência técnica.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="group relative rounded-[20px] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[350px] border border-white/10 hover:border-[#CFA15D]/50 transition-all duration-500 cursor-pointer shadow-2xl"
            >
              {/* Image */}
              <Image
                src={item.afterImage}
                alt={item.name}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Name Label */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <h3 className="text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-md transform translate-y-0 transition-transform duration-300">
                  {item.name}
                </h3>
                <div className="h-[2px] w-0 bg-[#CFA15D] mx-auto mt-2 transition-all duration-300 group-hover:w-12"></div>
                <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Clique para ver o Antes e Depois
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center animate-fade-in-up delay-200">
          <p className="text-gray-400 mb-8 text-center max-w-lg">
            Pronto para ter o seu sorriso na nossa galeria?
          </p>
          <Button
            variant="gold-gradient"
            size="lg"
            onClick={scrollToContact}
            className="flex items-center gap-3 px-12 py-4 shadow-[0_0_20px_rgba(255,215,0,0.2)]"
          >
            Agende sua transformação
            <CalendarDays size={20} />
          </Button>
        </div>
      </div>

      {/* BEFORE / AFTER MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-50 text-white hover:text-[#CFA15D] transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          <div className="flex flex-col lg:flex-row w-full h-full">
            {/* Left Side - ANTES */}
            <div className="flex-1 relative border-b lg:border-b-0 lg:border-r border-gray-800">
              <div className="absolute top-10 left-0 w-full text-center z-10">
                <h2 className="font-serif text-5xl md:text-7xl text-white font-thin">Antes</h2>
              </div>
              <div className="w-full h-full bg-[#111] relative">
                <Image
                  src={selectedItem.beforeImage}
                  alt={`Antes - ${selectedItem.name}`}
                  fill
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
              </div>
            </div>

            {/* Right Side - DEPOIS */}
            <div className="flex-1 relative">
              <div className="absolute top-10 left-0 w-full text-center z-10">
                <h2 className="font-serif text-5xl md:text-7xl text-[#CFA15D] font-thin">Depois</h2>
              </div>
              <div className="w-full h-full bg-[#111] relative">
                <Image
                  src={selectedItem.afterImage}
                  alt={`Depois - ${selectedItem.name}`}
                  fill
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
