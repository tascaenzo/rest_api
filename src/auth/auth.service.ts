import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/user/user.model'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { jwtConstants } from './constants'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userService: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne({username})
    if (user && user.password === pass) {
      return user
    }
    return null
  }

  async login(user: any) {
    const payload = { username: user.username, _id: user._id}
    return {
      access_token: this.jwtService.sign(payload),
      expired_token: jwtConstants.signOptions.expiresIn,
      user
    };
  }
}
