import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Item } from './item.entity';
import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne((type) => Item)
  @JoinColumn({ name: 'sender_id' })
  public sender: User;

  @ManyToOne((type) => Item)
  @JoinColumn({ name: 'recipient_id' })
  public recipient;

  @Column()
  public content: string;

  @Column()
  public sendedUtc: Date;
}
