
export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  phone?: string;
  email?: string;
  is_active: boolean;
}

export interface ProductInventory {
  product_id: string;
  location_id: string;
  quantity: number;
  last_updated: string;
}
