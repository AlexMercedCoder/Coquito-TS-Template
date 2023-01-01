export default {
    sampleQuery: function (args, context, info) {
        console.log(args);
        console.log(context.req.method);
        return "GraphQL is Working";
    }
};
