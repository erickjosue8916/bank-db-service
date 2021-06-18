import { BaseEntity } from "typeorm";
import { Role } from "./Role";
import { ScopeAccess } from "./ScopeAccess";
export declare class RoleScopeAccess extends BaseEntity {
    id: number;
    roleId: number;
    scopeAccessId: number;
    role: Role;
    scopeAccess: ScopeAccess;
}
//# sourceMappingURL=RoleScopeAccess.d.ts.map