'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { ProductCard } from '@/components/product/ProductCard';
import { QuickViewModal } from '@/components/product/QuickViewModal';
import { Product } from '@/types/product';

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  if (wishlist.length === 0) {
    return (
      <div className="bg-canvas min-h-[70vh] flex items-center justify-center py-20 px-4 font-sans text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-canvas-subtle flex items-center justify-center text-heritage-tertiary">
            <Heart className="w-10 h-10" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-heritage-brown">Your Wishlist is Empty</h1>
          <p className="text-xs sm:text-sm text-heritage-secondary font-light">
            Save your favorite handcrafted Sarees and tailored Suits while browsing our collections.
          </p>
          <div className="pt-4">
            <Link
              href="/shop"
              className="inline-block bg-heritage-brown text-canvas px-8 py-3.5 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors"
            >
              Discover Collections
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-canvas min-h-screen py-10 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
            Saved Atelier Favorites
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-heritage-brown font-normal mt-1">
            My Wishlist ({wishlist.length} Designs)
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {wishlist.map((product) => (
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

