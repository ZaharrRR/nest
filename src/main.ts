import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { LoadTimeInterceptor } from './interceptors/load-time.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const hbs = require('hbs');

  const config = new DocumentBuilder()
    .setTitle('Fallout 76 Fun')
    .setDescription('The Fallout 76 Fun API description')
    .setVersion('1.0')
    .addTag('messages')
    .addTag('users')
    .addTag('items')
    .addTag('cards')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalInterceptors(new LoadTimeInterceptor());
  app.useStaticAssets(join(__dirname, '..', 'frontend'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));

  await app.listen(port, () => {
    console.log(`Port ${port}`);
  });
}
bootstrap();
