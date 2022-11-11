import { FindData } from "../../../../funcionesCrud"
import jwt from "jsonwebtoken";

//
function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
            y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}
////////////////////////////////////////////////////////////////
export default async function findDisp(req, res) {
    // cookies
    const { myTokenName } = req.cookies;
    if (!myTokenName) {
        return res.status(401).json({ error: "Not logged in" });
    }
    const { username, proyect } = jwt.verify(myTokenName, "secret");
    // 
    let body = req.body
    let can = body.can
    let pin = body.pin
    // console.log("---------------------------------")
    // console.log("Llego un mensaje a findDisp: ");
    // console.log(body);
    let query = { "can": can, "pin": pin }
    // console.log(body.can);
    if (body.can == undefined) {
        // can = 0
        // pin = 0
        query = ""
    } 
    // let result = await FindReg(can, pin, "DISPOSITIVOS")
    
    // let proyect = "dana"
    let result = await FindData( query, proyect, "DISPOSITIVOS")
    
    result = sortJSON(result, 'pin', 'asc');
    result = sortJSON(result, 'can', 'asc');
    // console.log(result);
    res.status(200).json(result)
}
