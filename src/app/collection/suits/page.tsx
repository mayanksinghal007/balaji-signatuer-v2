'use client';

import React, { useState, useMemo } from 'react';
import { ProductCard } from '@/components/product/ProductCard';
import { QuickViewModal } from '@/components/product/QuickViewModal';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';

export default function SuitsCollectionPage() {
  const [selectedSub, setSelectedSub] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const suitProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.category === 'Suits');

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

  const subCategories = ['All', 'Anarkali Suits', 'Straight Suits', 'Sharara Suits', 'Angrakha Suits', 'Palazzo Suits'];

  return (
    <div className="bg-canvas min-h-screen py-10 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block text-xs uppercase tracking-regal text-gold-deep font-semibold border-b border-gold-antique/50 pb-1">
            The Suit Atelier
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-heritage-brown font-normal">
            Tailored Women&apos;s Ethnic Suits
          </h1>
          <p className="text-xs sm:text-sm text-heritage-secondary font-light max-w-xl mx-auto leading-relaxed">
            From flared 4.5-meter Anarkalis and tiered Shararas to sharp straight-cut trouser sets.
            Featuring authentic hand embroidery, Zardozi, and lightweight organza dupattas.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="border-y border-heritage-border py-4 mb-8 flex flex-wrap items-center justify-between gap-4 bg-canvas-subtle px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2">
            {subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSub(sub)}
                className={`px-3 py-1.5 text-xs uppercase tracking-editorial border transition-all ${
                  selectedSub === sub
                    ? 'bg-heritage-brown text-canvas border-heritage-brown font-semibold'
                    : 'border-heritage-border bg-canvas text-heritage-secondary hover:border-gold-antique'
                }`}
              >
                {sub === 'All' ? 'All Suits' : sub}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-heritage-tertiary uppercase tracking-regal">Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-canvas border border-heritage-border text-xs py-1 px-3 text-heritage-brown focus:outline-none focus:border-gold-antique"
            >
              <option value="featured">Featured First</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Suit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {suitProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}

