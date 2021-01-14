import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoDto } from '../../../../../libs/data/src/lib/todoDto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

    @Get()
    getTodo() {
      return this.todoService.getGetTodo()
    }

    @Post()
    addTodo(
      @Body() todoDto: TodoDto
    ) {
      return this.todoService.addTodo(todoDto)
    }
}
