'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-heritage-deep text-gold-light py-2 px-4 border-b border-gold-antique/20 font-sans text-[11px] sm:text-xs tracking-eyebrow uppercase select-none overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mx-auto sm:mx-0 font-medium"
        >
          <Sparkles className="w-3 h-3 text-gold-antique flex-shrink-0" />
          <span>Complimentary Pan-India Express Delivery on Orders Above ₹999</span>
        </motion.div>

        <div className="hidden sm:flex items-center gap-6 text-[10px] text-white/70 tracking-widest font-light">
          <span>Atelier Hotline: +91 7827533877</span>
          <span className="w-1 h-1 rounded-full bg-gold-antique/60" />
          <span>Delhi NCR Boutique</span>
        </div>
      </div>
    </div>
  );
};
