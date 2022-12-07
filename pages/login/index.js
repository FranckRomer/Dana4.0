import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
// import styles from "../../styles/Home/Login.module.css"
import styles from '../../styles/Home/Login.module.css'
import Link from "next/link";
import Headers from "../../component/Headers/Headers";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",

  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log(credentials);
      const res = await axios.post("/api/auth/login", credentials);
      // let myCookie = res.data.cookie
      console.log(res);
      // myCookie = myCookie.substring(12)
      // myCookie = myCookie.replace(/\s+/g, '')
      // myCookie = myCookie.replace(/(\r\n|\n|\r)/gm, "")
      // console.log(myCookie);
      // console.log("myTokenName=" + myCookie );
      // console.log("myTokenName=" + myCookie);
      // document.cookie = "myTokenName=" + myCookie ;
      // document.cookie = "user=JohnSon; secure"
      // alert(document.cookie)
      // setHeader("Set-Cookie", res.data.cookie)

      if (res.status === 200) {
        router.push("/");
      }
    } catch (error) {
      //
      console.log ("Usuario: " + error)
    }

  };

  return (
    <main className={styles.body}>
      {/* <header className={styles.Headers}>
        <Link href={"./"} className={styles.LinkHome}>Home</Link>
      </header> */}
      <Headers />

      <form onSubmit={handleSubmit} className={styles.formulario}>
        <h1>Iniciar sesión</h1>
        {/* <h5>Proyecto</h5> */}
        <h3>DANA 4.0</h3>

        <div className={styles.imagen_ok}></div>

        <div className={styles.campos}>
          <div className={styles.input_campos} >

            <div className={styles.datos_correo}>
              <label  className={styles.email}>UserName: </label>
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

            <div className={styles.datos_password}>
              <img src="ico/ojo.png" className={styles.ojo_abierto} />
              <label  >Contraseña: </label>
              <div className={styles.box_password}>
                <input
                  className={styles.password_box}
                  type="password"
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

            <button>Iniciar Sesión</button>


          </div>
          <div className={styles.a_registro}>
            <Link href={"/login/register"} >Registrarse</Link>
          </div>
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
  );
}

export default Login;