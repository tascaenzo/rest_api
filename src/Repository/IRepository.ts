export interface IRepository<Entity> {

    create(user: Entity): Promise<Entity>

    update(id: Number, user: Entity)

    findAll(): Promise<Entity[]>

    findOne(id: Number): Promise<Entity>

    remove(id: Number): Promise<void>

}