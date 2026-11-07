'use client';

import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';
import { ProductCard } from '@/components/product/ProductCard';
import { QuickViewModal } from '@/components/product/QuickViewModal';
import { PRODUCTS } from '@/data/products';
import { Product, ProductCategory } from '@/types/product';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFabric, setSelectedFabric] = useState<string>('All');
  const [priceSort, setPriceSort] = useState<'featured' | 'low-high' | 'high-low' | 'newest'>('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Extract unique fabrics from products
  const fabrics = useMemo(() => {
    const list = Array.from(new Set(PRODUCTS.map((p) => p.fabric.split(' ')[0])));
    return ['All', ...list];
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedFabric !== 'All') {
      result = result.filter((p) => p.fabric.toLowerCase().includes(selectedFabric.toLowerCase()));
    }

    if (priceSort === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (priceSort === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedFabric, priceSort]);

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedFabric('All');
    setPriceSort('featured');
  };

  return (
    <div className="bg-canvas min-h-screen py-10 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs and Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-regal text-gold-deep font-semibold">
            Balaji Signatures Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-heritage-brown font-normal">
            The Complete Atelier Collection
          </h1>
          <div className="w-12 h-0.5 bg-gold-antique mx-auto my-3" />
          <p className="text-xs sm:text-sm text-heritage-secondary font-light max-w-xl mx-auto">
            Discover our curated handloom Sarees and tailored Suits. Each piece is crafted with generational technique and pure fabric standards.
          </p>
        </div>

        {/* Filter Bar Controls */}
        <div className="border-y border-heritage-border py-4 mb-8 flex flex-wrap items-center justify-between gap-4 bg-canvas-subtle px-4 sm:px-6">
          {/* Active product count */}
          <div className="text-xs uppercase tracking-editorial text-heritage-secondary font-medium">
            Showing <strong className="text-heritage-brown font-semibold">{filteredProducts.length}</strong> of{' '}
            {PRODUCTS.length} Designs
          </div>

          {/* Desktop Filter Pills */}
          <div className="hidden md:flex items-center gap-6">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-regal text-heritage-tertiary">Category:</span>
              {(['All', 'Sarees', 'Suits'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs uppercase tracking-editorial border transition-all ${
                    selectedCategory === cat
                      ? 'bg-heritage-brown text-canvas border-heritage-brown font-semibold'
                      : 'border-heritage-border bg-canvas text-heritage-secondary hover:border-gold-antique'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Fabric Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-regal text-heritage-tertiary">Fabric:</span>
              <select
                value={selectedFabric}
                onChange={(e) => setSelectedFabric(e.target.value)}
                className="bg-canvas border border-heritage-border text-xs py-1 px-3 text-heritage-brown focus:outline-none focus:border-gold-antique"
              >
                {fabrics.map((f) => (
                  <option key={f} value={f}>
                    {f === 'All' ? 'All Fabrics' : f}
                  </option>
                ))}
              </select>
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-heritage-tertiary" />
              <select
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value as any)}
                className="bg-canvas border border-heritage-border text-xs py-1 px-3 text-heritage-brown focus:outline-none focus:border-gold-antique"
              >
                <option value="featured">Featured First</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="newest">New Arrivals First</option>
              </select>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="flex items-center gap-3 md:hidden w-full sm:w-auto justify-between">
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-heritage-border bg-canvas text-xs uppercase tracking-regal text-heritage-brown font-medium"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-gold-deep" />
              <span>Filter &amp; Sort</span>
            </button>

            {(selectedCategory !== 'All' || selectedFabric !== 'All') && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-gold-deep hover:underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <p className="text-lg font-serif text-heritage-brown">No designs match your chosen filters.</p>
            <p className="text-xs text-heritage-secondary font-sans">
              Try adjusting your category or fabric selections.
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-2 bg-heritage-brown text-canvas px-6 py-2.5 text-xs uppercase tracking-regal hover:bg-gold-deep transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Slide-In Filter Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden overflow-hidden">
          <div
            className="absolute inset-0 bg-heritage-deep/60 backdrop-blur-sm"
            onClick={() => setIsMobileFiltersOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-canvas p-6 shadow-2xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-heritage-border pb-4">
                  <h3 className="text-base font-serif font-semibold text-heritage-brown uppercase tracking-regal">
                    Filters &amp; Sort
                  </h3>
                  <button
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="p-1 text-heritage-tertiary hover:text-heritage-brown"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Category Options */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-regal text-gold-deep font-semibold block">
                    Category
                  </label>
                  <div className="flex flex-col gap-1.5">
                    {(['All', 'Sarees', 'Suits'] as const).map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedCategory(c)}
                        className={`text-left px-3 py-2 text-xs border ${
                          selectedCategory === c
                            ? 'bg-heritage-brown text-canvas font-semibold'
                            : 'border-heritage-border text-heritage-brown'
                        }`}
                      >
                        {c === 'All' ? 'All Categories' : c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fabric Options */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-regal text-gold-deep font-semibold block">
                    Fabric
                  </label>
                  <select
                    value={selectedFabric}
                    onChange={(e) => setSelectedFabric(e.target.value)}
                    className="w-full border border-heritage-border p-2 text-xs text-heritage-brown bg-canvas"
                  >
                    {fabrics.map((f) => (
                      <option key={f} value={f}>
                        {f === 'All' ? 'All Fabrics' : f}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sorting Options */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-regal text-gold-deep font-semibold block">
                    Sort Order
                  </label>
                  <select
                    value={priceSort}
                    onChange={(e) => setPriceSort(e.target.value as any)}
                    className="w-full border border-heritage-border p-2 text-xs text-heritage-brown bg-canvas"
                  >
                    <option value="featured">Featured First</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>
                    <option value="newest">New Arrivals First</option>
                  </select>
                </div>
              </div>

              {/* Drawer Apply Button */}
              <div className="pt-6 border-t border-heritage-border space-y-2">
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full bg-heritage-brown text-canvas py-3 text-xs uppercase tracking-regal font-semibold"
                >
                  Apply Filters ({filteredProducts.length})
                </button>
                <button
                  onClick={clearAllFilters}
                  className="w-full text-center py-2 text-xs text-heritage-secondary"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}

