'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <section className="py-20 lg:py-24 bg-heritage-deep text-white relative overflow-hidden font-sans border-b border-gold-antique/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <SectionReveal className="space-y-3">
          <span className="text-xs uppercase tracking-eyebrow text-gold-antique font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Patron Privilege
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal">
            Join the Balaji Signatures Atelier Circle
          </h2>
          <div className="w-16 h-0.5 bg-gold-antique mx-auto my-3" />
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Receive private preview invitations for limited handloom releases, festival trousseau drops, and bespoke styling insights.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2} className="max-w-md mx-auto">
          {isSubscribed ? (
            <div className="p-4 bg-white/10 backdrop-blur-md border border-gold-antique/40 flex items-center justify-center gap-3 text-gold-light text-xs font-medium uppercase tracking-eyebrow animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-gold-antique" />
              <span>Welcome to the Atelier Circle</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 text-xs text-white placeholder-white/40 bg-white/5 border border-white/20 focus:border-gold-antique focus:bg-white/10 focus:ring-1 focus:ring-gold-antique transition-all duration-300 outline-none font-sans"
                />
              </div>
              <Button type="submit" variant="primary" size="md" className="flex-shrink-0">
                Subscribe
              </Button>
            </form>
          )}
          <p className="text-[11px] text-white/40 mt-3 font-light">
            We respect your discretion. Never any spam; only rare handloom previews.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};
