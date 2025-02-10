
export interface Product {
  id: string;
  sku: string;
  ean: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients?: string;
  stock_quantity?: number;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}
