import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Headers from '../../component/Headers/Headers';
import styles from "../../styles/Login.module.css"

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
        <main className={styles.body}>
            <Headers />

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <h1>Crear nuevo usuario</h1>
                <h3>DANA 4.0</h3>
                <div className={styles.imagen_ok}></div>
                <div className={styles.campos}>
                    {/* UserName */}
                    <div >
                        {/* <label for="mail" className={styles.email}>UserName: </label> */}
                        <div className={styles.box_correo}>
                            <input
                                className={styles.correo_box}
                                type=""
                                placeholder="UserName"
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* password */}
                    <div >
                        {/* <label for="mail" className={styles.email}>Password: </label> */}
                        <div className={styles.box_correo}>
                            <input
                                className={styles.correo_box}
                                type=""
                                placeholder="password"
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* repeat password */}
                    <div >
                        {/* <label for="mail" className={styles.email}>Repeat-password: </label> */}
                        <div className={styles.box_correo}>
                            <input
                                className={styles.correo_box}
                                type=""
                                placeholder="Repeat-password"
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        re_password: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* correo */}
                    <div >
                        {/* <label for="mail" className={styles.email}>Repeat-password: </label> */}
                        <div className={styles.box_correo}>
                            <input
                                className={styles.correo_box}
                                type=""
                                placeholder="Correo"
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        correo: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* proyect */}
                    <div >
                        {/* <label for="mail" className={styles.email}>Repeat-password: </label> */}
                        <div className={styles.box_correo}>
                            <input
                                className={styles.correo_box}
                                type=""
                                placeholder="Proyect"
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        proyect: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    {/* clave */}
                    <div >
                        {/* <label for="mail" className={styles.email}>Repeat-password: </label> */}
                        <div className={styles.box_correo}>
                            <input
                                className={styles.correo_box}
                                type=""
                                placeholder="Clave de autentificación"
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        clave: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    {/* <input
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
                    /> */}
                    <button>Save</button>
                </div>
            </form>
            <div className={styles.contenedor_a}>
                <ul className={styles.cuadrados}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </div>
        </main>
    )
}

export default Register