import { Router, Express } from "express";
import { productRouter } from "./products.routes";
import { userRouter } from "./users.routes";

const routerApp = (app: Express) => {
  const router = Router();
  app.use("/api/v1", router);
  router.use("/products", productRouter);
  router.use("/users", userRouter);
};

export { routerApp };
