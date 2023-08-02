import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { productsProviders } from './products.providers';

@Module({
  providers: [ProductsService, ...productsProviders],
  exports: [ProductsService],
})
export class ProductsModule {}
