import { IConverter } from "../Converter/IConverter";
import { IRepository } from "../repository/IRepository";
import { IService } from "./IService";

export abstract class AService<Entity, Dto> implements IService<Dto>{

    constructor(
        protected readonly repository: IRepository<Entity>,
        protected readonly converter: IConverter<Entity, Dto>
    ) { }

    async create(dto: Dto): Promise<Dto> {
        return this.converter.toDto(await this.repository.create(this.converter.toEntity(dto)));
    }

    async findAll(): Promise<Dto[]> {
        return this.converter.toDtoList(await this.repository.findAll())
    }

    async findOne(id: number): Promise<Dto> {
        return this.converter.toDto(await this.repository.findOne(id))
    }

    remove(id: number): Promise<void> {
        return this.repository.remove(id)
    }

    update(id: number, dto: Dto) {
        return this.repository.update(id, this.converter.toEntity(dto))
    }

}