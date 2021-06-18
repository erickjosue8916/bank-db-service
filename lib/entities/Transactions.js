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
exports.Transactions = void 0;
const typeorm_1 = require("typeorm");
const TransactionTypes_1 = require("./TransactionTypes");
const BankAccounts_1 = require("./BankAccounts");
const Transference_1 = require("./Transference");
let Transactions = (() => {
    let Transactions = class Transactions extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Transactions.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "bankAccountId" }),
        __metadata("design:type", Number)
    ], Transactions.prototype, "bankAccountId", void 0);
    __decorate([
        typeorm_1.Column("double", { name: "amount", precision: 22 }),
        __metadata("design:type", Number)
    ], Transactions.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "balance" }),
        __metadata("design:type", Number)
    ], Transactions.prototype, "balance", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "description", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], Transactions.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "createdAt", nullable: true, unsigned: true }),
        __metadata("design:type", Number)
    ], Transactions.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column("enum", {
            name: "status",
            enum: ["SUCCESS", "DRAFT", "CANCELLED"],
            default: () => "'DRAFT'",
        }),
        __metadata("design:type", String)
    ], Transactions.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column("enum", {
            name: "actionType",
            enum: ["CREDIT", "DEBIT"],
            default: () => "'CREDIT'",
        }),
        __metadata("design:type", String)
    ], Transactions.prototype, "actionType", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "transactionTypeId" }),
        __metadata("design:type", Number)
    ], Transactions.prototype, "transactionTypeId", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => TransactionTypes_1.TransactionTypes, (transactionTypes) => transactionTypes.transactions, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
        typeorm_1.JoinColumn([{ name: "transactionTypeId", referencedColumnName: "id" }]),
        __metadata("design:type", TransactionTypes_1.TransactionTypes)
    ], Transactions.prototype, "transactionType", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BankAccounts_1.BankAccounts, (bankAccounts) => bankAccounts.transactions, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "bankAccountId", referencedColumnName: "id" }]),
        __metadata("design:type", BankAccounts_1.BankAccounts)
    ], Transactions.prototype, "bankAccount", void 0);
    __decorate([
        typeorm_1.OneToMany(() => Transference_1.Transference, (transference) => transference.deposit),
        __metadata("design:type", Array)
    ], Transactions.prototype, "transferences", void 0);
    __decorate([
        typeorm_1.OneToMany(() => Transference_1.Transference, (transference) => transference.withdraw),
        __metadata("design:type", Array)
    ], Transactions.prototype, "transferences2", void 0);
    Transactions = __decorate([
        typeorm_1.Index("Transactions_FK", ["transactionTypeId"], {}),
        typeorm_1.Index("Transactions_FK_1", ["bankAccountId"], {}),
        typeorm_1.Entity("Transactions")
    ], Transactions);
    return Transactions;
})();
exports.Transactions = Transactions;
//# sourceMappingURL=Transactions.js.map