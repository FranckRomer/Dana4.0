import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { FindData } from "../../../funcionesCrud/index"

export default async function loginHandler(req, res) {
    const { username, password } = req.body;
    const query = {"username": username}
    let response = await FindData( query,"users", "USERS")
    try {
        response = response[0]
        console.log(response);
    } catch (error) {
        console.log("NO HAY REGISTRO DE ESTE USUARIO");
        return res.status(204).json({ error: "Invalid credentials" });
    }
    
    
    if (response.username === username && response.password === password) {
        // console.log("aqui estoy");
        // expire in 30 days
        const token = sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
                username: response.username,
                correo: response.correo,
                proyect: response.proyect
            },
            "secret"
        );

        const serialized = serialize("myTokenName", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            Secure: false,
            SameSite: "None",
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: "/",
        });
        console.log(serialized);
        res.setHeader("Set-Cookie", serialized);
        return res.status(200).json({
            message: "Login successful",
            cookie: serialized
        });
    }

    return res.status(401).json({ error: "Invalid credentials" });
}