import { Injectable } from '@nestjs/common'

import { AService } from './AService'
import { UserConverter } from '../Converter/user.converter'
import { UserRepo } from '../Repository/user.repository'
import { UserDto } from '../Dto/user.dto'
import { User } from 'src/Entity/user.entity'

@Injectable()
export class UserService extends AService<User, UserDto>{

    constructor(
        protected readonly repository: UserRepo,
        protected readonly converter: UserConverter
    ) { super(repository, converter) }

}