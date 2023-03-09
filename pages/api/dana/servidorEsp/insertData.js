// import { query } from "express";
import { UpgrateData, horaActual, FindData } from "../../../../funcionesCrud"
import { io } from "socket.io-client";

const socket = io("ws://192.168.1.73:3000");

export default async function insetData(req, res) {
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje al insetData: ");
    console.log(body);
    body.hora = horaActual();
    let query = { "can": body.can, "pin": body.pin }

    try {
        // socket.emit("mensaje", 1, "2", { 3: Buffer.from([4]) });
        socket.emit("mensaje", body);        
    } catch (error) {
        console.log();
    }
    
    let result = false
    if (body.rgb != "xxx") {
        // BUSCAR SI HAY REGISTRO
        result = await FindData(query, body.proyect, "DISPOSITIVOS")
        console.log(result[0])
        if (result[0]) {
            body.rgb = result[0].rgb
            body.percentage = result[0].percentage
        }
    }

    let response = UpgrateData(body, query, body.proyect, "DISPOSITIVOS")
    res.status(200).json({ response })
}  