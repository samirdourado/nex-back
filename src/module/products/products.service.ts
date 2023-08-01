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
    // return await this.productsRepository.create<Product>(productData);
    const newProduct = { ...newProductData };
    return await this.productsRepository.create<Product>(newProduct);
  }

  async findOne(id: number): Promise<Product> {
    return await this.productsRepository.findOne<Product>({ where: { id } });
  }
}

// // EM MEMORIA
// import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateProductDTO } from './dto/create.product.dto';
// import { UpdateProductDTO } from './dto/update.product.dto';
// import { ProductsRepository } from './repositories/products.repository';

// @Injectable()
// export class ProductsService {
//   constructor(private productRepository: ProductsRepository) {}

//   async create(createProductDTO: CreateProductDTO) {
//     const product = await this.productRepository.create(createProductDTO);

//     return product;
//   }

//   async findAll(group: string | undefined) {
//     return this.productRepository.findAll(group);
//   }

//   async findOne(id: string) {
//     const product = await this.productRepository.findOne(id);

//     if (!product) {
//       throw new NotFoundException('Product not found.');
//     }

//     return product;
//   }

//   async update(id: string, updateProductDTO: UpdateProductDTO) {
//     const product = await this.productRepository.update(id, updateProductDTO);

//     if (!product) {
//       throw new NotFoundException('Product not found.');
//     }

//     return product;
//   }

//   async remove(id: string) {
//     const product = await this.productRepository.findOne(id);

//     if (!product) {
//       throw new NotFoundException('Product not found.');
//     }

//     await this.productRepository.delete(id);

//     return;
//   }
// }
