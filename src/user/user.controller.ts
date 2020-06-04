import { Controller, UseGuards, Param, Delete } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { AbstractController } from 'src/abstract.controller';
import { JwtAuthGuard, Roles } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController extends AbstractController<User> {

  constructor(@InjectModel('User') protected readonly service: Model<User>) { super() }

  @Roles('ADMIN')
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
      return await this.service.findById(id).remove()
  }


}

