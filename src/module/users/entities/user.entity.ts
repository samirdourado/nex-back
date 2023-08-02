import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';
import {
  Column,
  Model,
  Table,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
import { Product } from 'src/module/products/entities/product.entity';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: randomUUID(),
  })
  id: string;

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
}
