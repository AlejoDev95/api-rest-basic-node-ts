import { Client } from "pg";

const getConnection = async () => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "alejodev",
    password: "2530",
    database: "my_store",
  });

  await client.connect();
  return client;
};

export { getConnection };
