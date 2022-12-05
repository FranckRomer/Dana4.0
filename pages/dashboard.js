import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Headers from "../component/Headers/Headers";
import styles from '../styles/Home/dashboard.module.css'

function Dashboard() {
  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  const [modal, setModal] = useState(false)
  const router = useRouter();

  useEffect(() => {
    getProfile()
  })

  const getProfile = async () => {
    const profile = await axios.get("/api/profile");
    setUser(profile.data);
  };

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
      router.push("/login");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className={styles.Dashboard}>
      <Headers />

      <div className={styles.main}>
        {/* {JSON.stringify(user)} */}
        <div className={styles.username}>
          <h3>Bienvenido: </h3> <h1>{user.username}</h1>
        </div>
        <div className={styles.proyect}>
          <h3>Nombre del Proyecto:</h3><h1>{user.proyect}</h1>
        </div>
        {/* <button onClick={() => getProfile()}>profile</button> */}
        <button onClick={() => setModal(true)}>Logout</button>
      </div>
      {modal ?

        <div>
          <div className={styles.oscuro} onClick={() => setModal(false)}></div>
          <div className={styles.modal}>
            <h1>Desea salir de la cuenta?</h1>
            <div>
              <button
                type="button"
                onClick={() => logout()}
                className={styles.logout}
              >
                Salir
              </button>

              <button
                type="button"
                onClick={() => setModal(false)}
                className={styles.cancelar}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
        : ""}
    </div>
  );
}

export default Dashboard;
