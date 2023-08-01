import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';
import {
  Column,
  Model,
  Table,
  BeforeCreate,
  HasMany,
  DataType,
} from 'sequelize-typescript';
import { Product } from 'src/module/products/entities/product.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Exclude()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  avatar: string | null;

  @HasMany(() => Product)
  products: Product[];

  @BeforeCreate
  static assignUUID(instance: User) {
    instance.id = randomUUID();
  }
}

// import { Exclude } from 'class-transformer';
// import { randomUUID } from 'node:crypto';

// export class User {
//   readonly id: string;

//   name: string;

//   email: string;

//   @Exclude()
//   password: string;

//   avatar: string | null;

//   constructor() {
//     this.id = randomUUID();
//   }
// }
