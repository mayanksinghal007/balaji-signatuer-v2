'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '@/types/product';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { QuickViewModal } from '@/components/product/QuickViewModal';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';

export const NewArrivals: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const newProducts = PRODUCTS.filter((item) => item.isNew).slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-canvas font-sans border-b border-heritage-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-heritage-border pb-6 gap-4">
          <SectionReveal className="space-y-2">
            <span className="text-xs uppercase tracking-eyebrow text-gold-deep font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Latest Studio Additions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-heritage-brown font-normal">
              New Arrivals
            </h2>
            <p className="text-xs sm:text-sm text-heritage-secondary font-light">
              Freshly completed handloom sarees and bespoke tailored suit silhouettes.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow text-heritage-brown hover:text-gold-antique font-medium transition-colors"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>

        {/* 4-Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* Quick View Modal */}
        <QuickViewModal
          product={quickViewProduct}
          isOpen={!!quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      </div>
    </section>
  );
};
