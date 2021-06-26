import "reflect-metadata";
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { resolve } from "path";
import { createExpressServer } from "routing-controllers";
import { LOG_FORMAT } from "./constants/envinronments.constant";
import { createConnection } from "typeorm";

dotenv.config({ path: resolve(__dirname, "../.env") });
const app: express.Application = createExpressServer({
  defaultErrorHandler: false,
  classTransformer: true,
  routePrefix: "/api",
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
  },
  middlewares: [resolve(__dirname, "./middlewares/*{.ts,.js}")],
  controllers: [resolve(__dirname, "./controllers/*{.ts,.js}")],
});

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan(LOG_FORMAT));

createConnection()
  .then(() => console.log("Connected To DB"))
  .catch(() => console.log("TypeOrm Connection Error"));

export default app;
