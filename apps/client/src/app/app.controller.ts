import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CoffeeService } from '../app/services/coffee.service';
import { TodoService } from '../app/services/todo.service';
import { CoffeeDto } from 'libs/data/src/lib/coffeeDto';

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
  @UsePipes(ValidationPipe)
  addCoffee(
    @Body() coffeeDto: CoffeeDto
  ) {
    return this.coffeeService.addCoffee(coffeeDto)
  }

  @Get('/todo')
  getTodo() {
    return this.todoService.getGetTodo()
  }
}
