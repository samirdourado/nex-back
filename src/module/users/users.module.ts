import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { UsersInMemoryRepository } from './repositories/in-memory/users.in-memory.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './users.model';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: UsersRepository,
      useClass: UsersInMemoryRepository,
    },
  ],
  imports: [SequelizeModule.forFeature([UserModel])],
})
export class UsersModule {}
