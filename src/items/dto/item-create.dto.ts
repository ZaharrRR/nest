import { ItemType } from 'src/types/item-type.enum';

export class ItemCreateDto {
  public name: string;
  public type: ItemType;
  public legendaryCount: number;
}
