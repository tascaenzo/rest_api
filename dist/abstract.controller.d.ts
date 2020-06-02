import { Model } from 'mongoose';
export declare abstract class AbstractController<Schema> {
    protected service: Model<Schema>;
    getAll(): Model<Schema[]>;
    get(id: string): Promise<Schema>;
    insert(user: Schema): Promise<Schema>;
    delete(id: string): Promise<Schema>;
    update(user: any): Promise<any>;
}
