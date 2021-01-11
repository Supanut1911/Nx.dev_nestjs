import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoffeeDto } from '../../../../../libs/data/src/lib/coffeeDto';
import { UpdateCoffeeDto } from '../../../../../libs/data/src/lib/coffeeUpdateDto';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeeService: CoffeeService) {}

    @Get()
    getCoffees() {
        return this.coffeeService.getCoffee()
    }

    @Get('/:id')
    getCoffeeById(
        @Param('id') id:string
    ) {
        return this.coffeeService.getCoffeeById(id)
    }

    @Post()
    addCoffee(
        @Body() coffeeDto: CoffeeDto
    ) {
        return this.coffeeService.addCoffee(coffeeDto)
    }

    @Delete('/:id')
    deleteCoffee(
        @Param('id') id: string
    ) {
        return this.coffeeService.deleteCoffee(id)
    }

    @Patch('/:id')
    updateCoffee(
        @Param('id') id:string,
        @Body('name') name: string,
        @Body('price') price: number
    ) {
        let payload = new UpdateCoffeeDto()
        payload.id = id
        payload.name = name
        payload.price = price

        return this.coffeeService.updateCoffee(payload)
    }
}
