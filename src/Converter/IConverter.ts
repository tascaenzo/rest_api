import { Entity } from "typeorm";

export interface IConverter <Entity, Dto>{

    toDto(entity: Entity): Dto
    toEntity(dto: Dto): Entity

    toEntityList(dtoList: Dto[]): Entity[] 
    toDtoList(entityList: Entity[]): Dto[] 

}