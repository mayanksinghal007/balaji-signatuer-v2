'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, Package, Heart, MapPin, Phone, Mail, ArrowRight, ShieldCheck, LogOut } from 'lucide-react';
import { Order } from '@/types/product';
import { useWishlist } from '@/context/WishlistContext';

export default function AccountPage() {
  const { wishlist } = useWishlist();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Patron of Balaji Signatures',
    email: 'patron@balajisignatuer.com',
    phone: '+91 7827533877',
    city: 'Delhi NCR',
  });

  useEffect(() => {
    try {
      const storedOrders = localStorage.getItem('bs_orders');
      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      }
      const storedProfile = localStorage.getItem('bs_profile');
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingProfile(false);
    try {
      localStorage.setItem('bs_profile', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-canvas min-h-screen py-12 lg:py-20 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-heritage-border gap-4">
          <div>
            <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
              Client Atelier Account
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-heritage-brown font-normal mt-1">
              Welcome, {profile.name}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/track-order"
              className="px-4 py-2 text-xs uppercase tracking-wider border border-heritage-border hover:border-gold-antique text-heritage-brown transition-colors"
            >
              Track Order
            </Link>
            <Link
              href="/shop"
              className="px-4 py-2 text-xs uppercase tracking-wider bg-heritage-brown hover:bg-gold-deep text-white transition-colors"
            >
              Explore Catalog
            </Link>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Profile & Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 border border-heritage-border space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold-antique/10 border border-gold-antique/30 flex items-center justify-center text-gold-deep">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-heritage-brown font-medium">{profile.name}</h3>
                  <p className="text-xs text-heritage-secondary font-light">Patron Privilege Member</p>
                </div>
              </div>

              {isEditingProfile ? (
                <form onSubmit={handleSaveProfile} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs uppercase text-heritage-brown font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-heritage-border focus:border-gold-antique outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-heritage-brown font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-heritage-border focus:border-gold-antique outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-heritage-brown font-medium mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-heritage-border focus:border-gold-antique outline-none"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-heritage-brown text-white text-xs uppercase tracking-wider"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingProfile(false)}
                      className="px-4 py-2 border border-heritage-border text-xs uppercase tracking-wider"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-3 text-xs text-heritage-secondary font-light pt-2 divide-y divide-heritage-border">
                  <div className="flex items-center gap-2.5 pt-2">
                    <Mail className="w-4 h-4 text-gold-antique" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5 pt-2">
                    <Phone className="w-4 h-4 text-gold-antique" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5 pt-2">
                    <MapPin className="w-4 h-4 text-gold-antique" />
                    <span>{profile.city}</span>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsEditingProfile(true)}
                      className="text-gold-deep hover:underline font-medium uppercase tracking-wider text-[11px]"
                    >
                      Edit Profile Details
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist Shortcut */}
            <div className="bg-canvas-subtle p-6 border border-heritage-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-heritage-brown font-medium flex items-center gap-2">
                  <Heart className="w-4 h-4 text-gold-antique" />
                  Your Wishlist
                </span>
                <span className="text-xs font-semibold text-gold-deep">{wishlist.length} Saved</span>
              </div>
              <p className="text-xs text-heritage-secondary font-light">
                Curated Sarees and Suits you’ve bookmarked for upcoming celebrations.
              </p>
              <Link
                href="/wishlist"
                className="inline-flex items-center gap-1.5 text-xs text-heritage-brown font-medium hover:text-gold-antique"
              >
                View Wishlist <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Order History */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white p-6 sm:p-8 border border-heritage-border space-y-6">
              <div className="flex items-center justify-between border-b border-heritage-border pb-4">
                <h2 className="text-xl font-serif text-heritage-brown font-normal flex items-center gap-2.5">
                  <Package className="w-5 h-5 text-gold-antique" />
                  Order History &amp; Consignments
                </h2>
                <span className="text-xs text-heritage-secondary font-light">
                  {orders.length} {orders.length === 1 ? 'Order' : 'Orders'}
                </span>
              </div>

              {orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map((ord) => (
                    <div
                      key={ord.id}
                      className="border border-heritage-border p-4 sm:p-6 bg-canvas-subtle/50 space-y-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-heritage-border pb-3">
                        <div>
                          <p className="text-xs font-mono font-bold text-heritage-brown">{ord.id}</p>
                          <p className="text-[11px] text-heritage-secondary font-light">Placed on {ord.createdAt}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wide">
                            {ord.status}
                          </span>
                          <span className="text-sm font-medium text-heritage-brown">
                            ₹{ord.total.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      <div className="divide-y divide-heritage-border">
                        {ord.items.map((item, idx) => (
                          <div key={idx} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-3">
                              <div className="relative w-12 h-14 bg-white border border-heritage-border overflow-hidden flex-shrink-0">
                                <Image
                                  src={item.product.images[0]}
                                  alt={item.product.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-serif text-heritage-brown text-sm">{item.product.title}</p>
                                <p className="text-heritage-secondary font-light">
                                  Qty: {item.quantity} • {item.selectedSize}
                                </p>
                              </div>
                            </div>
                            <span className="font-medium text-heritage-brown">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex justify-end">
                        <Link
                          href={`/track-order`}
                          className="text-xs text-gold-deep hover:underline font-medium uppercase tracking-wider"
                        >
                          View Consignment Progress →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 space-y-3">
                  <Package className="w-10 h-10 text-heritage-secondary/40 mx-auto" />
                  <h3 className="font-serif text-lg text-heritage-brown">No Orders Placed Yet</h3>
                  <p className="text-xs text-heritage-secondary font-light max-w-sm mx-auto">
                    Your luxury wardrobe is awaiting its first signature piece. Explore our handcrafted Sarees and tailored Suits.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/shop"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-heritage-brown hover:bg-gold-deep text-white text-xs uppercase tracking-regal font-medium transition-colors"
                    >
                      Shop Sarees &amp; Suits
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

