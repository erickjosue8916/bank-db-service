import { BaseEntity } from "typeorm";
import { RoleScopeAccess } from "./RoleScopeAccess";
import { UserScopeAccess } from "./UserScopeAccess";
export declare class ScopeAccess extends BaseEntity {
    name: string;
    id: number;
    roleScopeAccesses: RoleScopeAccess[];
    userScopeAccesses: UserScopeAccess[];
}
//# sourceMappingURL=ScopeAccess.d.ts.map