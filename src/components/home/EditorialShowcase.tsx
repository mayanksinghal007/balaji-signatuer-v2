'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';

export const EditorialShowcase: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-heritage-deep text-white relative overflow-hidden font-sans border-b border-gold-antique/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <SectionReveal className="space-y-4">
              <span className="text-xs uppercase tracking-eyebrow text-gold-antique font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Editorial Campaign
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
                The Festive &amp; <br />
                <span className="italic font-light text-gold-light">Royal Atelier Edit</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold-antique my-2" />
            </SectionReveal>

            <SectionReveal delay={0.2} className="space-y-4 text-white/70 font-light text-sm sm:text-base leading-relaxed">
              <p>
                Inspired by high-fashion Indian portraiture, this curated campaign highlights the sculptural drape of pure silk sarees alongside the tailored grace of regal Anarkali silhouettes.
              </p>
              <p>
                Every garment is calibrated for ambient celebratory lighting—where antique gold zari and rich jewel tones create timeless visual harmony.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3} className="pt-2 flex flex-wrap gap-4">
              <Button href="/collection/sarees" variant="primary" size="md">
                Explore Sarees
              </Button>
              <Button href="/collection/suits" variant="outline" size="md" className="text-white border-white/40 hover:border-gold-antique hover:text-gold-light">
                Explore Suits
              </Button>
            </SectionReveal>
          </div>

          {/* Magazine Collage Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-gold-antique/30 shadow-luxury">
                  <Image
                    src="/images/editorial/curated-campaign.png"
                    alt="Festive Atelier Campaign"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-deep/60 via-transparent to-transparent" />
                </div>

                <div className="relative aspect-[3/4] w-full overflow-hidden border border-gold-antique/30 shadow-luxury mt-8 sm:mt-12">
                  <Image
                    src="/images/editorial/festive-atelier.webp"
                    alt="Regal Silk Drape Detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-deep/60 via-transparent to-transparent" />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
