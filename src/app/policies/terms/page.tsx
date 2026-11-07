import React from 'react';
import Link from 'next/link';
import { FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | Balaji Signatures',
  description:
    'Terms of service, pricing, handloom authenticity, and legal guidelines governing purchases at Balaji Signatures.',
};

export default function TermsPolicyPage() {
  return (
    <div className="bg-canvas min-h-screen py-12 lg:py-20 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
            Boutique Guidelines
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-heritage-brown font-normal">
            Terms &amp; Conditions
          </h1>
          <div className="w-16 h-0.5 bg-gold-antique mx-auto my-3" />
          <p className="text-sm text-heritage-secondary font-light leading-relaxed">
            Please read these terms carefully before engaging with our digital atelier or placing an order.
          </p>
        </div>

        {/* Content Box */}
        <div className="space-y-8 text-sm sm:text-base font-light leading-relaxed text-heritage-secondary bg-white p-8 sm:p-10 border border-heritage-border">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              1. General &amp; Brand Scope
            </h2>
            <p>
              This website is operated by <strong>Balaji Signatures – Fashion Studio</strong>. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to Balaji Signatures. We specialize exclusively in handcrafted women&apos;s ethnic wear—specifically <strong>Sarees and Suits</strong>. By visiting our site or purchasing from us, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              2. Handloom &amp; Artisanal Variations
            </h2>
            <p>
              Many of our pieces are woven on traditional wooden handlooms or feature hand-embroidered zardozi and gota work. Minor unevenness in weave, slubs in raw silk, or subtle variations in dye consistency are natural hallmarks of handcrafting, not flaws. We capture every piece under calibrated studio lighting; however, display settings on various phones and screens may reflect minor hue variances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              3. Pricing &amp; Taxes
            </h2>
            <p>
              All prices shown on the storefront are denominated in Indian Rupees (INR / ₹) and are inclusive of all applicable Goods and Services Tax (GST). We reserve the right to modify prices or discontinue silhouettes without prior notice. The price charged will be the price in effect at the time the order is placed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              4. Order Confirmation &amp; Cancellations
            </h2>
            <p>
              Upon placing an order, you will receive an automated confirmation on your screen and via communication channels. For orders placed under Direct Bank Transfer / UPI, orders are confirmed once payment is verified with our studio account. Orders may be cancelled within 12 hours of placement before dispatch by messaging our concierge desk. Once dispatched, our standard exchange policy applies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              5. Intellectual Property
            </h2>
            <p>
              The trademark, emblem, logo, typography, product photographs, styling concepts, and editorial text published on this domain are the exclusive intellectual property of Balaji Signatures. Any unauthorized reproduction, downloading, or commercial misuse is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              6. Governing Law
            </h2>
            <p>
              These Terms and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction in the courts of New Delhi.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

