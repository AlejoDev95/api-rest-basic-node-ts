"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolConnection = void 0;
const pg_1 = require("pg");
const config_1 = require("../config/");
const { dbUser, dbPassword, dbHost, dbPort, dbName } = config_1.envConfig;
const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;
const poolConnection = new pg_1.Pool({ connectionString: URI });
exports.poolConnection = poolConnection;
//# sourceMappingURL=postgres.pool.js.map