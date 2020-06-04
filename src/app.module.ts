import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from './user/user.model'
import { UserController } from './user/user.controller'
import { PassportModule } from '@nestjs/passport'
import { jwtConstants } from './auth/constants'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth/auth.controller'
import { AuthService } from './auth/auth.service'
import { LocalStrategy } from './auth/strategies/local.strategy'
import { JwtStrategy } from './auth/strategies/jwt.strategy'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/wiki', {useCreateIndex: true}),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: jwtConstants.signOptions,
    }),
  ],
  controllers: [UserController, AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AppModule {}
