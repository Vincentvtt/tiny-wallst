"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var company_1 = require("./controllers/company");
exports.Routes = [
    {
        path: "/companies",
        method: "get",
        action: company_1.getAllCompanies,
    },
];
exports.default = exports.Routes;
//# sourceMappingURL=routes.js.map