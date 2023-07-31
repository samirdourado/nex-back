import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './repositories/products.repository';
import { ProductsInMemoryRepository } from './repositories/in-memory/products.in-memory.repository';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: ProductsRepository,
      useClass: ProductsInMemoryRepository,
    },
  ],
})
export class ProductsModule {}
