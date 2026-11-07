'use client';

import React, { useState, useMemo } from 'react';
import { ProductCard } from '@/components/product/ProductCard';
import { QuickViewModal } from '@/components/product/QuickViewModal';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';
import { SectionReveal } from '@/components/ui/SectionReveal';

export default function SareesCollectionPage() {
  const [selectedSub, setSelectedSub] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const subCategories = useMemo(() => {
    const subs = Array.from(
      new Set(PRODUCTS.filter((p) => p.category === 'Sarees').map((p) => p.subCategory))
    );
    return ['All', ...subs];
  }, []);

  const sareeProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.category === 'Sarees');

    if (selectedSub !== 'All') {
      list = list.filter((p) => p.subCategory === selectedSub);
    }

    if (sortOrder === 'low-high') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-low') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedSub, sortOrder]);

  return (
    <div className="bg-canvas min-h-screen py-10 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block text-xs uppercase tracking-eyebrow text-gold-deep font-semibold border-b border-gold-antique/50 pb-1">
            The Saree Guild
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-heritage-brown font-normal">
            Handcrafted Heirloom Sarees
          </h1>
          <p className="text-xs sm:text-sm text-heritage-secondary font-light max-w-xl mx-auto leading-relaxed">
            Pure Mulberry Silk, Kanjivaram zari borders, featherweight Organza, and Banarasi drapes.
            Designed for weddings, grand soirées, and timeless milestones.
          </p>
        </SectionReveal>

        {/* Filter Navigation */}
        <div className="border-y border-heritage-border py-4 mb-8 flex flex-wrap items-center justify-between gap-4 bg-canvas-subtle px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2">
            {subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSub(sub)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-eyebrow border transition-all ${
                  selectedSub === sub
                    ? 'bg-heritage-brown text-white border-heritage-brown font-semibold shadow-sm'
                    : 'border-heritage-border bg-white text-heritage-secondary hover:border-gold-antique'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-eyebrow text-heritage-secondary">
              Sort By:
            </span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="text-xs font-sans uppercase tracking-editorial bg-white border border-heritage-border px-3 py-1.5 focus:outline-none focus:border-gold-antique text-heritage-brown"
            >
              <option value="featured">Featured Atelier Weaves</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Count Indicator */}
        <div className="mb-6 flex justify-between items-center text-xs text-heritage-secondary font-light">
          <span>Showing {sareeProducts.length} Heirloom Sarees</span>
          <span>Complimentary Pan-India Express Delivery</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {sareeProducts.map((product, idx) => (
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
    </div>
  );
}
