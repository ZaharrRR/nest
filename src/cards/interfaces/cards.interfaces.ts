import { CardCreateDto } from '../dto/card-create.dto';
import { CardDto } from '../dto/card-get.dto';
import { CardUpdateDto } from '../dto/card-update.dto';

export const ICardServiceToken = Symbol('ICardService');
export interface ICardService {
  getById(id: number): Promise<CardDto>;
  get(): Promise<CardDto[]>;
  update(id: number, dto: CardUpdateDto): Promise<void>;
  create(dto: CardCreateDto): Promise<number>;
  remove(id: number): Promise<void>;
}
