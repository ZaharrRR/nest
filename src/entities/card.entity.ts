import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne((type) => Item)
  @JoinColumn({ name: 'item_id' })
  public item: Item;

  @Column()
  public price: number;

  @Column()
  public imagePath: string;

  @Column()
  public date: Date;
}
