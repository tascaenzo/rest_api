import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, SetMetadata } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/user/user.model'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

/*
 * @Author Enzo Tasca
 */

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
    @InjectModel('User') private service: Model<User>
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const roles = this.reflector.get<string[]>('roles', context.getHandler());
      const token = context.switchToHttp().getRequest().headers.authorization.split(' ')[1]
      const user = await this.service.findById(this.jwtService.verify(token)._id)
      let state = false

      roles.forEach(role => {
        if (user.roles.includes(role))
          state = true
      })
      return state

    } catch (exception) {
      throw new UnauthorizedException()
    }
  }
}

export const Roles = (...roles: string[]) => SetMetadata('roles', roles)
