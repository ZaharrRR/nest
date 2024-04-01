import { ICardService } from './interfaces/cards.interfaces';
import { CardDto } from './dto/card-get.dto';
import { CardCreateDto } from './dto/card-create.dto';
import { CardUpdateDto } from './dto/card-update.dto';
import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class CardService implements ICardService {
  public async getById(id: number): Promise<CardDto> {
    throw new NotImplementedException();
  }
  public async get(): Promise<CardDto[]> {
    throw new NotImplementedException();
  }
  public async update(id: number, dto: CardUpdateDto): Promise<void> {
    throw new NotImplementedException();
  }
  public async create(dto: CardCreateDto): Promise<number> {
    throw new NotImplementedException();
  }
  public async remove(id: number): Promise<void> {
    throw new NotImplementedException();
  }
}
