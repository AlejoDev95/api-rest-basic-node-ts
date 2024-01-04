import { Pool } from "pg";
import { envConfig } from "../config/";

const { dbUser, dbPassword, dbHost, dbPort, dbName } = envConfig;

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const poolConnection = new Pool({ connectionString: URI });

export { poolConnection };
