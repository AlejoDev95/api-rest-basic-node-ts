import express, { Express } from "express";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.listen(4000, () => {
  console.log("Listen on Port ", 4000);
});
