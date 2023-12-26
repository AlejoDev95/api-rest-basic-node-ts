import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";

import { corsDelegate } from "./config";
import { logErrors, errorHandler, boomErrorHandler } from "./middleware";
import { routerApp } from "./routes";

dotenv.config();
const app: Express = express();

app.use(cors(corsDelegate));
app.use(express.json());

routerApp(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Listen on Port ", process.env.PORT);
});
