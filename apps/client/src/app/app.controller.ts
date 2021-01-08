import { Controller, Get } from '@nestjs/common';
import { CoffeeService } from '../app/services/coffee.service';
import { TodoService } from '../app/services/todo.service';

@Controller()
export class AppController {
  constructor(
    private readonly coffeeService: CoffeeService,
    private readonly todoService: TodoService
  ) {}

  @Get('/coffee')
  getTest() {
    return this.coffeeService.getCoffee()
  }

  @Get('/todo')
  getTodo() {
    return this.todoService.getGetTodo()
  }
}
