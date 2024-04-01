import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Card } from 'src/entities/card.entity';
import { Item } from 'src/entities/item.entity';
import { User } from 'src/entities/user.entity';
import { parse } from 'pg-connection-string';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor() {}

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const connectionOptions = parse(process.env.DATABASE_URL);
    console.log(connectionOptions);
    return {
      type: 'postgres',
      host: connectionOptions.host,
      port: +connectionOptions.port,
      username: connectionOptions.user,
      password: connectionOptions.password,
      database: connectionOptions.database,
      entities: [Card, Item, User],
      synchronize: true,
      extra: {
        ssl: {
          rejectUnauthorized: false, // Настройка для самоподписанных сертификатов
        },
      },
    };

    // return {
    //   type: 'postgres',
    //   host: await this.configService.get('DB_HOST'),
    //   port: await this.configService.get<number>('DB_PORT'),
    //   username: await this.configService.get('DB_USERNAME'),
    //   password: await this.configService.get('DB_PASSWORD'),
    //   database: await this.configService.get('DB_DATABASE'),
    //   entities: [Card, Item, User],
    //   synchronize: true, // для разработки, в реальной среде использовать миграции
    // };
  }
}
