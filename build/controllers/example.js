export default function exampleController(router) {
    router.get("/", function (req, res) { return res.send("example route"); });
}
