import { BaseEntity } from "typeorm";
import { Documents } from "./Documents";
export declare class DocumentType extends BaseEntity {
    id: number;
    name: string;
    documents: Documents[];
}
//# sourceMappingURL=DocumentType.d.ts.map