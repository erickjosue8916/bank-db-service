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
exports.Transference = void 0;
const typeorm_1 = require("typeorm");
const BankAccounts_1 = require("./BankAccounts");
const Transactions_1 = require("./Transactions");
let Transference = (() => {
    let Transference = class Transference extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Transference.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "fromBankAccountId" }),
        __metadata("design:type", Number)
    ], Transference.prototype, "fromBankAccountId", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "toBankAccountId" }),
        __metadata("design:type", Number)
    ], Transference.prototype, "toBankAccountId", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "depositId" }),
        __metadata("design:type", Number)
    ], Transference.prototype, "depositId", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "withdrawId" }),
        __metadata("design:type", Number)
    ], Transference.prototype, "withdrawId", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "description", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], Transference.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column("double", { name: "amount", precision: 22 }),
        __metadata("design:type", Number)
    ], Transference.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column("double", { name: "charge", precision: 22, default: () => "'0'" }),
        __metadata("design:type", Number)
    ], Transference.prototype, "charge", void 0);
    __decorate([
        typeorm_1.Column("double", { name: "total", precision: 22, default: () => "'0'" }),
        __metadata("design:type", Number)
    ], Transference.prototype, "total", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "createdAt", nullable: true, unsigned: true }),
        __metadata("design:type", Number)
    ], Transference.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column("enum", {
            name: "status",
            enum: ["SUCCESS", "DRAFT", "CANCELLED", "REFUNDED"],
            default: () => "'DRAFT'",
        }),
        __metadata("design:type", String)
    ], Transference.prototype, "status", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BankAccounts_1.BankAccounts, (bankAccounts) => bankAccounts.transferences, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "fromBankAccountId", referencedColumnName: "id" }]),
        __metadata("design:type", BankAccounts_1.BankAccounts)
    ], Transference.prototype, "fromBankAccount", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BankAccounts_1.BankAccounts, (bankAccounts) => bankAccounts.transferences2, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
        typeorm_1.JoinColumn([{ name: "toBankAccountId", referencedColumnName: "id" }]),
        __metadata("design:type", BankAccounts_1.BankAccounts)
    ], Transference.prototype, "toBankAccount", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => Transactions_1.Transactions, (transactions) => transactions.transferences, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "depositId", referencedColumnName: "id" }]),
        __metadata("design:type", Transactions_1.Transactions)
    ], Transference.prototype, "deposit", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => Transactions_1.Transactions, (transactions) => transactions.transferences2, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
        typeorm_1.JoinColumn([{ name: "withdrawId", referencedColumnName: "id" }]),
        __metadata("design:type", Transactions_1.Transactions)
    ], Transference.prototype, "withdraw", void 0);
    Transference = __decorate([
        typeorm_1.Index("Transference_FK", ["fromBankAccountId"], {}),
        typeorm_1.Index("Transference_FK_1", ["toBankAccountId"], {}),
        typeorm_1.Index("Transference_FK_2", ["depositId"], {}),
        typeorm_1.Index("Transference_FK_3", ["withdrawId"], {}),
        typeorm_1.Entity("Transference")
    ], Transference);
    return Transference;
})();
exports.Transference = Transference;
//# sourceMappingURL=Transference.js.map