import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ARepository } from './ARepository'
import { Repository } from 'typeorm'
import { User } from '../Entity/user.entity'

@Injectable()
export class UserRepo extends ARepository<User>{

    constructor(
        @InjectRepository(User)
        protected readonly repo: Repository<User>
    ) { super(repo) }

}
