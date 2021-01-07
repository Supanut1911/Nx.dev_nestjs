import { Injectable } from '@nestjs/common';

import { Coffee } from 'libs/data/src/lib/data'

let coffees: Coffee[] = [
  {
    name: "Mocha",
    price: 55
  },
  {
    name: "Espresso",
    price: 60
  },
  {
    name: "Latte",
    price: 70
  },
  {
    name: "Americano",
    price: 99
  },
]


@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to coffees!' };
  }

  getTest() {
    return coffees
  }
}

