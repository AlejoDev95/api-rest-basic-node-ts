"use strict";
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const envConfig = {
    env: (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : "dev",
    port: (_b = process.env.NODE_PORT) !== null && _b !== void 0 ? _b : 4000,
    dbUser: (_c = process.env.NODE_DB_USER) !== null && _c !== void 0 ? _c : '',
    dbPassword: (_d = process.env.NODE_DB_PASSWORD) !== null && _d !== void 0 ? _d : '',
    dbHost: (_e = process.env.NODE_DB_HOST) !== null && _e !== void 0 ? _e : '',
    dbPort: (_f = process.env.NODE_DB_PORT) !== null && _f !== void 0 ? _f : '',
    dbName: (_g = process.env.NODE_DB_NAME) !== null && _g !== void 0 ? _g : '',
};
exports.envConfig = envConfig;
//# sourceMappingURL=env.config.js.map