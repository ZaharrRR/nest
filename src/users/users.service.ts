import { Injectable, NotImplementedException } from '@nestjs/common';
import { UserCreateDto } from './dto/user-create.dto';
import { UserDto } from './dto/user-get.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { IUserService } from './interfaces/users.interfaces';

@Injectable()
export class UserService implements IUserService {
  public async getById(id: number): Promise<UserDto> {
    throw new NotImplementedException();
  }
  public async get(): Promise<UserDto[]> {
    throw new NotImplementedException();
  }
  public async update(id: number, dto: UserUpdateDto): Promise<void> {
    throw new NotImplementedException();
  }
  public async create(dto: UserCreateDto): Promise<number> {
    throw new NotImplementedException();
  }
  public async remove(id: number): Promise<void> {
    throw new NotImplementedException();
  }
}
