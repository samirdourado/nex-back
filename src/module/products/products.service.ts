import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create.product.dto';
import { UpdateProductDTO } from './dto/update.product.dto';
import { ProductsRepository } from './repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductsRepository) {}

  async create(createProductDTO: CreateProductDTO) {
    const product = await this.productRepository.create(createProductDTO);
    return product;
  }

  async findAll(group: string | undefined) {
    return this.productRepository.findAll(group);
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne(id);
    return product;
  }

  async update(id: string, updateProductDTO: UpdateProductDTO) {
    const product = await this.productRepository.update(id, updateProductDTO);
    return product;
  }

  async remove(id: string) {
    await this.productRepository.delete(id);
    return;
  }
}
