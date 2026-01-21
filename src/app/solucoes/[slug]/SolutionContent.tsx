'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CalendarDays } from 'lucide-react';
import { SolutionId } from '@/types';

interface SolutionContentProps {
  id: SolutionId;
}

const content: Record<
  SolutionId,
  {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    image: string;
    text: React.ReactNode;
  }
> = {
  cirurgias: {
    titleLine1: 'Cirurgias',
    titleLine2: 'Odontológicas',
    subtitle: 'Cirurgias Odontológicas realizadas com experiência e tecnologia',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    text: (
      <>
        <p className="mb-6 leading-relaxed text-gray-300">
          As <strong className="text-[#CFA15D] font-bold">cirurgias odontológicas</strong> são
          fundamentais para manter a{' '}
          <strong className="text-[#CFA15D] font-bold">saúde bucal</strong>, oferecendo soluções
          seguras e precisas para casos que exigem cuidados além dos tratamentos convencionais.
          Realizadas por profissionais experientes, essas intervenções incluem desde a extração de
          dentes impactados até a correção de estruturas ósseas, sempre com foco no{' '}
          <strong className="text-[#CFA15D] font-bold">conforto</strong> e na{' '}
          <strong className="text-[#CFA15D] font-bold">eficácia</strong>.
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Com o apoio de <strong className="text-[#CFA15D] font-bold">tecnologia avançada</strong> e
          técnicas modernas, cada procedimento é planejado de forma individualizada, respeitando as
          necessidades específicas de cada paciente.
        </p>
        <p className="mb-8 leading-relaxed text-gray-300">
          Mais do que tratar, as cirurgias odontológicas também atuam na prevenção de complicações
          futuras, garantindo uma saúde bucal duradoura e um sorriso em equilíbrio.
        </p>
      </>
    ),
  },
  'clinica-geral': {
    titleLine1: 'Clínico Geral',
    titleLine2: 'Odontologia',
    subtitle: 'Cuidado completo para manter sua saúde bucal em dia — do preventivo ao tratamento.',
    image:
      'https://images.unsplash.com/photo-1579684385180-1ea55f9f7485?q=80&w=800&auto=format&fit=crop',
    text: (
      <>
        <p className="mb-6 leading-relaxed text-gray-300">
          Avaliação e plano de tratamento individualizado
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Profilaxia (limpeza) e orientação de higiene
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Restaurações estéticas e tratamentos de cárie
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">Tratamento de canal e urgências</p>
      </>
    ),
  },
  implantes: {
    titleLine1: 'Implantes',
    titleLine2: 'Dentários',
    subtitle: 'Reabilitação do sorriso com segurança, planejamento e excelência em cada etapa.',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    text: (
      <>
        <p className="mb-6 leading-relaxed text-gray-300">Planejamento e avaliação criteriosa</p>
        <p className="mb-6 leading-relaxed text-gray-300">Implantes unitários e múltiplos</p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Próteses sobre implantes com função e estética
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Acompanhamento e manutenção do resultado
        </p>
      </>
    ),
  },
  estetica: {
    titleLine1: 'Estética',
    titleLine2: 'Orofacial',
    subtitle: 'Harmonização e estética integradas: beleza com naturalidade e equilíbrio.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    text: (
      <>
        <p className="mb-6 leading-relaxed text-gray-300">Botox</p>
        <p className="mb-6 leading-relaxed text-gray-300">Preenchimento facial</p>
        <p className="mb-6 leading-relaxed text-gray-300">Bioestimulador de colágeno</p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Procedimentos para realçar seu sorriso com naturalidade
        </p>
      </>
    ),
  },
  facetas: {
    titleLine1: 'Facetas',
    titleLine2: 'Dentárias',
    subtitle: 'Transformação estética com naturalidade e resistência',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    text: (
      <>
        <p className="mb-6 leading-relaxed text-gray-300">
          As <strong className="text-[#CFA15D] font-bold">facetas dentárias</strong> são a solução
          ideal para quem busca corrigir imperfeições de forma{' '}
          <strong className="text-[#CFA15D] font-bold">rápida</strong> e{' '}
          <strong className="text-[#CFA15D] font-bold">duradoura</strong>. Compostas por finas
          lâminas de porcelana ou resina, elas são aplicadas sobre a superfície dos dentes,
          harmonizando cor, formato e tamanho do sorriso.
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Utilizamos materiais de{' '}
          <strong className="text-[#CFA15D] font-bold">alta performance</strong> que mimetizam a
          textura e o brilho natural dos dentes. O processo é minimamente invasivo e planejado
          digitalmente para garantir a máxima preservação da estrutura dental.
        </p>
        <p className="mb-8 leading-relaxed text-gray-300">
          Recupere sua <strong className="text-[#CFA15D] font-bold">autoestima</strong> com um
          sorriso alinhado, branco e radiante, projetado exclusivamente para combinar com as
          características do seu rosto.
        </p>
      </>
    ),
  },
  lentes: {
    titleLine1: 'Lentes de',
    titleLine2: 'Contato Dental',
    subtitle: 'O auge da sofisticação e tecnologia para o seu sorriso',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    text: (
      <>
        <p className="mb-6 leading-relaxed text-gray-300">
          Referência mundial em estética, as{' '}
          <strong className="text-[#CFA15D] font-bold">Lentes de Contato Dental</strong> representam
          o que há de mais moderno na odontologia. Ultrafinas e resistentes, elas corrigem diastemas,
          fraturas e colorações indesejadas sem a necessidade de grandes desgastes.
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Na Clínica Amaral, o procedimento é realizado com{' '}
          <strong className="text-[#CFA15D] font-bold">Microscopia Eletrônica</strong> e escaneamento
          3D, assegurando uma adaptação perfeita e uma longevidade excepcional. É a escolha dos
          famosos para o &quot;sorriso de capa de revista&quot;.
        </p>
        <p className="mb-8 leading-relaxed text-gray-300">
          Proporcione a si mesmo a experiência de um sorriso{' '}
          <strong className="text-[#CFA15D] font-bold">impecável</strong>, com naturalidade absoluta
          e brilho permanente.
        </p>
      </>
    ),
  },
  ortodontia: {
    titleLine1: 'Ortodontia',
    titleLine2: 'Digital',
    subtitle: 'Alinhamento preciso com conforto e rapidez',
    image:
      'https://images.unsplash.com/photo-1579684385180-1ea55f9f7485?q=80&w=800&auto=format&fit=crop',
    text: (
      <>
        <p className="mb-6 leading-relaxed text-gray-300">
          A <strong className="text-[#CFA15D] font-bold">Ortodontia Digital</strong> revolucionou a
          forma como alinhamos sorrisos. Utilizando alinhadores transparentes (Invisalign) e
          aparelhos autoligados de última geração, oferecemos tratamentos mais{' '}
          <strong className="text-[#CFA15D] font-bold">rápidos</strong>,{' '}
          <strong className="text-[#CFA15D] font-bold">discretos</strong> e confortáveis.
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Através do planejamento virtual, você consegue visualizar o resultado final antes mesmo de
          iniciar o tratamento. Corrigimos a mordida e o alinhamento dental, melhorando não apenas a
          estética, mas também a <strong className="text-[#CFA15D] font-bold">funcionalidade</strong>{' '}
          e a respiração.
        </p>
        <p className="mb-8 leading-relaxed text-gray-300">
          Tenha a liberdade de sorrir durante todo o processo de transformação, com a tecnologia
          trabalhando a favor do seu tempo e bem-estar.
        </p>
      </>
    ),
  },
};

