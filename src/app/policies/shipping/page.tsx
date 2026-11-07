import React from 'react';
import Link from 'next/link';
import { Truck, RotateCcw, ShieldCheck, Clock, HelpCircle, PhoneCall } from 'lucide-react';

export const metadata = {
  title: 'Shipping, Delivery & Returns Policy | Balaji Signatures',
  description:
    'Comprehensive information regarding domestic and express shipping, delivery timelines, tracking, and our 7-day exchange policy at Balaji Signatures.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-canvas min-h-screen py-12 lg:py-20 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
            Store Policies
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-heritage-brown font-normal">
            Shipping &amp; Return Policy
          </h1>
          <div className="w-16 h-0.5 bg-gold-antique mx-auto my-3" />
          <p className="text-sm text-heritage-secondary font-light leading-relaxed">
            Every creation at Balaji Signatures is carefully hand-inspected, steam-pressed, and wrapped
            in protective studio packaging to reach your doorstep in pristine condition.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-heritage-border rounded-none shadow-sm space-y-3">
            <Truck className="w-6 h-6 text-gold-antique" />
            <h3 className="font-serif text-base font-medium text-heritage-brown">Complimentary Shipping</h3>
            <p className="text-xs text-heritage-secondary leading-relaxed font-light">
              Free delivery across all pin codes in India on orders above ₹999. Flat ₹99 on smaller orders.
            </p>
          </div>

          <div className="p-6 bg-white border border-heritage-border rounded-none shadow-sm space-y-3">
            <Clock className="w-6 h-6 text-gold-antique" />
            <h3 className="font-serif text-base font-medium text-heritage-brown">4–7 Days Delivery</h3>
            <p className="text-xs text-heritage-secondary leading-relaxed font-light">
              Standard dispatch within 24–48 hours. Express transit via Bluedart, Delhivery, and DTDC.
            </p>
          </div>

          <div className="p-6 bg-white border border-heritage-border rounded-none shadow-sm space-y-3">
            <RotateCcw className="w-6 h-6 text-gold-antique" />
            <h3 className="font-serif text-base font-medium text-heritage-brown">7-Day Exchange</h3>
            <p className="text-xs text-heritage-secondary leading-relaxed font-light">
              Hassle-free size and damage exchange within 7 days of package delivery.
            </p>
          </div>

          <div className="p-6 bg-white border border-heritage-border rounded-none shadow-sm space-y-3">
            <ShieldCheck className="w-6 h-6 text-gold-antique" />
            <h3 className="font-serif text-base font-medium text-heritage-brown">Tamper-Proof Box</h3>
            <p className="text-xs text-heritage-secondary leading-relaxed font-light">
              Inspected by master craftsmen and packed with security seal tape for pure fabric safety.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-10 text-heritage-brown text-sm sm:text-base font-light leading-relaxed">
          <section className="bg-white p-8 border border-heritage-border space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-heritage-brown font-normal flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-antique" />
              1. Domestic Shipping &amp; Timelines
            </h2>
            <div className="space-y-3 text-heritage-secondary text-sm">
              <p>
                We deliver to over 27,000 pin codes across India. All domestic orders are dispatched from our studio
                within 24 to 48 hours of order confirmation.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-heritage-brown font-medium">Metro Cities (Delhi NCR, Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad):</strong> Typically delivered within 3 to 5 business days.
                </li>
                <li>
                  <strong className="text-heritage-brown font-medium">Rest of India &amp; Regional Towns:</strong> Delivered within 4 to 7 business days.
                </li>
                <li>
                  <strong className="text-heritage-brown font-medium">Remote Locations / North East / J&amp;K:</strong> May take 7 to 10 business days depending on courier accessibility.
                </li>
              </ul>
              <p>
                Once your order is handed over to our delivery partners, a live tracking link with AWB number is automatically sent to your registered WhatsApp number and email address.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 border border-heritage-border space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-heritage-brown font-normal flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-antique" />
              2. Shipping Charges &amp; Cash On Delivery (COD)
            </h2>
            <div className="space-y-3 text-heritage-secondary text-sm">
              <p>
                - All prepaid orders (Direct Bank Transfer, UPI, Cards) above ₹999 qualify for complimentary free shipping.
              </p>
              <p>
                - For orders under ₹999, a nominal standard handling fee of ₹99 is applied at checkout.
              </p>
              <p>
                - Cash on Delivery (COD) is available for eligible pin codes up to ₹15,000. Our logistics coordinator may request a quick telephonic confirmation before dispatching high-value COD parcels.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 border border-heritage-border space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-heritage-brown font-normal flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-antique" />
              3. Returns &amp; Exchanges Policy
            </h2>
            <div className="space-y-3 text-heritage-secondary text-sm">
              <p>
                We want you to cherish every weave you purchase from Balaji Signatures. If a piece doesn&apos;t meet your expectations or arrives damaged in transit:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Eligibility:</strong> Exchange requests must be initiated within <strong>7 days</strong> of delivery.
                </li>
                <li>
                  <strong>Condition:</strong> Products must be unworn, unwashed, unaltered, and with all original boutique tags and fabric labels intact.
                </li>
                <li>
                  <strong>Customized / Stitched Pieces:</strong> Sarees with fall/pico completed upon special customer request or tailored suit alterations cannot be exchanged, unless there is a physical manufacturing defect.
                </li>
                <li>
                  <strong>Reverse Pickup:</strong> Our team will arrange a doorstep reverse pickup from your address within 48 hours of approval. If reverse pickup is unserviceable at your pin code, we reimburse standard courier costs up to ₹150.
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-8 border border-heritage-border space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-heritage-brown font-normal flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-antique" />
              4. Damaged or Tampered Shipments
            </h2>
            <div className="space-y-3 text-heritage-secondary text-sm">
              <p>
                If the outer packaging appears tampered with or severely damaged upon arrival, please do not accept the package from the delivery agent, or take a clear photo/video before unboxing. Contact us immediately at{' '}
                <a href="https://wa.me/917827533877" target="_blank" rel="noopener noreferrer" className="text-gold-deep underline font-medium">
                  +91 7827533877
                </a>{' '}
                within 24 hours so our concierge can expedite a replacement or resolution.
              </p>
            </div>
          </section>

          {/* Need Assistance Card */}
          <div className="bg-heritage-brown text-white p-8 sm:p-10 text-center space-y-4 border border-gold-antique/30">
            <PhoneCall className="w-8 h-8 text-gold-antique mx-auto" />
            <h3 className="font-serif text-2xl font-normal">Need Direct Assistance With Your Shipment?</h3>
            <p className="text-sm text-canvas-subtle max-w-xl mx-auto font-light">
              Our studio concierge is available Monday to Saturday, 10:00 AM – 7:30 PM IST.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917827533877?text=Hi%20Balaji%20Signatures,%20I%20have%20an%20inquiry%20regarding%20my%20shipment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-antique hover:bg-gold-deep text-white text-xs uppercase tracking-regal font-medium transition-colors"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:border-gold-antique text-white text-xs uppercase tracking-regal font-medium transition-colors"
              >
                Contact Concierge
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

