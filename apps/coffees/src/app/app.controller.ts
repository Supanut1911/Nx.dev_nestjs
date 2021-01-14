import { Controller, Get, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CoffeeDto } from '../../../../libs/data/src/lib/coffeeDto';
import { AppService } from './app.service';
import { UpdateCoffeeDto } from '../../../../libs/data/src/lib/coffeeUpdateDto';
import { ExceptionFilter } from './exceptions/rpc-exception.filter';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../../../../libs/data/src/lib/jwtAuth.guard'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @MessagePattern('getCoffees')
  getCoffees() {
    return this.appService.getCoffee();
  }
  
  @MessagePattern('getCoffeeById')
  getCoffeeById(id: string) {
    return this.appService.getCoffeeById(id)
  }

  // @UsePipes(new ValidationPipe())
  @UseFilters(new ExceptionFilter())
  @MessagePattern('addCoffee')
  addCoffee(data: CoffeeDto) {
    return this.appService.addCoffee(data)
  }

  @MessagePattern('deleteCoffee')
  deleteCoffee(id: string) {
    return this.appService.deleteCoffee(id)
  }

  @MessagePattern('updateCoffee')
  updateCoffee(
    payload: UpdateCoffeeDto
  ) {
    return this.appService.updateCoffee(payload)
  } 
}
