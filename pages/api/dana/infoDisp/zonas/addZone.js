import { UpgrateZone } from "../../../../../funcionesCrud"
import jwt from "jsonwebtoken";


export default async function AddZone(req, res) {
    console.log("---------------------------------")
    console.log("Llego un mensaje a AddZone: ");
    console.log(req.body);
    
    const { myTokenName } = req.cookies;
    if (!myTokenName) {
        return res.status(401).json({ error: "Not logged in" });
    }
    const { username, proyect } = jwt.verify(myTokenName, "secret");
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a AddZone: ");
    // console.log(body);
    let query = { "zona": body.zona }
    // let proyect = "dana"
    let result = await UpgrateZone(body, query, proyect, "ZONAS")
    console.log(result);
    res.status(200).json(result)
}