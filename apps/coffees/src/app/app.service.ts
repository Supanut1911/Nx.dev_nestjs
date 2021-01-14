import { ConflictException, ForbiddenException, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
// import { Coffee } from 'libs/data/src/lib/data'
import { Coffee } from './coffee.entity'
import { CoffeeDto } from 'libs/data/src/lib/coffeeDto'
import { UpdateCoffeeDto } from '../../../../libs/data/src/lib/coffeeUpdateDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepo: Repository<Coffee>,
  ) {}

  async getCoffee() {
    return await this.coffeeRepo.find()
  }

  async getCoffeeById(id: string) {
    const found  = await this.coffeeRepo.findOne( {id})
        if (!found) {
            return new HttpException('coffee_id not found', HttpStatus.NOT_FOUND)
        } else {
           return found
        }
  }

  async addCoffee(coffeeDto: CoffeeDto){
    let { name, price } = coffeeDto
    let coffee = new Coffee()
    coffee.name = name
    coffee.price = price

    try {
      await this.coffeeRepo.save(coffee)

      return {
        message: "add coffee success"
      }
    } catch (error) {
        // throw new RpcException('add fail')
        // throw new ForbiddenException()
        return new HttpException('add fail', HttpStatus.BAD_REQUEST)
    }
  }

  async deleteCoffee(id: string) {
    try {
      let result = await this.coffeeRepo.delete({ id })
      if(result.affected === 0) {
        throw new RpcException('not found Coffee')
      }
      return {
        message: 'delete success'
      }
    } catch (error) {
      return {
        status: 404,
        message: "not found id"
      }
      // throw new RpcException('delete fail')
    }
  }

  async updateCoffee(
    payload: UpdateCoffeeDto
  ) {

    let { id, name , price} = payload

    try {
      let coffee = await this.coffeeRepo.findOne({ id })
      if(!coffee) {
        throw new RpcException('update fail')
      }

    coffee.name = name
    coffee.price = price

    await this.coffeeRepo.save(coffee)
      return {
        message: 'update success'
      }
    } catch (error) {
      throw new RpcException('update fail')
    }
  }
}

