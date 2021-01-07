import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'
import { AppModule } from './app/app.module';

const logger = new Logger('Todo Main')

const microservicesOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8899
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microservicesOptions)
  app.listen( () => { logger.log('Microservice_todo is listening...') })
}

bootstrap()


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3333;
//   await app.listen(port, () => {
//     Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
//   });
// }

// bootstrap();
