import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
    constructor(private todoService: TodoService) {}

    @MessagePattern('getTodo')
    getTodos() {
        return this.todoService.getTodos()
    }
}
