import { User } from './user.model';
import { Model } from 'mongoose';
import { AbstractController } from 'src/abstract.controller';
export declare class UserController extends AbstractController<User> {
    protected readonly service: Model<User>;
    constructor(service: Model<User>);
}
