'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Sparkles, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle parallax drift on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const trustItems = [
    {
      icon: <Sparkles className="w-4 h-4 text-gold-antique" />,
      title: 'Artisan Curation',
      desc: 'Generational Weavers',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-gold-antique" />,
      title: 'Fabric Purity',
      desc: 'Hand-Inspected Silk & Zari',
    },
    {
      icon: <Truck className="w-4 h-4 text-gold-antique" />,
      title: 'Studio Delivery',
      desc: 'Complimentary Pan-India',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-heritage-deep"
    >
      {/* Background Hero Image with subtle parallax */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: imageY }}
        className="absolute inset-0 w-full h-[115%] -top-[7%]"
      >
        <Image
          src="/images/hero/hero-editorial-model.jpg"
          alt="Balaji Signatures Luxury Editorial Heritage Model"
          fill
          priority
          className="object-cover object-top filter brightness-[0.92] contrast-[1.05]"
          sizes="100vw"
        />

        {/* Directional Luxury Scrim: Dark gradient on edges and bottom for contrast, center remains rich & vibrant */}
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-deep via-heritage-deep/40 to-heritage-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-deep/80 via-heritage-deep/20 to-heritage-deep/60" />
      </motion.div>

      {/* Main Content Overlay */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20 sm:py-32 flex flex-col items-center"
      >
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-antique/30 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-antique animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-eyebrow text-gold-light font-medium">
            Flagship Studio Collection · 2026
          </span>
        </motion.div>

        {/* Headline with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-normal tracking-tight leading-[1.08]">
            Elegance That <br />
            <span className="font-serif italic font-light text-gold-light">Defines You</span>
          </h1>
        </motion.div>

        {/* Subtitle / Philosophy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/80 font-sans font-light leading-relaxed mb-10"
        >
          Balaji Signatures is an Indian luxury women&apos;s ethnic fashion studio born from generational reverence for the handloom craft. Specializing exclusively in artisanal Sarees and tailored Suits.
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16 w-full sm:w-auto"
        >
          <Button
            href="/shop"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-luxury"
          >
            Explore Sarees &amp; Suits
          </Button>

          <Button
            href="/about"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-white border-white/40 hover:border-gold-antique hover:text-gold-light"
          >
            Our Atelier Story
          </Button>
        </motion.div>

        {/* Animated Trust Strip with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-3xl pt-8 border-t border-white/15"
        >
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              className="flex items-center justify-center gap-3 p-3 rounded-none bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="p-2 rounded-full bg-gold-antique/10 border border-gold-antique/20 flex-shrink-0">
                {item.icon}
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-eyebrow text-white font-medium">
                  {item.title}
                </p>
                <p className="text-[11px] text-white/60 font-light font-sans">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative fine gold line at bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-antique/40 to-transparent" />
    </div>
  );
};
