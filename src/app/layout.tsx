import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { StoreLayout } from '@/components/layout/StoreLayout';

export const metadata: Metadata = {
  title: 'Balaji Signatures | Luxury Indian Women’s Ethnic Fashion Studio',
  description:
    'Balaji Signatures is a premier Indian fashion studio specializing exclusively in handcrafted Sarees and tailored Suits. Explore Kanjivaram silks, Banarasi weaves, and bespoke Anarkali silhouettes.',
  keywords: [
    'Balaji Signatures',
    'Sarees',
    'Suits',
    'Indian Ethnic Wear',
    'Silk Sarees',
    'Anarkali Suits',
    'Banarasi Saree',
    'Handloom Saree',
  ],
  openGraph: {
    title: 'Balaji Signatures | Luxury Indian Women’s Ethnic Fashion Studio',
    description:
      'Explore pure silk Sarees and tailored designer Suits at Balaji Signatures.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <WishlistProvider>
            <StoreLayout>{children}</StoreLayout>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
