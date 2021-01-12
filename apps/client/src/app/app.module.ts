import { Module } from '@nestjs/common';
import { AuthModule } from 'libs/auth/src/lib/auth.module'
import { CoffeeModule } from './coffee/coffee.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    AuthModule,
    CoffeeModule,
    TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
