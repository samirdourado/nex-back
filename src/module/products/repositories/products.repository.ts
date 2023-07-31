import { CreateProductDTO } from '../dto/create.product.dto';
import { UpdateProductDTO } from '../dto/update.product.dto';
import { Product } from '../entities/product.entity';

export abstract class ProductsRepository {
  abstract create(data: CreateProductDTO): Promise<Product> | Product;
  abstract findOne(id: string): Promise<Product | undefined> | Product;
  abstract findAll(group: string | undefined): Promise<Product[] | object>;
  abstract update(
    id: string,
    data: UpdateProductDTO,
  ): Promise<Product> | Product;
  abstract delete(id: string): Promise<void> | void;
}
