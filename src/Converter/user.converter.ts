import { User } from '../Entity/user.entity'
import { UserDto } from '../Dto/user.dto'

import { AConverter } from './AConverter'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserConverter extends AConverter<User, UserDto> {

    toDto(entity: User): UserDto {
        let id = entity.id === undefined ? null : entity.id
        return new UserDto(
            entity.id,
            entity.firstName,
            entity.lastName,
            entity.isActive
        );
    }

    toEntity(dto: UserDto): User {
        return new User(
            dto.id,
            dto.firstName,
            dto.lastName,
            dto.isActive
        )
    }
}