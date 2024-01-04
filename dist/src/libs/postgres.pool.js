"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolConnection = void 0;
const pg_1 = require("pg");
const poolConnection = new pg_1.Pool({
    host: "localhost",
    port: 5432,
    user: "alejodev",
    password: "2530",
    database: "my_store",
});
exports.poolConnection = poolConnection;
//# sourceMappingURL=postgres.pool.js.map