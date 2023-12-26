import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import Boom from '@hapi/boom';

const logErrors = (
  err: ErrorRequestHandler,
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  console.error("Error", err);
  next(err);
};

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  res.status(500).json({ message: err.message, stack: err.stack });
};

const boomErrorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (Boom.isBoom(err)) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};

export { logErrors, errorHandler, boomErrorHandler };
