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
exports.Documents = void 0;
const typeorm_1 = require("typeorm");
const DocumentType_1 = require("./DocumentType");
const Customers_1 = require("./Customers");
let Documents = (() => {
    let Documents = class Documents extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Documents.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "documentTypeId" }),
        __metadata("design:type", Number)
    ], Documents.prototype, "documentTypeId", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "customerId" }),
        __metadata("design:type", Number)
    ], Documents.prototype, "customerId", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "value", length: 100 }),
        __metadata("design:type", String)
    ], Documents.prototype, "value", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "url", length: 100 }),
        __metadata("design:type", String)
    ], Documents.prototype, "url", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => DocumentType_1.DocumentType, (documentType) => documentType.documents, {
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "documentTypeId", referencedColumnName: "id" }]),
        __metadata("design:type", DocumentType_1.DocumentType)
    ], Documents.prototype, "documentType", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => Customers_1.Customers, (customers) => customers.documents, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "customerId", referencedColumnName: "id" }]),
        __metadata("design:type", Customers_1.Customers)
    ], Documents.prototype, "customer", void 0);
    Documents = __decorate([
        typeorm_1.Index("Documents_FK", ["documentTypeId"], {}),
        typeorm_1.Index("Documents_FK_1", ["customerId"], {}),
        typeorm_1.Entity("Documents")
    ], Documents);
    return Documents;
})();
exports.Documents = Documents;
//# sourceMappingURL=Documents.js.map