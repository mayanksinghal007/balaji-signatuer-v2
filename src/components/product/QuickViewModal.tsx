'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Check, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  isOpen?: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, isOpen }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product || isOpen === false) return null;

  const currentSize = selectedSize || product.sizes[0] || 'Free Size';
  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1, currentSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-heritage-deep/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-canvas shadow-2xl border border-heritage-border overflow-hidden my-8 font-sans">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-heritage-brown/60 hover:text-heritage-brown bg-canvas/80 backdrop-blur-sm rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Column */}
            <div className="p-6 bg-canvas-subtle flex flex-col gap-4 border-r border-heritage-border/60">
              <div className="relative aspect-[3/4] w-full bg-white overflow-hidden border border-heritage-border/60">
                <Image
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-16 h-20 flex-shrink-0 border transition-all ${
                        selectedImageIndex === idx
                          ? 'border-gold-antique ring-1 ring-gold-antique'
                          : 'border-heritage-border opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt="Thumbnail" fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
                    {product.category} · {product.fabric}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-heritage-brown font-semibold mt-1">
                    {product.title}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-serif font-bold text-heritage-brown">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.regularPrice > product.price && (
                    <>
                      <span className="text-sm font-sans text-heritage-tertiary line-through">
                        ₹{product.regularPrice.toLocaleString()}
                      </span>
                      <span className="bg-gold-antique/15 text-gold-deep text-xs font-semibold px-2 py-0.5 uppercase tracking-editorial">
                        Save {product.discount}%
                      </span>
                    </>
                  )}
                </div>

                <p className="text-sm text-heritage-secondary font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Craftsmanship Highlights */}
                <div className="pt-2 border-t border-heritage-border/60 space-y-2 text-xs text-heritage-secondary">
                  <p>
                    <strong className="text-heritage-brown font-medium">Artisan Craft:</strong>{' '}
                    {product.craft}
                  </p>
                  <p>
                    <strong className="text-heritage-brown font-medium">Recommended For:</strong>{' '}
                    {product.occasion}
                  </p>
                </div>

                {/* Size Selector */}
                {product.sizes.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs uppercase tracking-regal text-heritage-brown font-semibold">
                      Select Size / Saree Fit
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3 py-1.5 text-xs font-sans border transition-all ${
                            currentSize === sz
                              ? 'bg-heritage-brown text-canvas border-heritage-brown font-semibold'
                              : 'bg-canvas text-heritage-brown border-heritage-border hover:border-gold-antique'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-heritage-border/60">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 bg-heritage-brown text-canvas py-3 px-4 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors flex items-center justify-center gap-2 shadow-luxury"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Shopping Bag</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className={`p-3 border transition-colors ${
                      isFavorited
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-heritage-border hover:border-heritage-brown text-heritage-brown'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <Link
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="block text-center text-xs text-gold-deep hover:text-heritage-brown uppercase tracking-editorial transition-colors"
                >
                  View Full Product Details & Care Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

