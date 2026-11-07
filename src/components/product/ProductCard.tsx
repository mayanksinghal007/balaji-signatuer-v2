'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);
  const hasSecondaryImage = product.images.length > 1;

  return (
    <div
      className="group relative flex flex-col font-sans transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-canvas-subtle border border-heritage-border/60">
        <Link href={`/product/${product.slug}`} className="block w-full h-full relative">
          {/* Primary Image */}
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className={`object-cover transition-all duration-700 ease-silk ${
              isHovered && hasSecondaryImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Secondary Image for Hover Reveal */}
          {hasSecondaryImage && (
            <Image
              src={product.images[1]}
              alt={`${product.title} alternative view`}
              fill
              className={`object-cover transition-all duration-700 ease-silk absolute inset-0 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          )}
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isNew && (
            <span className="bg-heritage-deep/90 text-white text-[10px] uppercase tracking-regal px-2.5 py-1 font-medium backdrop-blur-sm">
              New Arrival
            </span>
          )}
          {product.discount > 0 && (
            <span className="bg-gold-antique text-canvas text-[10px] uppercase tracking-regal px-2.5 py-1 font-semibold">
              {product.discount}% Off
            </span>
          )}
        </div>

        {/* Floating Quick Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            className={`p-2 rounded-full transition-all duration-200 shadow-md ${
              isFavorited
                ? 'bg-red-600 text-white'
                : 'bg-canvas/90 text-heritage-brown hover:bg-canvas hover:text-red-600'
            }`}
            aria-label="Toggle wishlist"
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>

          {onQuickView && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
              className="p-2 rounded-full bg-canvas/90 text-heritage-brown hover:bg-canvas hover:text-gold-deep transition-all duration-200 shadow-md opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 hidden sm:flex"
              aria-label="Quick view"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Instant Add to Bag Hover Bar (Desktop) */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-heritage-deep/80 via-heritage-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1, product.sizes[0] || 'Free Size');
            }}
            className="w-full bg-canvas text-heritage-brown py-2.5 text-xs uppercase tracking-regal font-semibold hover:bg-gold-antique hover:text-canvas transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Quick Add to Bag</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-4 pb-2 space-y-1.5 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[11px] uppercase tracking-regal text-gold-deep font-medium">
            {product.category} · {product.fabric}
          </span>
          <h3 className="text-sm font-serif text-heritage-brown font-medium line-clamp-1 group-hover:text-gold-deep transition-colors">
            <Link href={`/product/${product.slug}`}>{product.title}</Link>
          </h3>
          <p className="text-[12px] text-heritage-secondary line-clamp-1 font-light">
            {product.craft}
          </p>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2.5 pt-1">
          <span className="text-base font-serif font-semibold text-heritage-brown">
            ₹{product.price.toLocaleString()}
          </span>
          {product.regularPrice > product.price && (
            <span className="text-xs font-sans text-heritage-tertiary line-through">
              ₹{product.regularPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

