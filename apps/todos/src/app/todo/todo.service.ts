import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoDto } from '../../../../../libs/data/src/lib/todoDto'

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo)
        private readonly todoRepo: Repository<Todo>
    ){}

    async getTodos() {
        return await this.todoRepo.find()
    }

    async addTodo(
        todoDto: TodoDto
    ) {
        let { activity, time } = todoDto
        let todo = this.todoRepo.create()
        todo.activity = activity
        todo.time = time

        try {
            await this.todoRepo.save(todo)
            return {
                message: 'add activity success'
            }
        } catch (error) {
            return new HttpException('add activity fail', HttpStatus.BAD_REQUEST)
        }
    }
}
