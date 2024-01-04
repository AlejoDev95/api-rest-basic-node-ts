import { Router } from "express";
import { UserService } from "../services";
import { createUserSchema, getUserSchema, updateUserSchema } from "../schemas";
import { validatorHandler } from "../middleware";

const userRouter = Router();
const service = new UserService();

userRouter.get("/", async (_req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

userRouter.get(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(Number(id));
      res.json(category);
    } catch (error) {
      next(error);
    }
  },
);

userRouter.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  },
);

userRouter.patch(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(Number(id), body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  },
);

userRouter.delete(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(Number(id));
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

export { userRouter };
