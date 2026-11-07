import React from 'react';
import { ShieldCheck, Truck, Headphones, RotateCcw } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Artisanal Purity',
      subtitle: 'Strictly Sourced Handlooms',
      description: 'Every saree and suit undergoes strict hand-inspection for weave perfection, thread tension, and finish.',
    },
    {
      icon: Truck,
      title: 'Insured Express Shipping',
      subtitle: 'Pan-India Free Above ₹999',
      description: 'Dispatched through trusted express logistics partners with end-to-end tracking and transit insurance.',
    },
    {
      icon: Headphones,
      title: 'Direct Boutique Hotline',
      subtitle: 'WhatsApp: +91 7827533877',
      description: 'Direct styling advice, high-res video draping consultations, and custom sizing support with our Delhi studio.',
    },
    {
      icon: RotateCcw,
      title: '7-Day Easy Exchange',
      subtitle: 'Guaranteed Peace of Mind',
      description: 'Hassle-free size and fabric exchanges on all unstitched pieces and ready suits with direct support.',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-canvas border-b border-heritage-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 border border-heritage-border/60 bg-canvas-subtle hover:border-gold-antique/50 transition-colors duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-gold-antique/10 flex items-center justify-center text-gold-deep">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-semibold text-heritage-brown">
                    {item.title}
                  </h4>
                  <p className="text-[11px] uppercase tracking-regal text-gold-deep font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-xs text-heritage-secondary font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

