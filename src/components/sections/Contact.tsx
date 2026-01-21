'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CONTACT_INFO } from '@/constants';
import { MessageCircle, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    solution: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-black relative pb-20">
      {/* Gold Metallic Bar Separator */}
      <div className="w-full h-40 md:h-52 relative flex items-center justify-center overflow-hidden shadow-2xl z-20 -mt-10 md:-mt-16">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#8a6e3e_0%,#eecda3_20%,#8a6e3e_40%,#d4af37_60%,#8a6e3e_80%,#eecda3_100%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Logo Content */}
        <div className="relative z-10 flex flex-col items-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4 md:gap-8 mb-2">
            <span
              className="font-serif text-2xl md:text-5xl text-[#3d2910] font-bold tracking-[0.1em] uppercase"
              style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.4)' }}
            >
              CLINICA
            </span>

            <div className="w-12 h-12 md:w-16 md:h-16 text-[#3d2910]">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(1px 1px 0px rgba(255,255,255,0.4))' }}
              >
                <path
                  d="M50 85C40 85 30 75 25 60C22 50 25 40 30 35M25 60C20 55 15 45 15 35"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M25 60L20 65M30 50L25 55M32 40L28 42"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M50 85C60 85 70 75 75 60C78 50 75 40 70 35M75 60C80 55 85 45 85 35"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M75 60L80 65M70 50L75 55M68 40L72 42"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M45 40L50 55L65 30"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span
              className="font-serif text-2xl md:text-5xl text-[#3d2910] font-bold tracking-[0.1em] uppercase"
              style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.4)' }}
            >
              AMARAL
            </span>
          </div>

          <span
            className="font-serif text-xl md:text-3xl text-[#3d2910] font-bold tracking-[0.2em] uppercase text-center"
            style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.4)' }}
          >
            ODONTOLOGIA E ESTÉTICA
          </span>
        </div>

        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40"></div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black/40"></div>
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-12">
            <h3 className="text-white text-xl md:text-2xl font-light mb-2">Tem Alguma Dúvida?</h3>
            <h2 className="text-[#CFA15D] font-serif text-4xl md:text-6xl uppercase tracking-wider mb-6">
              ENTRE EM CONTATO
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-10">
              Disponibilizamos canais exclusivos para atendimento de nossos clientes. Preencha o
              formulário, ou se preferir utilize outro canal de contato abaixo.
            </p>

            {/* Quick Contacts */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-[#CFA15D]" size={24} />
                <div className="text-left">
                  <p className="text-[#CFA15D] font-semibold text-sm">Chame No Whats!</p>
                  <p className="text-white text-sm">{CONTACT_INFO.whatsapp}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#CFA15D]" size={24} />
                <div className="text-left">
                  <p className="text-[#CFA15D] font-semibold text-sm">Se Preferir Mande Um E-Mail</p>
                  <p className="text-white text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-transparent">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-none rounded-[4px] px-6 py-4 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-gold outline-none shadow-inner"
                  placeholder="Nome*"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border-none rounded-[4px] px-6 py-4 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-gold outline-none shadow-inner"
                  placeholder="Telefone*"
                />
              </div>

              <div>
                <select
                  name="solution"
                  value={formData.solution}
                  onChange={handleChange}
                  className="w-full bg-white border-none rounded-[4px] px-6 py-4 text-gray-800 focus:ring-2 focus:ring-gold outline-none shadow-inner appearance-none cursor-pointer"
                >
                  <option value="">Cirurgias Odontológicas</option>
                  <option value="Facetas">Facetas Dentárias</option>
                  <option value="Lentes">Lentes de Contato Dental</option>
                  <option value="Ortodontia">Ortodontia</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border-none rounded-[4px] px-6 py-4 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-gold outline-none shadow-inner resize-none"
                  placeholder="Mensagem*"
                ></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  variant="gold-gradient"
                  size="lg"
                  className="px-16 py-4 shadow-[0_4px_14px_0_rgba(255,215,0,0.39)]"
                >
                  Enviar
                  <MessageCircle size={18} className="ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
