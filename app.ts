import express, { Express } from "express";
import cors from "cors";
import { routerApp } from "./routes";

const app: Express = express();

app.use(cors());
app.use(express.json());

routerApp(app);

app.listen(4000, () => {
  console.log("Listen on Port ", 4000);
});
