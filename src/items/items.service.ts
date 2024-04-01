import { Injectable, NotImplementedException } from '@nestjs/common';
import { ItemCreateDto } from './dto/item-create.dto';
import { ItemDto } from './dto/item-get.dto';
import { ItemUpdateDto } from './dto/item-update.dto';
import { IItemService } from './interfaces/items.interfaces';

@Injectable()
export class ItemService implements IItemService {
  public async getById(id: number): Promise<ItemDto> {
    throw new NotImplementedException();
  }
  public async get(): Promise<ItemDto[]> {
    throw new NotImplementedException();
  }
  public async update(id: number, dto: ItemUpdateDto): Promise<void> {
    throw new NotImplementedException();
  }
  public async create(dto: ItemCreateDto): Promise<number> {
    throw new NotImplementedException();
  }
  public async remove(id: number): Promise<void> {
    throw new NotImplementedException();
  }
}
