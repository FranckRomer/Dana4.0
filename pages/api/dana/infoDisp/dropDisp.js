import { DropData} from "../../../../funcionesCrud"
import jwt from "jsonwebtoken";

export default async function DropDisp(req, res) {
    // cookies
    const { myTokenName } = req.cookies;
    if (!myTokenName) {
        return res.status(401).json({ error: "Not logged in" });
    }
    const { username, proyect } = jwt.verify(myTokenName, "secret");
    // 
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a DropDisp: ");
    console.log(body);
    let query = { "can" : body.can , "pin" : body.pin }
    // let proyect = "dana"
    let result = DropData(body, query, proyect ,"DISPOSITIVOS")
    // console.log(result);
    res.status(200).json(result)
}
