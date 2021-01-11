import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CoffeeDto } from 'libs/data/src/lib/coffeeDto';
import { UpdateCoffeeDto } from 'libs/data/src/lib/coffeeUpdateDto'

@Injectable()
export class CoffeeService {

  private client: ClientProxy

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port:8877
      }
    })
  }

  getCoffee() {
    return this.client.send('getCoffees', '')
  }

  getCoffeeById(
    id: string
  ) {
    return this.client.send('getCoffeeById', id)
  }

  addCoffee(
    coffeeDto: CoffeeDto
  ) {
    return this.client.send('addCoffee', coffeeDto)
  }

  deleteCoffee(
    id: string
  ) {
    return this.client.send('deleteCoffee', id)
  }

  updateCoffee(
    updateCoffeeDto: UpdateCoffeeDto
  ) {
    return this.client.send('updateCoffee', updateCoffeeDto)
  }

}
