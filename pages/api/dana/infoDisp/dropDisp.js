import { DropData} from "../../../../funcionesCrud"

export default async function DropDisp(req, res) {
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a DropDisp: ");
    console.log(body);
    let query = { "can" : body.can , "pin" : body.pin }
    let proyect = "dana"
    let result = DropData(body, query, proyect ,"DISPOSITIVOS")
    // console.log(result);
    res.status(200).json(result)
}
