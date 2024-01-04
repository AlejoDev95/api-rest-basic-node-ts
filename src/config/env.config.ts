const envConfig = {
  env: process.env.NODE_ENV ?? "dev",
  port: process.env.NODE_PORT ?? 4000,
  dbUser: process.env.NODE_DB_USER ?? '',
  dbPassword: process.env.NODE_DB_PASSWORD ?? '',
  dbHost: process.env.NODE_DB_HOST ?? '',
  dbPort: process.env.NODE_DB_PORT ?? '',
  dbName: process.env.NODE_DB_NAME ?? '',
};

export { envConfig };
