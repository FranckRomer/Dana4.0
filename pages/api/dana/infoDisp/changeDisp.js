import { UpdateReg , InsertUpdate} from "../../../../funcionesCrud"

export default async function ChangeDisp(req, res) {
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a ChangeDisp: ");
    console.log(body);
    UpdateReg(body, "DISPOSITIVOS")
    let result = true
    // console.log(result);
    res.status(200).json(result)
}