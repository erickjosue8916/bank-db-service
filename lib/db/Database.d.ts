import { Connection } from 'typeorm';
export interface ListQueryOptions {
    filter: any;
    page: number;
    limit: number;
    sort: any;
    relations: string[];
}
export interface DatabaseConfig {
    host: string;
    database: string;
    port: number;
    username: string;
    password: string;
    driver: DatabaseDriver;
}
export declare enum DatabaseDriver {
    MY_SQL = "mysql",
    MARIA_DB = "mariadb",
    POSTGRE_SQL = "postgres",
    COCKROACH_DB = "cockroachdb",
    MONGO_DB = "mongodb"
}
declare type entityId = string | number;
export declare class Database {
    static initializeConnection: (config: DatabaseConfig) => Promise<Connection>;
    static list: (repository: any, options: ListQueryOptions) => Promise<void>;
    static get: <T>(repository: any, id: entityId) => Promise<T>;
    static update: (repository: any, id: entityId, data: any) => Promise<any>;
    static delete: (repository: any, entity: any) => Promise<boolean>;
}
export {};
//# sourceMappingURL=Database.d.ts.map