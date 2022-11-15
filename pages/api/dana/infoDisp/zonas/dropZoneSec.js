import { DropData } from "../../../../../funcionesCrud"
import jwt from "jsonwebtoken";

export default async function DropZone(req, res) {
    // cookies
    const { myTokenName } = req.cookies;
    if (!myTokenName) {
        return res.status(401).json({ error: "Not logged in" });
    }
    const { username, proyect } = jwt.verify(myTokenName, "secret");
    // 
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a DropZone: ");
    console.log(body);
    let query = { "zona" : body.zona }
    // let proyect = "dana"
    let result = DropData(body, query, proyect ,"ZONASSEC")
    console.log(result);
    res.status(200).json(result)
}