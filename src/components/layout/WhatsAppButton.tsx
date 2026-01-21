'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511952687760"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20b85c] transition-all duration-300 hover:-translate-y-1 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
    </a>
  );
};
