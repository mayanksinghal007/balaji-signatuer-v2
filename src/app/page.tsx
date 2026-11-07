import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { FeaturedCollections } from '@/components/home/FeaturedCollections';
import { BrandStory } from '@/components/home/BrandStory';
import { EditorialShowcase } from '@/components/home/EditorialShowcase';
import { NewArrivals } from '@/components/home/NewArrivals';
import { TrustSection } from '@/components/home/TrustSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <CategoryShowcase />
      <FeaturedCollections />
      <BrandStory />
      <EditorialShowcase />
      <NewArrivals />
      <TrustSection />
      <NewsletterSection />
    </div>
  );
}

