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
exports.Customers = void 0;
const typeorm_1 = require("typeorm");
const BankAccounts_1 = require("./BankAccounts");
const Documents_1 = require("./Documents");
let Customers = (() => {
    let Customers = class Customers extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Customers.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "firstName", length: 100 }),
        __metadata("design:type", String)
    ], Customers.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "lastName", length: 100 }),
        __metadata("design:type", String)
    ], Customers.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "phoneNumber", length: 100 }),
        __metadata("design:type", String)
    ], Customers.prototype, "phoneNumber", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "createAt", nullable: true, unsigned: true }),
        __metadata("design:type", Number)
    ], Customers.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "dateBirth", nullable: true, unsigned: true }),
        __metadata("design:type", Number)
    ], Customers.prototype, "dateBirth", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "email", length: 100 }),
        __metadata("design:type", String)
    ], Customers.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "username", length: 100 }),
        __metadata("design:type", String)
    ], Customers.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "password", length: 100 }),
        __metadata("design:type", String)
    ], Customers.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column("enum", {
            name: "status",
            enum: ["ACTIVE", "INACTIVE", "DELETED", "BLOKED"],
            default: () => "'ACTIVE'",
        }),
        __metadata("design:type", String)
    ], Customers.prototype, "status", void 0);
    __decorate([
        typeorm_1.OneToMany(() => BankAccounts_1.BankAccounts, (bankAccounts) => bankAccounts.customer),
        __metadata("design:type", Array)
    ], Customers.prototype, "bankAccounts", void 0);
    __decorate([
        typeorm_1.OneToMany(() => Documents_1.Documents, (documents) => documents.customer),
        __metadata("design:type", Array)
    ], Customers.prototype, "documents", void 0);
    Customers = __decorate([
        typeorm_1.Entity("Customers")
    ], Customers);
    return Customers;
})();
exports.Customers = Customers;
//# sourceMappingURL=Customers.js.map