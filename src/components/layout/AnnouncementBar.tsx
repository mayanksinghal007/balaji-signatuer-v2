'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, Phone } from 'lucide-react';

const MESSAGES = [
  {
    icon: Truck,
    text: 'Complimentary Insured Shipping Across India on Orders Above ₹999',
  },
  {
    icon: Phone,
    text: 'Bespoke Atelier Consultation via WhatsApp: +91 7827533877',
  },
  {
    icon: Sparkles,
    text: 'Curated Indian Heritage Handlooms — Sarees & Tailored Suits Only',
  },
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = MESSAGES[currentIndex].icon;

  return (
    <div className="bg-heritage-deep text-canvas border-b border-gold-antique/20 text-xs tracking-editorial uppercase py-2 px-4 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 font-sans font-light">
        <CurrentIcon className="w-3.5 h-3.5 text-gold-muted animate-pulse" />
        <span className="transition-opacity duration-300">
          {MESSAGES[currentIndex].text}
        </span>
      </div>
    </div>
  );
};

