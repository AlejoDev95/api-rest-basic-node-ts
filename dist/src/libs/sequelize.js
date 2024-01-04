"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/");
const { dbUser, dbPassword, dbHost, dbPort, dbName } = config_1.envConfig;
const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;
const sequelize = new sequelize_1.Sequelize(URI, { dialect: "postgres" });
exports.sequelize = sequelize;
//# sourceMappingURL=sequelize.js.map