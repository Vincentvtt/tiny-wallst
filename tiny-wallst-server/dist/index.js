"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Koa = require("koa");
var Router = require("koa-router");
var bodyParser = require("koa-bodyparser");
var routes_1 = require("./routes");
(0, typeorm_1.createConnection)()
    .then(function () {
    var app = new Koa();
    var router = new Router();
    routes_1.Routes.forEach(function (route) { return router[route.method](route.path, route.action); });
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(4000, function () {
        console.log("Server started on localhost:4000");
    });
})
    .catch(function (error) {
    console.log(error);
});
//# sourceMappingURL=index.js.map