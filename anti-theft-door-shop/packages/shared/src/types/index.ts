export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description?: string;
  shortDescription?: string;
  price: number;
  salePrice?: number;
  stock: number;
  isActive: boolean;
  isFeatured: boolean;
  isBestSeller: boolean;
  categoryId: string;
  brandId?: string;
  doorType?: string;
  dimensions?: string;
  sheetThickness?: number;
  frameThickness?: number;
  sheetMaterial?: string;
  coatingMaterial?: string;
  lockType?: string;
  hingeType?: string;
  hingeCount?: number;
  soundInsulation?: boolean;
  heatInsulation?: boolean;
  fireResistance?: boolean;
  fireRating?: number;
  color?: string;
  openingDirection?: string;
  customizable?: boolean;
  warranty?: number;
  installation?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  imageUrl?: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logoUrl?: string;
  website?: string;
  country?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role: 'CUSTOMER' | 'ADMIN' | 'MANAGER' | 'SUPPORT';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  status: 'PENDING' | 'CONFIRMED' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED' | 'REFUNDED';
  paymentStatus: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
  subtotal: number;
  discount: number;
  shippingCost: number;
  tax: number;
  total: number;
  couponCode?: string;
  shippingAddressId: string;
  billingAddressId?: string;
  trackingCode?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
  product?: Product;
}

export interface Coupon {
  id: string;
  code: string;
  description?: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrder?: number;
  maxDiscount?: number;
  usageLimit?: number;
  usedCount: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  authorId: string;
  categoryId?: string;
  tags: string[];
  views: number;
  isPublished: boolean;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}
