import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsDecimal,
  IsInt,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'نام محصول الزامی است' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'SKU الزامی است' })
  sku: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  shortDescription?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'قیمت الزامی است' })
  price: number;

  @IsNumber()
  @IsOptional()
  salePrice?: number;

  @IsInt()
  @IsOptional()
  stock?: number = 0;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;

  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean = false;

  @IsBoolean()
  @IsOptional()
  isBestSeller?: boolean = false;

  @IsString()
  @IsNotEmpty({ message: 'دسته‌بندی الزامی است' })
  categoryId: string;

  @IsString()
  @IsOptional()
  brandId?: string;

  // Door-specific attributes
  @IsString()
  @IsOptional()
  doorType?: string;

  @IsString()
  @IsOptional()
  dimensions?: string;

  @IsDecimal()
  @IsOptional()
  sheetThickness?: number;

  @IsDecimal()
  @IsOptional()
  frameThickness?: number;

  @IsString()
  @IsOptional()
  sheetMaterial?: string;

  @IsString()
  @IsOptional()
  coatingMaterial?: string;

  @IsString()
  @IsOptional()
  lockType?: string;

  @IsString()
  @IsOptional()
  hingeType?: string;

  @IsInt()
  @IsOptional()
  hingeCount?: number;

  @IsBoolean()
  @IsOptional()
  soundInsulation?: boolean = false;

  @IsBoolean()
  @IsOptional()
  heatInsulation?: boolean = false;

  @IsBoolean()
  @IsOptional()
  fireResistance?: boolean = false;

  @IsInt()
  @IsOptional()
  fireRating?: number;

  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsOptional()
  openingDirection?: string;

  @IsBoolean()
  @IsOptional()
  customizable?: boolean = true;

  @IsInt()
  @IsOptional()
  warranty?: number;

  @IsBoolean()
  @IsOptional()
  installation?: boolean = true;

  @IsString()
  @IsOptional()
  seoTitle?: string;

  @IsString()
  @IsOptional()
  seoDescription?: string;

  @IsString()
  @IsOptional()
  seoKeywords?: string;
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  shortDescription?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsOptional()
  salePrice?: number;

  @IsInt()
  @IsOptional()
  stock?: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;

  @IsBoolean()
  @IsOptional()
  isBestSeller?: boolean;

  @IsString()
  @IsOptional()
  categoryId?: string;

  @IsString()
  @IsOptional()
  brandId?: string;

  @IsString()
  @IsOptional()
  doorType?: string;

  @IsString()
  @IsOptional()
  dimensions?: string;

  @IsDecimal()
  @IsOptional()
  sheetThickness?: number;

  @IsDecimal()
  @IsOptional()
  frameThickness?: number;

  @IsString()
  @IsOptional()
  sheetMaterial?: string;

  @IsString()
  @IsOptional()
  coatingMaterial?: string;

  @IsString()
  @IsOptional()
  lockType?: string;

  @IsString()
  @IsOptional()
  hingeType?: string;

  @IsInt()
  @IsOptional()
  hingeCount?: number;

  @IsBoolean()
  @IsOptional()
  soundInsulation?: boolean;

  @IsBoolean()
  @IsOptional()
  heatInsulation?: boolean;

  @IsBoolean()
  @IsOptional()
  fireResistance?: boolean;

  @IsInt()
  @IsOptional()
  fireRating?: number;

  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsOptional()
  openingDirection?: string;

  @IsBoolean()
  @IsOptional()
  customizable?: boolean;

  @IsInt()
  @IsOptional()
  warranty?: number;

  @IsBoolean()
  @IsOptional()
  installation?: boolean;

  @IsString()
  @IsOptional()
  seoTitle?: string;

  @IsString()
  @IsOptional()
  seoDescription?: string;

  @IsString()
  @IsOptional()
  seoKeywords?: string;
}

export class ProductQueryDto {
  @IsString()
  @IsOptional()
  search?: string;

  @IsString()
  @IsOptional()
  categoryId?: string;

  @IsString()
  @IsOptional()
  brandId?: string;

  @IsString()
  @IsOptional()
  doorType?: string;

  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;

  @IsBoolean()
  @IsOptional()
  isBestSeller?: boolean;

  @IsNumber()
  @IsOptional()
  minPrice?: number;

  @IsNumber()
  @IsOptional()
  maxPrice?: number;

  @IsString()
  @IsOptional()
  sortBy?: string = 'createdAt';

  @IsString()
  @IsOptional()
  sortOrder?: 'asc' | 'desc' = 'desc';

  @IsInt()
  @IsOptional()
  page?: number = 1;

  @IsInt()
  @IsOptional()
  limit?: number = 20;
}
