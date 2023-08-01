// import { randomUUID } from 'node:crypto';
// import {
//   Column,
//   Model,
//   Table,
//   BeforeCreate,
//   DataType,
// } from 'sequelize-typescript';

// @Table
// export class ProductModel extends Model {
//   @Column
//   item: string;

//   @Column
//   category: string;

//   @Column
//   image: string | null;

//   @Column
//   unit: number;

//   @Column({
//     type: DataType.FLOAT,
//   })
//   price: number;

//   @Column
//   user_id: string;

//   @BeforeCreate
//   static assignUUID(instance: ProductModel) {
//     instance.id = randomUUID();
//   }
// }
