'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openCart, totalItems } = useCart();
  const { totalWishlist } = useWishlist();

  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop All', href: '/shop' },
    { label: 'Sarees', href: '/collection/sarees' },
    { label: 'Suits', href: '/collection/suits' },
    { label: 'Our Atelier', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  // Dynamic header styles: on homepage top it is translucent with white text/logo; on scroll it becomes luxury heritage brown
  const headerBackgroundClass =
    isScrolled || !isHomepage
      ? 'bg-heritage-deep/95 backdrop-blur-md text-white shadow-luxury border-b border-gold-antique/20'
      : 'bg-gradient-to-b from-heritage-deep/80 via-heritage-deep/40 to-transparent text-white border-b border-white/10';

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ease-out ${headerBackgroundClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-gold-light transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation Left */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, 3).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative text-xs uppercase tracking-eyebrow font-sans font-medium py-1 transition-colors hover:text-gold-light"
                  >
                    <span className={isActive ? 'text-gold-antique font-semibold' : 'text-white/90'}>
                      {link.label}
                    </span>
                    {/* Animated Underline Draw-in */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-antique transform origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Centered Brand Logo */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Link href="/" className="inline-block py-2" aria-label="Balaji Signatures Home">
                <Logo
                  width={150}
                  height={65}
                  className="text-white hover:text-gold-light transition-colors duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation Right */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(3).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative text-xs uppercase tracking-eyebrow font-sans font-medium py-1 transition-colors hover:text-gold-light"
                  >
                    <span className={isActive ? 'text-gold-antique font-semibold' : 'text-white/90'}>
                      {link.label}
                    </span>
                    {/* Animated Underline Draw-in */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-antique transform origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-1.5 text-white/90 hover:text-gold-light transition-colors"
                aria-label="Search catalog"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="p-1.5 text-white/90 hover:text-gold-light transition-colors relative"
                aria-label="View Wishlist"
              >
                <Heart className="w-5 h-5" />
                {totalWishlist > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-antique text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-semibold">
                    {totalWishlist}
                  </span>
                )}
              </Link>

              {/* Account Link */}
              <Link
                href="/account"
                className="p-1.5 text-white/90 hover:text-gold-light transition-colors"
                aria-label="My Account"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={openCart}
                className="p-1.5 text-white/90 hover:text-gold-light transition-colors relative"
                aria-label="Open Cart Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-antique text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-semibold border border-white/20">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 lg:hidden bg-heritage-deep text-white overflow-y-auto"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <Logo width={130} height={56} className="text-white" />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-xl font-serif tracking-wide border-b border-white/10 pb-3 transition-colors ${
                    pathname === link.href ? 'text-gold-antique font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/account"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-xl font-serif tracking-wide border-b border-white/10 pb-3 text-white/80 hover:text-gold-antique transition-colors"
              >
                My Account
              </Link>

              <Link
                href="/track-order"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-xl font-serif tracking-wide border-b border-white/10 pb-3 text-white/80 hover:text-gold-antique transition-colors"
              >
                Track Order
              </Link>

              <div className="pt-6 text-xs text-white/50 space-y-2 font-sans tracking-wide">
                <p className="font-semibold text-gold-light uppercase tracking-eyebrow">Balaji Signatures Concierge</p>
                <p>WhatsApp: +91 7827533877</p>
                <p>Email: info@balajisignatuer.com</p>
                <p className="text-gold-antique pt-2">Handcrafted Sarees & Suits · Delhi NCR Studio</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
