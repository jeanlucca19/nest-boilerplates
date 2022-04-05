import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../table-entity/user.entity";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    async findAll() {
        return this.createQueryBuilder()
        .select('*')
        .getRawMany()
    }
}