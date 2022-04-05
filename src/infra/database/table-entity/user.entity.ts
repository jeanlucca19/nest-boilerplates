import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    profession: string

    public static from(user: any): UserEntity {
        const entity = new UserEntity
        entity.name = user.name
        entity.age = user.age
        entity.profession = user.profession
        return entity
    }
}