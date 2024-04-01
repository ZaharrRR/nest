import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Patch,
  Post,
} from '@nestjs/common';
import { ICardServiceToken, ICardService } from './interfaces/cards.interfaces';
import { CardDto } from './dto/card-get.dto';
import { CardUpdateDto } from './dto/card-update.dto';
import { CardCreateDto } from './dto/card-create.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Card } from 'src/entities/card.entity';

@ApiTags('cards')
@Controller('cards')
export class CardsController {
  private readonly cards: ICardService;

  public constructor(@Inject(ICardServiceToken) cards: ICardService) {
    this.cards = cards;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Card,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  public async getById(id: number): Promise<CardDto> {
    return await this.cards.getById(id);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Array<Card>,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  public async get(): Promise<CardDto[]> {
    return await this.cards.get();
  }

  @Post()
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 200, description: 'Record created.' })
  public async create(@Body() dto: CardCreateDto): Promise<number> {
    return await this.cards.create(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 200, description: 'Record updated.' })
  public async update(id: number, @Body() dto: CardUpdateDto): Promise<void> {
    await this.cards.update(id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 200, description: 'Record removed.' })
  public async remove(id: number): Promise<void> {
    await this.cards.remove(id);
  }
}
