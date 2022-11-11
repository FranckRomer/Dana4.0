import { InsertData } from "../../../funcionesCrud/index"

export default async function RegisterNewUser(req, res) {
    // const { username, password, correo, proyect, clave } = req.body;
    console.log("---------------------------------")
    console.log("Llego un mensaje a RegisterNewUser: ");
    console.log(req.body);
    
    let result = await InsertData(req.body, "users", "USERS")
    console.log(result);
    res.status(200).json(result)
}