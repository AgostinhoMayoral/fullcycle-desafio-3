import { Injectable } from '@nestjs/common';
import { Categorie } from '../categorie.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categorie)
    private categorieRepository: Repository<Categorie>,
  ) {}

  async findAll(): Promise<Categorie[]> {
    return await this.categorieRepository.find();
  }

  async create(categorie: Categorie): Promise<Categorie> {
    return await this.categorieRepository.save(categorie);
  }
}
