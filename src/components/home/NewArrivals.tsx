'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/product/ProductCard';
import { QuickViewModal } from '@/components/product/QuickViewModal';
import { PRODUCTS } from '@/data/products';

export const NewArrivals: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const newProducts = PRODUCTS.filter((p) => p.isNew).slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-canvas-subtle border-b border-heritage-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-regal text-gold-deep font-sans font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Just Added To The Atelier</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-heritage-brown font-normal">
              New Season Arrivals
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-regal text-heritage-brown font-semibold hover:text-gold-deep transition-colors"
          >
            <span>View Full Catalog ({PRODUCTS.length} Designs)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </section>
  );
};

