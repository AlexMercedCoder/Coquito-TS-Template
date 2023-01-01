import { UnknownObj } from "../types/types"

export default {
    sampleQuery: (args: UnknownObj, context: UnknownObj, info: UnknownObj) => {
        console.log(args)
        console.log(context.req.method)
        return "GraphQL is Working"
    }
}