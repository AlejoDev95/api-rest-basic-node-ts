"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boomErrorHandler = exports.errorHandler = exports.logErrors = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const logErrors = (err, _req, _res, next) => {
    console.error("Error", err);
    next(err);
};
exports.logErrors = logErrors;
const errorHandler = (err, _req, res, _next) => {
    res.status(500).json({ message: err.message, stack: err.stack });
};
exports.errorHandler = errorHandler;
const boomErrorHandler = (err, _req, res, next) => {
    if (boom_1.default.isBoom(err)) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    else {
        next(err);
    }
};
exports.boomErrorHandler = boomErrorHandler;
//# sourceMappingURL=error.handler.js.map