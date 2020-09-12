import { IConverter } from "./IConverter";

export abstract class AConverter<Entity, Dto> implements IConverter<Entity, Dto>{

    /**************************************************
    *             OVERAID toDto, toEntity             * 
    ***************************************************/

    toDto(entity: Entity): Dto {
        throw new Error("Method not implemented.")
    }

    toEntity(dto: Dto): Entity {
        throw new Error("Method not implemented.")
    }

    toEntityList(dtoList: Dto[]): Entity[] {
        let tmp: Entity[] = [];
        for (let dto of dtoList) {
            tmp.push(this.toEntity(dto))
        }
        return tmp;
    }

    toDtoList(entityList: Entity[]): Dto[] {
        let tmp: Dto[] = [];
        for (let entity of entityList) {
            tmp.push(this.toDto(entity))
        }
        return tmp;
    }

}