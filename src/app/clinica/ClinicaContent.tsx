'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Eye, Gem, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

export const ClinicaContent: React.FC = () => {
  const mapsQuery = encodeURIComponent(CONTACT_INFO.address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const waDigits = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/55${waDigits}`;

  return (
    <section
      id="clinic-page"
      className="min-h-screen bg-[#111111] text-white overflow-hidden flex flex-col pt-10"
    >
      <div className="container mx-auto px-6 flex-grow flex flex-col pb-20">
        {/* Top Header Title */}
        <div className="text-center mb-10 pt-28 animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-6">
            <span className="font-sans font-extralight text-6xl md:text-7xl lg:text-8xl text-white tracking-wide">
              A Clínica
            </span>
            <span className="font-sans font-extralight text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#CFA15D] to-[#FDB931] tracking-wide border-white">
              Amaral
            </span>
          </div>
        </div>

        {/* Separator Bar */}
        <div className="relative w-full max-w-6xl mx-auto mb-20 animate-fade-in-up delay-100">
          <div className="border border-white/20 rounded-full py-3 px-4 md:px-8 flex items-center justify-between bg-[#111111]">
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-[#CFA15D]/40 to-transparent" />

            <span className="text-gray-300 text-[10px] md:text-sm tracking-[0.3em] uppercase text-center font-light px-4 md:px-8">
              Excelência em Estética Odontológica
            </span>

            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-[#CFA15D]/40 to-transparent" />
          </div>
        </div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-12 animate-fade-in-up delay-200">
          <div className="relative">
            <div className="relative bg-[#0e0e0e] rounded-[24px] overflow-hidden border border-gray-800 aspect-[1179/1098] shadow-2xl after:content-[''] after:absolute after:inset-0 after:rounded-[24px] after:border after:border-[#CFA15D] after:translate-x-2 after:translate-y-2 after:-z-10">
              <Image
                src="/imagemclinica.jpeg"
                alt="Estrutura da Clínica Amaral"
                fill
                className="w-full h-full object-contain opacity-95"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>

          <div className="text-left pt-2">
            <h3 className="font-serif text-4xl md:text-5xl lg:text-5xl leading-[1.15] mb-8 text-white">
              Nossa <span className="text-[#CFA15D] font-bold">história</span>
            </h3>
            <div className="space-y-6 text-gray-300 text-sm md:text-[15px] leading-7 font-light text-justify md:text-left">
              <p>
                Nossa história começa muito antes da clínica existir. Ela nasce de um sonho
                cultivado desde a infância, em dias simples, marcados pelo esforço, pela esperança
                e pela vontade de transformar realidades. Filha de agricultores, com poucos
                recursos, mas ricos em valores, aprendeu desde cedo que o trabalho honesto, a fé e
                a persistência são sementes que sempre dão frutos.
              </p>
              <p>
                Mesmo diante das dificuldades, seus pais nunca deixaram de incentivar os estudos e
                os sonhos. Com apoio silencioso, mãos calejadas e um amor incondicional, foram a
                base que sustentou cada passo dessa caminhada. Foi ali, no exemplo diário de
                dedicação e humildade, que nasceu o desejo de cuidar das pessoas e fazer a
                diferença.
              </p>
              <p>
                Assim surgiu a Amaral, construída como um verdadeiro trabalho de formiguinha, passo
                a passo, com paciência, responsabilidade e propósito. Idealizada pela Dra. Ana
                Paula, a clínica ganhou força com o apoio essencial de suas irmãs, que caminharam
                juntas desde o início, acreditando e somando esforços.
              </p>
              <p>
                Hoje, a Amaral é mais do que uma clínica odontológica. É a realização de um sonho
                coletivo, construído com o amor da família, o incentivo dos pais, a união entre
                irmãs e o compromisso com cada paciente. Um espaço criado para acolher, cuidar e
                devolver sorrisos, refletindo uma história de origem simples, valores sólidos e
                dedicação genuína às pessoas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full border-t border-gray-800/50 bg-[#0d0d0d] py-16 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <span className="text-5xl md:text-6xl font-serif text-[#CFA15D] mb-2 font-thin">
                +900
              </span>
              <span className="text-gray-400 uppercase tracking-widest text-xs">
                Implantes Realizados
              </span>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <span className="text-5xl md:text-6xl font-serif text-[#CFA15D] mb-2 font-thin">
                +100k
              </span>
              <span className="text-gray-400 uppercase tracking-widest text-xs">
                Sorrisos Transformados
              </span>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <span className="text-5xl md:text-6xl font-serif text-[#CFA15D] mb-2 font-thin">
                15
              </span>
              <span className="text-gray-400 uppercase tracking-widest text-xs">
                Anos de Excelência
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Vision Values Cards */}
      <div className="w-full bg-[#0a0a0a] py-24 border-t border-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#CFA15D]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="group bg-[#111] p-10 rounded-2xl border border-white/5 hover:border-[#CFA15D]/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_30px_rgba(207,161,93,0.1)]">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CFA15D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-16 h-16 rounded-full bg-[#161616] flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#CFA15D] group-hover:text-[#CFA15D] text-gray-400 transition-all duration-500 group-hover:scale-110">
                <Target strokeWidth={1} size={32} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4 tracking-wide group-hover:text-[#CFA15D] transition-colors">
                Nossa Missão
              </h3>
              <p className="text-gray-400 font-light text-sm leading-7">
                Transformar vidas e elevar a autoestima de nossos pacientes, entregando sorrisos
                únicos e saudáveis. Unimos a excelência técnica e a mais alta tecnologia a um
                atendimento genuinamente humanizado.
              </p>
            </div>

            {/* Visão */}
            <div className="group bg-[#111] p-10 rounded-2xl border border-white/5 hover:border-[#CFA15D]/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_30px_rgba(207,161,93,0.1)]">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CFA15D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-16 h-16 rounded-full bg-[#161616] flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#CFA15D] group-hover:text-[#CFA15D] text-gray-400 transition-all duration-500 group-hover:scale-110">
                <Eye strokeWidth={1} size={32} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4 tracking-wide group-hover:text-[#CFA15D] transition-colors">
                Nossa Visão
              </h3>
              <p className="text-gray-400 font-light text-sm leading-7">
                Ser a principal referência em odontologia integrada e estética na região de atuação,
                reconhecida pela qualidade impecável dos tratamentos especializados, inovação
                contínua e foco absoluto no bem-estar do paciente.
              </p>
            </div>

            {/* Valores */}
            <div className="group bg-[#111] p-10 rounded-2xl border border-white/5 hover:border-[#CFA15D]/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_30px_rgba(207,161,93,0.1)]">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CFA15D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-16 h-16 rounded-full bg-[#161616] flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#CFA15D] group-hover:text-[#CFA15D] text-gray-400 transition-all duration-500 group-hover:scale-110">
                <Gem strokeWidth={1} size={32} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4 tracking-wide group-hover:text-[#CFA15D] transition-colors">
                Nossos Valores
              </h3>
              <p className="text-gray-400 font-light text-sm leading-7">
                Ética inegociável e transparência total em todas as ações. Buscamos a perfeição e a
                inovação contínua, mantendo o foco absoluto na excelência técnica e no cuidado
                humanizado com o paciente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Quote Section */}
      <div className="w-full bg-[#0d0d0d] py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-10 text-center">
            {/* Profile Header */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-800 shadow-lg relative">
                  <Image
                    src="/ceo.jpeg"
                    alt="CEO - Clínica Amaral"
                    fill
                    className="w-full h-full object-cover"
                    sizes="96px"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-white text-2xl font-serif tracking-wide">Dra. Amaral</h3>
                <p className="text-[#CFA15D] text-sm font-medium tracking-wider uppercase">
                  CEO | Fundadora
                </p>
              </div>
            </div>

            {/* Quote Text */}
            <div className="max-w-5xl mx-auto">
              <p className="text-gray-300 font-light leading-9 text-lg md:text-xl text-center italic">
                &quot;Na Clínica Amaral Odontologia e estetica, entendemos que a saúde bucal é parte
                essencial do seu bem-estar geral. Por isso, nossa abordagem é baseada na odontologia
                integrada, onde cada especialista trabalha em conjunto para oferecer uma solução
                completa e personalizada. Nossa clínica é um espaço onde a alta tecnologia
                potencializa o cuidado humanizado. Desde a primeira consulta, nosso foco é em você:
                suas necessidades, suas expectativas e a construção de um sorriso que não apenas
                seja bonito, mas que reflita sua melhor versão. É essa dedicação à transformação e
                à confiança que nos move todos os dias.&quot;
              </p>
            </div>

            <div className="w-full h-[1px] bg-gray-900 mt-8 max-w-xs mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Locations / Franchise Section */}
      <div className="w-full bg-[#0d0d0d] pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Column: Text */}
            <div>
              <span className="text-gray-400 text-sm tracking-widest uppercase block mb-4">
                Localização
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                <span className="text-[#CFA15D]">Seu sonho</span> será realizado!
              </h2>

              <div className="space-y-6 text-gray-300 font-light leading-7 text-justify">
                <p>
                  Na <strong className="text-[#CFA15D] font-bold">Clínica Amaral</strong>
                  , a excelência e a inovação são conduzidas por uma identidade única e um
                  compromisso pessoal com cada paciente.
                </p>
                <p>
                  Oferecemos tratamentos de alto padrão em um ambiente moderno, equipado com
                  tecnologia avançada e conduzido por profissionais altamente especializados.
                </p>
                <p>
                  Nosso modelo é focado em garantir a saúde e a estética bucal através de um
                  atendimento exclusivo e individualizado, mantendo padrões rigorosos de qualidade
                  que garantem resultados realmente transformadores. Ao escolher a Clínica Amaral,
                  você opta por um cuidado dedicado, longe da impessoalidade das grandes redes, e
                  por fazer parte de uma história de sucesso e confiança construída com carinho em
                  nossa comunidade.
                </p>
              </div>
            </div>

            {/* Right Column: Single Location */}
            <div className="w-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,161,93,0.10),transparent_55%)] pointer-events-none" />

                <div className="relative">
                  <div className="relative aspect-[16/12] bg-black">
                    <iframe
                      title="Localização - Clínica Amaral"
                      src={googleMapsEmbedUrl}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ border: 0 }}
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-[#CFA15D]">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-white font-medium">Endereço</p>
                        <p className="text-gray-300 font-light leading-6">{CONTACT_INFO.address}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-start gap-3">
                      <div className="mt-1 text-[#CFA15D]">
                        <MessageCircle size={18} />
                      </div>
                      <div>
                        <p className="text-white font-medium">Agendamento</p>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-300 font-light hover:text-white transition-colors"
                        >
                          WhatsApp: {CONTACT_INFO.whatsapp}
                        </a>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CFA15D]/50 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                      >
                        Ver no Google Maps
                        <ExternalLink size={16} />
                      </a>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#CFA15D] to-[#FDB931] px-6 py-3 text-sm font-semibold text-black hover:brightness-110 transition-all"
                      >
                        Agendar pelo WhatsApp
                        <MessageCircle size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
