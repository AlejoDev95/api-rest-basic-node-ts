"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const Joi = require("joi");
const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);
const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    role: role.required(),
});
exports.createUserSchema = createUserSchema;
const updateUserSchema = Joi.object({
    email: email,
    role: role,
});
exports.updateUserSchema = updateUserSchema;
const getUserSchema = Joi.object({
    id: id.required(),
});
exports.getUserSchema = getUserSchema;
//# sourceMappingURL=user.schema.js.map