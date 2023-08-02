import { Injectable, Inject } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductDTO } from './dto/products.dto';
import { PRODUCT_REPOSITORY } from 'src/core/constants';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productsRepository: typeof Product,
  ) {}

  async create(newProductData: ProductDTO): Promise<Product> {
    const newProduct = { ...newProductData };
    return await this.productsRepository.create<Product>(newProduct);
  }

  async findOne(id: number): Promise<Product> {
    return await this.productsRepository.findOne<Product>({ where: { id } });
  }
}
