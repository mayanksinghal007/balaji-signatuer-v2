import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, EyeOff, UserCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Balaji Signatures',
  description:
    'Read how Balaji Signatures protects, processes, and respects your personal information and online privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-canvas min-h-screen py-12 lg:py-20 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
            Legal &amp; Privacy
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-heritage-brown font-normal">
            Privacy Policy
          </h1>
          <div className="w-16 h-0.5 bg-gold-antique mx-auto my-3" />
          <p className="text-sm text-heritage-secondary font-light leading-relaxed">
            Effective Date: November 2026. Balaji Signatures respects your discretion and values your trust.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-heritage-border text-center space-y-3">
            <Lock className="w-6 h-6 text-gold-antique mx-auto" />
            <h3 className="font-serif text-base text-heritage-brown font-medium">Encrypted Data</h3>
            <p className="text-xs text-heritage-secondary font-light">
              All personal details submitted during checkout are transmitted securely.
            </p>
          </div>
          <div className="p-6 bg-white border border-heritage-border text-center space-y-3">
            <EyeOff className="w-6 h-6 text-gold-antique mx-auto" />
            <h3 className="font-serif text-base text-heritage-brown font-medium">No Data Selling</h3>
            <p className="text-xs text-heritage-secondary font-light">
              We never sell, rent, or lease your private contact info to any third-party marketing agency.
            </p>
          </div>
          <div className="p-6 bg-white border border-heritage-border text-center space-y-3">
            <UserCheck className="w-6 h-6 text-gold-antique mx-auto" />
            <h3 className="font-serif text-base text-heritage-brown font-medium">Direct Consent</h3>
            <p className="text-xs text-heritage-secondary font-light">
              Communications are strictly restricted to order fulfillment, updates, and boutique newsletters.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm sm:text-base font-light leading-relaxed text-heritage-secondary bg-white p-8 sm:p-10 border border-heritage-border">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              1. Information We Collect
            </h2>
            <p>
              When you browse our storefront, register an account, or place an order, we collect information necessary to deliver an exceptional shopping experience:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Contact Details:</strong> Full Name, Email Address, Mobile/WhatsApp Phone Number.</li>
              <li><strong>Delivery Logistics:</strong> Complete Shipping Address, Landmark, City, State, and Postal Pin Code.</li>
              <li><strong>Order History:</strong> Products chosen, transaction values, payment method preferred (COD / UPI / Bank Transfer).</li>
              <li><strong>Technical Data:</strong> Browser type, device screen resolution, and anonymized cookies to ensure shopping cart persistence.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              2. How We Utilize Your Data
            </h2>
            <p>
              Your personal information is used solely for the following legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Processing and dispatching your Saree or Suit order with courier partners (Bluedart, Delhivery, DTDC).</li>
              <li>Transmitting order confirmation, tracking updates, and delivery status via SMS/WhatsApp and email.</li>
              <li>Providing customer support and facilitating size exchanges or returns.</li>
              <li>Informing you about new collection drops or atelier private viewings (only if opted in).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              3. Protection of Financial Information
            </h2>
            <p>
              Balaji Signatures does not store sensitive credit card numbers or UPI PINs on our servers. Direct bank transfers and UPI transactions are conducted securely through official banking gateways and verified UPI handles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              4. Cookies and Session Management
            </h2>
            <p>
              We utilize local storage and lightweight cookies to preserve your shopping bag and wishlist items across browsing sessions. You can clear cookies at any time via your browser settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-heritage-brown font-normal">
              5. Your Legal Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections, or ask for the deletion of your customer record. To make any such request, please email us at{' '}
              <a href="mailto:info@balajisignatuer.com" className="text-gold-deep underline font-medium">
                info@balajisignatuer.com
              </a>{' '}
              or contact our studio desk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

