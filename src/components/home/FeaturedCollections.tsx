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

export const FeaturedCollections: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Sarees' | 'Suits'>('All');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeTab === 'All') return item.featured;
    return item.category === activeTab && item.featured;
  }).slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-canvas font-sans border-b border-heritage-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-eyebrow text-gold-deep font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Handpicked Curations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-heritage-brown font-normal">
            Featured Collections
          </h2>
          <div className="w-16 h-0.5 bg-gold-antique mx-auto my-3" />
          <p className="text-sm sm:text-base text-heritage-secondary font-light">
            Each creation is an architectural heirloom, woven with authentic silk marks and tailored to perfection.
          </p>

          {/* Category Filter Chips */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 pt-6">
            {(['All', 'Sarees', 'Suits'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs uppercase tracking-eyebrow font-medium transition-all duration-300 border ${
                  activeTab === tab
                    ? 'bg-heritage-brown text-white border-heritage-brown shadow-sm'
                    : 'bg-canvas-subtle text-heritage-secondary border-heritage-border hover:border-gold-antique'
                }`}
              >
                {tab === 'All' ? 'Curated Edit' : tab}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* View All CTA */}
        <SectionReveal className="text-center mt-16">
          <Button
            href="/shop"
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Complete Catalog
          </Button>
        </SectionReveal>

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
