import { UpdateReg, FindReg, horaActual, UpgrateData, FindData } from "../../../../funcionesCrud"
import axios from "axios";
import Cors from 'cors'
import jwt from "jsonwebtoken";

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST', 'PUT', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {

  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

//
export default async function sendEsp(req, res) {
  await runMiddleware(req, res, cors)
  // req.use(cors())
  //
  const { myTokenName } = req.cookies;
  let proyects;
  if (!myTokenName) {
    proyects = "dana"
  } else {
    const { proyect } = jwt.verify(myTokenName, "secret");
    proyects = proyect
  }

  //
  let body = req.body
  console.log("---------------------------------")
  console.log("Llego un mensaje a sendEsp32: ");
  console.log(body);
  let query = { "can": body.can, "pin": body.pin }
  console.log(proyects);
  if (!body) {
    res.status(200).json({ body: null })
  }
  if (body.can == undefined || body.can == "") {
    res.status(404).json({ body: null })
  }
  //
  if (body.rgb != "xxx") {
    // UpdateReg(body, "DISPOSITIVOS")

    UpgrateData(body, query, proyects, "DISPOSITIVOS")
  }
  // buscar REGISTRO

  query = ""
  let result = await FindData(query, proyects, "STATUS")
  console.log(result)
  let ip_compu = ""
  // -------------------------------------------------------
  if (body.percentage == "000" && body.rgb != "xxx") {
    body.percentage = "100"
    body.rgb = "000"
  }
  // Send a POST request
  if (!body.inst) {
    body.inst = "FF1"
  }
  if (!body.tiempo) {
    body.tiempo = "00"
  }
  if (!body.tipo) {
    body.tipo = "light"

  }

  //--------------------------------------------------
  for (let index = 0; index < result.length; index++) {
    // const element = array[index];
    ip_compu = result[index].ipEsp
    // console.log(ip_compu)
    ip_compu = "http://" + ip_compu

    // }

    try {
      console.log(ip_compu);
      // console.log(body.tiempo.toString());
      axios({
        method: 'post',
        url: ip_compu,
        data: {
          inst: body.inst.toString(),
          can: body.can.toString(),
          pin: body.pin.toString(),
          percentage: body.percentage.toString(),
          tiempo: body.tiempo.toString(),
          rgb: body.rgb.toString(),
          tipo: body.tipo.toString(),
        }
      });
    } catch (error) {
      console.log(error);
      console.log("DATO NO SE PUDO ENVIAR AL ESP32");
    }

  }

  res.status(200).json({ name: result })
}