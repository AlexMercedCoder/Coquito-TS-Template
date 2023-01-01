import CoquitoApp from "coquito";
import context from "./rpc/context.js";
import actions from "./rpc/actions.js";
import rootValue from "./graphql/rootValue.js";
import schema from "./graphql/schema.js";
import exampleController from "./controllers/example.js";
var app = new CoquitoApp({
    port: 4000,
    host: "localhost",
    bodyparsers: true,
    routers: ["/example"],
    rpc: {
        context: context,
        actions: actions
    },
    graphql: {
        rootValue: rootValue,
        schema: schema
    }
});
// Setup Main Route for "/"
var MainHandler = function (req, res) { return res.send("Testing"); };
app.app.get("/", MainHandler);
// Setup Router with Controller for "/example"
var example = app.r.example;
exampleController(example);
app.listen();
