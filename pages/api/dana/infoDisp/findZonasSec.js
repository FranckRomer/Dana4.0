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

export default async function FindZonas(req, res) {
    // cookies
    const { myTokenName } = req.cookies;
    if (!myTokenName) {
        return res.status(401).json({ error: "Not logged in" });
    }
    const { username, proyect } = jwt.verify(myTokenName, "secret");
    // 
    let body = req.body
    
    // try {
    //     zonaPrin = body.zonaPrin
    // } catch (error) {
    //     zonaPrin = ""
    //     res.status(200).json("")
    // }
    // console.log("---------------------------------")
    // console.log("Llego un mensaje a FindZonas: ");
    // console.log(body);
    let query = { "zonaPrin": body.zonaPrin }
    if (body.zonaPrin ==( undefined )) {
        res.status(401).json("")
    } else if(body.zonaPrin == ""){
        query = {}
    }
    
    // console.log(query);
    // let proyect = "dana"
    let result = await FindData( query, proyect, "ZONASSEC")
    // console.log(result);
    result = sortJSON(result, 'index', 'asc');
    res.status(200).json(result)
}