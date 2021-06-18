"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.DatabaseDriver = void 0;
const typeorm_1 = require("typeorm");
const models = require("../entities");
var DatabaseDriver;
(function (DatabaseDriver) {
    DatabaseDriver["MY_SQL"] = "mysql";
    DatabaseDriver["MARIA_DB"] = "mariadb";
    DatabaseDriver["POSTGRE_SQL"] = "postgres";
    DatabaseDriver["COCKROACH_DB"] = "cockroachdb";
    DatabaseDriver["MONGO_DB"] = "mongodb";
})(DatabaseDriver = exports.DatabaseDriver || (exports.DatabaseDriver = {}));
let Database = (() => {
    class Database {
    }
    Database.initializeConnection = async (config) => {
        try {
            const entities = Object.keys(models).map(modelName => {
                return models[modelName];
            });
            const connection = typeorm_1.createConnection({
                type: config.driver,
                host: config.host,
                port: config.port,
                username: config.username,
                password: config.password,
                database: config.database,
                entities: [
                    ...entities
                ],
                synchronize: false,
            });
            return connection;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };
    Database.list = async (repository, options) => {
    };
    Database.get = async (repository, id) => {
        try {
            const result = await repository.remove(id);
            return result;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    Database.update = async (repository, id, data) => {
        try {
            const result = await repository.remove(id);
            return result;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    Database.delete = async (repository, entity) => {
        try {
            await repository.remove(entity);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    };
    return Database;
})();
exports.Database = Database;
//# sourceMappingURL=Database.js.map