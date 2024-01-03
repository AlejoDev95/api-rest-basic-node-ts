"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorHandler = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const validatorHandler = (schema, property) => {
    return (req, _res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });
        error ? next(boom_1.default.badRequest(error)) : next();
    };
};
exports.validatorHandler = validatorHandler;
//# sourceMappingURL=validator.handler.js.map