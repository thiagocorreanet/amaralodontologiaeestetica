'use client';

import React, { useState, useEffect } from 'react';
import { CookieCategory } from '@/types';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    [CookieCategory.NECESSARY]: true,
    [CookieCategory.FUNCTIONAL]: true,
    [CookieCategory.ANALYTICS]: true,
    [CookieCategory.PERFORMANCE]: true,
    [CookieCategory.ADS]: true,
  });

  useEffect(() => {
    const hasConsent = localStorage.getItem('amaral-cookie-consent');
    if (!hasConsent) {
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('amaral-cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('amaral-cookie-consent', 'reject');
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('amaral-cookie-consent', JSON.stringify(cookieSettings));
    setIsVisible(false);
  };

  const toggleCategory = (category: CookieCategory) => {
    if (category === CookieCategory.NECESSARY) return;
    setCookieSettings((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] bg-white text-gray-900 shadow-[0_-5px_20px_rgba(0,0,0,0.2)] font-sans">
      {!showDetails ? (
        <div className="container mx-auto px-6 py-6 md:py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h4 className="font-bold text-lg mb-2">Valorizamos sua privacidade</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Utilizamos cookies para aprimorar sua experiência de navegação, exibir anúncios ou
              conteúdo personalizado e analisar nosso tráfego. Ao clicar em &quot;Aceitar todos&quot;, você
              concorda com nosso uso de cookies.{' '}
              <a href="#" className="underline text-viottoBlue">
                Política de Privacidade
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowDetails(true)}
              className="px-6 py-2 border border-gray-300 rounded-[2px] text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Personalizar
            </button>
            <button
              onClick={handleReject}
              className="px-6 py-2 bg-viottoBlue text-white rounded-[2px] text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Rejeitar
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 bg-viottoBlue text-white rounded-[2px] text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Aceitar tudo
            </button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-6 py-8 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-xl">Preferências de Cookies</h4>
            <button onClick={() => setShowDetails(false)} className="text-gray-500 hover:text-black">
              &times; Fechar
            </button>
          </div>

          <div className="space-y-4 mb-8">
            {Object.values(CookieCategory).map((category) => (
              <div
                key={category}
                className="flex items-center justify-between p-4 border border-gray-200 rounded"
              >
                <div>
                  <p className="font-medium">{category}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {category === CookieCategory.NECESSARY
                      ? 'Essenciais para o funcionamento do site.'
                      : 'Permite funcionalidades adicionais e personalização.'}
                  </p>
                </div>
                <div
                  className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${
                    cookieSettings[category] ? 'bg-viottoBlue' : 'bg-gray-300'
                  }`}
                  onClick={() => toggleCategory(category)}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${
                      cookieSettings[category] ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={handleSaveSettings}
              className="px-8 py-3 bg-viottoBlue text-white rounded-[2px] font-medium hover:bg-blue-600"
            >
              Salvar Preferências
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
