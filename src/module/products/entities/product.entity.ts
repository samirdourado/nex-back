import { randomUUID } from 'node:crypto';
import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';
import { User } from 'src/module/users/entities/user.entity';

@Table
export class Product extends Model {
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  unit: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;

  @BelongsTo(() => User)
  user: User;
}
