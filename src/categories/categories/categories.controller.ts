import { Controller, Get, Body, Post } from '@nestjs/common';
import { Categorie } from '../categorie.entity';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  index(): Promise<Categorie[]> {
    return this.categoriesService.findAll();
  }

  @Post()
  async create(@Body() categorieData: Categorie): Promise<any> {
    return this.categoriesService.create(categorieData);
  }
}
