import { DropData } from "../../../../funcionesCrud"

export default async function DropZone(req, res) {
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a DropZone: ");
    console.log(body);
    let query = { "zona" : body.zona }
    let proyect = "dana"
    let result = DropData(body, query, proyect ,"ZONAS")
    console.log(result);
    res.status(200).json(result)
}