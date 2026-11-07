import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-canvas-subtle border-b border-heritage-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric Image Collage Left */}
          <div className="lg:col-span-6 relative">
            {/* Primary Main Image */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden shadow-luxury border border-heritage-border bg-white">
              <Image
                src="/images/editorial/craft-story.png"
                alt="Balaji Signatures Artisanal Craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 lg:-right-6 bg-heritage-deep text-canvas p-6 sm:p-8 max-w-xs shadow-2xl border border-gold-antique/30">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-gold-muted" />
                <span className="text-[10px] uppercase tracking-regal text-gold-muted font-sans font-semibold">
                  Artisanal Commitment
                </span>
              </div>
              <p className="text-xs font-sans text-canvas/80 leading-relaxed font-light">
                Hand-inspected fabric integrity, genuine zari threads, and precision tailoring.
              </p>
            </div>
          </div>

          {/* Editorial Narrative Right */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <span className="text-xs uppercase tracking-regal text-gold-deep font-sans font-semibold">
              The Balaji Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-heritage-brown font-normal leading-tight">
              Rooted in Tradition, <br />
              <span className="italic font-light text-gold-deep">Tailored for Today</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-heritage-secondary font-sans font-light leading-relaxed">
              <p>
                At <strong>Balaji Signatures</strong>, we hold an unyielding reverence for the heritage
                of Indian textiles. By specializing strictly in women’s Sarees and Suits, our focus is
                singular: to elevate the drape and the cut to an art form.
              </p>
              <p>
                From pure Kanjivaram and Banarasi mulberry silks to flowing georgettes and lightweight
                organza, every piece reflects thoughtful curation. We bridge the gap between heirloom
                authenticity and effortless contemporary comfort, offering pieces meant to be cherished
                across generations.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-heritage-border">
              <div>
                <h4 className="text-sm font-serif font-semibold text-heritage-brown">Pure Handlooms</h4>
                <p className="text-xs text-heritage-secondary mt-1 font-light">
                  Direct artisan-sourced silks and handloom weaves.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-serif font-semibold text-heritage-brown">Custom Fit Support</h4>
                <p className="text-xs text-heritage-secondary mt-1 font-light">
                  Tailored stitching and sizing guidance via WhatsApp.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-regal text-heritage-brown font-semibold hover:text-gold-deep group transition-colors"
              >
                <span>Read More About Our Atelier</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

