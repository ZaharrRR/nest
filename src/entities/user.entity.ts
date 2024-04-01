import { ActorRole } from 'src/types/actor-role.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @Column()
  public role: ActorRole;

  @Column()
  public registeredUtc: Date;
}
