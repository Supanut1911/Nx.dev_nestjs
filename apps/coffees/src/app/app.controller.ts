import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Coffee } from '../../../../libs/data/src/lib/data';
import { CoffeeDto } from '../../../../libs/data/src/lib/coffeeDto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('getCoffees')
  getCoffees() {
    return this.appService.getCoffee();
  }
  
  @UsePipes(new ValidationPipe())
  @MessagePattern('addCoffee')
  addCoffee(data: CoffeeDto) {
    return this.appService.addCoffee(data)
  }

  @MessagePattern('deleteCoffee')
  deleteCoffee(id: string) {
    return this.appService.deleteCoffee(id)
  }
}
