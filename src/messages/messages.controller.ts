import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Patch,
  Post,
} from '@nestjs/common';
import {
  IMessageServiceToken,
  IMessageService,
} from './interfaces/messages.interfaces';
import { MessageDto } from './dto/message-get.dto';
import { MessageUpdateDto } from './dto/message-update.dto';
import { MessageCreateDto } from './dto/message-create.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Message } from 'src/entities/message.entity';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
  private readonly messages: IMessageService;

  public constructor(@Inject(IMessageServiceToken) messages: IMessageService) {
    this.messages = messages;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Message,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.', type: Array<Message> })
  @ApiOperation({ summary: 'Message get' })
  public async getById(id: number): Promise<MessageDto> {
    return await this.messages.getById(id);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Array<Message>,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.', type: Array<Message> })
  public async get(): Promise<MessageDto[]> {
    return await this.messages.get();
  }

  @Post()
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 200, description: 'Record created.' })
  public async create(@Body() dto: MessageCreateDto): Promise<number> {
    return await this.messages.create(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 200, description: 'Record updated.' })
  public async update(
    id: number,
    @Body() dto: MessageUpdateDto,
  ): Promise<void> {
    await this.messages.update(id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @ApiResponse({ status: 200, description: 'Record removed.' })
  public async remove(id: number): Promise<void> {
    await this.messages.remove(id);
  }
}
