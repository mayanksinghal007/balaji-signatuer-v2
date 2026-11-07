export type ProductCategory = 'Sarees' | 'Suits';

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: ProductCategory;
  subCategory: string;
  price: number;
  regularPrice: number;
  discount: number;
  images: string[];
  fabric: string;
  craft: string;
  occasion: string;
  color: string;
  inStock: boolean;
  featured: boolean;
  isNew: boolean;
  sizes: string[];
  description: string;
  details: string[];
  care: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  notes?: string;
}

export interface Order {
  id: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: 'COD' | 'BACS';
  shippingAddress: ShippingAddress;
  status: 'Confirmed' | 'Processing' | 'In Transit' | 'Delivered' | 'Cancelled';
}
