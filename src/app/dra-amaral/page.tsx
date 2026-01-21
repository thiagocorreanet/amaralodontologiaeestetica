import type { Metadata } from 'next';
import { DraAmaralContent } from './DraAmaralContent';

export const metadata: Metadata = {
  title: 'Dra. Amaral | Amaral Odontologia',
  description:
    'Conheça a Dra. Amaral - Referência em Estética Dental no Brasil e no Mundo',
};

export default function DraAmaralPage() {
  return <DraAmaralContent />;
}
