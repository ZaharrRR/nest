import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Patch,
  Post,
} from '@nestjs/common';
import { IItemServiceToken, IItemService } from './interfaces/items.interfaces';
import { ItemDto } from './dto/item-get.dto';
import { ItemUpdateDto } from './dto/item-update.dto';
import { ItemCreateDto } from './dto/item-create.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Item } from 'src/entities/item.entity';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  private readonly items: IItemService;

  public constructor(@Inject(IItemServiceToken) items: IItemService) {
    this.items = items;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Item,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  public async getById(id: number): Promise<ItemDto> {
    return await this.items.getById(id);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Array<Item>,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  public async get(): Promise<ItemDto[]> {
    return await this.items.get();
  }

  @Post()
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 200, description: 'Record created.' })
  public async create(@Body() dto: ItemCreateDto): Promise<number> {
    return await this.items.create(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 200, description: 'Record updated.' })
  public async update(id: number, @Body() dto: ItemUpdateDto): Promise<void> {
    await this.items.update(id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 200, description: 'Record removed.' })
  public async remove(id: number): Promise<void> {
    await this.items.remove(id);
  }
}
