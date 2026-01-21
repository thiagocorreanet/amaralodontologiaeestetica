# Amaral Odontologia - Next.js Website

Website institucional da Clínica Amaral Odontologia e Estética, desenvolvido com Next.js 14 e as melhores práticas do mercado.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Lucide React** - Ícones modernos

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (páginas)
│   ├── page.tsx           # Home
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Estilos globais
│   ├── not-found.tsx      # Página 404
│   ├── clinica/           # Página A Clínica
│   ├── dra-amaral/        # Página Dra. Amaral
│   ├── portfolio/         # Página Portfólio
│   └── solucoes/          # Páginas de Soluções (dinâmicas)
│       └── [slug]/        # Cirurgias, Facetas, Lentes, Ortodontia
├── components/
│   ├── layout/            # Header, Footer, CookieConsent, WhatsApp
│   ├── sections/          # Seções da Home (Hero, Specialties, etc.)
│   └── ui/                # Componentes reutilizáveis (Button)
├── constants/             # Constantes e dados
└── types/                 # TypeScript types
```

## 🛠 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar produção
npm start
```

## 📄 Páginas

- `/` - Home
- `/clinica` - A Clínica
- `/dra-amaral` - Dra. Amaral
- `/portfolio` - Portfólio
- `/solucoes/cirurgias` - Cirurgias Odontológicas
- `/solucoes/facetas` - Facetas Dentárias
- `/solucoes/lentes` - Lentes de Contato Dental
- `/solucoes/ortodontia` - Ortodontia Digital

## 🎨 Paleta de Cores

- **Gold**: `#CFA15D` - Cor principal
- **Dark**: `#0a0a0a` - Fundo escuro
- **White**: `#FFFFFF` - Textos

## 📝 Notas

- O projeto utiliza o App Router do Next.js 14
- Todas as imagens usam o componente `next/image` para otimização
- As fontes são carregadas via `next/font/google` para melhor performance
- SEO configurado com metadata em cada página

## 🔗 Logo

Coloque o arquivo `logo.png` na pasta `public/` para que apareça corretamente no Header e Footer.