"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)(config_1.corsDelegate));
app.use(express_1.default.json());
(0, routes_1.routerApp)(app);
app.use(middleware_1.logErrors);
app.use(middleware_1.boomErrorHandler);
app.use(middleware_1.errorHandler);
app.listen(config_1.envConfig.port, () => {
    console.log("Listen on Port ", config_1.envConfig.port);
});
//# sourceMappingURL=index.js.map