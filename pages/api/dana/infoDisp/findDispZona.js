import { FindDispZona } from "../../../../funcionesCrud"

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
export default async function findDispZona(req, res) {
    let body = req.body
    let zona = body.zona
    // console.log("---------------------------------")
    // console.log("Llego un mensaje a findDisp: ");
    // console.log(zona);
    if (zona == undefined) {
        res.status(200).json(false)
    }
    let result = await FindDispZona(zona, "DISPOSITIVOS")
    result = sortJSON(result, 'pin', 'asc');
    result = sortJSON(result, 'can', 'asc');
    // console.log(result);
    res.status(200).json(result)
}