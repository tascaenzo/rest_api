import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module'
import { UserSchema } from './user/user.model'
import { UserController } from './user/user.controller'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/wiki', {useCreateIndex: true}),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    AuthModule
  ],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
