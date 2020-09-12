export interface IService<Dto> {
    create(dto: Dto): Promise<Dto>

    findAll(): Promise<Dto[]>

    findOne(id: number): Promise<Dto>

    remove(id: number): Promise<void>

    update(id: number, dto: Dto)
}