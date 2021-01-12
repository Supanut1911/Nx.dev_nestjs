import { Module } from '@nestjs/common'; 
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
