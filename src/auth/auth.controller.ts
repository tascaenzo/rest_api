import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { JwtAuthGuard, Roles } from './guards/jwt-auth.guard';
//import { RolesGuard, Roles } from './guards/roles.guard'

/*
 * @Author Enzo Tasca
 */

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }


  //@Roles('USER','ADMIN')
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return 'sei autorizzato';
  }


}
