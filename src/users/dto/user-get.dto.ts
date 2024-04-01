import { ActorRole } from 'src/types/actor-role.enum';

export class UserDto {
  public id: number;
  public name: string;
  public role: ActorRole;
  public registeredUtc: Date;
}
