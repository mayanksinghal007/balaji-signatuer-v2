'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, shippingFee, total } = useCart();

  const freeShippingThreshold = 999;
  const amountNeeded = freeShippingThreshold - subtotal;

  if (cart.length === 0) {
    return (
      <div className="bg-canvas min-h-[70vh] flex items-center justify-center py-20 px-4 font-sans">
        <div className="text-center max-w-md mx-auto space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-canvas-subtle flex items-center justify-center text-heritage-tertiary">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-heritage-brown">Your Shopping Bag is Empty</h1>
          <p className="text-sm text-heritage-secondary font-light">
            You haven&apos;t added any handcrafted Sarees or tailored Suits yet.
          </p>
          <div className="pt-4">
            <Link
              href="/shop"
              className="inline-block bg-heritage-brown text-canvas px-8 py-3.5 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors shadow-luxury"
            >
              Explore Studio Catalog
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
            Boutique Cart
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-heritage-brown font-normal mt-1">
            Your Selected Ensemble ({cart.reduce((a, b) => a + b.quantity, 0)} Items)
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Cart Items Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Free shipping bar */}
            <div className="p-4 bg-canvas-subtle border border-heritage-border text-xs text-heritage-brown flex items-center justify-between">
              {amountNeeded > 0 ? (
                <span>
                  Add <strong className="text-gold-deep">₹{amountNeeded.toLocaleString()}</strong> more for{' '}
                  <strong className="text-gold-deep">Complimentary Express Shipping</strong>
                </span>
              ) : (
                <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> You unlocked Complimentary Pan-India Express Shipping!
                </span>
              )}
            </div>

            {/* Items Table / Cards */}
            <div className="divide-y divide-heritage-border border-y border-heritage-border">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="py-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <div className="relative w-20 h-28 bg-canvas-subtle flex-shrink-0 border border-heritage-border/60 overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] uppercase tracking-editorial text-gold-deep">
                        {item.product.category}
                      </span>
                      <h3 className="text-base font-serif text-heritage-brown font-medium">
                        <Link href={`/product/${item.product.slug}`} className="hover:text-gold-deep">
                          {item.product.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-heritage-secondary font-light">
                        Fit / Size: <strong className="text-heritage-brown font-normal">{item.selectedSize}</strong>
                      </p>
                      <p className="text-xs text-heritage-tertiary">
                        Fabric: {item.product.fabric}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-heritage-border bg-canvas">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)
                        }
                        className="px-3 py-1 text-xs text-heritage-brown hover:bg-canvas-subtle"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-semibold text-heritage-brown">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)
                        }
                        className="px-3 py-1 text-xs text-heritage-brown hover:bg-canvas-subtle"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-base font-serif font-bold text-heritage-brown">
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                      <p className="text-[11px] text-heritage-tertiary">
                        ₹{item.product.price.toLocaleString()} each
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                      className="p-1.5 text-heritage-tertiary hover:text-red-700 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-8 bg-canvas-subtle border border-heritage-border shadow-luxury space-y-6">
              <h2 className="text-lg font-serif font-semibold text-heritage-brown uppercase tracking-regal border-b border-heritage-border pb-3">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-heritage-secondary">
                  <span>Bag Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-heritage-secondary">
                  <span>Insured Express Shipping</span>
                  <span>
                    {shippingFee === 0 ? (
                      <strong className="text-emerald-700 font-semibold uppercase">FREE</strong>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-serif font-bold text-heritage-brown pt-3 border-t border-heritage-border">
                  <span>Grand Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/checkout"
                  className="w-full flex items-center justify-center gap-2 bg-heritage-brown text-canvas py-4 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors shadow-luxury"
                >
                  <span>Proceed to Secure Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-2 border-t border-heritage-border/60 text-[11px] text-heritage-secondary space-y-1.5 leading-relaxed font-light">
                <p>✔ Real Payment Gateways: Cash on Delivery & Direct UPI / Bank Transfer.</p>
                <p>✔ Pan-India Express Delivery with transit insurance.</p>
                <p>✔ Questions? Direct styling support on WhatsApp: +91 7827533877.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

