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
exports.BankAccounts = void 0;
const typeorm_1 = require("typeorm");
const Customers_1 = require("./Customers");
const BankAccountTypes_1 = require("./BankAccountTypes");
const Transactions_1 = require("./Transactions");
const Transference_1 = require("./Transference");
let BankAccounts = (() => {
    let BankAccounts = class BankAccounts extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], BankAccounts.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "name", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], BankAccounts.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "createAt", nullable: true, unsigned: true }),
        __metadata("design:type", Number)
    ], BankAccounts.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "customerId" }),
        __metadata("design:type", Number)
    ], BankAccounts.prototype, "customerId", void 0);
    __decorate([
        typeorm_1.Column("enum", {
            name: "status",
            enum: ["ACTIVE", "INACTIVE", "BLOKED", "DELETED"],
            default: () => "'ACTIVE'",
        }),
        __metadata("design:type", String)
    ], BankAccounts.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "balance", unsigned: true, default: () => "'0'" }),
        __metadata("design:type", Number)
    ], BankAccounts.prototype, "balance", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "accountTypeId" }),
        __metadata("design:type", Number)
    ], BankAccounts.prototype, "accountTypeId", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => Customers_1.Customers, (customers) => customers.bankAccounts, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "customerId", referencedColumnName: "id" }]),
        __metadata("design:type", Customers_1.Customers)
    ], BankAccounts.prototype, "customer", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BankAccountTypes_1.BankAccountTypes, (bankAccountTypes) => bankAccountTypes.bankAccounts, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
        typeorm_1.JoinColumn([{ name: "accountTypeId", referencedColumnName: "id" }]),
        __metadata("design:type", BankAccountTypes_1.BankAccountTypes)
    ], BankAccounts.prototype, "accountType", void 0);
    __decorate([
        typeorm_1.OneToMany(() => Transactions_1.Transactions, (transactions) => transactions.bankAccount),
        __metadata("design:type", Array)
    ], BankAccounts.prototype, "transactions", void 0);
    __decorate([
        typeorm_1.OneToMany(() => Transference_1.Transference, (transference) => transference.fromBankAccount),
        __metadata("design:type", Array)
    ], BankAccounts.prototype, "transferences", void 0);
    __decorate([
        typeorm_1.OneToMany(() => Transference_1.Transference, (transference) => transference.toBankAccount),
        __metadata("design:type", Array)
    ], BankAccounts.prototype, "transferences2", void 0);
    BankAccounts = __decorate([
        typeorm_1.Index("BankAccounts_FK", ["customerId"], {}),
        typeorm_1.Index("BankAccounts_FK_1", ["accountTypeId"], {}),
        typeorm_1.Entity("BankAccounts")
    ], BankAccounts);
    return BankAccounts;
})();
exports.BankAccounts = BankAccounts;
//# sourceMappingURL=BankAccounts.js.map