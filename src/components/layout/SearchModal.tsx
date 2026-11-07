'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(lower) ||
        p.fabric.toLowerCase().includes(lower) ||
        p.craft.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower) ||
        p.color.toLowerCase().includes(lower)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-heritage-deep/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative max-w-3xl mx-auto mt-12 sm:mt-20 px-4">
        <div className="bg-canvas shadow-2xl border border-gold-antique/30 overflow-hidden font-sans">
          {/* Search Input Bar */}
          <div className="p-4 sm:p-6 border-b border-heritage-border flex items-center gap-3 bg-canvas-subtle">
            <Search className="w-5 h-5 text-gold-deep flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Sarees, Anarkalis, Banarasi Silks, Organza, Fabrics..."
              autoFocus
              className="w-full bg-transparent border-none text-heritage-brown text-base sm:text-lg focus:outline-none placeholder:text-heritage-tertiary/70 font-serif"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs uppercase text-heritage-tertiary hover:text-heritage-brown"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 text-heritage-tertiary hover:text-heritage-brown ml-2"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Categories */}
          {!query && (
            <div className="p-6 space-y-4">
              <p className="text-xs uppercase tracking-regal text-heritage-tertiary font-semibold">
                Explore Curated Studio Collections
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Banarasi Silk Sarees',
                  'Kanjivaram Handloom',
                  'Organza Drapes',
                  'Flared Anarkali Suits',
                  'Sharara & Gharara Sets',
                  'Straight-Cut Chanderi',
                  'Festive Silk Suits',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term.split(' ')[0])}
                    className="px-3.5 py-1.5 text-xs border border-heritage-border bg-canvas-subtle text-heritage-brown hover:border-gold-antique hover:text-gold-deep transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results List */}
          {query && (
            <div className="max-h-96 overflow-y-auto p-4 sm:p-6 divide-y divide-heritage-border/40">
              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center text-heritage-secondary font-serif">
                  No matching sarees or suits found for &ldquo;{query}&rdquo;.
                </div>
              ) : (
                filteredProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-3.5 px-2 hover:bg-canvas-subtle transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-16 bg-canvas-subtle flex-shrink-0 border border-heritage-border/60 overflow-hidden">
                        <Image
                          src={p.images[0]}
                          alt={p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="60px"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif text-heritage-brown group-hover:text-gold-deep font-semibold">
                          {p.title}
                        </h4>
                        <p className="text-xs text-heritage-secondary font-sans mt-0.5">
                          {p.category} · {p.fabric}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-serif font-semibold text-heritage-brown">
                        ₹{p.price.toLocaleString()}
                      </span>
                      <ArrowRight className="w-4 h-4 text-heritage-tertiary group-hover:text-gold-deep group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

