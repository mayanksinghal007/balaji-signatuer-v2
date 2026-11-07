'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SectionReveal } from '@/components/ui/SectionReveal';

export const CategoryShowcase: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    {
      title: 'The Saree Guild',
      category: 'Sarees',
      subtitle: 'Heirloom Kanjivaram, Banarasi, Chanderi & Sheer Organza',
      href: '/collection/sarees',
      image: '/images/catalog/sarees/saree-1.jpg',
      count: '75+ Unique Weaves',
      tag: 'Heritage Drapes',
    },
    {
      title: 'The Suit Atelier',
      category: 'Suits',
      subtitle: 'Tailored Anarkalis, Flared Shararas, Straight Sets & Velvet',
      href: '/collection/suits',
      image: '/images/catalog/suits/suit-1.jpg',
      count: '72+ Curated Silhouettes',
      tag: 'Bespoke Tailoring',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-canvas-subtle relative overflow-hidden font-sans border-b border-heritage-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-eyebrow text-gold-antique font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-heritage-brown font-normal">
            Shop by Category
          </h2>
          <div className="w-16 h-0.5 bg-gold-antique mx-auto my-3" />
          <p className="text-sm sm:text-base text-heritage-secondary font-light">
            Our atelier devotes its craftsmanship entirely to two timeless expressions of Indian femininity.
          </p>
        </SectionReveal>

        {/* 2-Card Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, idx) => (
            <SectionReveal key={idx} delay={idx * 0.15}>
              <Link href={cat.href} className="group block relative overflow-hidden shadow-luxury">
                {/* Image Container with 3D-feel Hover Scale */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-heritage-deep">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-deep/90 via-heritage-deep/30 to-transparent transition-opacity duration-300 group-hover:from-heritage-deep/95" />

                  {/* Animated Gold Border Draw */}
                  <div className="absolute inset-4 border border-gold-antique/0 transition-all duration-500 group-hover:border-gold-antique/60 pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-eyebrow text-white font-medium border border-white/20">
                      {cat.tag}
                    </span>
                  </div>

                  {/* Bottom Text Content (Slides up smoothly on hover) */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-10 transition-transform duration-300 group-hover:-translate-y-2">
                    <p className="text-xs uppercase tracking-eyebrow text-gold-light mb-1.5 font-medium">
                      {cat.count}
                    </p>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                        {cat.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-gold-antique text-white flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 font-light mt-2 line-clamp-2">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
