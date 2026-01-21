import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SolutionContent } from '@/app/solucoes/[slug]/SolutionContent';
import { SolutionId } from '@/types';

type Props = {
  params: Promise<{ slug: string }>;
};

const VALID_SLUGS: Record<string, SolutionId> = {
  'clinica-geral': 'clinica-geral',
  implantes: 'implantes',
  estetica: 'estetica',
  cirurgias: 'cirurgias',
  facetas: 'facetas',
  lentes: 'lentes',
  ortodontia: 'ortodontia',
};

const METADATA: Record<SolutionId, { title: string; description: string }> = {
  'clinica-geral': {
    title: 'Clínico Geral | Amaral Odontologia',
    description: 'Limpeza, clareamentos, canal e restaurações com atendimento humanizado',
  },
  implantes: {
    title: 'Implantes | Amaral Odontologia',
    description: 'Reabilitação com implantes com planejamento e precisão',
  },
  estetica: {
    title: 'Estética | Amaral Odontologia',
    description: 'Botox, preenchimento e bioestimulador de colágeno com abordagem integrada',
  },
  cirurgias: {
    title: 'Cirurgias Odontológicas | Amaral Odontologia',
    description: 'Cirurgias odontológicas realizadas com experiência e tecnologia de ponta',
  },
  facetas: {
    title: 'Facetas Dentárias | Amaral Odontologia',
    description: 'Transformação estética com naturalidade e resistência',
  },
  lentes: {
    title: 'Lentes de Contato Dental | Amaral Odontologia',
    description: 'O auge da sofisticação e tecnologia para o seu sorriso',
  },
  ortodontia: {
    title: 'Ortodontia Digital | Amaral Odontologia',
    description: 'Alinhamento preciso com conforto e rapidez',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solutionId = VALID_SLUGS[slug];
  
  if (!solutionId) {
    return {
      title: 'Solução não encontrada | Amaral Odontologia',
    };
  }

  return METADATA[solutionId];
}

export function generateStaticParams() {
  return Object.keys(VALID_SLUGS).map((slug) => ({
    slug,
  }));
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solutionId = VALID_SLUGS[slug];

  if (!solutionId) {
    notFound();
  }

  return <SolutionContent id={solutionId} />;
}
