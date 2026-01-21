'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

export const DraAmaralContent: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('trajetoria');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sections = [
    {
      id: 'trajetoria',
      title: 'Trajetória',
      content: (
        <>
          <p className="mb-6 leading-relaxed">
            A Dra. Amaral formou-se em Odontologia em 2015 pela Universidade de Araras e, desde o
            início de sua carreira, demonstrou grande dedicação ao aperfeiçoamento técnico e
            científico. Buscando oferecer tratamentos cada vez mais completos e personalizados,
            especializou-se em Ortodontia, Lentes Dentárias e Harmonização Facial, áreas que unem
            estética, funcionalidade e bem-estar.
          </p>
          <p className="mb-6 leading-relaxed">
            Ao longo de sua trajetória profissional, a Dra. Amaral construiu uma prática pautada na
            {' '}
            <strong className="text-[#CFA15D] font-bold">excelência</strong>, no cuidado humanizado e
            na atualização constante. Seu trabalho é marcado pela busca contínua por{' '}
            <strong className="text-[#CFA15D] font-bold">inovação</strong> e{' '}
            <strong className="text-[#CFA15D] font-bold">tecnologia</strong>, incorporando técnicas
            modernas, equipamentos de ponta e protocolos atuais para garantir resultados naturais,
            seguros e duradouros.
          </p>
          <p className="mb-6 leading-relaxed">
            Movida pelo desejo de evolução e crescimento, a Dra. Amaral tem como objetivo expandir
            sua atuação, levando odontologia estética e funcional de alto padrão a um número cada
            vez maior de pacientes. Sua missão é transformar sorrisos, elevar a autoestima e
            proporcionar experiências positivas, sempre com ética, precisão e olhar individualizado
            para cada paciente.
          </p>
          <p className="leading-relaxed">
            Além da excelência técnica, a Dra. Amaral acredita que o verdadeiro diferencial está no
            cuidado humano. Seu atendimento é baseado na escuta atenta, na empatia e no respeito às
            necessidades e expectativas de cada paciente. Para ela, cuidar vai além de executar
            procedimentos: é acolher, orientar e acompanhar de perto cada etapa do tratamento,
            promovendo confiança, conforto e bem-estar. Assim, cada paciente é tratado de forma
            única, com sensibilidade, responsabilidade e compromisso genuíno com a saúde e a
            qualidade de vida.
          </p>
        </>
      ),
    },
    {
      id: 'inovacao',
      title: 'Busca por inovação',
      content: (
        <p className="leading-relaxed">
          Pioneira na implementação de tecnologias digitais no Brasil, a Dra. Amaral utiliza scanners
          intraorais de última geração, impressão 3D e planejamento digital do sorriso (DSD) para
          garantir resultados <strong className="text-[#CFA15D] font-bold">previsíveis</strong>,{' '}
          <strong className="text-[#CFA15D] font-bold">naturais</strong> e{' '}
          <strong className="text-[#CFA15D] font-bold">minimamente invasivos</strong>, sempre
          alinhados às tendências globais.
        </p>
      ),
    },
    {
      id: 'legado',
      title: 'Expansão e legado',
      content: (
        <p className="leading-relaxed">
          Além da clínica matriz, fundou o Instituto Amaral para capacitar novos profissionais com sua
          metodologia exclusiva. Expandiu a marca através de um modelo de{' '}
          <strong className="text-[#CFA15D] font-bold">franquias de alto padrão</strong> que leva a
          excelência Amaral para diversas capitais do país e destinos internacionais.
        </p>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 relative overflow-hidden flex items-center">
      {/* Background gradient spot */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(207,161,93,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start justify-center">
          {/* Left Column: Image */}
          <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-end sticky top-32">
            {/* Image Container with Vignette */}
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Vignette Overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 lg:via-transparent lg:to-transparent"></div>
              <Image
                src="/trajetora.jpeg"
                alt="Dra. Amaral"
                width={800}
                height={1000}
                className="w-full h-auto object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-1000"
                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-6/12 space-y-6 pt-10">
            {/* Header */}
            <div className="animate-fade-in-up mb-10">
              <span className="block text-gray-500 font-light tracking-[0.2em] text-sm mb-4 uppercase">
                Quem É
              </span>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#CFA15D] font-thin mb-4 tracking-wide leading-none">
                Dra. Amaral
              </h1>
              <p className="text-[#b08643] text-sm tracking-widest font-medium mb-6 uppercase">
                CRO: 97.044
              </p>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl border-l-2 border-[#CFA15D] pl-4">
                Cirurgiã-Dentista | Especialista em Prótese e Implante | Fundadora da Clínica Amaral
                e do Instituto Amaral
              </p>

              <h2 className="text-white font-bold text-xl md:text-2xl tracking-wide max-w-lg mt-8">
                Referência em Estética Dental no Brasil e no Mundo
              </h2>
            </div>

            {/* Styled Accordions / Buttons */}
            <div className="space-y-4 animate-fade-in-up delay-200">
              {sections.map((section) => {
                const isOpen = openSection === section.id;
                return (
                  <div key={section.id} className="flex flex-col">
                    {/* Header Button */}
                    <button
                      onClick={() => toggleSection(section.id)}
                      className={`w-full flex items-center px-8 py-4 rounded-full border transition-all duration-300 text-left group
                        ${
                          isOpen
                            ? 'border-white text-[#CFA15D]'
                            : 'border-white/20 text-white hover:border-[#CFA15D]'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        {isOpen ? (
                          <span className="text-[#CFA15D] text-2xl font-light leading-none mb-1">
                            –
                          </span>
                        ) : (
                          <Plus
                            size={18}
                            className="text-white group-hover:text-[#CFA15D] transition-colors"
                          />
                        )}
                        <span
                          className={`text-lg font-normal tracking-wide ${
                            isOpen ? 'text-[#CFA15D]' : 'group-hover:text-[#CFA15D]'
                          } transition-colors`}
                        >
                          {section.title}
                        </span>
                      </div>
                    </button>

                    {/* Content Box - Only shows if open */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                      }`}
                    >
                      <div className="border border-white rounded-[2rem] p-8 md:p-10 bg-transparent text-justify">
                        <div className="text-white text-base md:text-lg font-light leading-8 tracking-wide">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