export const SolutionContent: React.FC<SolutionContentProps> = ({ id }) => {
  const data = content[id];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <section className="min-h-screen bg-[#131313] pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Giant Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="flex flex-col items-center justify-center leading-none">
            <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#CFA15D] font-thin tracking-wide mb-2 md:mb-4">
              {data.titleLine1}
            </span>
            <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-thin tracking-wide">
              {data.titleLine2}
            </span>
          </h1>
        </div>

        {/* Content Split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">
          {/* Left Image */}
          <div className="w-full lg:w-5/12 animate-fade-in-up delay-100">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl border border-white/5">
              <Image
                src={data.image}
                alt={`${data.titleLine1} ${data.titleLine2}`}
                fill
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Inner shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-6/12 animate-fade-in-up delay-200">
            <h2 className="text-white text-sm md:text-base font-medium uppercase tracking-widest mb-8 border-l-2 border-[#CFA15D] pl-4">
              {data.subtitle}
            </h2>

            <div className="text-base md:text-lg font-light text-justify">{data.text}</div>

            <div className="mt-10">
              <Button
                variant="gold-gradient"
                size="lg"
                onClick={scrollToContact}
                className="flex items-center gap-3 px-10 py-4 shadow-[0_0_20px_rgba(255,215,0,0.2)]"
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
