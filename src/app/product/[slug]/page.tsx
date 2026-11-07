'use client';

import React, { useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { ProductCard } from '@/components/product/ProductCard';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Free Size');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'craft' | 'care'>('details');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize);
    router.push('/checkout');
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6) {
      setPincodeStatus('Available: Express insured delivery in 3–5 business days.');
    } else {
      setPincodeStatus('Please enter a valid 6-digit Indian PIN code.');
    }
  };

  return (
    <div className="bg-canvas min-h-screen py-10 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="text-xs uppercase tracking-regal text-heritage-tertiary mb-8 font-sans">
          <Link href="/" className="hover:text-heritage-brown">
            Home
          </Link>{' '}
          /
          <Link
            href={product.category === 'Sarees' ? '/collection/sarees' : '/collection/suits'}
            className="hover:text-heritage-brown mx-1"
          >
            {product.category}
          </Link>{' '}
          / <span className="text-gold-deep font-semibold">{product.title}</span>
        </nav>

        {/* Main Grid: Gallery Left, Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary High-Resolution Image Frame */}
            <div className="relative aspect-[3/4] w-full bg-canvas-subtle overflow-hidden border border-heritage-border shadow-luxury">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                {product.isNew && (
                  <span className="bg-heritage-deep/90 text-white text-[10px] uppercase tracking-regal px-3 py-1 font-semibold backdrop-blur-sm">
                    New Arrival
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-gold-antique text-canvas text-[10px] uppercase tracking-regal px-3 py-1 font-bold">
                    {product.discount}% Off
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={img}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-24 flex-shrink-0 border transition-all ${
                      activeImageIndex === idx
                        ? 'border-gold-antique ring-1 ring-gold-antique scale-95'
                        : 'border-heritage-border opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} view ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
                {product.category} · {product.subCategory}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-heritage-brown font-normal mt-1 leading-tight">
                {product.title}
              </h1>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 pb-4 border-b border-heritage-border">
              <span className="text-3xl font-serif font-bold text-heritage-brown">
                ₹{product.price.toLocaleString()}
              </span>
              {product.regularPrice > product.price && (
                <>
                  <span className="text-base text-heritage-tertiary line-through font-light">
                    ₹{product.regularPrice.toLocaleString()}
                  </span>
                  <span className="bg-gold-antique/15 text-gold-deep text-xs font-semibold px-2 py-0.5 uppercase tracking-editorial">
                    Save ₹{(product.regularPrice - product.price).toLocaleString()} ({product.discount}%)
                  </span>
                </>
              )}
              <span className="text-xs text-heritage-tertiary block sm:inline ml-auto">
                (Inclusive of all taxes)
              </span>
            </div>

            {/* Short Description */}
            <p className="text-sm text-heritage-secondary font-light leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Summary */}
            <div className="grid grid-cols-2 gap-4 py-3 bg-canvas-subtle p-4 border border-heritage-border/60 text-xs">
              <div>
                <span className="text-heritage-tertiary uppercase tracking-editorial block">Fabric</span>
                <span className="font-semibold text-heritage-brown font-serif">{product.fabric}</span>
              </div>
              <div>
                <span className="text-heritage-tertiary uppercase tracking-editorial block">Craft</span>
                <span className="font-semibold text-heritage-brown font-serif">{product.craft}</span>
              </div>
              <div>
                <span className="text-heritage-tertiary uppercase tracking-editorial block">Color</span>
                <span className="font-semibold text-heritage-brown font-serif">{product.color}</span>
              </div>
              <div>
                <span className="text-heritage-tertiary uppercase tracking-editorial block">Occasion</span>
                <span className="font-semibold text-heritage-brown font-serif">{product.occasion}</span>
              </div>
            </div>

            {/* Size Selector */}
            {product.sizes.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs uppercase tracking-regal text-heritage-brown font-semibold">
                    Size / Silhouette Fit
                  </label>
                  <a
                    href="https://wa.me/917827533877"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold-deep hover:underline"
                  >
                    Need Sizing Guidance?
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-4 py-2 text-xs font-sans border transition-all ${
                        selectedSize === sz
                          ? 'bg-heritage-brown text-canvas border-heritage-brown font-semibold shadow-sm'
                          : 'bg-canvas text-heritage-brown border-heritage-border hover:border-gold-antique'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase tracking-regal text-heritage-brown font-semibold">
                Quantity:
              </span>
              <div className="flex items-center border border-heritage-border">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-xs text-heritage-brown hover:bg-canvas-subtle"
                >
                  -
                </button>
                <span className="px-3 text-xs font-semibold text-heritage-brown">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-xs text-heritage-brown hover:bg-canvas-subtle"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => addToCart(product, quantity, selectedSize)}
                  className="flex-1 bg-heritage-brown text-canvas py-4 px-6 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors flex items-center justify-center gap-2 shadow-luxury"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Shopping Bag</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 border transition-colors ${
                    isFavorited
                      ? 'border-red-600 bg-red-50 text-red-600'
                      : 'border-heritage-border hover:border-heritage-brown text-heritage-brown'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full bg-gold-antique text-canvas py-4 px-6 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors shadow-luxury"
              >
                Buy Now with Instant Checkout
              </button>
            </div>

            {/* Delivery Pincode Checker */}
            <div className="p-4 bg-canvas-subtle border border-heritage-border space-y-2">
              <span className="text-xs uppercase tracking-editorial text-heritage-brown font-semibold block">
                Estimated Delivery Check
              </span>
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit PIN Code"
                  className="w-full px-3 py-2 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique font-sans"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-heritage-brown text-canvas text-xs uppercase tracking-editorial font-medium flex-shrink-0"
                >
                  Check
                </button>
              </form>
              {pincodeStatus && (
                <p className="text-xs text-emerald-800 font-medium pt-1">{pincodeStatus}</p>
              )}
            </div>

            {/* Trust Assurances */}
            <div className="pt-4 border-t border-heritage-border/60 space-y-2 text-xs text-heritage-secondary">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-deep" />
                <span>100% Genuine Handloom & Studio Tailoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gold-deep" />
                <span>Complimentary Shipping across India on orders above ₹999</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-gold-deep" />
                <span>Easy 7-day exchange support for size and drape fitting</span>
              </div>
            </div>

            {/* Tabbed Info */}
            <div className="pt-6 border-t border-heritage-border">
              <div className="flex border-b border-heritage-border gap-6">
                {(['details', 'craft', 'care'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`pb-2 text-xs uppercase tracking-regal font-sans transition-all relative ${
                      activeTab === t
                        ? 'text-gold-deep font-semibold'
                        : 'text-heritage-tertiary hover:text-heritage-brown'
                    }`}
                  >
                    {t === 'details' && 'Garment Details'}
                    {t === 'craft' && 'Artisan Weave'}
                    {t === 'care' && 'Wash & Care'}
                    {activeTab === t && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-antique" />
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-4 text-xs sm:text-sm text-heritage-secondary leading-relaxed font-light">
                {activeTab === 'details' && (
                  <ul className="space-y-1.5 list-disc list-inside">
                    {product.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'craft' && (
                  <div className="space-y-2">
                    <p>
                      <strong>Artisanal Technique:</strong> {product.craft}
                    </p>
                    <p>
                      Handcrafted by generational master weavers in India. Minor variations in weave or
                      zari texture are an authentic hallmark of true handloom artistry.
                    </p>
                  </div>
                )}
                {activeTab === 'care' && (
                  <ul className="space-y-1.5 list-disc list-inside">
                    {product.care.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-heritage-border">
            <div className="text-center mb-12 space-y-2">
              <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
                Harmonious Pairings
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-heritage-brown font-normal">
                You May Also Admire
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

