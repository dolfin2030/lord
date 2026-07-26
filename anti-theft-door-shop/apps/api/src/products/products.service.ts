import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto, ProductQueryDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    // Check if SKU already exists
    const existingSku = await this.prisma.product.findUnique({
      where: { sku: createProductDto.sku },
    });

    if (existingSku) {
      throw new ConflictException('این SKU قباً استفاده شده است');
    }

    // Generate slug from name
    const slug = this.generateSlug(createProductDto.name);

    // Check if slug exists
    const existingSlug = await this.prisma.product.findUnique({
      where: { slug },
    });

    let finalSlug = slug;
    let counter = 1;
    while (existingSlug) {
      finalSlug = `${slug}-${counter}`;
      counter++;
      break; // Just add number once for simplicity
    }

    return this.prisma.product.create({
      data: {
        ...createProductDto,
        slug: finalSlug,
        stock: createProductDto.stock || 0,
        isActive: createProductDto.isActive ?? true,
        isFeatured: createProductDto.isFeatured ?? false,
        isBestSeller: createProductDto.isBestSeller ?? false,
        soundInsulation: createProductDto.soundInsulation ?? false,
        heatInsulation: createProductDto.heatInsulation ?? false,
        fireResistance: createProductDto.fireResistance ?? false,
        customizable: createProductDto.customizable ?? true,
        installation: createProductDto.installation ?? true,
      },
      include: {
        category: true,
        brand: true,
        images: true,
      },
    });
  }

  async findAll(query: ProductQueryDto) {
    const {
      search,
      categoryId,
      brandId,
      doorType,
      isFeatured,
      isBestSeller,
      minPrice,
      maxPrice,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = 1,
      limit = 20,
    } = query;

    const where: any = {
      isActive: true,
    };

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { sku: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (categoryId) where.categoryId = categoryId;
    if (brandId) where.brandId = brandId;
    if (doorType) where.doorType = doorType;
    if (isFeatured !== undefined) where.isFeatured = isFeatured;
    if (isBestSeller !== undefined) where.isBestSeller = isBestSeller;

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) where.price.gte = minPrice;
      if (maxPrice !== undefined) where.price.lte = maxPrice;
    }

    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: {
          category: true,
          brand: true,
          images: {
            where: { isPrimary: true },
            take: 1,
          },
        },
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      data: products,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        brand: true,
        images: {
          orderBy: { sortOrder: 'asc' },
        },
        variants: true,
        attributeValues: {
          include: {
            attribute: true,
          },
        },
        reviews: {
          where: { isApproved: true },
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException('محصول یافت نشد');
    }

    return product;
  }

  async findBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: { slug, isActive: true },
      include: {
        category: true,
        brand: true,
        images: {
          orderBy: { sortOrder: 'asc' },
        },
        variants: true,
        attributeValues: {
          include: {
            attribute: true,
          },
        },
        reviews: {
          where: { isApproved: true },
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException('محصول یافت نشد');
    }

    // Increment view count (optional, could use Redis for performance)
    await this.prisma.product.update({
      where: { id: product.id },
      data: { views: { increment: 1 } },
    });

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);

    // Check SKU uniqueness if being updated
    if (updateProductDto.sku && updateProductDto.sku !== product.sku) {
      const existingSku = await this.prisma.product.findUnique({
        where: { sku: updateProductDto.sku },
      });

      if (existingSku) {
        throw new ConflictException('این SKU قبلاً استفاده شده است');
      }
    }

    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
      include: {
        category: true,
        brand: true,
        images: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    // Soft delete by setting isActive to false
    return this.prisma.product.update({
      where: { id },
      data: { isActive: false },
    });
  }

  async findFeatured(limit: number = 8) {
    return this.prisma.product.findMany({
      where: {
        isFeatured: true,
        isActive: true,
      },
      take: limit,
      include: {
        category: true,
        brand: true,
        images: {
          where: { isPrimary: true },
          take: 1,
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findBestSellers(limit: number = 8) {
    return this.prisma.product.findMany({
      where: {
        isBestSeller: true,
        isActive: true,
      },
      take: limit,
      include: {
        category: true,
        brand: true,
        images: {
          where: { isPrimary: true },
          take: 1,
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByCategory(categoryId: string, query: ProductQueryDto) {
    return this.findAll({ ...query, categoryId });
  }

  async findByBrand(brandId: string, query: ProductQueryDto) {
    return this.findAll({ ...query, brandId });
  }

  async search(searchTerm: string, query: ProductQueryDto) {
    return this.findAll({ ...query, search: searchTerm });
  }

  private generateSlug(name: string): string {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
