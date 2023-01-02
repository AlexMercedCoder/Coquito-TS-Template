import CoquitoApp from "coquito";
import { Router } from "express";
import context from "./rpc/context.js";
import actions from "./rpc/actions.js";
import rootValue from "./graphql/rootValue.js";
import schema from "./graphql/schema.js";
import exampleController from "./controllers/example.js";
import morgan from "morgan"
import cors from "cors"
import corsOptions from "./cors.js";

const app: CoquitoApp = new CoquitoApp({
  port: 4000,
  host: "localhost",
  bodyparsers: true,
  middleware: [morgan("dev"), cors(corsOptions)],
  routers: ["/example"],
  rpc: {
    context,
    actions,
  },
  graphql: {
    rootValue,
    schema,
  },
});

// Setup Main Route for "/"
app.app.get("/", (req, res) => res.send("Testing"));

// Setup Router with Controller for "/example"
const example: Router = app.r.example;
exampleController(example);

app.listen();
