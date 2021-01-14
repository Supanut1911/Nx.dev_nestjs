import { Injectable } from '@nestjs/common';

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
    async getTodos() {
        return todos
    }
}
