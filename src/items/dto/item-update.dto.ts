import { ItemType } from 'src/types/item-type.enum';

export class ItemUpdateDto {
  public name: string;
  public type: ItemType;
  public legendaryCount: number;
}
