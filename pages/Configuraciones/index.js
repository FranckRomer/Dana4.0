import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Configuraciones.module.css'
import Link from 'next/link'

const Configuraciones = () => {
    return (

        <div className={styles.container}>
            <Head>
                <title>Zonas</title>
                <meta name="description" content="Zonas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.Body}>
                <div className={styles.Headers}>
                    <Link href={"./"} className={styles.LinkHome}>Home</Link>
                </div>
                <h1 className={styles.title}>
                    <a href="">Configuraciones</a>
                </h1>
                <section className={styles.zonas}>
                    <Link href={"/Configuraciones/AgregarDisp"} className={styles.Link}>Modificar Dispositivo</Link>
                    <Link href={"/Configuraciones/AgregarDisp"} className={styles.Link}>Modificar Zona</Link>
                    <Link href={"/Configuraciones/AgregarDisp"} className={styles.Link}>Agregar Zona Secundaria</Link>
                    <Link href={"/Configuraciones/AgregarDisp"} className={styles.Link}>Status de Dispositivos</Link>
                </section>
            </main>
        </div>
    )
}

export default Configuraciones