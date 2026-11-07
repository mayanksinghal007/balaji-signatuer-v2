'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/product/ProductCard';
import { QuickViewModal } from '@/components/product/QuickViewModal';
import { PRODUCTS } from '@/data/products';

export const FeaturedCollections: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Sarees' | 'Suits'>('All');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const displayedProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'All') return p.featured;
    return p.category === activeTab && p.featured;
  }).slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-canvas border-b border-heritage-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-regal text-gold-deep font-sans font-semibold">
              Handcrafted Masterpieces
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-heritage-brown font-normal">
              Featured Studio Signatures
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-heritage-border pb-1">
            {(['All', 'Sarees', 'Suits'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs uppercase tracking-regal font-sans transition-all relative ${
                  activeTab === tab
                    ? 'text-gold-deep font-semibold'
                    : 'text-heritage-secondary hover:text-heritage-brown font-medium'
                }`}
              >
                {tab === 'All' ? 'All Curated' : tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-antique" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* Bottom CTA to Shop All */}
        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 border border-heritage-brown text-heritage-brown px-8 py-3.5 text-xs uppercase tracking-regal font-sans font-semibold hover:bg-heritage-brown hover:text-canvas transition-all duration-300"
          >
            <span>View All Curated Sarees & Suits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </section>
  );
};

