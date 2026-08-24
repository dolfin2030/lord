// Shared types and utilities for anti-theft-door-shop

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: 'admin' | 'customer';
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  salePrice?: number;
  stock: number;
  isActive: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}
