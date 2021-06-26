import "reflect-metadata";
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { resolve } from "path";
import { createExpressServer, Action } from "routing-controllers";
import { LOG_FORMAT } from "./constants/envinronments.constant";
import { createConnection } from "typeorm";

dotenv.config({ path: resolve(__dirname, "../.env") });
const app: express.Application = createExpressServer({
  defaultErrorHandler: false,
  classTransformer: true,
  routePrefix: "/auth",
  validation: {
    validationError: {
      target: false
    }
  },
  authorizationChecker: async (action: Action, roles: string[]) => {
    return true;
  },
  currentUserChecker: async (action: Action) => {
    return action.request.user;
  },
  cors: true,
  middlewares: [resolve(__dirname, "./middlewares/*{.ts,.js}")],
  controllers: [resolve(__dirname, "./controllers/*{.ts,.js}")],
});

export default app;
