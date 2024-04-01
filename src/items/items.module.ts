import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemService } from './items.service';
import { IItemServiceToken } from './interfaces/items.interfaces';
@Module({
  controllers: [ItemsController],
  providers: [{ provide: IItemServiceToken, useClass: ItemService }],
  exports: [IItemServiceToken],
})
export class ItemsModule {}
