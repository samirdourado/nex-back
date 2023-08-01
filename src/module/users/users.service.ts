import { Injectable, Inject } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(newUserData: UserDTO): Promise<User> {
    return await this.userRepository.create<User>(newUserData);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}

// // EM MEMORIA
// import {
//   ConflictException,
//   Injectable,
//   NotFoundException,
// } from '@nestjs/common';
// import { CreateUserDto } from './dto/create.user.dto';
// import { UpdateUserDto } from './dto/update.user.dto';
// import { UsersRepository } from './repositories/users.repository';

// @Injectable()
// export class UsersService {
//   constructor(private usersRepository: UsersRepository) {}
//   async create(createUserDto: CreateUserDto) {
//     const user = await this.usersRepository.findByEmail(createUserDto.email);
//     if (user) {
//       throw new ConflictException('User already exists.');
//     }
//     const newUser = await this.usersRepository.create(createUserDto);

//     return newUser;
//   }

//   async findAll() {
//     const users = await this.usersRepository.findAll();
//     return users;
//   }

//   async findOne(id: string) {
//     const user = await this.usersRepository.findOne(id);
//     if (!user) {
//       throw new NotFoundException('User not found.');
//     }
//     return user;
//   }

//   async update(id: string, updateUserDto: UpdateUserDto) {
//     let user = await this.usersRepository.findOne(id);
//     if (!user) {
//       throw new NotFoundException('User not found.');
//     }
//     user = await this.usersRepository.update(id, updateUserDto);
//     return user;
//   }

//   async remove(id: string) {
//     const user = await this.usersRepository.findOne(id);
//     if (!user) {
//       throw new NotFoundException('User not found.');
//     }
//     await this.usersRepository.delete(id);
//     return;
//   }
// }
