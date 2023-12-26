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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const faker_1 = require("@faker-js/faker");
const boom_1 = __importDefault(require("@hapi/boom"));
class ProductService {
    constructor() {
        this.listOfProducts = [];
        this.generateData = () => {
            const products = [];
            const limit = 100;
            for (let i = 0; i < limit; i++) {
                products.push({
                    id: faker_1.faker.string.uuid(),
                    name: faker_1.faker.commerce.productName(),
                    price: parseInt(faker_1.faker.commerce.price(), 10),
                    image: faker_1.faker.image.url(),
                    isBlock: faker_1.faker.datatype.boolean(),
                });
            }
            return products;
        };
        this.getProducts = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(this.listOfProducts);
                }, 2000);
            });
        };
        this.getSingleProduct = (id) => __awaiter(this, void 0, void 0, function* () {
            const productSelected = this.listOfProducts.find((product) => product.id === id);
            if (!productSelected) {
                throw boom_1.default.notFound("Product not found");
            }
            if (productSelected.isBlock) {
                throw boom_1.default.conflict("Product is blocked");
            }
            return productSelected;
        });
        this.createProduct = (body) => __awaiter(this, void 0, void 0, function* () {
            const newProduct = Object.assign({ id: faker_1.faker.string.uuid() }, body);
            this.listOfProducts.push(newProduct);
            return newProduct;
        });
        this.updateProduct = (id, body) => __awaiter(this, void 0, void 0, function* () {
            const indexSelectedProduct = this.listOfProducts.findIndex((product) => product.id === id);
            if (indexSelectedProduct === -1) {
                throw boom_1.default.notFound("Product not found");
            }
            const productSelected = this.listOfProducts[indexSelectedProduct];
            this.listOfProducts[indexSelectedProduct] = Object.assign(Object.assign({}, productSelected), body);
            return this.listOfProducts[indexSelectedProduct];
        });
        this.deleteProduct = (id) => __awaiter(this, void 0, void 0, function* () {
            const indexSelectedProduct = this.listOfProducts.findIndex((produdc) => produdc.id === id);
            if (indexSelectedProduct === -1) {
                throw boom_1.default.notFound("Product not found");
            }
            return this.listOfProducts.splice(indexSelectedProduct, 1)[0];
        });
        this.listOfProducts = this.generateData();
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map