import {
  Controller,
  Get,
  Query,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { LoadTimeInterceptor } from 'src/interceptors/load-time.interceptor';
import { MockItemCardsData } from 'src/domain/item-cards.mock';
import { MockVisitInfosData } from 'src/domain/visit-infos.mosk';

@Controller()
@UseInterceptors(LoadTimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  @Render('layouts/home')
  root(@Query('secretKey') secretKey: string) {
    const isAuthorized = secretKey === '123';
    return {
      cards: MockItemCardsData.tempItemCards,
      elements: MockVisitInfosData.tempVisitInfos,
      isAuthorized: isAuthorized,
    };
  }

  @Get('marketplace')
  @Render('layouts/marketplace')
  marketplace(@Query('secretKey') secretKey: string) {
    const isAuthorized = secretKey === '123';
    return {
      isAuthorized: isAuthorized,
    };
  }

  @Get('constructor')
  @Render('layouts/constructor')
  construct(@Query('secretKey') secretKey: string) {
    const isAuthorized = secretKey === '123';
    return {
      isAuthorized: isAuthorized,
    };
  }

  @Get('users')
  @Render('layouts/users')
  users(@Query('secretKey') secretKey: string) {
    const isAuthorized = secretKey === '123';
    return {
      isAuthorized: isAuthorized,
    };
  }
}
