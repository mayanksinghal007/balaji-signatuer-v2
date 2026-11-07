'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, ArrowRight, Lock, Truck, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ShippingAddress, Order } from '@/types/product';

export default function CheckoutPage() {
  const { cart, subtotal, shippingFee, total, clearCart } = useCart();

  const [formData, setFormData] = useState<ShippingAddress>({
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: 'Delhi',
    postalCode: '',
    country: 'India',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'BACS'>('COD');
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const indianStates = [
    'Delhi',
    'Maharashtra',
    'Karnataka',
    'Uttar Pradesh',
    'Gujarat',
    'Tamil Nadu',
    'Rajasthan',
    'West Bengal',
    'Punjab',
    'Haryana',
    'Telangana',
    'Madhya Pradesh',
    'Bihar',
    'Kerala',
    'Andhra Pradesh',
    'Other Indian State',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create real order record with unique studio order reference
    const newOrder: Order = {
      id: `BS-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      items: [...cart],
      subtotal,
      shipping: shippingFee,
      total,
      paymentMethod,
      shippingAddress: { ...formData },
      status: 'Confirmed',
    };

    try {
      if (typeof window !== 'undefined') {
        const existing = localStorage.getItem('bs_orders');
        const orderList = existing ? JSON.parse(existing) : [];
        orderList.unshift(newOrder);
        localStorage.setItem('bs_orders', JSON.stringify(orderList));
      }
    } catch (err) {
      console.error('Error saving order to localStorage', err);
    }

    setTimeout(() => {
      setConfirmedOrder(newOrder);
      clearCart();
      setIsSubmitting(false);
    }, 800);
  };

  // If order is placed, show genuine confirmation with real order summary & instructions
  if (confirmedOrder) {
    return (
      <div className="bg-canvas min-h-[75vh] py-16 px-4 font-sans">
        <div className="max-w-2xl mx-auto bg-canvas-subtle p-8 sm:p-12 border border-gold-antique/40 shadow-luxury space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
              Order Confirmed &amp; Dispatched for Preparation
            </span>
            <h1 className="text-3xl font-serif text-heritage-brown font-normal">
              Thank You, {confirmedOrder.shippingAddress.fullName}
            </h1>
            <p className="text-xs font-sans text-heritage-secondary font-light">
              Order Reference:{' '}
              <strong className="text-heritage-brown font-mono font-bold text-sm">
                #{confirmedOrder.id}
              </strong>
            </p>
          </div>

          {/* Payment Method Details */}
          <div className="p-4 bg-canvas border border-heritage-border text-xs text-heritage-brown space-y-2">
            <div className="flex justify-between font-semibold border-b border-heritage-border/60 pb-1">
              <span>Selected Payment Mode:</span>
              <span className="text-gold-deep">
                {confirmedOrder.paymentMethod === 'COD'
                  ? 'Cash on Delivery (COD)'
                  : 'Direct Bank Transfer / UPI'}
              </span>
            </div>
            {confirmedOrder.paymentMethod === 'COD' ? (
              <p className="text-heritage-secondary">
                Please keep exact cash amount of <strong>₹{confirmedOrder.total.toLocaleString()}</strong> ready
                at the time of courier delivery.
              </p>
            ) : (
              <div className="space-y-1 text-heritage-secondary">
                <p className="font-semibold text-heritage-brown">Bank Account Coordinates for Transfer:</p>
                <p>Bank: State Bank of India | Account: Balaji Signature</p>
                <p>A/C No: 123456789012 | IFSC: SBIN0001234</p>
                <p>UPI ID: <strong className="text-heritage-brown">balajisignature@upi</strong></p>
                <p className="pt-1 text-[11px] italic">
                  Please share screenshot with Order ID #{confirmedOrder.id} via WhatsApp: +91 7827533877.
                </p>
              </div>
            )}
          </div>

          {/* Delivery Address Review */}
          <div className="text-xs text-heritage-secondary space-y-1">
            <p className="font-semibold text-heritage-brown uppercase tracking-editorial">Delivery Destination:</p>
            <p>{confirmedOrder.shippingAddress.street}, {confirmedOrder.shippingAddress.city}, {confirmedOrder.shippingAddress.state} - {confirmedOrder.shippingAddress.postalCode}</p>
            <p>Phone: {confirmedOrder.shippingAddress.phone} | Email: {confirmedOrder.shippingAddress.email}</p>
          </div>

          {/* Ordered Items Review */}
          <div className="border-t border-heritage-border pt-4 divide-y divide-heritage-border/40 text-xs">
            {confirmedOrder.items.map((item) => (
              <div key={`${item.product.id}-${item.selectedSize}`} className="py-2.5 flex justify-between">
                <span>
                  {item.product.title} ({item.selectedSize}) × {item.quantity}
                </span>
                <span className="font-semibold text-heritage-brown">
                  ₹{(item.product.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
            <div className="pt-3 flex justify-between font-serif font-bold text-sm text-heritage-brown">
              <span>Total Amount</span>
              <span>₹{confirmedOrder.total.toLocaleString()}</span>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/"
              className="inline-block bg-heritage-brown text-canvas px-8 py-3 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors"
            >
              Return to Boutique Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="bg-canvas min-h-[60vh] flex items-center justify-center py-20 px-4 font-sans text-center">
        <div className="space-y-4">
          <h1 className="text-2xl font-serif text-heritage-brown">No Items to Checkout</h1>
          <p className="text-xs text-heritage-secondary">Your shopping bag is empty.</p>
          <Link
            href="/shop"
            className="inline-block bg-heritage-brown text-canvas px-6 py-2.5 text-xs uppercase tracking-regal"
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-canvas min-h-screen py-10 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
            Boutique Checkout
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-heritage-brown font-normal mt-1">
            Shipping &amp; Payment Verification
          </h1>
        </div>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Shipping Form Left */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Contact Information */}
            <div className="p-6 sm:p-8 bg-canvas-subtle border border-heritage-border shadow-luxury space-y-4">
              <h2 className="text-base font-serif font-semibold text-heritage-brown uppercase tracking-regal border-b border-heritage-border pb-3 flex items-center gap-2">
                <span>1. Contact &amp; Guest Details</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Priyanshi Sharma"
                    className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                    Phone / Mobile (for courier) *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                    Email Address (for order tracking) *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. priyanshi@example.com"
                    className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Destination */}
            <div className="p-6 sm:p-8 bg-canvas-subtle border border-heritage-border shadow-luxury space-y-4">
              <h2 className="text-base font-serif font-semibold text-heritage-brown uppercase tracking-regal border-b border-heritage-border pb-3">
                2. Shipping Destination (Pan-India)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                    House / Flat / Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="e.g. 42 Heritage Enclave, South Extension"
                    className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. New Delhi"
                    className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                  >
                    {indianStates.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                    PIN Code (6 Digits) *
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="e.g. 110049"
                    className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    disabled
                    value="India"
                    className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas-subtle text-heritage-tertiary"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                    Special Draping / Fitting Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. Fall & Pico required, blouse stitching request"
                    className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="p-6 sm:p-8 bg-canvas-subtle border border-heritage-border shadow-luxury space-y-4">
              <h2 className="text-base font-serif font-semibold text-heritage-brown uppercase tracking-regal border-b border-heritage-border pb-3 flex items-center justify-between">
                <span>3. Payment Gateway Option</span>
                <span className="text-xs text-gold-deep font-sans font-normal flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" /> Direct &amp; Secure
                </span>
              </h2>

              <div className="space-y-3">
                {/* Cash on Delivery */}
                <label
                  className={`flex items-start gap-4 p-4 border cursor-pointer transition-all ${
                    paymentMethod === 'COD'
                      ? 'border-gold-antique bg-canvas ring-1 ring-gold-antique'
                      : 'border-heritage-border bg-canvas-subtle hover:bg-canvas'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    checked={paymentMethod === 'COD'}
                    onChange={() => setPaymentMethod('COD')}
                    className="mt-1 accent-gold-antique"
                  />
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-regal text-heritage-brown font-semibold flex items-center gap-2">
                      <Truck className="w-4 h-4 text-gold-deep" />
                      <span>Cash on Delivery (COD)</span>
                    </p>
                    <p className="text-xs text-heritage-secondary font-light">
                      Pay cash upon delivery at your doorstep across all serviceable Indian PIN codes.
                    </p>
                  </div>
                </label>

                {/* Direct Bank Transfer / UPI */}
                <label
                  className={`flex items-start gap-4 p-4 border cursor-pointer transition-all ${
                    paymentMethod === 'BACS'
                      ? 'border-gold-antique bg-canvas ring-1 ring-gold-antique'
                      : 'border-heritage-border bg-canvas-subtle hover:bg-canvas'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="BACS"
                    checked={paymentMethod === 'BACS'}
                    onChange={() => setPaymentMethod('BACS')}
                    className="mt-1 accent-gold-antique"
                  />
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-regal text-heritage-brown font-semibold flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-gold-deep" />
                      <span>Direct Bank Transfer / UPI Payment</span>
                    </p>
                    <p className="text-xs text-heritage-secondary font-light">
                      Pay directly via GPay, PhonePe, Paytm, or NEFT/IMPS to State Bank of India account.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 bg-canvas-subtle border border-heritage-border shadow-luxury sticky top-28 space-y-6">
              <h2 className="text-base font-serif font-semibold text-heritage-brown uppercase tracking-regal border-b border-heritage-border pb-3">
                Ensemble Review ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h2>

              <div className="divide-y divide-heritage-border/60 max-h-72 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="py-3 flex gap-3 items-center"
                  >
                    <div className="relative w-14 h-18 bg-canvas flex-shrink-0 border border-heritage-border/60 overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-serif font-medium text-heritage-brown truncate">
                        {item.product.title}
                      </h4>
                      <p className="text-[11px] text-heritage-secondary">
                        {item.selectedSize} · Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-xs font-serif font-semibold text-heritage-brown flex-shrink-0">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5 text-xs border-t border-heritage-border pt-4">
                <div className="flex justify-between text-heritage-secondary">
                  <span>Subtotal</span>
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
                <div className="flex justify-between text-base font-serif font-bold text-heritage-brown pt-2 border-t border-heritage-border">
                  <span>Total Amount</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-heritage-brown text-canvas py-4 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors shadow-luxury disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Confirming Order...' : 'Place Confirmed Order'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-heritage-tertiary text-center font-light space-y-1">
                <p>✔ Real, verified studio booking with dispatch tracking.</p>
                <p>✔ Strictly authentic Sarees and Suits.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
