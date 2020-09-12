import { Injectable } from '@nestjs/common'
import { IsString } from 'class-validator'

@Injectable()
export class UserDto {

    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;

    constructor(id: number, firstName: string, lastName: string, isActive: boolean) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
    }

}