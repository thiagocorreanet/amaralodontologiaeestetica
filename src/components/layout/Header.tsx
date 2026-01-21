'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, CalendarDays } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const targetId = hash;

      if (pathname === path || (path === '/' && pathname === '/')) {
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    }
  };

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  const scrollToContact = () => {
    setIsMobileMenuOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      setTimeout(() => contactSection.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen || pathname !== '/'
            ? 'bg-black/95 backdrop-blur-md py-3 shadow-xl border-b border-white/5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center cursor-pointer group relative z-50">
              {!imgError ? (
                <div className="relative transition-transform duration-300 group-hover:scale-[1.01]">
                  <div className="pointer-events-none absolute -inset-3 rounded-xl bg-[radial-gradient(circle_at_center,rgba(207,161,93,0.22),transparent_60%)] blur-md opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <Image
                    src="/logo.png"
                    alt="Amaral Odontologia"
                    width={200}
                    height={100}
                    priority
                    onError={() => setImgError(true)}
                    className="relative h-12 md:h-[60px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] [filter:brightness(1.12)_contrast(1.1)_saturate(1.15)] drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)]"
                    sizes="(max-width: 768px) 160px, 200px"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-serif text-xl text-white font-bold tracking-widest">
                    AMARAL
                  </span>
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em]">
                    Odontologia
                  </span>
                </div>
              )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 mx-auto pl-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-[13px] font-medium transition-colors flex items-center gap-1 py-1.5 cursor-pointer uppercase tracking-wider ${
                    pathname === item.href && !item.href.includes('#')
                      ? 'text-gold'
                      : 'text-gray-300 hover:text-gold'
                  }`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown size={14} className="mt-0.5" />}
                </Link>

                {/* Dropdown */}
                {item.subItems && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-dark/95 backdrop-blur border border-gold/20 p-2 rounded-md shadow-2xl min-w-[240px]">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => handleNavClick(sub.href)}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors cursor-pointer"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden xl:flex items-center">
            <Button
              variant="gold-gradient"
              size="sm"
              className="flex items-center gap-2 shadow-none hover:shadow-gold/10"
              onClick={scrollToContact}
            >
              Agende sua consulta
              <CalendarDays size={16} strokeWidth={2.5} />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-white hover:text-gold transition-colors p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? null : <Menu size={32} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a] z-[100] transition-transform duration-300 ease-in-out xl:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header: Logo Center + Close Button Right */}
        <div className="relative flex items-center justify-center pt-6 pb-4 px-6 border-b border-white/5">
          <div className="flex flex-col items-center">
            {!imgError ? (
              <div className="relative">
                <div className="pointer-events-none absolute -inset-3 rounded-xl bg-[radial-gradient(circle_at_center,rgba(207,161,93,0.2),transparent_60%)] blur-md opacity-90" />
                <Image
                  src="/logo.png"
                  alt="Amaral"
                  width={180}
                  height={90}
                  className="relative h-12 w-auto object-contain [filter:brightness(1.12)_contrast(1.1)_saturate(1.15)] drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)]"
                  sizes="200px"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="font-serif text-xl text-white font-bold tracking-widest">
                  AMARAL
                </span>
                <span className="text-[10px] text-[#CFA15D] uppercase tracking-[0.2em]">
                  Odontologia
                </span>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-6 text-[#CFA15D] hover:text-white transition-colors p-2 bg-white/5 rounded-full"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto py-8 px-6">
          <nav className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="w-full">
                {item.subItems ? (
                  <div className="w-full">
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="flex items-center justify-between w-full text-left group py-2"
                    >
                      <span
                        className={`text-lg font-medium transition-colors ${
                          expandedMobileItem === item.label ? 'text-[#CFA15D]' : 'text-white'
                        }`}
                      >
                        {item.label}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 text-gray-400 group-hover:text-[#CFA15D] ${
                          expandedMobileItem === item.label ? 'rotate-180 text-[#CFA15D]' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedMobileItem === item.label
                          ? 'max-h-96 opacity-100 mt-2'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="flex flex-col pl-4 border-l border-[#CFA15D]/30 ml-1 space-y-3 py-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => handleNavClick(sub.href)}
                            className="text-gray-400 text-sm hover:text-white transition-colors block"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-lg font-medium text-white hover:text-[#CFA15D] transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer CTA */}
        <div className="p-6 mt-auto border-t border-white/5 bg-[#0a0a0a]">
          <Button
            variant="gold-gradient"
            fullWidth
            className="py-4 font-bold text-black border border-[#FFD700] rounded-md shadow-[0_0_15px_rgba(255,215,0,0.2)] flex items-center justify-between px-6 hover:brightness-110"
            onClick={scrollToContact}
          >
            <span>Agende sua consulta</span>
            <CalendarDays size={20} className="text-black" strokeWidth={2.5} />
          </Button>
        </div>
      </div>
    </>
  );
};
