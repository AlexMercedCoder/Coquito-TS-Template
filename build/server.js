import CoquitoApp from "coquito";
import context from "./rpc/context.js";
import actions from "./rpc/actions.js";
import rootValue from "./graphql/rootValue.js";
import schema from "./graphql/schema.js";
import exampleController from "./controllers/example.js";
import morgan from "morgan";
import cors from "cors";
import corsOptions from "./cors.js";
import loadEnv from "./env.js";
loadEnv(); // load env based on NODE_ENV value 
// (loads .env if undefined, development=.development.env, production=.production.env)
console.log(process.env.cheese);
var app = new CoquitoApp({
    port: 4000,
    host: "localhost",
    bodyparsers: true,
    middleware: [morgan("dev"), cors(corsOptions)],
    routers: ["/example"],
    rpc: {
        context: context,
        actions: actions,
    },
    graphql: {
        rootValue: rootValue,
        schema: schema,
    },
});
// Setup Main Route for "/"
app.app.get("/", function (req, res) { return res.send("Testing"); });
// Setup Router with Controller for "/example"
var example = app.r.example;
exampleController(example);
app.listen();
