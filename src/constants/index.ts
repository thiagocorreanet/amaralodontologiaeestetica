import {
  NavItem,
  ProcessStepProps,
  SpecialtyCardProps,
  LicenseCardProps,
  TestimonialProps,
  ReviewProps,
  PortfolioItemProps,
} from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'A Clínica', href: '/clinica' },
  { label: 'Dra. Amaral', href: '/dra-amaral' },
  {
    label: 'Soluções',
    href: '/#solutions',
    subItems: [
      { label: 'Clínico geral', href: '/solucoes/clinica-geral' },
      { label: 'Implantes', href: '/solucoes/implantes' },
      { label: 'Estética', href: '/solucoes/estetica' },
    ],
  },
  { label: 'Portfólio', href: '/portfolio' },
];

export const SPECIALTIES: SpecialtyCardProps[] = [
  {
    title: 'Clínico geral',
    description: 'Limpeza, clareamento, canal e restaurações com cuidado e precisão.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Implantes',
    description: 'Planejamento e reabilitação com implantes para segurança e naturalidade.',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Estética',
    description: 'Botox, preenchimento e bioestimulador de colágeno com abordagem integrada.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
  },
];

export const PROCESS_STEPS: ProcessStepProps[] = [
  {
    number: '1',
    title: 'Contato inicial',
    description:
      'Entre em contato através do nosso WhatsApp (55 11 95268-7760) ou preencha o formulário exclusivo em nosso site. Nossa equipe de concierge responderá prontamente, em até 24 horas úteis, direcionando você para a unidade Amaral mais conveniente, de acordo com sua localização e preferência.',
  },
  {
    number: '2',
    title: 'Consulta de Avaliação',
    description:
      'Na sua primeira visita, realizaremos um diagnóstico abrangente, que inclui uma avaliação clínica detalhada, exames de imagem de alta precisão e uma escuta atenta às suas expectativas. Em seguida, apresentaremos as possibilidades de tratamento personalizadas, alinhadas aos seus objetivos estéticos e funcionais.',
  },
  {
    number: '3',
    title: 'Planejamento Digital Exclusivo',
    description:
      'Utilizamos tecnologia de ponta, como softwares de design de sorriso 3D e escaneamento intraoral, para simular os resultados do seu tratamento antes mesmo de iniciá-lo. Isso permite visualizar com clareza sua futura transformação, garantindo que o plano esteja perfeitamente alinhado com suas expectativas.',
  },
  {
    number: '4',
    title: 'Transformação do Sorriso Amaral',
    description:
      'Com o plano aprovado, iniciamos o tratamento seguindo um cronograma meticulosamente planejado, adaptado à sua disponibilidade. Você terá um acompanhamento exclusivo da equipe Amaral, com revisões periódicas e suporte dedicado, garantindo a excelência em cada etapa até alcançarmos o resultado perfeito e duradouro do seu novo sorriso.',
  },
];

export const LICENSES: LicenseCardProps[] = [
  {
    title: 'Infraestrutura Premium',
    description:
      'Todas as clínicas licenciadas seguem nosso padrão de excelência em infraestrutura, tecnologia e atendimento.',
  },
  {
    title: 'Metodologia Exclusiva',
    description:
      'Nossos licenciados aplicam a metodologia Amaral, garantindo resultados previsíveis e excepcionais.',
  },
  {
    title: 'Resultados Garantidos',
    description:
      'Compromisso com a satisfação total dos pacientes e acompanhamento personalizado.',
  },
];

export const FAMOUS_RESULTS: TestimonialProps[] = [
  { id: 1, name: 'Celebridade 1', image: 'https://picsum.photos/id/1005/600/800' },
  { id: 2, name: 'Celebridade 2', image: 'https://picsum.photos/id/342/600/800' },
  { id: 3, name: 'Celebridade 3', image: 'https://picsum.photos/id/338/600/800' },
  { id: 4, name: 'Celebridade 4', image: 'https://picsum.photos/id/64/600/800' },
];

export const PORTFOLIO_ITEMS: PortfolioItemProps[] = [
  {
    id: 1,
    name: 'Adilson Tomaz',
    afterImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    beforeImage:
      'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=800&auto=format&fit=crop&sat=-100',
  },
  {
    id: 2,
    name: 'Alan Braz',
    afterImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    beforeImage:
      'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=800&auto=format&fit=crop&sat=-100',
  },
  {
    id: 3,
    name: 'Arthur Wallace Oliveira',
    afterImage:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=800&auto=format&fit=crop',
    beforeImage:
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop&sat=-100',
  },
  {
    id: 4,
    name: 'Benjamin Hwang',
    afterImage:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    beforeImage:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop&sat=-100',
  },
  {
    id: 5,
    name: 'Dakota Lee Ballard',
    afterImage:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    beforeImage:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop&sat=-100',
  },
  {
    id: 6,
    name: 'Euridce Jurema',
    afterImage:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop',
    beforeImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop&sat=-100',
  },
  {
    id: 7,
    name: 'Carlos Ferreira',
    afterImage:
      'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=800&auto=format&fit=crop',
    beforeImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&sat=-100',
  },
  {
    id: 8,
    name: 'Mariana Silva',
    afterImage:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
    beforeImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop&sat=-100',
  },
  {
    id: 9,
    name: 'Ricardo Mendes',
    afterImage:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    beforeImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop&sat=-100',
  },
];

export const GOOGLE_REVIEWS: ReviewProps[] = [
  {
    id: 1,
    name: 'Monique Carla',
    timeAgo: '5 meses atrás',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
    initial: 'M',
    bgAvatar: 'bg-red-800',
    stars: 5,
    text: 'Amei o atendimento dos profissionais e dos dentistas! Estou muito realizada com o resultado, me sinto tão bem...',
  },
  {
    id: 2,
    name: 'Daniela Brancher ...',
    timeAgo: '8 meses atrás',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
    initial: 'D',
    bgAvatar: 'bg-blue-800',
    stars: 5,
    text: 'Atendimento único, humanizado. Só agradecer.',
  },
  {
    id: 3,
    name: 'Diego Damasceno',
    timeAgo: '11 meses atrás',
    avatar: '',
    initial: 'D',
    bgAvatar: 'bg-purple-600',
    stars: 5,
    text: 'Foi simples incrível! A realização dos meus sonhos, o aumento da minha...',
  },
  {
    id: 4,
    name: 'Bruno Ramos',
    timeAgo: '12 meses atrás',
    avatar: '',
    initial: 'B',
    bgAvatar: 'bg-green-600',
    stars: 5,
    text: 'Muito boa!! Recomendo.',
  },
];

export const CONTACT_INFO = {
  whatsapp: '(19) 3231-1197',
  email: 'atendimento@clinicaamaral.com.br',
  address:
    'R. José Paulino, 753 - Centro, Campinas - SP, 13013-001',
};
