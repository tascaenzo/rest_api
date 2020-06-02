import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.model';
import { Model } from 'mongoose';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: Model<User>, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        expired_token: string;
        user: any;
    }>;
}
