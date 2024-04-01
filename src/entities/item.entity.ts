import { ItemType } from 'src/types/item-type.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public type: ItemType;

  @Column()
  public legendaryCount: number;
}
