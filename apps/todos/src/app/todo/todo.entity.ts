import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todo', { schema: "public" })
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    activity: string

    @Column()
    time: number
}