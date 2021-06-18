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
exports.RoleScopeAccess = void 0;
const typeorm_1 = require("typeorm");
const Role_1 = require("./Role");
const ScopeAccess_1 = require("./ScopeAccess");
let RoleScopeAccess = (() => {
    let RoleScopeAccess = class RoleScopeAccess extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], RoleScopeAccess.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "roleId" }),
        __metadata("design:type", Number)
    ], RoleScopeAccess.prototype, "roleId", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "scopeAccessId" }),
        __metadata("design:type", Number)
    ], RoleScopeAccess.prototype, "scopeAccessId", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => Role_1.Role, (role) => role.roleScopeAccesses, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "roleId", referencedColumnName: "id" }]),
        __metadata("design:type", Role_1.Role)
    ], RoleScopeAccess.prototype, "role", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => ScopeAccess_1.ScopeAccess, (scopeAccess) => scopeAccess.roleScopeAccesses, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
        typeorm_1.JoinColumn([{ name: "scopeAccessId", referencedColumnName: "id" }]),
        __metadata("design:type", ScopeAccess_1.ScopeAccess)
    ], RoleScopeAccess.prototype, "scopeAccess", void 0);
    RoleScopeAccess = __decorate([
        typeorm_1.Index("RoleScopeAccess_FK", ["roleId"], {}),
        typeorm_1.Index("RoleScopeAccess_FK_1", ["scopeAccessId"], {}),
        typeorm_1.Entity("RoleScopeAccess")
    ], RoleScopeAccess);
    return RoleScopeAccess;
})();
exports.RoleScopeAccess = RoleScopeAccess;
//# sourceMappingURL=RoleScopeAccess.js.map