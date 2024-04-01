import { ItemCreateDto } from '../dto/item-create.dto';
import { ItemDto } from '../dto/item-get.dto';
import { ItemUpdateDto } from '../dto/item-update.dto';

export const IItemServiceToken = Symbol('IItemService');
export interface IItemService {
  getById(id: number): Promise<ItemDto>;
  get(): Promise<ItemDto[]>;
  update(id: number, dto: ItemUpdateDto): Promise<void>;
  create(dto: ItemCreateDto): Promise<number>;
  remove(id: number): Promise<void>;
}
