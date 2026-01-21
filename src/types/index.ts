import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface SpecialtyCardProps {
  title: string;
  description: string;
  image: string;
}

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialProps {
  id: number;
  name: string;
  image: string;
}

export interface PortfolioItemProps {
  id: number;
  name: string;
  afterImage: string;
  beforeImage: string;
}

export interface ReviewProps {
  id: number;
  name: string;
  timeAgo: string;
  avatar: string;
  initial: string;
  bgAvatar: string;
  stars: number;
  text: string;
}

export interface LicenseCardProps {
  title: string;
  description: string;
}

export enum CookieCategory {
  NECESSARY = 'Necessário',
  FUNCTIONAL = 'Funcional',
  ANALYTICS = 'Analíticos',
  PERFORMANCE = 'Desempenho',
  ADS = 'Anúncio',
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export type SolutionId =
  | 'clinica-geral'
  | 'implantes'
  | 'estetica'
  | 'cirurgias'
  | 'facetas'
  | 'lentes'
  | 'ortodontia';

export interface SolutionContent {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  image: string;
  text: React.ReactNode;
}
