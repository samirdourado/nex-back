import { Injectable, NotFoundException } from '@nestjs/common';
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

    if (!product) {
      throw new NotFoundException('Product not found.');
    }

    return product;
  }

  async update(id: string, updateProductDTO: UpdateProductDTO) {
    const product = await this.productRepository.update(id, updateProductDTO);

    if (!product) {
      throw new NotFoundException('Product not found.');
    }

    return product;
  }

  async remove(id: string) {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found.');
    }

    await this.productRepository.delete(id);

    return;
  }
}
