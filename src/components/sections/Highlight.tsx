import React from 'react';

export const Highlight: React.FC = () => {
  return (
    <section className="py-40 bg-dark relative overflow-hidden flex items-center justify-center border-t border-white/5 border-b border-white/5">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-dark to-dark"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <span className="text-[#CFA15D] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 block animate-fade-in-up">
          Excelência Comprovada
        </span>

        <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight text-white max-w-6xl mx-auto animate-fade-in-up delay-100 font-extralight">
          &quot;Referência no Brasil em{' '}
          <strong className="text-white font-normal">Lentes de Contato Dental</strong>, sendo
          destaque no{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFA15D] to-[#FDB931] font-normal italic">
            Mundo
          </span>
          .&quot;
        </h2>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#CFA15D]/30 to-transparent mt-16 max-w-xl mx-auto"></div>
      </div>
    </section>
  );
};
