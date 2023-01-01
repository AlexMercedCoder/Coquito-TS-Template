import CoquitoApp from "coquito";
import { RequestHandler, Router } from "express";
import context from "./rpc/context.js";
import actions from "./rpc/actions.js";
import rootValue from "./graphql/rootValue.js";
import schema from "./graphql/schema.js";
import exampleController from "./controllers/example.js";

const app: CoquitoApp = new CoquitoApp({
  port: 4000,
  host: "localhost",
  bodyparsers: true,
  routers: ["/example"],
  rpc: {
    context,
    actions
  },
  graphql: {
    rootValue,
    schema
  }
});


// Setup Main Route for "/"
const MainHandler: RequestHandler = (req, res) => res.send("Testing")
app.app.get("/", MainHandler);

// Setup Router with Controller for "/example"
const example: Router = app.r.example
exampleController(example)

app.listen();
