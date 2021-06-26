const { resolve } = require("path");

module.exports = {
  name: "collections",
  type: process.env.DATABASE_COLLECTIONS_TYPE,
  url: process.env.DATABASE_COLLECTIONS_URL,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  entities: [
    resolve(__dirname, process.env.DATABASE_COLLECTIONS_ENTITY_DIRECTORY),
  ],
};
