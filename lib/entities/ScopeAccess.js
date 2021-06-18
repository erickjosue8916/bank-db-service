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
exports.ScopeAccess = void 0;
const typeorm_1 = require("typeorm");
const RoleScopeAccess_1 = require("./RoleScopeAccess");
const UserScopeAccess_1 = require("./UserScopeAccess");
let ScopeAccess = (() => {
    let ScopeAccess = class ScopeAccess extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.Column("varchar", { name: "name", length: 100 }),
        __metadata("design:type", String)
    ], ScopeAccess.prototype, "name", void 0);
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], ScopeAccess.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToMany(() => RoleScopeAccess_1.RoleScopeAccess, (roleScopeAccess) => roleScopeAccess.scopeAccess),
        __metadata("design:type", Array)
    ], ScopeAccess.prototype, "roleScopeAccesses", void 0);
    __decorate([
        typeorm_1.OneToMany(() => UserScopeAccess_1.UserScopeAccess, (userScopeAccess) => userScopeAccess.scopeAccess),
        __metadata("design:type", Array)
    ], ScopeAccess.prototype, "userScopeAccesses", void 0);
    ScopeAccess = __decorate([
        typeorm_1.Entity("ScopeAccess")
    ], ScopeAccess);
    return ScopeAccess;
})();
exports.ScopeAccess = ScopeAccess;
//# sourceMappingURL=ScopeAccess.js.map