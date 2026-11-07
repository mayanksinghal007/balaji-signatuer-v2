import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const CategoryShowcase: React.FC = () => {
  const categories = [
    {
      title: 'The Saree Guild',
      subtitle: 'Handloom Kanjivaram, Banarasi & Organza Drapes',
      count: '75 Curated Masterpieces',
      image: '/images/catalog/sarees/saree-1.jpg',
      link: '/collection/sarees',
      badge: 'Heritage Drapes',
      description:
        'Woven in pure mulberry silk, featherweight organza, and opulent gold zari. Timeless drapes for monumental milestones.',
    },
    {
      title: 'The Suit Atelier',
      subtitle: 'Flared Anarkalis, Shararas & Straight Tailored Sets',
      count: '72 Bespoke Silhouettes',
      image: '/images/catalog/suits/suit-1.jpg',
      link: '/collection/suits',
      badge: 'Tailored Couture',
      description:
        'Architectural tailoring married with hand-embroidery, delicate gottapatti, and flowing dupattas. Ready to wear & bespoke.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-canvas-subtle border-b border-heritage-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-regal text-gold-deep font-sans font-semibold">
            Curated Architectural Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-heritage-brown font-normal">
            Shop By Discipline
          </h2>
          <div className="w-12 h-0.5 bg-gold-antique mx-auto my-3" />
          <p className="text-sm text-heritage-secondary font-sans font-light">
            Strictly dedicated to the two quintessential expressions of Indian women&apos;s ethnic elegance:
            the regal Saree and the refined Suit.
          </p>
        </div>

        {/* Two Monumental Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.link}
              className="group relative block overflow-hidden bg-canvas border border-heritage-border shadow-luxury hover:shadow-luxury-hover transition-all duration-500"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-canvas-subtle">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-silk"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-deep/90 via-heritage-deep/30 to-transparent" />
              </div>

              {/* Category Card Header Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-canvas/90 text-heritage-brown text-[10px] uppercase tracking-regal font-sans px-3 py-1.5 font-semibold backdrop-blur-sm border border-gold-antique/30">
                  {cat.badge}
                </span>
              </div>

              {/* Bottom Details Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 text-canvas space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-regal text-gold-muted font-sans font-medium">
                    {cat.count}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-gold-antique/80 text-canvas flex items-center justify-center group-hover:bg-gold-antique group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-canvas font-normal group-hover:text-gold-light transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-sm text-canvas/80 font-sans font-light line-clamp-2 max-w-md pt-1">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

