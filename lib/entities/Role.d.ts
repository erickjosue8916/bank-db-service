import { BaseEntity } from "typeorm";
import { RoleScopeAccess } from "./RoleScopeAccess";
export declare class Role extends BaseEntity {
    id: number;
    name: string;
    status: "ACTIVE" | "INACTIVE";
    roleScopeAccesses: RoleScopeAccess[];
}
//# sourceMappingURL=Role.d.ts.map