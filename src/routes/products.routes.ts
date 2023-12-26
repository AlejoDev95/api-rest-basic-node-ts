import { Router } from "express";
import { ProductService } from "../services";
import {
  createProductSchema,
  updateProductSchema,
  getroductSchema,
} from "../schemas";
import { validatorHandler } from "../middleware";

const productRouter = Router();
const productService = new ProductService();

productRouter.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  async (req, res) => {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json({ mesage: "Product created", product: newProduct });
  },
);

productRouter.get("/", async (_req, res) => {
  const listOfProducts = await productService.getProducts();
  res.status(200).json({ total: listOfProducts.length, listOfProducts });
});

productRouter.get(
  "/:id",
  validatorHandler(getroductSchema, "params"),
  async (req, res) => {
    const { id } = req.params;
    const product = await productService.getSingleProduct(id);
    res.status(200).json({ product });
  },
);

productRouter.put(
  "/:id",
  validatorHandler(updateProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await productService.updateProduct(id, req.body);
    res.status(200).json({ product: updatedProduct });
  },
);

productRouter.patch(
  "/:id",
  validatorHandler(updateProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await productService.updateProduct(id, req.body);
    res.status(200).json({ product: updatedProduct });
  },
);

productRouter.delete(
  "/:id",
  validatorHandler(getroductSchema, "params"),
  async (req, res) => {
    const { id } = req.params;
    const productDeleted = await productService.deleteProduct(id);
    res.status(200).json({ product: productDeleted });
  },
);

export { productRouter };
