import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//Import Services
import { UserRepo } from './Repository/user.repository';

//Import Entity
import { User } from './Entity/user.entity';

//Import Controllers
import { UsersController } from './Controller/user.controller';

import { UserService } from './Service/user.service'

//Import Converter
import { UserConverter } from './Converter/user.converter';

const Repository = [UserRepo]
const Service = [UserService]
const converter = [UserConverter]

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User]),
  ],

  providers: new Array().concat(
    Repository,
    Service,
    converter
  ),

  controllers: [UsersController],
})
export class AppModule { }
