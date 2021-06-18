import { BaseEntity } from "typeorm";
import { BankAccounts } from "./BankAccounts";
import { Documents } from "./Documents";
export declare class Customers extends BaseEntity {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    createAt: number | null;
    dateBirth: number | null;
    email: string;
    username: string;
    password: string;
    status: "ACTIVE" | "INACTIVE" | "DELETED" | "BLOKED";
    bankAccounts: BankAccounts[];
    documents: Documents[];
}
//# sourceMappingURL=Customers.d.ts.map