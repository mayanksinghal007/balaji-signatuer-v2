'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Truck, RotateCcw, Instagram, Facebook } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-heritage-deep text-canvas/90 border-t border-gold-antique/20 font-sans">
      {/* Top Banner Feature Bar */}
      <div className="border-b border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <ShieldCheck className="w-6 h-6 text-gold-antique flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-eyebrow text-white font-medium">Artisanal Purity</p>
                <p className="text-[13px] text-white/60">Strictly Hand-inspected Sarees &amp; Handcrafted Suits</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <Truck className="w-6 h-6 text-gold-antique flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-eyebrow text-white font-medium">Pan-India Express Shipping</p>
                <p className="text-[13px] text-white/60">Complimentary delivery on all orders above ₹999</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <RotateCcw className="w-6 h-6 text-gold-antique flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-eyebrow text-white font-medium">7-Day Easy Exchange</p>
                <p className="text-[13px] text-white/60">Seamless sizing and drape exchange policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block" aria-label="Balaji Signatures Home">
              <Logo width={160} height={70} className="text-white hover:text-gold-light transition-colors" />
            </Link>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed font-light">
              Balaji Signatures is an Indian luxury women&apos;s ethnic fashion studio dedicated exclusively to the timeless art of the Saree and the architectural tailoring of the Suit.
            </p>
            <div className="pt-2 text-xs text-gold-antique tracking-eyebrow uppercase font-medium">
              Women&apos;s Ethnic Fashion — Sarees &amp; Suits Only
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-gold-antique hover:border-gold-antique transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-gold-antique hover:border-gold-antique transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Saree Guild Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-eyebrow text-gold-antique font-semibold">The Saree Guild</h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-light">
              <li>
                <Link href="/collection/sarees" className="hover:text-gold-light transition-colors">
                  All Sarees
                </Link>
              </li>
              <li>
                <Link href="/collection/sarees?fabric=Silk" className="hover:text-gold-light transition-colors">
                  Kanjivaram &amp; Silk
                </Link>
              </li>
              <li>
                <Link href="/collection/sarees?fabric=Organza" className="hover:text-gold-light transition-colors">
                  Organza &amp; Chiffon
                </Link>
              </li>
              <li>
                <Link href="/collection/sarees?fabric=Chanderi" className="hover:text-gold-light transition-colors">
                  Chanderi &amp; Georgette
                </Link>
              </li>
              <li>
                <Link href="/collection/sarees?fabric=Tussar" className="hover:text-gold-light transition-colors">
                  Handloom Tussar
                </Link>
              </li>
            </ul>
          </div>

          {/* Suits Atelier Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-eyebrow text-gold-antique font-semibold">The Suit Atelier</h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-light">
              <li>
                <Link href="/collection/suits" className="hover:text-gold-light transition-colors">
                  All Suits
                </Link>
              </li>
              <li>
                <Link href="/collection/suits?type=Anarkali" className="hover:text-gold-light transition-colors">
                  Flared Anarkalis
                </Link>
              </li>
              <li>
                <Link href="/collection/suits?type=Straight" className="hover:text-gold-light transition-colors">
                  Straight-Cut Pant Sets
                </Link>
              </li>
              <li>
                <Link href="/collection/suits?type=Sharara" className="hover:text-gold-light transition-colors">
                  Sharara &amp; Gharara Sets
                </Link>
              </li>
              <li>
                <Link href="/collection/suits?fabric=Velvet" className="hover:text-gold-light transition-colors">
                  Royal Micro-Velvet
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Concierge */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-eyebrow text-gold-antique font-semibold">Studio Concierge</h4>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-antique flex-shrink-0 mt-0.5" />
                <span>WhatsApp: +91 7827533877</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold-antique flex-shrink-0 mt-0.5" />
                <span>info@balajisignatuer.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-antique flex-shrink-0 mt-0.5" />
                <span>Delhi NCR, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Policy Row */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/track-order" className="hover:text-gold-light transition-colors">
              Track Order
            </Link>
            <Link href="/account" className="hover:text-gold-light transition-colors">
              My Account
            </Link>
            <Link href="/policies/shipping" className="hover:text-gold-light transition-colors">
              Shipping &amp; Returns
            </Link>
            <Link href="/policies/privacy" className="hover:text-gold-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policies/terms" className="hover:text-gold-light transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          <p>© 2026 Balaji Signatures — Fashion Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
