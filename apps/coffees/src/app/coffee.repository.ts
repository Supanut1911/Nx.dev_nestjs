import { EntityRepository, Repository } from "typeorm";
import { Coffee } from "../app/coffee.entity";

@EntityRepository(Coffee)
export class CoffeeRepository extends Repository<Coffee> {}