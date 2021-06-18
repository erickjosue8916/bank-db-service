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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const UserScopeAccess_1 = require("./UserScopeAccess");
let Users = (() => {
    let Users = class Users extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Users.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "email", length: 100 }),
        __metadata("design:type", String)
    ], Users.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "username", length: 100 }),
        __metadata("design:type", String)
    ], Users.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "password", length: 100 }),
        __metadata("design:type", String)
    ], Users.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column("enum", {
            name: "status",
            enum: ["ACTIVE", "INACTIVE", "DELETED"],
            default: () => "'ACTIVE'",
        }),
        __metadata("design:type", String)
    ], Users.prototype, "status", void 0);
    __decorate([
        typeorm_1.OneToMany(() => UserScopeAccess_1.UserScopeAccess, (userScopeAccess) => userScopeAccess.user),
        __metadata("design:type", Array)
    ], Users.prototype, "userScopeAccesses", void 0);
    Users = __decorate([
        typeorm_1.Entity("Users")
    ], Users);
    return Users;
})();
exports.Users = Users;
//# sourceMappingURL=Users.js.map