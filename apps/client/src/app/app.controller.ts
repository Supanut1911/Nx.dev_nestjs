import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { TodoService } from './todo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly todoService: TodoService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/coffee')
  getTest() {
    return this.appService.getCoffee()
  }

  @Get('/todo')
  getTodo() {
    return this.todoService.getGetTodo()
  }
}
