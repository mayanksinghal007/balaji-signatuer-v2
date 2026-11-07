'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center bg-heritage-deep overflow-hidden">
      {/* Background Cinematic Image with Editorial Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-editorial-model.jpg"
          alt="Balaji Signatures Luxury Indian Women's Ethnic Wear"
          fill
          priority
          className="object-cover object-top opacity-55 scale-100 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Layered Gradient Lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-deep via-heritage-deep/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-deep via-transparent to-heritage-deep/30" />
      </div>

      {/* Decorative Fine Gold Border Outline */}
      <div className="absolute inset-4 sm:inset-8 border border-gold-antique/20 pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 lg:py-28 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-gold-antique/40 bg-heritage-deep/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-muted" />
            <span className="text-[11px] uppercase tracking-regal text-gold-muted font-sans font-medium">
              Flagship Studio Collection · 2026
            </span>
          </div>

          {/* Monumental Editorial Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-canvas leading-[1.08] tracking-tight font-normal">
            Elegance <br />
            <span className="italic font-light text-gold-light">That Defines</span> You
          </h1>

          {/* Subtitle with Genuine Brand Tone */}
          <p className="text-base sm:text-lg text-canvas/80 font-sans font-light leading-relaxed max-w-xl">
            Immerse yourself in authentic Indian heritage drapes and tailored couture. Handcrafted
            pure silk Sarees and architectural Suits, tailored with timeless grace.
          </p>

          {/* Action Button Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-3 bg-gold-antique text-canvas px-8 py-4 text-xs uppercase tracking-regal font-sans font-semibold hover:bg-gold-deep transition-all duration-300 shadow-luxury group"
            >
              <span>Explore The Atelier</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/collection/sarees"
              className="inline-flex items-center justify-center gap-2 border border-canvas/40 text-canvas px-8 py-4 text-xs uppercase tracking-regal font-sans font-medium hover:border-gold-antique hover:text-gold-light transition-colors backdrop-blur-sm"
            >
              <span>View Silk Sarees</span>
            </Link>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
          <div>
            <p className="text-[11px] uppercase tracking-regal text-gold-muted font-medium">Curation</p>
            <p className="text-sm font-serif text-canvas mt-0.5">Sarees & Suits Only</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-regal text-gold-muted font-medium">Purity</p>
            <p className="text-sm font-serif text-canvas mt-0.5">100% Verified Handloom</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[11px] uppercase tracking-regal text-gold-muted font-medium">Studio Delivery</p>
            <p className="text-sm font-serif text-canvas mt-0.5">Insured Pan-India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

