import React from 'react'
import styles from "../../styles/Header/headers.module.css"
import Link from 'next/link'

const Headers = () => {
    const [modal, setModal] = React.useState(false)
    const invertirModal = () => {
        setModal(!modal)
    }
    return (
        <>
            {/********************** HEADER **********************/}
            <header className={styles.Headers}>
                <div className={styles.home}>
                    <Link href={"/"} className={styles.LinkHome}>Home</Link>
                </div>

                <div className={styles.menu} onClick={invertirModal}>
                    <img src="/menu.png" />
                </div>
            </header>
            {/********************* MODAL *********************/}
            {modal ?
                <nav className={styles.nav} >
                    <div className={styles.modalOscuro} onClick={() => setModal(!modal)}></div>
                    <ul >
                        <Link href={"/login"} className={styles.Link}><li>Login</li></Link>
                        <Link href={"/login/register"} className={styles.Link}><li>Register</li></Link>
                        <Link href={"/dashboard"} className={styles.Link}><li>Profile</li></Link>
                        <Link href={"/Configuraciones"} className={styles.Link}><li>Ajustes</li></Link>
                        <Link href={"/Configuraciones/Info"} className={styles.Link}><li>Info</li></Link>
                    </ul>
                </nav>
                : ""
            }
        </>
    )
}

export default Headers