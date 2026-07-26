import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto, ProductQueryDto } from './dto/create-product.dto';
import { Public } from '../common/decorators/public.decorator';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Public()
  @Get()
  findAll(@Query() query: ProductQueryDto) {
    return this.productsService.findAll(query);
  }

  @Public()
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.productsService.findBySlug(slug);
  }

  @Get(':id')
  findOneById(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.remove(id);
  }

  @Public()
  @Get('featured')
  findFeatured(@Query('limit') limit?: number) {
    return this.productsService.findFeatured(limit ? parseInt(limit) : 8);
  }

  @Public()
  @Get('best-sellers')
  findBestSellers(@Query('limit') limit?: number) {
    return this.productsService.findBestSellers(limit ? parseInt(limit) : 8);
  }

  @Public()
  @Get('category/:categoryId')
  findByCategory(
    @Param('categoryId') categoryId: string,
    @Query() query: ProductQueryDto,
  ) {
    return this.productsService.findByCategory(categoryId, query);
  }

  @Public()
  @Get('brand/:brandId')
  findByBrand(
    @Param('brandId') brandId: string,
    @Query() query: ProductQueryDto,
  ) {
    return this.productsService.findByBrand(brandId, query);
  }

  @Public()
  @Get('search')
  search(@Query('q') searchTerm: string, @Query() query: ProductQueryDto) {
    return this.productsService.search(searchTerm, query);
  }
}
