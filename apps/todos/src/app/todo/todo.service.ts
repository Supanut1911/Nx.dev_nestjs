import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

let todos = [
    {
        activity: 'wake up',
        time: 30
    },
    {
        activity: 'work',
        time: 60
    },
    {
        activity: 'relax',
        time: 90
    },
    {
        activity: 'workout',
        time: 200
    },
    {
        activity: 'sleep',
        time: 400
    },
]

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo)
        private readonly todoRepo: Repository<Todo>
    ){}

    async getTodos() {
        return await this.todoRepo.find()
    }
}
