'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/types/product';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  index = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart, openCart } = useCart();
  const shouldReduceMotion = useReducedMotion();

  const isFavorited = isInWishlist(product.id);
  const primaryImage = product.images[0] || '/images/hero/hero-editorial-model.jpg';
  const secondaryImage = product.images[1] || primaryImage;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard';
    addToCart(product, 1, defaultSize);
    openCart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.65,
        delay: (index % 4) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col h-full bg-white border border-heritage-border/70 hover:border-gold-antique/60 transition-all duration-300 font-sans shadow-sm hover:shadow-luxury"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Gallery Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-canvas-subtle">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          {/* Primary Image */}
          <Image
            src={primaryImage}
            alt={product.title}
            fill
            className={`object-cover object-top transition-all duration-700 ease-out ${
              isHovered && secondaryImage !== primaryImage
                ? 'opacity-0 scale-105'
                : 'opacity-100 scale-100'
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Secondary Image Cross-Fade */}
          {secondaryImage !== primaryImage && (
            <Image
              src={secondaryImage}
              alt={`${product.title} alternative view`}
              fill
              className={`object-cover object-top transition-all duration-700 ease-out ${
                isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          )}
        </Link>

        {/* Badges: Discount & New Arrival */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.discount > 0 && (
            <span className="px-2.5 py-0.5 bg-heritage-deep text-gold-light text-[10px] uppercase tracking-eyebrow font-medium border border-gold-antique/30">
              {product.discount}% OFF
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-0.5 bg-gold-antique text-white text-[10px] uppercase tracking-eyebrow font-medium">
              New Drop
            </span>
          )}
        </div>

        {/* Wishlist Button with Pop Animation */}
        <motion.button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.15 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.85 }}
          className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm ${
            isFavorited
              ? 'bg-rose-50 text-rose-600 border border-rose-200'
              : 'bg-white/80 backdrop-blur-sm text-heritage-brown hover:text-gold-antique hover:bg-white'
          }`}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-600' : ''}`} />
        </motion.button>

        {/* Quick View & Quick Add Action Overlay on Hover */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {onQuickView && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              className="flex-1 py-2 bg-white/95 backdrop-blur-sm text-heritage-brown hover:bg-heritage-brown hover:text-white text-[11px] uppercase tracking-eyebrow font-medium transition-colors border border-heritage-border flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Eye className="w-3.5 h-3.5" />
              Quick View
            </button>
          )}

          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex-1 py-2 bg-heritage-deep hover:bg-gold-deep text-white text-[11px] uppercase tracking-eyebrow font-medium transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            + Bag
          </button>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-2">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-eyebrow text-gold-deep font-medium">
            <span>{product.subCategory}</span>
            <span className="text-heritage-secondary/70 font-light">{product.category}</span>
          </div>

          <h3 className="font-serif text-base sm:text-lg text-heritage-brown font-normal line-clamp-1 group-hover:text-gold-deep transition-colors">
            <Link href={`/product/${product.slug}`}>{product.title}</Link>
          </h3>

          <p className="text-xs text-heritage-secondary/80 font-light line-clamp-1">
            {product.fabric}
          </p>
        </div>

        {/* Pricing Table: Real Strike-through MRP + Sale Price */}
        <div className="pt-2 border-t border-heritage-border/60 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-sm sm:text-base font-semibold text-heritage-brown">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.regularPrice > product.price && (
              <span className="text-xs text-heritage-secondary/60 line-through font-light">
                ₹{product.regularPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <span className="text-[10px] text-emerald-700 font-medium tracking-wide">
            In Stock
          </span>
        </div>
      </div>
    </motion.div>
  );
};
