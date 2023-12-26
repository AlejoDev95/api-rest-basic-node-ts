"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)(config_1.corsDelegate));
app.use(express_1.default.json());
(0, routes_1.routerApp)(app);
app.use(middleware_1.logErrors);
app.use(middleware_1.boomErrorHandler);
app.use(middleware_1.errorHandler);
app.listen(process.env.PORT, () => {
    console.log("Listen on Port ", process.env.PORT);
});
//# sourceMappingURL=index.js.map