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
exports.UserScopeAccess = void 0;
const typeorm_1 = require("typeorm");
const ScopeAccess_1 = require("./ScopeAccess");
const Users_1 = require("./Users");
let UserScopeAccess = (() => {
    let UserScopeAccess = class UserScopeAccess extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], UserScopeAccess.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "userId" }),
        __metadata("design:type", Number)
    ], UserScopeAccess.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column("enum", {
            name: "status",
            enum: ["ACTIVE", "INACTIVE"],
            default: () => "'ACTIVE'",
        }),
        __metadata("design:type", String)
    ], UserScopeAccess.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "scopeAccessId" }),
        __metadata("design:type", Number)
    ], UserScopeAccess.prototype, "scopeAccessId", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => ScopeAccess_1.ScopeAccess, (scopeAccess) => scopeAccess.userScopeAccesses, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
        typeorm_1.JoinColumn([{ name: "scopeAccessId", referencedColumnName: "id" }]),
        __metadata("design:type", ScopeAccess_1.ScopeAccess)
    ], UserScopeAccess.prototype, "scopeAccess", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.userScopeAccesses, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "userId", referencedColumnName: "id" }]),
        __metadata("design:type", Users_1.Users)
    ], UserScopeAccess.prototype, "user", void 0);
    UserScopeAccess = __decorate([
        typeorm_1.Index("UserScopeAccess_FK", ["scopeAccessId"], {}),
        typeorm_1.Index("UserScopeAccess_FK_1", ["userId"], {}),
        typeorm_1.Entity("UserScopeAccess")
    ], UserScopeAccess);
    return UserScopeAccess;
})();
exports.UserScopeAccess = UserScopeAccess;
//# sourceMappingURL=UserScopeAccess.js.map