import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header, Footer, CookieConsent, WhatsAppButton } from '@/components/layout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Clinica Amaral Odontologia e Estética',
  description: 'Referência no Brasil em Lentes de contato dental.',
  keywords: [
    'odontologia',
    'lentes de contato dental',
    'facetas',
    'clareamento dental',
    'implantes',
    'ortodontia',
    'estética dental',
  ],
  authors: [{ name: 'Clinica Amaral' }],
  openGraph: {
    title: 'Clinica Amaral Odontologia e Estética',
    description: 'Referência no Brasil em Lentes de contato dental.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="bg-dark min-h-screen text-white font-sans selection:bg-gold selection:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
