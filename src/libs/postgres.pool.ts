import { Pool } from "pg";

const poolConnection = new Pool({
  host: "localhost",
  port: 5432,
  user: "alejodev",
  password: "2530",
  database: "my_store",
});

export { poolConnection };
