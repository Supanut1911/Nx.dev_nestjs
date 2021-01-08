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
  {
    name: "Capucino",
    price: 200
  }
]

@Injectable()
export class AppService {
  getCoffee() {
    return coffees
  }
}

