import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'libs/data/src/lib/orm.config'
import { Todo } from './todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Todo])
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
