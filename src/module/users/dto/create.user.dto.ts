import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsOptional,
} from 'class-validator';

// data transfer object
export class CreateUserDto {
  @IsString({ message: 'Name must be a string.' })
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString({
    message: 'Password must contain a min of 6 and a max of 12 characters.',
  })
  @IsNotEmpty()
  @MinLength(6)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @IsString({ message: 'Avatar needs image link.' })
  @IsOptional()
  avatar: string;
}
