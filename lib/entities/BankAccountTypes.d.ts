import { BaseEntity } from "typeorm";
import { BankAccounts } from "./BankAccounts";
export declare class BankAccountTypes extends BaseEntity {
    id: number;
    label: string;
    value: string;
    bankAccounts: BankAccounts[];
}
//# sourceMappingURL=BankAccountTypes.d.ts.map