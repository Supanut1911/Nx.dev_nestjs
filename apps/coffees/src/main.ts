import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'
import { AppModule } from './app/app.module';

const logger = new Logger('Coffee Main')

const microservicesOptions = {
  transport: Transport.TCP,
  options: {
    host:'127.0.0.1',
    port:8877
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microservicesOptions)
  app.listen( () => { logger.log('Microservice_coffee is listening...') })
}

bootstrap()
