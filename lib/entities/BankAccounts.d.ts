import { BaseEntity } from "typeorm";
import { Customers } from "./Customers";
import { BankAccountTypes } from "./BankAccountTypes";
import { Transactions } from "./Transactions";
import { Transference } from "./Transference";
export declare class BankAccounts extends BaseEntity {
    id: number;
    name: string | null;
    createAt: number | null;
    customerId: number;
    status: "ACTIVE" | "INACTIVE" | "BLOKED" | "DELETED";
    balance: number;
    accountTypeId: number;
    customer: Customers;
    accountType: BankAccountTypes;
    transactions: Transactions[];
    transferences: Transference[];
    transferences2: Transference[];
}
//# sourceMappingURL=BankAccounts.d.ts.map