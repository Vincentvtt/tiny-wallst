import "reflect-metadata";
import { createConnection } from "typeorm";
import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import { CompanyRoutes } from "./routes/company-routes";
import * as cors from "@koa/cors";

createConnection()
  .then(() => {
    const app = new Koa();
    const router = new Router();

    CompanyRoutes.forEach((route) =>
      router[route.method](route.path, route.action)
    );

    app.use(
      cors({
        origin: "http://localhost:3000",
      })
    );
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(4000, () => {
      console.log("Server started on localhost:4000");
    });
  })
  .catch((error) => {
    console.error(error);
  });
