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
exports.BankAccountTypes = void 0;
const typeorm_1 = require("typeorm");
const BankAccounts_1 = require("./BankAccounts");
let BankAccountTypes = (() => {
    let BankAccountTypes = class BankAccountTypes extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], BankAccountTypes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "LABEL", length: 100 }),
        __metadata("design:type", String)
    ], BankAccountTypes.prototype, "label", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "VALUE", length: 100 }),
        __metadata("design:type", String)
    ], BankAccountTypes.prototype, "value", void 0);
    __decorate([
        typeorm_1.OneToMany(() => BankAccounts_1.BankAccounts, (bankAccounts) => bankAccounts.accountType),
        __metadata("design:type", Array)
    ], BankAccountTypes.prototype, "bankAccounts", void 0);
    BankAccountTypes = __decorate([
        typeorm_1.Entity("BankAccountTypes")
    ], BankAccountTypes);
    return BankAccountTypes;
})();
exports.BankAccountTypes = BankAccountTypes;
//# sourceMappingURL=BankAccountTypes.js.map