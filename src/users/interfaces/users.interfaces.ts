import { UserCreateDto } from '../dto/user-create.dto';
import { UserDto } from '../dto/user-get.dto';
import { UserUpdateDto } from '../dto/user-update.dto';

export const IUserServiceToken = Symbol('IUserService');
export interface IUserService {
  getById(id: number): Promise<UserDto>;
  get(): Promise<UserDto[]>;
  update(id: number, dto: UserUpdateDto): Promise<void>;
  create(dto: UserCreateDto): Promise<number>;
  remove(id: number): Promise<void>;
}
