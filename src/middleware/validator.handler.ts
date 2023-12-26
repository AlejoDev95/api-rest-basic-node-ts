import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import boom from "@hapi/boom";

const validatorHandler = (
  schema: Joi.ObjectSchema<any>,
  property: "body" | "params" | "query",
) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    error ? next(boom.badRequest(error)) : next();
  };
};

export { validatorHandler };
