import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../products.repository';
import { CreateProductDTO } from '../../dto/create.product.dto';
import { Product } from '../../entities/product.entity';
import { UpdateProductDTO } from '../../dto/update.product.dto';
// import { plainToInstance } from 'class-transformer';

@Injectable()
export class ProductsInMemoryRepository implements ProductsRepository {
  private database: Product[] = [];

  async create(data: CreateProductDTO): Promise<Product> {
    const newProduct = new Product();
    Object.assign(newProduct, {
      ...data,
    });

    this.database.push(newProduct);

    return newProduct;
  }

  private groupBy(products: Product[], key: string) {
    return products.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur);
      return acc;
    }, {});
  }

  async findAll(group: string): Promise<object | Product[]> {
    if (group) {
      return this.groupBy(this.database, group);
    }
    return this.database;
  }
  async findOne(id: string): Promise<Product> {
    const product = this.database.find((product) => product.id === id);
    return product;
  }

  update(id: string, data: UpdateProductDTO): Product | Promise<Product> {
    const productIndex = this.database.findIndex(
      (product) => product.id === id,
    );
    this.database[productIndex] = {
      ...this.database[productIndex],
      ...data,
    };
    return this.database[productIndex];
  }
  delete(id: string): void | Promise<void> {
    const productIndex = this.database.findIndex(
      (product) => product.id === id,
    );
    this.database.splice(productIndex, 1);
  }
}
