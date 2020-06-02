"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const user_model_1 = require("./user/user.model");
const user_controller_1 = require("./user/user.controller");
let AppModule = (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forRoot('mongodb://localhost/wiki', { useCreateIndex: true }),
                mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_model_1.UserSchema }]),
                auth_module_1.AuthModule
            ],
            controllers: [user_controller_1.UserController],
            providers: [],
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map