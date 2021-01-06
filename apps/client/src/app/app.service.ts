import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {

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

  getData(): { message: string } {
    return { message: 'Welcome to client!' };
  }

  getTest() {
    return this.client.send('getTest', '')
  }
}
