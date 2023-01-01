import { Router } from "express";

export default function exampleController(router: Router){
    router.get("/", (req, res) =>  res.send("example route"))
}