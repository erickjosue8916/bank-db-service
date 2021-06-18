import { BaseEntity } from "typeorm";
import { BankAccounts } from "./BankAccounts";
import { Transactions } from "./Transactions";
export declare class Transference extends BaseEntity {
    id: number;
    fromBankAccountId: number;
    toBankAccountId: number;
    depositId: number;
    withdrawId: number;
    description: string | null;
    amount: number;
    charge: number;
    total: number;
    createdAt: number | null;
    status: "SUCCESS" | "DRAFT" | "CANCELLED" | "REFUNDED";
    fromBankAccount: BankAccounts;
    toBankAccount: BankAccounts;
    deposit: Transactions;
    withdraw: Transactions;
}
//# sourceMappingURL=Transference.d.ts.map