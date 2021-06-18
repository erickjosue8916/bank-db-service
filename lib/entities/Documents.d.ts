import { BaseEntity } from "typeorm";
import { DocumentType } from "./DocumentType";
import { Customers } from "./Customers";
export declare class Documents extends BaseEntity {
    id: number;
    documentTypeId: number;
    customerId: number;
    value: string;
    url: string;
    documentType: DocumentType;
    customer: Customers;
}
//# sourceMappingURL=Documents.d.ts.map