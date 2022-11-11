import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";


const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        re_password: "",
        correo: "",
        proyect: "",
        clave: "",
    });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.password === credentials.re_password) {
            try {
                const res = await axios.post("/api/auth/register", credentials);
                console.log(res);
                if (res.status === 200) {
                    // router.push("/login");
                }
            } catch (error) {
                console.log("No se pudo enviar");
            }

        } else {
            alert("Las contraseñas no son iguales")
        }

    };


    return (
        <>
            <h1>Crear nuevo usuario</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type=""
                    placeholder="UserName"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            username: e.target.value,
                        })
                    }
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            password: e.target.value,
                        })
                    }
                />
                <input
                    type="password"
                    placeholder="Repeat-password"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            re_password: e.target.value,
                        })
                    }
                />
                <input
                    type="correo"
                    placeholder="Correo"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            correo: e.target.value,
                        })
                    }
                />
                <input
                    type=""
                    placeholder="proyecto"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            proyect: e.target.value,
                        })
                    }
                />
                <input
                    type=""
                    placeholder="Clave de autorización"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            clave: e.target.value,
                        })
                    }
                />
                <button>Save</button>
            </form>
        </>
    )
}

export default Register