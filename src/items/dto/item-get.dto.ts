import { ItemType } from 'src/types/item-type.enum';

export class ItemDto {
  public id: number;
  public name: string;
  public type: ItemType;
  public legendaryCount: number;
}
