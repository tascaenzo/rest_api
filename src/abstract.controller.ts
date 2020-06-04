import { Get, Post, Param, Body, Put, Delete, UseGuards } from '@nestjs/common'
import { Model } from 'mongoose'
import { JwtAuthGuard, Roles } from './auth/guards/jwt-auth.guard'


export abstract class AbstractController<Schema>{

    protected service: Model<Schema>

    @Get()
    async getAll(): Model<Schema[]> {
        return await this.service.find()
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<Schema> {
        return await this.service.findById(id)
    }

    @Post()
    async insert(@Body() user: Schema): Promise<Schema> {
        return await new this.service(user).save()
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Schema> {
        return await this.service.findById(id).remove()
    }

    @Put()
    async update(@Body() user: any) {
        return await this.service.useFindAndModify(user.id, user);
    }

}
