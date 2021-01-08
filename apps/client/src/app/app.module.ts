import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from 'libs/auth/src/lib/auth.module'
import { TodoService } from '../app/services/todo.service';
import { CoffeeService } from '../app/services/coffee.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [CoffeeService, TodoService],
})
export class AppModule {}
