import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CoffeeDto } from 'libs/data/src/lib/coffeeDto';

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

  addCoffee(
    coffeeDto: CoffeeDto
  ) {
    return this.client.send('addCoffee', coffeeDto)
  }
}
