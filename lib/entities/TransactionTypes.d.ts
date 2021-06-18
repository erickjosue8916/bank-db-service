import { BaseEntity } from "typeorm";
import { Transactions } from "./Transactions";
export declare class TransactionTypes extends BaseEntity {
    id: number;
    label: string;
    name: string;
    description: string;
    group: "DEPOSITS" | "WITHDRAWS" | "TRANSAFERS";
    transactions: Transactions[];
}
//# sourceMappingURL=TransactionTypes.d.ts.map