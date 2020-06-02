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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_model_1 = require("../user/user.model");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const constants_1 = require("./constants");
let AuthService = (() => {
    var _a;
    let AuthService = class AuthService {
        constructor(userService, jwtService) {
            this.userService = userService;
            this.jwtService = jwtService;
        }
        async validateUser(username, pass) {
            const user = await this.userService.findOne({ username });
            if (user && user.password === pass) {
                return user;
            }
            return null;
        }
        async login(user) {
            const payload = { username: user.username, _id: user._id };
            return {
                access_token: this.jwtService.sign(payload),
                expired_token: constants_1.jwtConstants.signOptions.expiresIn,
                user
            };
        }
    };
    AuthService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel('User')),
        __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, jwt_1.JwtService])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map