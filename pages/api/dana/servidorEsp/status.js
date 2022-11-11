import {UpgrateData, FindData, horaActual} from "../../../../funcionesCrud"

export default function status(req, res) {
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a status: ");
    console.log(body);
    body.hora = horaActual();
    body.heardBeat = true;
    let query = { "ipEsp": body.ipEsp }
    let response = UpgrateData(body, query, body.proyect, "STATUS")
    res.status(200).json({ response })
  }
  