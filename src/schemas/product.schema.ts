import Joi from "joi";
import { Product } from "../models";

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().min(0).max(100);
const image = Joi.string().uri();

const createProductSchema = Joi.object<Product>({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object<Product>({ name, price, image });

const getroductSchema = Joi.object<Product>({
  id: id.required(),
});

export { createProductSchema, updateProductSchema, getroductSchema };
