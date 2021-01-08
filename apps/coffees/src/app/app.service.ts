import { ConflictException, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
// import { Coffee } from 'libs/data/src/lib/data'
import { Coffee } from './coffee.entity'
import { CoffeeDto } from 'libs/data/src/lib/coffeeDto'
import { CoffeeRepository } from './coffee.repository';
import { UpdateCoffeeDto } from '../../../../libs/data/src/lib/coffeeUpdateDto';

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

  async updateCoffee(
    payload: UpdateCoffeeDto
  ) {

    let { id, name , price} = payload

    try {
      console.log('yaaaaaaaa',id);
      
      let coffee = await this.coffeeRepository.findOne({ id })
      if(!coffee) {
        throw new RpcException('update fail')
      }
      // let oldName = coffee.name
      // let oldPrice = coffee.price

    //   if(name == undefined) {
    //       coffee.name = name
    //       await coffee.save()
    //   }
      
    //   if(price == undefined) {
    //     coffee.name = name
    //     await coffee.save()
    // }
    
    coffee.name = name
    coffee.price = price

    await coffee.save()
    return {
      message: 'update success'
    }
    } catch (error) {
      throw new RpcException('update fail')
    }
  }
}

