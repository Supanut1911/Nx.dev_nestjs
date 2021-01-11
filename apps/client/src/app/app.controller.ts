import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from '../app/services/todo.service';
import { CoffeeDto } from 'libs/data/src/lib/coffeeDto';
import { UpdateCoffeeDto } from '../../../../libs/data/src/lib/coffeeUpdateDto';

@Controller()
export class AppController {
  constructor(
    private readonly todoService: TodoService
  ) {}

  // @Get('/coffee')
  // getTest() {
  //   return this.coffeeService.getCoffee()
  // }

  // @Post('/coffee')
  // addCoffee(
  //   @Body() coffeeDto: CoffeeDto
  // ) {
  //   return this.coffeeService.addCoffee(coffeeDto)
  // }

  // @Delete('/coffee/:id')
  // deleteCoffee(
  //   @Param('id') id: string
  // ) {
  //   console.log('this id:',id);
    
  //   return this.coffeeService.deleteCoffee(id)
  // }

  // @Patch('/coffee/:id')
  // updateCoffee(
  //   @Param('id') id:string,
  //   @Body('name') name: string,
  //   @Body('price') price: number,
  // ) {
  //   let payload = new UpdateCoffeeDto()
  //   payload.id = id
  //   payload.name = name
  //   payload.price = price

    
  //   return this.coffeeService.updateCoffee(payload)
  // }

  @Get('/todo')
  getTodo() {
    return this.todoService.getGetTodo()
  }
}
