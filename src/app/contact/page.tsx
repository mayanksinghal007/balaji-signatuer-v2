'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Sarees',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-canvas min-h-screen py-12 lg:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
            Boutique Concierge
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-heritage-brown font-normal">
            Connect With Our Studio
          </h1>
          <div className="w-12 h-0.5 bg-gold-antique mx-auto my-3" />
          <p className="text-xs sm:text-sm text-heritage-secondary font-light">
            We are here to assist with custom styling, fabric inquiries, sizing consultations, and bespoke orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Cards */}
            <div className="p-6 bg-canvas-subtle border border-heritage-border space-y-4 shadow-luxury">
              <h3 className="text-base font-serif font-semibold text-heritage-brown uppercase tracking-regal border-b border-heritage-border pb-3">
                Direct Communications
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-heritage-brown uppercase tracking-editorial text-xs">
                      WhatsApp Atelier Hotline
                    </p>
                    <a
                      href="https://wa.me/917827533877"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-deep hover:underline font-mono"
                    >
                      +91 7827533877
                    </a>
                    <p className="text-[11px] text-heritage-secondary font-light mt-0.5">
                      Instant response for high-res video draping &amp; sizing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-antique/10 text-gold-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-heritage-brown uppercase tracking-editorial text-xs">
                      Studio Email
                    </p>
                    <a
                      href="mailto:info@balajisignatuer.com"
                      className="text-heritage-brown hover:text-gold-deep"
                    >
                      info@balajisignatuer.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-antique/10 text-gold-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-heritage-brown uppercase tracking-editorial text-xs">
                      Boutique Atelier
                    </p>
                    <p className="text-heritage-secondary">
                      Delhi NCR, India
                    </p>
                    <p className="text-[11px] text-heritage-tertiary">
                      Consultations by Appointment &amp; Pan-India Dispatch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="p-6 bg-heritage-deep text-canvas border border-gold-antique/30 space-y-2">
              <h4 className="text-xs uppercase tracking-regal text-gold-muted font-semibold">
                Studio Operating Hours
              </h4>
              <p className="text-xs text-canvas/80 leading-relaxed font-light">
                Monday – Saturday: 10:30 AM – 7:30 PM (IST) <br />
                Sunday: Closed for artisan sourcing &amp; loom visits
              </p>
            </div>
          </div>

          {/* Inquiry Form Right */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 bg-canvas-subtle border border-heritage-border shadow-luxury space-y-6">
              <h3 className="text-lg font-serif font-semibold text-heritage-brown uppercase tracking-regal border-b border-heritage-border pb-3">
                Send a Studio Message
              </h3>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-3 bg-canvas border border-emerald-600/40">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                  <h4 className="text-lg font-serif text-heritage-brown">Inquiry Received</h4>
                  <p className="text-xs text-heritage-secondary leading-relaxed">
                    Thank you, {formData.name}. Our studio stylist will review your request and get in touch
                    shortly via WhatsApp or Email.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', interest: 'Sarees', message: '' });
                    }}
                    className="mt-4 text-xs uppercase tracking-editorial text-gold-deep underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Radhika Mehra"
                        className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. radhika@example.com"
                        className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                        Area of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                      >
                        <option value="Sarees">Sarees (Kanjivaram, Banarasi, Organza)</option>
                        <option value="Suits">Suits (Anarkali, Sharara, Straight-Cut)</option>
                        <option value="Custom Stitching">Custom Stitching &amp; Sizing</option>
                        <option value="Bridal Order">Bridal / Bulk Celebration Order</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-editorial text-heritage-brown font-medium mb-1">
                      Your Message or Inquiry *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your requirements or questions regarding fabrics, drapes, or measurements..."
                      className="w-full px-3.5 py-2.5 text-xs border border-heritage-border bg-canvas focus:outline-none focus:border-gold-antique"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-heritage-brown text-canvas px-8 py-3.5 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors shadow-luxury flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

