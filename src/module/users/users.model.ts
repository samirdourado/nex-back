// import { Exclude } from 'class-transformer';
// import { randomUUID } from 'node:crypto';
// import {
//   Column,
//   Model,
//   Table,
//   BeforeCreate,
//   HasMany,
// } from 'sequelize-typescript';
// import { ProductModel } from '../products/products.model';

// @Table
// export class UserModel extends Model {
//   @Column
//   name: string;

//   @Column
//   email: string;

//   @Exclude()
//   @Column
//   password: string;

//   @Column
//   avatar: string | null;

//   @HasMany(() => ProductModel)
//   products: ProductModel[];

//   @BeforeCreate
//   static assignUUID(instance: UserModel) {
//     instance.id = randomUUID();
//   }
// }
