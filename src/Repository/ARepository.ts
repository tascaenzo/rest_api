import { Repository } from 'typeorm'
import { IRepository } from './IRepository'

export abstract class ARepository<Entity> implements IRepository<Entity>{

    constructor(protected readonly repo: Repository<Entity>) { }

    async create(entity: Entity): Promise<Entity> {
        return this.repo.save(entity)
    }

    async update(id: number, entity: Entity) {
        return this.repo.update(id, entity)
    }

    async findAll(): Promise<Entity[]> {
        return this.repo.find()
    }

    async findOne(id: number): Promise<Entity> {
        return this.repo.findOne(id)
    }

    async remove(id: number): Promise<void> {
        await this.repo.delete(id)
    }
}