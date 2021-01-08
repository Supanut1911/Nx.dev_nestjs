import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

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

}
