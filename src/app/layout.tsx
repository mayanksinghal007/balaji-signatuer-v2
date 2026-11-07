import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { StoreLayout } from '@/components/layout/StoreLayout';
import { SmoothScroll } from '@/components/providers/SmoothScroll';

export const metadata: Metadata = {
  title: 'Balaji Signatures | Luxury Indian Women’s Ethnic Fashion Studio',
  description:
    'Balaji Signatures is an Indian luxury women’s ethnic fashion studio specializing exclusively in handcrafted Sarees and tailored Suits. Explore pure silk Kanjivarams, Banarasi weaves, and bespoke Anarkali silhouettes.',
  keywords: [
    'Balaji Signatures',
    'Sarees',
    'Suits',
    'Indian Ethnic Wear',
    'Silk Sarees',
    'Anarkali Suits',
    'Banarasi Saree',
    'Handloom Saree',
    'Designer Suits',
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
        <SmoothScroll>
          <CartProvider>
            <WishlistProvider>
              <StoreLayout>{children}</StoreLayout>
            </WishlistProvider>
          </CartProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
