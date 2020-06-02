import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    
    username: { type: String, required: true, unique: true },
    mail: { type: String, required: true, unique: true },

    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    roles: { type: [], required: true, default: ['USER'] },

}, { versionKey: false /* strict: false */ });

export interface User {
    id: string
    name: string
    surname: string
    username: string
    password: string
    roles: []
}