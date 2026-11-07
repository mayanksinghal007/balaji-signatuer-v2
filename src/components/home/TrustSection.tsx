'use client';

import React from 'react';
import { ShieldCheck, Truck, Headphones, RotateCcw } from 'lucide-react';
import { SectionReveal } from '@/components/ui/SectionReveal';

export const TrustSection: React.FC = () => {
  const trustFactors = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-gold-antique" />,
      title: 'Artisanal Purity Guarantee',
      desc: 'Strictly hand-inspected pure silk and handloom weaves. Silk Mark compliant.',
    },
    {
      icon: <Truck className="w-7 h-7 text-gold-antique" />,
      title: 'Pan-India Express Delivery',
      desc: 'Complimentary shipping on orders above ₹999. Fully insured transit with live SMS/WhatsApp tracking.',
    },
    {
      icon: <RotateCcw className="w-7 h-7 text-gold-antique" />,
      title: '7-Day Easy Exchange',
      desc: 'Hassle-free size and drape exchange within 7 days of package delivery.',
    },
    {
      icon: <Headphones className="w-7 h-7 text-gold-antique" />,
      title: 'Direct Boutique Hotline',
      desc: 'Direct consultation via WhatsApp (+91 7827533877) for sizing, drape styling, and custom requests.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-canvas-subtle border-b border-heritage-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, idx) => (
            <SectionReveal
              key={idx}
              delay={idx * 0.1}
              className="p-6 bg-white border border-heritage-border hover:border-gold-antique/50 transition-all duration-300 shadow-sm hover:shadow-luxury space-y-3"
            >
              <div className="w-12 h-12 rounded-none bg-gold-antique/10 border border-gold-antique/20 flex items-center justify-center">
                {factor.icon}
              </div>
              <h3 className="font-serif text-lg text-heritage-brown font-normal">
                {factor.title}
              </h3>
              <p className="text-xs text-heritage-secondary font-light leading-relaxed">
                {factor.desc}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
