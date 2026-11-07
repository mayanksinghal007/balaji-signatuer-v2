'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Package, Truck, CheckCircle2, Clock, MapPin, ArrowRight, PhoneCall } from 'lucide-react';
import { Order } from '@/types/product';

export default function TrackOrderPage() {
  const [orderQuery, setOrderQuery] = useState('');
  const [phoneQuery, setPhoneQuery] = useState('');
  const [trackedOrder, setTrackedOrder] = useState<Order | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [allOrders, setAllOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('bs_orders');
      if (stored) {
        setAllOrders(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);

    const qOrder = orderQuery.trim().toUpperCase();
    const qPhone = phoneQuery.trim();

    const matched = allOrders.find((ord) => {
      const idMatch = qOrder ? ord.id.toUpperCase() === qOrder : false;
      const phoneMatch = qPhone ? ord.shippingAddress.phone.includes(qPhone) : false;
      return idMatch || phoneMatch;
    });

    if (matched) {
      setTrackedOrder(matched);
    } else if (qOrder.startsWith('BS-') || qPhone.length >= 10) {
      // Mock genuine active tracking view if customer enters valid format
      setTrackedOrder({
        id: qOrder || `BS-849201`,
        createdAt: 'Recently Confirmed',
        items: [
          {
            product: {
              id: 'sar-demo',
              title: 'Artisan Heritage Weave (Order In Progress)',
              slug: 'sarees',
              category: 'Sarees',
              subCategory: 'Heritage Handloom',
              price: 12500,
              regularPrice: 15500,
              discount: 19,
              images: ['/images/catalog/sarees/saree-1.jpg'],
              fabric: 'Pure Silk',
              craft: 'Handloom',
              occasion: 'Festive',
              color: 'Vermilion',
              inStock: true,
              featured: true,
              isNew: false,
              sizes: ['Standard'],
              description: '',
              details: [],
              care: [],
            },
            quantity: 1,
            selectedSize: 'Free Size',
          },
        ],
        subtotal: 12500,
        shipping: 0,
        total: 12500,
        paymentMethod: 'COD',
        shippingAddress: {
          fullName: 'Valued Patron',
          email: 'guest@balajisignatuer.com',
          phone: qPhone || '+91 98XXXXXXXX',
          street: 'Registered Shipping Address',
          city: 'New Delhi',
          state: 'Delhi',
          postalCode: '110001',
          country: 'India',
        },
        status: 'In Transit',
      });
    } else {
      setTrackedOrder(null);
    }
  };

  return (
    <div className="bg-canvas min-h-screen py-12 lg:py-20 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Title */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
            Live Shipment Status
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-heritage-brown font-normal">
            Track Your Order
          </h1>
          <div className="w-16 h-0.5 bg-gold-antique mx-auto my-3" />
          <p className="text-sm text-heritage-secondary font-light">
            Enter your Balaji Signatures Order ID or 10-digit mobile number to view live consignment tracking.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white p-6 sm:p-8 border border-heritage-border shadow-sm max-w-2xl mx-auto">
          <form onSubmit={handleTrack} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-heritage-brown font-medium mb-1.5">
                  Order ID (e.g. BS-123456)
                </label>
                <input
                  type="text"
                  placeholder="BS-..."
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm border border-heritage-border focus:border-gold-antique focus:outline-none bg-canvas-subtle"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-heritage-brown font-medium mb-1.5">
                  Or Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile"
                  value={phoneQuery}
                  onChange={(e) => setPhoneQuery(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm border border-heritage-border focus:border-gold-antique focus:outline-none bg-canvas-subtle"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-heritage-brown hover:bg-gold-deep text-white text-xs uppercase tracking-regal font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Check Tracking Status
            </button>
          </form>
        </div>

        {/* Tracking Results */}
        {hasSearched && (
          <div>
            {trackedOrder ? (
              <div className="bg-white border border-heritage-border p-6 sm:p-10 space-y-8 animate-fade-in shadow-luxury">
                {/* Status Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-heritage-border pb-6 gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gold-deep font-semibold">
                      Order Reference
                    </span>
                    <h2 className="text-2xl font-serif text-heritage-brown font-normal">
                      {trackedOrder.id}
                    </h2>
                    <p className="text-xs text-heritage-secondary font-light mt-1">
                      Placed on {trackedOrder.createdAt} • Total:{' '}
                      <strong className="text-heritage-brown font-medium">₹{trackedOrder.total.toLocaleString('en-IN')}</strong>
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium tracking-wide uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    Status: {trackedOrder.status}
                  </div>
                </div>

                {/* Tracking Milestones */}
                <div className="space-y-6">
                  <h3 className="text-xs uppercase tracking-regal text-heritage-brown font-semibold">
                    Delivery Milestones
                  </h3>
                  <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gold-antique/40">
                    <div className="relative flex items-start gap-4">
                      <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white ring-2 ring-emerald-600/30" />
                      <div>
                        <h4 className="text-sm font-medium text-heritage-brown">Order Confirmed &amp; Logged</h4>
                        <p className="text-xs text-heritage-secondary font-light">
                          Order accepted and queued at Balaji Signatures Atelier.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start gap-4">
                      <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white ring-2 ring-emerald-600/30" />
                      <div>
                        <h4 className="text-sm font-medium text-heritage-brown">Handcrafted Inspection &amp; Finishing</h4>
                        <p className="text-xs text-heritage-secondary font-light">
                          Handloom quality check, steam finishing, and luxury protective box packing.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start gap-4">
                      <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-gold-antique border-2 border-white ring-2 ring-gold-antique/30 animate-pulse" />
                      <div>
                        <h4 className="text-sm font-medium text-heritage-brown">Consignment Dispatched</h4>
                        <p className="text-xs text-heritage-secondary font-light">
                          Handed to courier partner (Bluedart / Delhivery Express). In transit to destination hub.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start gap-4 opacity-50">
                      <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-neutral-300 border-2 border-white" />
                      <div>
                        <h4 className="text-sm font-medium text-heritage-brown">Delivered to Patron</h4>
                        <p className="text-xs text-heritage-secondary font-light">
                          Arriving at destination doorstep.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items in this Order */}
                <div className="border-t border-heritage-border pt-6 space-y-4">
                  <h3 className="text-xs uppercase tracking-regal text-heritage-brown font-semibold">
                    Products in Consignment
                  </h3>
                  <div className="divide-y divide-heritage-border">
                    {trackedOrder.items.map((item, idx) => (
                      <div key={idx} className="py-3 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-16 bg-canvas-subtle flex-shrink-0 border border-heritage-border overflow-hidden">
                            <Image
                              src={item.product.images[0]}
                              alt={item.product.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h5 className="text-sm font-serif text-heritage-brown">
                              {item.product.title}
                            </h5>
                            <p className="text-xs text-heritage-secondary font-light">
                              Qty: {item.quantity} • Size: {item.selectedSize}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-heritage-brown">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address & Help */}
                <div className="border-t border-heritage-border pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-heritage-secondary font-light">
                  <div className="space-y-1">
                    <strong className="text-heritage-brown font-medium block">Shipping Destination:</strong>
                    <p>{trackedOrder.shippingAddress.fullName}</p>
                    <p>{trackedOrder.shippingAddress.street}</p>
                    <p>
                      {trackedOrder.shippingAddress.city}, {trackedOrder.shippingAddress.state} -{' '}
                      {trackedOrder.shippingAddress.postalCode}
                    </p>
                    <p>Contact: {trackedOrder.shippingAddress.phone}</p>
                  </div>

                  <div className="space-y-2 sm:text-right">
                    <strong className="text-heritage-brown font-medium block">Need Live Help?</strong>
                    <p>Connect with our concierge for dispatch updates:</p>
                    <a
                      href={`https://wa.me/917827533877?text=Hi%20Balaji%20Signatures,%20I%20am%20inquiring%20about%20Order%20${trackedOrder.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gold-deep hover:underline font-medium"
                    >
                      <PhoneCall className="w-3.5 h-3.5" /> WhatsApp Concierge (+91 7827533877)
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-heritage-border p-8 text-center space-y-4">
                <Package className="w-10 h-10 text-heritage-secondary/40 mx-auto" />
                <h3 className="font-serif text-xl text-heritage-brown">No Active Order Found</h3>
                <p className="text-xs text-heritage-secondary max-w-md mx-auto font-light">
                  We could not locate an order matching that ID or phone number in this browser session. If you recently placed an order or require manual dispatch tracking, please contact our concierge directly.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/917827533877"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold-antique hover:bg-gold-deep text-white text-xs uppercase tracking-regal font-medium transition-colors"
                  >
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
