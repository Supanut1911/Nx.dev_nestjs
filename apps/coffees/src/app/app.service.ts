import { ConflictException, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
// import { Coffee } from 'libs/data/src/lib/data'
import { Coffee } from './coffee.entity'
import { CoffeeDto } from 'libs/data/src/lib/coffeeDto'
import { CoffeeRepository } from './coffee.repository';

@Injectable()
export class AppService {

  constructor(private coffeeRepository: CoffeeRepository) {}

  async getCoffee() {
    return await this.coffeeRepository.find()
  }

  async addCoffee(coffeeDto: CoffeeDto){
    let { name, price } = coffeeDto
    let coffee = new Coffee()
    coffee.name = name
    coffee.price = price

    try {
      await coffee.save()

      return {
        message: "add coffee success"
      }
    } catch (error) {
  
      console.log('yaaaaaaa');
        throw new RpcException('add fail')
    }
  }

  async deleteCoffee(id: string) {
    try {
      let result = await this.coffeeRepository.delete({ id })
      if(result.affected === 0) {
        throw new RpcException('not found Coffee')
      }
      return {
        message: 'delete success'
      }
    } catch (error) {
      throw new RpcException('delete fail')
    }
  }
}

