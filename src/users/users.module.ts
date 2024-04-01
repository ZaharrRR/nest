import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { IUserServiceToken } from './interfaces/users.interfaces';
@Module({
  controllers: [UsersController],
  providers: [{ provide: IUserServiceToken, useClass: UserService }],
  exports: [IUserServiceToken],
})
export class UsersModule {}
