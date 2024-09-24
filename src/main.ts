import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Task Manager API')
  .setDescription('API documentation for Task Manager project')
  .setVersion('0.0.1')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port);

  return port;
}

bootstrap()
  .then((port) => console.log(`Server has been started on ${port} port.`))
  .catch((error) => console.error(error));
