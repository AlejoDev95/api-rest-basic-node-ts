import { Sequelize } from "sequelize";
import { envConfig } from "../config/";

const { dbUser, dbPassword, dbHost, dbPort, dbName } = envConfig;

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(URI, { dialect: "postgres" });

export { sequelize };
