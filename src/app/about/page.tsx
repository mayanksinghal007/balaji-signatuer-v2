import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Heart, Award } from 'lucide-react';

export const metadata = {
  title: 'About Our Atelier | Balaji Signatures',
  description:
    'Learn about Balaji Signatures, an Indian luxury women’s ethnic fashion studio dedicated to handcrafted Sarees and tailored Suits.',
};

export default function AboutPage() {
  return (
    <div className="bg-canvas min-h-screen py-12 lg:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
            About Balaji Signatures
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-heritage-brown font-normal leading-tight">
            The Art of the Drape &amp; <br />
            <span className="italic font-light text-gold-deep">The Grace of the Cut</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold-antique mx-auto my-4" />
          <p className="text-sm sm:text-base text-heritage-secondary font-light leading-relaxed">
            Balaji Signatures is an Indian luxury women’s ethnic fashion studio born from an unwavering
            dedication to India&apos;s rich textile heritage. We specialize exclusively in handcrafted
            Sarees and tailored Suits.
          </p>
        </div>

        {/* Narrative & Atelier Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-luxury border border-heritage-border bg-canvas-subtle">
              <Image
                src="/images/editorial/craft-story.png"
                alt="Balaji Signatures Handloom Atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-heritage-brown font-normal">
              A Singular Focus on Sarees &amp; Suits
            </h2>

            <div className="space-y-4 text-sm text-heritage-secondary font-light leading-relaxed">
              <p>
                In an era of fleeting trends and mass-produced fast fashion, Balaji Signatures chose
                a deliberate, disciplined path: mastering the two most iconic silhouettes of Indian
                feminine grace — the Saree and the Suit.
              </p>
              <p>
                Our collections are sourced directly in collaboration with master weavers and generational
                handloom artisans across Varanasi, Kanchipuram, Chanderi, and Jaipur. We inspect every
                single piece to verify warp and weft tension, zari purity, and precise border symmetry.
              </p>
              <p>
                Whether it is a regal 4.5-meter flared Anarkali in chinon silk, an ethereal hand-painted
                organza drape, or a pure Kanjivaram bridal weave, each piece is designed to be worn with
                pride and treasured for decades.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-heritage-border">
              <div className="p-4 bg-canvas-subtle border border-heritage-border/60">
                <ShieldCheck className="w-5 h-5 text-gold-deep mb-2" />
                <h4 className="text-xs uppercase tracking-regal text-heritage-brown font-semibold">100% Verified Purity</h4>
                <p className="text-xs text-heritage-secondary mt-1 font-light">Natural silks, authentic zari, and hand-finished hems.</p>
              </div>
              <div className="p-4 bg-canvas-subtle border border-heritage-border/60">
                <Heart className="w-5 h-5 text-gold-deep mb-2" />
                <h4 className="text-xs uppercase tracking-regal text-heritage-brown font-semibold">Boutique Trust</h4>
                <p className="text-xs text-heritage-secondary mt-1 font-light">Personal styling consultation for every client.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Pillars */}
        <div className="p-8 sm:p-12 bg-heritage-deep text-canvas border border-gold-antique/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-regal text-gold-muted font-semibold">Pillar I</span>
              <h3 className="text-xl font-serif text-canvas">Generational Weaving</h3>
              <p className="text-xs text-canvas/70 font-light leading-relaxed">
                Respecting century-old pit-loom, jacquard, and kadwa weaving traditions across India.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-regal text-gold-muted font-semibold">Pillar II</span>
              <h3 className="text-xl font-serif text-canvas">Architectural Cuts</h3>
              <p className="text-xs text-canvas/70 font-light leading-relaxed">
                Tailoring Anarkalis, shararas, and trousers with immaculate drape, fall, and comfort.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-regal text-gold-muted font-semibold">Pillar III</span>
              <h3 className="text-xl font-serif text-canvas">Uncompromising Integrity</h3>
              <p className="text-xs text-canvas/70 font-light leading-relaxed">
                Real photos, genuine prices, transparent policies, and responsive direct boutique support.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-serif text-heritage-brown">Experience the Balaji Drape</h3>
          <Link
            href="/shop"
            className="inline-block bg-heritage-brown text-canvas px-8 py-3.5 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors shadow-luxury"
          >
            Explore The Current Collection
          </Link>
        </div>
      </div>
    </div>
  );
}

