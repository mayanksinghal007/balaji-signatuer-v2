'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingFee,
    total,
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeeded = freeShippingThreshold - subtotal;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-heritage-deep/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-canvas shadow-2xl flex flex-col border-l border-heritage-border">
          {/* Header */}
          <div className="p-6 border-b border-heritage-border flex items-center justify-between bg-canvas-subtle">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-heritage-brown" />
              <h2 className="text-base font-serif uppercase tracking-regal text-heritage-brown font-bold">
                Shopping Bag ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-heritage-brown/60 hover:text-heritage-brown transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-6 py-4 bg-canvas border-b border-heritage-border/60">
            <div className="text-xs font-sans text-heritage-brown mb-2 flex justify-between">
              {amountNeeded > 0 ? (
                <span>
                  Add <strong className="text-gold-deep">₹{amountNeeded.toLocaleString()}</strong> more for{' '}
                  <strong className="text-gold-deep">Complimentary Shipping</strong>
                </span>
              ) : (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> You unlocked Complimentary Express Shipping!
                </span>
              )}
              <span className="font-semibold text-heritage-secondary">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-heritage-border/40 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold-antique transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-canvas-subtle flex items-center justify-center text-heritage-tertiary">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-base font-serif text-heritage-brown">Your bag is currently empty</p>
                <p className="text-xs text-heritage-secondary max-w-xs mx-auto font-sans">
                  Explore our curated collection of handcrafted Sarees and tailored Suits.
                </p>
                <div className="pt-4">
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="inline-block bg-heritage-brown text-canvas px-6 py-2.5 text-xs uppercase tracking-regal font-sans hover:bg-gold-deep transition-colors"
                  >
                    Explore Catalog
                  </Link>
                </div>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-4 border-b border-heritage-border/40 pb-5"
                >
                  <div className="relative w-20 h-24 bg-canvas-subtle flex-shrink-0 overflow-hidden border border-heritage-border/60">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={closeCart}
                          className="text-sm font-serif text-heritage-brown hover:text-gold-deep line-clamp-1 font-medium"
                        >
                          {item.product.title}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                          className="text-heritage-tertiary hover:text-red-700 p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-heritage-secondary font-sans mt-0.5">
                        {item.product.category} · {item.selectedSize}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-heritage-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)
                          }
                          className="px-2 py-0.5 text-xs text-heritage-brown hover:bg-canvas-subtle"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-sans text-heritage-brown font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)
                          }
                          className="px-2 py-0.5 text-xs text-heritage-brown hover:bg-canvas-subtle"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-serif font-semibold text-heritage-brown">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-heritage-border bg-canvas-subtle space-y-3 font-sans">
              <div className="flex justify-between text-xs text-heritage-secondary">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-heritage-secondary">
                <span>Shipping</span>
                <span>
                  {shippingFee === 0 ? (
                    <strong className="text-emerald-700 uppercase font-semibold">FREE</strong>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-serif font-bold text-heritage-brown pt-2 border-t border-heritage-border/60">
                <span>Estimated Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <div className="pt-2 space-y-2">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full flex items-center justify-center gap-2 bg-heritage-brown text-canvas py-3 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors shadow-luxury"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="w-full block text-center py-2 text-xs text-heritage-secondary hover:text-heritage-brown uppercase tracking-editorial transition-colors"
                >
                  View Full Cart & Details
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

