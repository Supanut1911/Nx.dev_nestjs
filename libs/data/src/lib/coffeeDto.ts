import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CoffeeDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsNumber()
    price: number
}