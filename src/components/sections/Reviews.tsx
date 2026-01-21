'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GOOGLE_REVIEWS } from '@/constants';
import { Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26-1.19-2.26z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export const Reviews: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.max(1, Math.ceil(GOOGLE_REVIEWS.length / itemsPerPage));
  const visibleReviews = Array.from({ length: Math.min(itemsPerPage, GOOGLE_REVIEWS.length) }).map(
    (_, i) => GOOGLE_REVIEWS[(currentIndex * itemsPerPage + i) % GOOGLE_REVIEWS.length]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-[#131313]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-white font-serif text-3xl">O que dizem sobre nós</h2>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-dark-lighter hover:bg-gold hover:text-white text-gray-400 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-dark-lighter hover:bg-gold hover:text-white text-gray-400 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#181818] p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors shadow-lg h-full flex flex-col"
              >
                {/* Header: Avatar + Name + Google Icon */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    {review.avatar ? (
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 rounded-full ${review.bgAvatar} flex items-center justify-center text-white font-medium`}
                      >
                        {review.initial}
                      </div>
                    )}
                    <div>
                      <h4 className="text-white text-sm font-medium leading-tight">{review.name}</h4>
                      <span className="text-gray-500 text-xs">{review.timeAgo}</span>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Stars + Badge */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-[#FBBC05]">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={14} fill="#FBBC05" strokeWidth={0} />
                    ))}
                  </div>
                  <div className="relative group ml-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check size={10} className="text-white stroke-[4]" />
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
                  {review.text}
                </p>

                {/* Link */}
                <div className="mt-auto pt-2">
                  <a
                    href="#"
                    className="text-gray-500 text-xs hover:text-white hover:underline transition-colors"
                  >
                    Consulte Mais informação
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
