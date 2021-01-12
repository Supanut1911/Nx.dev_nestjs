import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class TodoService {
    private client: ClientProxy

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 8899
            }
        })
    }

  getGetTodo() {
    return this.client.send('getTodo', '')
  }
}