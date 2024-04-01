import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardService } from './cards.service';
import { ICardServiceToken } from './interfaces/cards.interfaces';

@Module({
  controllers: [CardsController],
  providers: [{ provide: ICardServiceToken, useClass: CardService }],
  exports: [ICardServiceToken],
})
export class CardsModule {}
