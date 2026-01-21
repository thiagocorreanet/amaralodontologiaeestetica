'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '@/constants';

export const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-[#222] font-sans text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Column 1: Logo & Technical Info */}
          <div className="flex flex-col items-start space-y-6">
            <div className="mb-4">
              {!imgError ? (
                <div className="relative inline-flex">
                  <div className="pointer-events-none absolute -inset-3 rounded-xl bg-[radial-gradient(circle_at_center,rgba(207,161,93,0.18),transparent_60%)] blur-md opacity-90" />
                  <Image
                    src="/logo.png"
                    alt="Amaral Odontologia"
                    width={220}
                    height={110}
                    onError={() => setImgError(true)}
                    className="relative h-20 w-auto object-contain [filter:brightness(1.12)_contrast(1.1)_saturate(1.15)] drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)]"
                    sizes="240px"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-serif text-3xl text-white font-bold tracking-widest">
                    AMARAL
                  </span>
                  <span className="text-xs text-[#CFA15D] uppercase tracking-[0.2em]">
                    Odontologia
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-1 mt-2">
              <h3 className="text-[#CFA15D] font-medium text-lg">Responsável Técnico</h3>
              <p className="text-gray-400 text-sm font-light">Dra. Amaral</p>
            </div>

            <div className="mt-4 border border-gray-800 bg-[#111] px-4 py-2 text-[10px] text-[#CFA15D] uppercase tracking-wider inline-block rounded-sm">
              CRO SP 97.044 – CROSP – CL 11.050
            </div>
          </div>

          {/* Column 2: MENU */}
          <div className="lg:pl-8">
            <h3 className="text-[#CFA15D] text-lg font-medium mb-3 uppercase tracking-wide">
              Menu
            </h3>
            <div className="w-8 h-[2px] bg-[#CFA15D] mb-8"></div>

            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#CFA15D] text-sm transition-colors flex items-center gap-3 group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#CFA15D] group-hover:translate-x-1 transition-transform"
                      strokeWidth={3}
                    />
                    <span className="font-light tracking-wide">{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#CFA15D] text-sm transition-colors flex items-center gap-3 group"
                >
                  <ChevronRight
                    size={14}
                    className="text-[#CFA15D] group-hover:translate-x-1 transition-transform"
                    strokeWidth={3}
                  />
                  <span className="font-light tracking-wide">Mapa do site</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: CONTATO */}
          <div>
            <h3 className="text-[#CFA15D] text-lg font-medium mb-3 uppercase tracking-wide">
              Contato
            </h3>
            <div className="w-8 h-[2px] bg-[#CFA15D] mb-8"></div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="mt-1">
                  <Phone size={20} className="text-[#CFA15D]" strokeWidth={1.5} />
                </div>
                <span className="text-gray-400 text-sm font-light tracking-wide group-hover:text-white transition-colors">
                  {CONTACT_INFO.whatsapp}
                </span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1">
                  <Mail size={20} className="text-[#CFA15D]" strokeWidth={1.5} />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 text-sm font-light tracking-wide group-hover:text-white transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 flex-shrink-0">
                  <MapPin size={20} className="text-[#CFA15D]" strokeWidth={1.5} />
                </div>
                <span className="text-gray-400 text-sm font-light tracking-wide leading-relaxed max-w-[220px] group-hover:text-white transition-colors">
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: REDES SOCIAIS */}
          <div>
            <h3 className="text-[#CFA15D] text-lg font-medium mb-3 uppercase tracking-wide">
              Redes Sociais
            </h3>
            <div className="w-8 h-[2px] bg-[#CFA15D] mb-8"></div>

            <div className="flex gap-5">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-sm border border-gray-800 hover:border-[#CFA15D] text-[#CFA15D] hover:bg-[#CFA15D]/10 transition-all duration-300"
              >
                <Facebook size={24} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-sm border border-gray-800 hover:border-[#CFA15D] text-[#CFA15D] hover:bg-[#CFA15D]/10 transition-all duration-300"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-sm border border-gray-800 hover:border-[#CFA15D] text-[#CFA15D] hover:bg-[#CFA15D]/10 transition-all duration-300"
              >
                <Youtube size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left font-light tracking-wider">
            Clinica Amaral Odontologia e Estética | Copyright © 2026 - Todos os direitos
            Reservados.
          </p>

          <div className="flex gap-6 text-xs text-gray-600 font-light uppercase tracking-wider">
            <span className="flex items-center gap-1">
              Desenvolvido por{' '}
              <a href="#" className="text-[#CFA15D] hover:underline font-normal">
                experts
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
