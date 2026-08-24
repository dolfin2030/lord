import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Public } from '../common/decorators/public.decorator';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Public()
  @Get()
  async findAll() { return this.categoriesService.findAll(); }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) { return this.categoriesService.findOne(id); }

  @Post()
  async create(@Body() data: any) { return this.categoriesService.create(data); }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any) { return this.categoriesService.update(id, data); }

  @Delete(':id')
  async delete(@Param('id') id: string) { return this.categoriesService.delete(id); }
}
