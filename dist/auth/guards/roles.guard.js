"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const user_model_1 = require("../../user/user.model");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let RolesGuard = (() => {
    var _a;
    let RolesGuard = class RolesGuard {
        constructor(reflector, jwtService, service) {
            this.reflector = reflector;
            this.jwtService = jwtService;
            this.service = service;
        }
        async canActivate(context) {
            try {
                const roles = this.reflector.get('roles', context.getHandler());
                const token = context.switchToHttp().getRequest().headers.authorization.split(' ')[1];
                const user = await this.service.findById(this.jwtService.verify(token)._id);
                let state = false;
                roles.forEach(role => {
                    if (user.roles.includes(role))
                        state = true;
                });
                return state;
            }
            catch (exception) {
                throw new common_1.UnauthorizedException();
            }
        }
    };
    RolesGuard = __decorate([
        common_1.Injectable(),
        __param(2, mongoose_2.InjectModel('User')),
        __metadata("design:paramtypes", [core_1.Reflector,
            jwt_1.JwtService, typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
    ], RolesGuard);
    return RolesGuard;
})();
exports.RolesGuard = RolesGuard;
exports.Roles = (...roles) => common_1.SetMetadata('roles', roles);
//# sourceMappingURL=roles.guard.js.map