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
exports.productRouter = void 0;
const express_1 = require("express");
const services_1 = require("../services");
const schemas_1 = require("../schemas");
const middleware_1 = require("../middleware");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
const productService = new services_1.ProductService();
productRouter.post("/", (0, middleware_1.validatorHandler)(schemas_1.createProductSchema, "body"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield productService.createProduct(req.body);
    res.status(201).json({ mesage: "Product created", product: newProduct });
}));
productRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listOfProducts = yield productService.getProducts();
    res.status(200).json({ total: listOfProducts.length, listOfProducts });
}));
productRouter.get("/:id", (0, middleware_1.validatorHandler)(schemas_1.getroductSchema, "params"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield productService.getSingleProduct(id);
    res.status(200).json({ product });
}));
productRouter.put("/:id", (0, middleware_1.validatorHandler)(schemas_1.updateProductSchema, "params"), (0, middleware_1.validatorHandler)(schemas_1.updateProductSchema, "body"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedProduct = yield productService.updateProduct(id, req.body);
    res.status(200).json({ product: updatedProduct });
}));
productRouter.patch("/:id", (0, middleware_1.validatorHandler)(schemas_1.updateProductSchema, "params"), (0, middleware_1.validatorHandler)(schemas_1.updateProductSchema, "body"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedProduct = yield productService.updateProduct(id, req.body);
    res.status(200).json({ product: updatedProduct });
}));
productRouter.delete("/:id", (0, middleware_1.validatorHandler)(schemas_1.getroductSchema, "params"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productDeleted = yield productService.deleteProduct(id);
    res.status(200).json({ product: productDeleted });
}));
//# sourceMappingURL=products.routes.js.map