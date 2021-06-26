const { resolve } = require("node:path");

module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [resolve(__dirname, "src/models/*{.ts,.js}")],
  migrations: [resolve(__dirname, "src/migrations/*{.ts,.js}")],
  subscribers: [resolve(__dirname, "src/migrations/*{.ts,.js}")],
};
