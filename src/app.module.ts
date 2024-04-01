import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoadTimeInterceptor } from './interceptors/load-time.interceptor';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from './domain/database-config.service';
import { Card } from './entities/card.entity';
import { Item } from './entities/item.entity';
import { User } from './entities/user.entity';
import { CardsModule } from './cards/cards.module';
import { ItemsModule } from './items/items.module';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CardsModule,
    ItemsModule,
    MessagesModule,
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    TypeOrmModule.forFeature([Card, Item, User]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoadTimeInterceptor,
    },
  ],
})
export class AppModule {}
