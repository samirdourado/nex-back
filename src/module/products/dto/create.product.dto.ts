import {
  IsString,
  IsNotEmpty,
  IsInt,
  MinLength,
  IsOptional,
  // IsDecimal,
} from 'class-validator';

export class CreateProductDTO {
  @IsString({ message: 'Item must be a string.' })
  @IsNotEmpty()
  @MinLength(2)
  item: string;

  @IsString({ message: 'Category must be a string.' })
  @IsNotEmpty()
  category: string;

  @IsString({ message: 'Image needs image link.' })
  @IsOptional()
  image: string | null;

  @IsInt({ message: 'Item must be a number.' })
  @IsNotEmpty()
  unit: number;

  // @IsDecimal({ decimal_digits: '2' })
  @IsInt({ message: 'Item must be a number.' })
  @IsNotEmpty()
  price: number;

  @IsString({ message: 'Item must be a string.' })
  @IsNotEmpty()
  user_id?: string;
}
