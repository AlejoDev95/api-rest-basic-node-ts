"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getroductSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string().uuid();
const name = joi_1.default.string().min(3).max(15);
const price = joi_1.default.number().min(0).max(100);
const image = joi_1.default.string().uri();
const createProductSchema = joi_1.default.object({
    name: name.required(),
    price: price.required(),
    image: image.required(),
});
exports.createProductSchema = createProductSchema;
const updateProductSchema = joi_1.default.object({ name, price, image });
exports.updateProductSchema = updateProductSchema;
const getroductSchema = joi_1.default.object({
    id: id.required(),
});
exports.getroductSchema = getroductSchema;
//# sourceMappingURL=product.schema.js.map