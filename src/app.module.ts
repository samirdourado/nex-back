import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { ProductsModule } from './module/products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
})
export class AppModule {}
