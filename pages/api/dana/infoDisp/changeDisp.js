import { UpgrateData } from "../../../../funcionesCrud"
import jwt from "jsonwebtoken";

export default async function ChangeDisp(req, res) {
    // cookies
    const { myTokenName } = req.cookies;
    if (!myTokenName) {
        return res.status(401).json({ error: "Not logged in" });
    }
    const { username, proyect } = jwt.verify(myTokenName, "secret");
    // 
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a ChangeDisp: ");
    console.log(body);
    let query = { "can": body.can, "pin": body.pin }
    const result = UpgrateData(body, query, proyect ,"DISPOSITIVOS")
    // let result = true
    // console.log(result);
    res.status(200).json(result)
}