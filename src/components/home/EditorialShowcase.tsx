import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const EditorialShowcase: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-canvas border-b border-heritage-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Large Editorial Card Left */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-heritage-border shadow-luxury">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-canvas-subtle">
              <Image
                src="/images/editorial/curated-campaign.png"
                alt="Balaji Signatures Editorial Campaign"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-silk"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-deep/80 via-heritage-deep/20 to-transparent" />
            </div>

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-canvas space-y-2">
              <span className="text-[11px] uppercase tracking-regal text-gold-muted font-sans font-semibold">
                Studio Campaign Edit
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-canvas font-normal">
                The Festive &amp; Occasion Atelier
              </h3>
              <p className="text-xs sm:text-sm text-canvas/80 font-sans font-light max-w-lg">
                Where quiet opulence meets intricate needlework. Curated drapes engineered for unforgettable celebrations.
              </p>
              <div className="pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-regal text-gold-light hover:text-white font-semibold transition-colors"
                >
                  <span>Explore The Campaign</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Complementary Editorial Right */}
          <div className="lg:col-span-5 space-y-8 lg:pl-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-heritage-border shadow-luxury group">
              <Image
                src="/images/editorial/festive-atelier.webp"
                alt="Festive Atelier Drapes"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-silk"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-deep/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-canvas">
                <span className="text-[10px] uppercase tracking-regal text-gold-muted font-semibold">
                  Handpicked Silks
                </span>
                <h4 className="text-xl font-serif text-canvas font-normal mt-0.5">
                  The Saree Silhouette
                </h4>
              </div>
            </div>

            <div className="p-6 bg-canvas-subtle border border-heritage-border/80 space-y-3">
              <h4 className="text-base font-serif text-heritage-brown font-semibold">
                Bespoke Styling &amp; Draping Assistance
              </h4>
              <p className="text-xs text-heritage-secondary font-sans leading-relaxed font-light">
                Need guidance selecting between Kanjivaram and Organza, or custom stitching measurements for your suit?
                Connect directly with our boutique stylists for 1-on-1 recommendations.
              </p>
              <a
                href="https://wa.me/917827533877"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-gold-deep font-semibold hover:text-heritage-brown pt-1"
              >
                <span>Chat via WhatsApp (+91 7827533877)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

