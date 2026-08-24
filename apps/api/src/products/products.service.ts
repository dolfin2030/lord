import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: { skip?: number; take?: number; categoryId?: string; brandId?: string; isActive?: boolean }) {
    const { skip = 0, take = 10, categoryId, brandId, isActive = true } = params;
    
    const where: any = { isActive };
    if (categoryId) where.categoryId = categoryId;
    if (brandId) where.brandId = brandId;

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        skip,
        take,
        where,
        include: {
          category: true,
          brand: true,
          images: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.product.count({ where }),
    ]);

    return { products, total };
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        brand: true,
        images: true,
        variants: true,
      },
    });
  }

  async findBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: { slug },
      include: {
        category: true,
        brand: true,
        images: true,
        variants: true,
      },
    });

    if (product) {
      await this.prisma.product.update({
        where: { id: product.id },
        data: { views: { increment: 1 } },
      });
    }

    return product;
  }

  async create(data: any) {
    return this.prisma.product.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  async getFeatured(limit = 4) {
    return this.prisma.product.findMany({
      where: { isFeatured: true, isActive: true },
      take: limit,
      include: {
        category: true,
        brand: true,
        images: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getBestSellers(limit = 4) {
    // Simple implementation - in production, track order counts
    return this.prisma.product.findMany({
      where: { isActive: true },
      take: limit,
      include: {
        category: true,
        brand: true,
        images: true,
      },
      orderBy: { views: 'desc' },
    });
  }
}
