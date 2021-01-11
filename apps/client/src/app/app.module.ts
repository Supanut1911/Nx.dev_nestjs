import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from 'libs/auth/src/lib/auth.module'
import { TodoService } from '../app/services/todo.service';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [AuthModule, CoffeeModule],
  controllers: [AppController],
  providers: [TodoService],
})
export class AppModule {}
