import { BaseEntity } from "typeorm";
import { ScopeAccess } from "./ScopeAccess";
import { Users } from "./Users";
export declare class UserScopeAccess extends BaseEntity {
    id: number;
    userId: number;
    status: "ACTIVE" | "INACTIVE";
    scopeAccessId: number;
    scopeAccess: ScopeAccess;
    user: Users;
}
//# sourceMappingURL=UserScopeAccess.d.ts.map