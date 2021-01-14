import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TodoDto } from '../../../../../libs/data/src/lib/todoDto';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
    constructor(private todoService: TodoService) {}

    @MessagePattern('getTodo')
    getTodos() {
        return this.todoService.getTodos()
    }

    @MessagePattern('addTodo')
    addTodo(
        payload: TodoDto
    ) {
        return this.todoService.addTodo(payload)
    }
}
