import { Injectable, NotImplementedException } from '@nestjs/common';
import { MessageCreateDto } from './dto/message-create.dto';
import { MessageDto } from './dto/message-get.dto';
import { MessageUpdateDto } from './dto/message-update.dto';
import { IMessageService } from './interfaces/messages.interfaces';

@Injectable()
export class MessageService implements IMessageService {
  public async getById(id: number): Promise<MessageDto> {
    throw new NotImplementedException();
  }
  public async get(): Promise<MessageDto[]> {
    throw new NotImplementedException();
  }
  public async update(id: number, dto: MessageUpdateDto): Promise<void> {
    throw new NotImplementedException();
  }
  public async create(dto: MessageCreateDto): Promise<number> {
    throw new NotImplementedException();
  }
  public async remove(id: number): Promise<void> {
    throw new NotImplementedException();
  }
}
