import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import { logErrors, errorHandler, boomErrorHandler } from "./middleware";
import { routerApp } from "./routes";

const app: Express = express();

app.use(cors());
app.use(express.json());

routerApp(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(4000, () => {
  console.log("Listen on Port ", 4000);
});
