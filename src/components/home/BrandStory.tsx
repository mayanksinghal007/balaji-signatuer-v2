'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Heart, Award } from 'lucide-react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-canvas-warm relative overflow-hidden font-sans border-b border-heritage-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric Atelier Image Composition */}
          <div className="lg:col-span-6 relative">
            <SectionReveal className="relative z-10">
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-luxury border border-heritage-border bg-heritage-deep">
                <Image
                  src="/images/editorial/craft-story.png"
                  alt="Balaji Signatures Handloom Atelier Craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-deep/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-heritage-border">
                  <p className="text-xs uppercase tracking-eyebrow text-gold-deep font-semibold">
                    Atelier Standard
                  </p>
                  <p className="font-serif text-sm text-heritage-brown">
                    Hand-Inspected Weaves · Dedicated Pure Saree &amp; Suit Specialization
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Decorative Offset Gold Frame */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-full h-full border border-gold-antique/40 z-0 pointer-events-none" />
          </div>

          {/* Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <SectionReveal className="space-y-4">
              <span className="text-xs uppercase tracking-eyebrow text-gold-deep font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                The Balaji Signatures Atelier
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-heritage-brown font-normal leading-tight">
                Devotion to the Drape &amp; <br />
                <span className="italic font-light text-gold-deep">Precision of the Cut</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold-antique my-2" />
            </SectionReveal>

            <SectionReveal delay={0.2} className="space-y-4 text-heritage-secondary font-light text-sm sm:text-base leading-relaxed">
              <p>
                Balaji Signatures is an Indian luxury women&apos;s ethnic fashion studio dedicated to preserving India&apos;s generational textile traditions. We hold a singular, uncompromising focus: <strong>Sarees and Suits only</strong>.
              </p>
              <p>
                From hand-loomed Kanjivaram and Banarasi silks to tailored Anarkalis, sharara ensembles, and micro-velvet sets, every silhouette is crafted with artisanal dignity. We reject fast-fashion shortcuts, ensuring every piece that leaves our studio is steam-finished, inspected for weave purity, and wrapped in protective tamper-proof packaging.
              </p>
            </SectionReveal>

            {/* Pillars */}
            <SectionReveal delay={0.3} className="grid grid-cols-2 gap-4 pt-4 border-t border-heritage-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-heritage-brown font-medium text-xs uppercase tracking-eyebrow">
                  <Award className="w-4 h-4 text-gold-antique" />
                  <span>Artisanal Purity</span>
                </div>
                <p className="text-xs text-heritage-secondary font-light">
                  Hand-inspected silk and genuine metallic zari threads.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-heritage-brown font-medium text-xs uppercase tracking-eyebrow">
                  <ShieldCheck className="w-4 h-4 text-gold-antique" />
                  <span>Studio Direct</span>
                </div>
                <p className="text-xs text-heritage-secondary font-light">
                  Direct concierge guidance via WhatsApp for bespoke advice.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4} className="pt-4">
              <Button href="/about" variant="secondary" size="md">
                Read Atelier Manifesto
              </Button>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
