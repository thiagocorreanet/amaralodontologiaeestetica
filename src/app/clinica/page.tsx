import type { Metadata } from 'next';
import { ClinicaContent } from './ClinicaContent';

export const metadata: Metadata = {
  title: 'A Clínica | Amaral Odontologia',
  description: 'Conheça a Clínica Amaral - Excelência em Estética Odontológica',
};

export default function ClinicaPage() {
  return <ClinicaContent />;
}
