import "express-async-errors";
import 'dotenv/config'
import cors from "cors";
import express, { Express } from "express";

import { corsDelegate, envConfig } from "./config";
import { logErrors, errorHandler, boomErrorHandler } from "./middleware";
import { routerApp } from "./routes";

const app: Express = express();

app.use(cors(corsDelegate));
app.use(express.json());

routerApp(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(envConfig.port, () => {
  console.log("Listen on Port ", envConfig.port);
});
