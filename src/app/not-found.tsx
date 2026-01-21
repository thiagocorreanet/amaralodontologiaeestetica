import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-serif text-9xl text-[#CFA15D] font-thin mb-4">404</h1>
        <h2 className="text-white text-3xl md:text-4xl font-light mb-6">Página não encontrada</h2>
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <Button variant="gold-gradient" size="lg">
            Voltar para o início
          </Button>
        </Link>
      </div>
    </section>
  );
}
