import type { Metadata } from 'next';
import { PortfolioContent } from './PortfolioContent';

export const metadata: Metadata = {
  title: 'Portfólio | Amaral Odontologia',
  description: 'Confira alguns dos sorrisos transformados nas clínicas Amaral',
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
