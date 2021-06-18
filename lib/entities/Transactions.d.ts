import { BaseEntity } from "typeorm";
import { TransactionTypes } from "./TransactionTypes";
import { BankAccounts } from "./BankAccounts";
import { Transference } from "./Transference";
export declare class Transactions extends BaseEntity {
    id: number;
    bankAccountId: number;
    amount: number;
    balance: number;
    description: string | null;
    createdAt: number | null;
    status: "SUCCESS" | "DRAFT" | "CANCELLED";
    actionType: "CREDIT" | "DEBIT";
    transactionTypeId: number;
    transactionType: TransactionTypes;
    bankAccount: BankAccounts;
    transferences: Transference[];
    transferences2: Transference[];
}
//# sourceMappingURL=Transactions.d.ts.map