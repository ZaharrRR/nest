import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './messages.service';
import { IMessageServiceToken } from './interfaces/messages.interfaces';
@Module({
  controllers: [MessagesController],
  providers: [{ provide: IMessageServiceToken, useClass: MessageService }],
  exports: [IMessageServiceToken],
})
export class MessagesModule {}
