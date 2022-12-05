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
export default async function findTarjHome(req, res) {
    // cookies
    const { myTokenName } = req.cookies;
    if (!myTokenName) {
        return res.status(401).json({ error: "Not logged in" });
    }
    const { username, proyect } = jwt.verify(myTokenName, "secret");
    // 
    let body = req.body
    let zona = body.zona
    // console.log("---------------------------------")
    // console.log("Llego un mensaje a findTarjHome: ");
    // console.log(body);
    // if (zona == undefined) {
    //     res.status(200).json(false)
    // }
    let query = ""
    let result = await FindData(query, proyect, "STATUS")
    // result = sortJSON(result, 'pin', 'asc');
    // result = sortJSON(result, 'can', 'asc');
    // console.log(result);
    // if (condition) {
        
    // }
    res.status(200).json(result)
}