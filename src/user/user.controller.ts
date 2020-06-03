import { Controller } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { AbstractController } from 'src/abstract.controller';

@Controller('user')
export class UserController extends AbstractController <User>{

  constructor(@InjectModel('User') protected readonly service: Model<User>) { super() }

}

