import { UpgrateZone } from "../../../../funcionesCrud"

export default async function AddZone(req, res) {
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a AddZone: ");
    console.log(body);
    let query = { "zona": body.zona }
    let proyect = "dana"
    let result = await UpgrateZone(body, query, proyect, "ZONAS")
    console.log(result);
    res.status(200).json(result)
}