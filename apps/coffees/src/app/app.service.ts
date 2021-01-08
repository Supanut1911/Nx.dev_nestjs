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

  async addCoffee(coffeeDto: Coffee): Promise<{}> {
    let { name, price } = coffeeDto
    let coffee = new Coffee()
    coffee.name = name
    coffee.price = price

    await coffees.push(coffee)
    return {
      message: "add coffee success"
    }
  }
}

