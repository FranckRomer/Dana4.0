import { FindZona } from "../../../../funcionesCrud"
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

export default async function FindZonas(req, res) {
    // cookies
    const { myTokenName } = req.cookies;
    if (!myTokenName) {
        return res.status(401).json({ error: "Not logged in" });
    }
    const { username, proyect } = jwt.verify(myTokenName, "secret");
    // 
    let body = req.body
    let zona
    try {
        zona = body.zona
    } catch (error) {
        zona = ""
    }
    // console.log("---------------------------------")
    // console.log("Llego un mensaje a FindZonas: ");
    // console.log(body);
    let query = { "zona": zona }
    // let proyect = "dana"
    let result = await FindZona(body, query, proyect, "ZONAS")
    // console.log(result);
    result = sortJSON(result, 'index', 'asc');
    res.status(200).json(result)
}