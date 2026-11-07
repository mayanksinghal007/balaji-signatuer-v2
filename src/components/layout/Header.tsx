'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
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

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled || !isHomepage
            ? 'bg-canvas/95 backdrop-blur-md text-heritage-brown shadow-luxury border-b border-heritage-border'
            : 'bg-canvas text-heritage-brown border-b border-heritage-border/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-heritage-brown hover:text-gold-antique transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation Left */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-regal font-sans font-medium transition-colors duration-200 relative py-1 hover:text-gold-antique ${
                    pathname === link.href ? 'text-gold-antique font-semibold' : 'text-heritage-brown'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-antique" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Centered Brand Logo */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Link href="/" className="inline-block py-2" aria-label="Balaji Signatures Home">
                <Logo
                  width={140}
                  height={62}
                  className="text-heritage-brown hover:text-gold-deep transition-colors duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation Right */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-regal font-sans font-medium transition-colors duration-200 relative py-1 hover:text-gold-antique ${
                    pathname === link.href ? 'text-gold-antique font-semibold' : 'text-heritage-brown'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-antique" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-1.5 text-heritage-brown hover:text-gold-antique transition-colors"
                aria-label="Search catalog"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="p-1.5 text-heritage-brown hover:text-gold-antique transition-colors relative"
                aria-label="View Wishlist"
              >
                <Heart className="w-5 h-5" />
                {totalWishlist > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-antique text-canvas text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-semibold">
                    {totalWishlist}
                  </span>
                )}
              </Link>

              {/* Account Link */}
              <Link
                href="/account"
                className="p-1.5 text-heritage-brown hover:text-gold-antique transition-colors"
                aria-label="My Account"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={openCart}
                className="p-1.5 text-heritage-brown hover:text-gold-antique transition-colors relative"
                aria-label="Open Cart Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-heritage-brown text-gold-muted text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-semibold border border-gold-antique/30">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-canvas text-heritage-brown overflow-y-auto animate-fadeIn">
          <div className="p-6 border-b border-heritage-border flex items-center justify-between">
            <Logo width={120} height={52} className="text-heritage-brown" />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-heritage-brown hover:text-gold-antique"
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
                className={`block text-lg font-serif tracking-wide border-b border-heritage-border/40 pb-3 transition-colors ${
                  pathname === link.href ? 'text-gold-deep font-bold' : 'text-heritage-brown'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-serif tracking-wide border-b border-heritage-border/40 pb-3 text-heritage-brown hover:text-gold-deep transition-colors"
            >
              My Account
            </Link>

            <Link
              href="/track-order"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-serif tracking-wide border-b border-heritage-border/40 pb-3 text-heritage-brown hover:text-gold-deep transition-colors"
            >
              Track Order
            </Link>

            <div className="pt-6 text-xs text-heritage-secondary space-y-2 font-sans tracking-wide">
              <p className="font-semibold text-heritage-brown uppercase tracking-regal">Boutique Concierge</p>
              <p>WhatsApp: +91 7827533877</p>
              <p>Email: info@balajisignatuer.com</p>
              <p className="text-gold-deep pt-2">Sarees & Suits — Handcrafted in India</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
