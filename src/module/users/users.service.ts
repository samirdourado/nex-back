import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './users.model';
// import { UpdateUserDto } from './dto/update.user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
  ) {}

  async findAll(): Promise<UserModel[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<UserModel> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  // async update(id: string, updateUserDto: UpdateUserDto) {
  //   let user = await this.usersRepository.findOne(id);
  //   if (!user) {
  //     throw new NotFoundException('User not found.');
  //   }
  //   user = await this.usersRepository.update(id, updateUserDto);
  //   return user;
  // }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
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
