import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeRepository } from './coffee.repository';
// import { typeOrmConfig } from './config/typeorm.config';
import { typeOrmConfig } from '../../../../libs/data/src/lib/orm.config'
import { AuthModule } from 'libs/auth/src/lib/auth.module'
import { Coffee } from './coffee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Coffee]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
