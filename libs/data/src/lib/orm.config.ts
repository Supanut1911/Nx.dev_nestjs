import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "libs/auth/src/lib/user.entity";
import { Coffee } from '../../../../apps/coffees/src/app/coffee.entity'
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'db_coffee_microservice',
    // entities: [__dirname + '../**/*.entity.{js,ts}'],
    entities: [
        Coffee,
        User
    ],
    synchronize: false
}