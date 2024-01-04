"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const services_1 = require("../services");
const schemas_1 = require("../schemas");
const middleware_1 = require("../middleware");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
const service = new services_1.UserService();
userRouter.get("/", (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield service.find();
        res.json(users);
    }
    catch (error) {
        next(error);
    }
}));
userRouter.get("/:id", (0, middleware_1.validatorHandler)(schemas_1.getUserSchema, "params"), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const category = yield service.findOne(Number(id));
        res.json(category);
    }
    catch (error) {
        next(error);
    }
}));
userRouter.post("/", (0, middleware_1.validatorHandler)(schemas_1.createUserSchema, "body"), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const newCategory = yield service.create(body);
        res.status(201).json(newCategory);
    }
    catch (error) {
        next(error);
    }
}));
userRouter.patch("/:id", (0, middleware_1.validatorHandler)(schemas_1.getUserSchema, "params"), (0, middleware_1.validatorHandler)(schemas_1.updateUserSchema, "body"), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const category = yield service.update(Number(id), body);
        res.json(category);
    }
    catch (error) {
        next(error);
    }
}));
userRouter.delete("/:id", (0, middleware_1.validatorHandler)(schemas_1.getUserSchema, "params"), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield service.delete(Number(id));
        res.status(201).json({ id });
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=users.routes.js.map