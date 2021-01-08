import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoffeeService } from '../app/services/coffee.service';
import { TodoService } from '../app/services/todo.service';
import { Coffee } from 'libs/data/src/lib/data';

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

  @Post('/coffee')
  addCoffee(
    @Body() coffeeDto: Coffee
  ) {
    return this.coffeeService.addCoffee(coffeeDto)
  }

  @Get('/todo')
  getTodo() {
    return this.todoService.getGetTodo()
  }
}
