import { Request } from "express";
import cors from "cors";

const whitelist = ["http://localhost:4200", "http://localhost:5000"];

export const corsDelegate = (
  req: Request,
  callback: (err: Error | null, options?: cors.CorsOptions | undefined) => void,
) => {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin") ?? "") !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
