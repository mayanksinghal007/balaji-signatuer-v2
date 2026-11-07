'use client';

import React, { useState } from 'react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { SearchModal } from '@/components/layout/SearchModal';

export const StoreLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-canvas">
      <AnnouncementBar />
      <Header onOpenSearch={() => setIsSearchOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

