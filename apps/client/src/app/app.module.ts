import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'libs/auth/src/lib/auth.module'
import { TodoService } from './todo.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
