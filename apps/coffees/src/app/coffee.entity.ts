

import { IsString } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coffee extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @IsString()
    @Column()
    name:string

    @Column()
    price:number
}