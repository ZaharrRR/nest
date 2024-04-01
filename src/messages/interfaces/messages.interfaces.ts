import { MessageCreateDto } from '../dto/message-create.dto';
import { MessageDto } from '../dto/message-get.dto';
import { MessageUpdateDto } from '../dto/message-update.dto';

export const IMessageServiceToken = Symbol('IMessageService');
export interface IMessageService {
  getById(id: number): Promise<MessageDto>;
  get(): Promise<MessageDto[]>;
  update(id: number, dto: MessageUpdateDto): Promise<void>;
  create(dto: MessageCreateDto): Promise<number>;
  remove(id: number): Promise<void>;
}
