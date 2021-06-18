import { BaseEntity } from "typeorm";
import { UserScopeAccess } from "./UserScopeAccess";
export declare class Users extends BaseEntity {
    id: number;
    email: string;
    username: string;
    password: string;
    status: "ACTIVE" | "INACTIVE" | "DELETED";
    userScopeAccesses: UserScopeAccess[];
}
//# sourceMappingURL=Users.d.ts.map