import { DropData} from "../../../../funcionesCrud"

export default async function ChangeDisp(req, res) {
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a DropDisp: ");
    console.log(body);
    DropData(body, "DISPOSITIVOS")
    let result = true
    // console.log(result);
    res.status(200).json(result)
}


