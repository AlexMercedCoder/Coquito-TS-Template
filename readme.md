## Coquito Typescript Template


#### Basics
Do your work in the `/src` folder, run the contents from the `/build` folder.
#### Scripts

- `npm run build` compile typescript to build folder
- `npm run start` run built files
- `npm run ts-dev` build typescript in watch mode
- `npm run dev` run built files in watch mode

To get auto updates run ts-dev in one terminal then dev in another. A change in your ts code will trigger the ts rebuild, which will trigger the JS watch.

## GraphQL

#### How the GraphQL API Works

[GraphQL Documentation (how to write resolvers and functions)](https://graphql.org/learn/)

1. Define the functions that should handle your GraphQL queries in the ./graphql/rootValue.js file. The express req, res object will be inside the context argument of the graphql resolver.

2. Define your API's schema in ./graphql/schema.js

The api is accessed by making post requests to /graphql with a json body with a query property that is your graphql query string. GraphQL clients should automatically do this, you'll just have to provide the client the url and the query string. (Popular Javascript clients include Apollo and Relay)

[GraphQL Bin - Great Tool for Testing your GraphQL API](https://www.graphqlbin.com/v2/new)

If you need to register any middleware specifically on the /graphql router pass a function under the gqlhook property in the CoquitoApp constructor. The function takes the router as an argument and in the function you can do whatever you like with it (mainly regiser middleware).

#### How the SimpleRPC API Works

- [SimpleRPC Server Library](https://www.npmjs.com/package/@alexmerced/simplerpc-server)
- [SimpleRPC Client Library](https://www.npmjs.com/package/@alexmerced/simplerpc-client)

The functions that can be called are all defined in ./rpc/actions.js, these functions get two arguments.

- payload (data that is passed from the client dispatch call)
- context (includes data in ./rpc/context.js plus the express req/res objects)

These functions are called by making post requests to /rpc with a request body following this shape:

```json
{
    "type":"functionName",
    "payload":{
        "arg1": "something",
        "arg2": "something else"
    }
}
```

Type is used to determine which function is called, and the payload object is passed to it. There is a javascript frontend client

If you need to register any middleware specifically on the /rpc router pass a function under the rpchook property in the CoquitoApp constructor. The function takes the router as an argument and in the function you can do whatever you like with it (mainly regiser middleware).