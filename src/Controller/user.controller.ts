import { Controller } from '@nestjs/common'

import { User } from '../Entity/user.entity'
import { UserService } from '../Service/user.service'
import { AController } from './AController'

@Controller('user')
export class UsersController extends AController<User>{

    constructor(
        protected readonly service: UserService,
    ) { super(service) }

}
