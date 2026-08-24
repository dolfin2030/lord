import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Public } from '../common/decorators/public.decorator';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Public()
  @Get()
  async findAll(
    @Query('skip') skip?: number,
    @Query('take') take?: number,
    @Query('categoryId') categoryId?: string,
    @Query('brandId') brandId?: string,
    @Query('isActive') isActive?: boolean,
  ) {
    return this.productsService.findAll({
      skip: skip ? parseInt(skip) : undefined,
      take: take ? parseInt(take) : undefined,
      categoryId,
      brandId,
      isActive,
    });
  }

  @Public()
  @Get('featured')
  async getFeatured(@Query('limit') limit?: number) {
    return this.productsService.getFeatured(limit ? parseInt(limit) : 4);
  }

  @Public()
  @Get('best-sellers')
  async getBestSellers(@Query('limit') limit?: number) {
    return this.productsService.getBestSellers(limit ? parseInt(limit) : 4);
  }

  @Public()
  @Get(':slug')
  async findBySlug(@Param('slug') slug: string) {
    return this.productsService.findBySlug(slug);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() data: any) {
    return this.productsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return this.productsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productsService.delete(id);
  }
}
