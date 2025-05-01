import express from "express";
import {Request, Response} from "express";

const ProjectOneExpress = express()

ProjectOneExpress.get('/', (req: Request, res: Response) => {
    res.send("Server Up...");
    }
)

ProjectOneExpress.listen(8081, () => {
    console.log("Server Listening to port 8081");
})