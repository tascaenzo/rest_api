import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.model';
import { Model } from 'mongoose';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private readonly jwtService;
    private service;
    constructor(reflector: Reflector, jwtService: JwtService, service: Model<User>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export declare const Roles: (...roles: string[]) => import("@nestjs/common").CustomDecorator<string>;
