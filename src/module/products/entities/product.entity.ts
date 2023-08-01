import { randomUUID } from 'node:crypto';
import {
  Column,
  Model,
  Table,
  BeforeCreate,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from 'src/module/users/entities/user.entity';

@Table
export class Product extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  item: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string | null;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  unit: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => User)
  @Column
  user_id: string;

  @BelongsTo(() => User)
  user: User;

  @BeforeCreate
  static assignUUID(instance: Product) {
    instance.id = randomUUID();
  }
}

// import { randomUUID } from 'node:crypto';

// export class Product {
//   readonly id: string;
//   item: string;
//   category: string;
//   image: string | null;
//   unit: number;
//   price: number;
//   user_id?: string;

//   constructor() {
//     this.id = randomUUID();
//   }
// }
