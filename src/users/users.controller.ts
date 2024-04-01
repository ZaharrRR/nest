import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Patch,
  Post,
} from '@nestjs/common';
import { IUserServiceToken, IUserService } from './interfaces/users.interfaces';
import { UserDto } from './dto/user-get.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { UserCreateDto } from './dto/user-create.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  private readonly users: IUserService;

  public constructor(@Inject(IUserServiceToken) users: IUserService) {
    this.users = users;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: User,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.', type: User })
  @ApiResponse({ status: 404, description: 'Not found.', type: User })
  public async getById(id: number): Promise<UserDto> {
    return await this.users.getById(id);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Array<User>,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.', type: Array<User> })
  @ApiResponse({ status: 404, description: 'Not found.', type: Array<User> })
  public async get(): Promise<UserDto[]> {
    return await this.users.get();
  }

  @Post()
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 200, description: 'Record created.' })
  public async create(@Body() dto: UserCreateDto): Promise<number> {
    return await this.users.create(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.', type: Array<User> })
  @ApiResponse({ status: 200, description: 'Record updated.' })
  public async update(id: number, @Body() dto: UserUpdateDto): Promise<void> {
    await this.users.update(id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.', type: Array<User> })
  @ApiResponse({ status: 200, description: 'Record removed.' })
  public async remove(id: number): Promise<void> {
    await this.users.remove(id);
  }
}
