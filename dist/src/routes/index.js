"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApp = void 0;
const express_1 = require("express");
const products_routes_1 = require("./products.routes");
const users_routes_1 = require("./users.routes");
const routerApp = (app) => {
    const router = (0, express_1.Router)();
    app.use("/api/v1", router);
    router.use("/products", products_routes_1.productRouter);
    router.use("/users", users_routes_1.userRouter);
};
exports.routerApp = routerApp;
//# sourceMappingURL=index.js.map