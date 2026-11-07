'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-heritage-deep text-canvas relative overflow-hidden font-sans border-b border-gold-antique/20">
      {/* Decorative Background Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#B89758_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold-antique/40 bg-heritage-deep/60">
          <Sparkles className="w-3.5 h-3.5 text-gold-muted" />
          <span className="text-[10px] uppercase tracking-regal text-gold-muted font-medium">
            The Balaji Private Salon
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-canvas">
          Receive Private Studio Previews
        </h2>

        <p className="text-sm sm:text-base text-canvas/75 font-light max-w-xl mx-auto leading-relaxed">
          Be first to preview limited-edition handloom Saree drops, festive Suit previews, and private boutique consultations.
        </p>

        {isSubmitted ? (
          <div className="inline-flex items-center gap-3 bg-canvas/10 border border-gold-antique/50 px-6 py-4 text-canvas text-sm font-serif">
            <CheckCircle2 className="w-5 h-5 text-gold-muted" />
            <span>Thank you. You are now inscribed in our Private Studio Circle.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-4"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-canvas/40" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-11 pr-4 py-3.5 bg-canvas/10 border border-canvas/20 text-canvas placeholder:text-canvas/40 text-xs tracking-editorial font-sans focus:outline-none focus:border-gold-antique transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-gold-antique text-canvas px-8 py-3.5 text-xs uppercase tracking-regal font-semibold hover:bg-gold-deep transition-colors shadow-luxury flex-shrink-0"
            >
              Inscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-canvas/50 font-light">
          We honor your privacy. Unsubscribe whenever you wish. No spam ever.
        </p>
      </div>
    </section>
  );
};

