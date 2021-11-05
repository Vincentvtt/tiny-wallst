import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import { CompanyRoutes, Routes } from "./routes/company-routes";
import * as cors from "@koa/cors";

const app: Koa = new Koa();
const router: Router = new Router();

CompanyRoutes.forEach((route: Routes) =>
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
app.on("error", console.error);

export default app;
