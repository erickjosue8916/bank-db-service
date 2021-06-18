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
exports.DocumentType = void 0;
const typeorm_1 = require("typeorm");
const Documents_1 = require("./Documents");
let DocumentType = (() => {
    let DocumentType = class DocumentType extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], DocumentType.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "name", length: 100 }),
        __metadata("design:type", String)
    ], DocumentType.prototype, "name", void 0);
    __decorate([
        typeorm_1.OneToMany(() => Documents_1.Documents, (documents) => documents.documentType),
        __metadata("design:type", Array)
    ], DocumentType.prototype, "documents", void 0);
    DocumentType = __decorate([
        typeorm_1.Entity("DocumentType")
    ], DocumentType);
    return DocumentType;
})();
exports.DocumentType = DocumentType;
//# sourceMappingURL=DocumentType.js.map