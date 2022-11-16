import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Configuraciones/Configuraciones.module.css'
import Link from 'next/link'
import Headers from '../../component/Headers/Headers'

const Configuraciones = () => {
    return (

        <div className={styles.container}>
            <Head>
                <title>Zonas</title>
                <meta name="description" content="Zonas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.Body}>
                <Headers />
                <h1 className={styles.title}>
                    <a href="">Configuraciones</a>
                </h1>
                <section className={styles.links}>
                    <Link href={"/Configuraciones/AddDisp"} className={styles.Link}>Agregar Dispositivo</Link>
                    <Link href={"/Configuraciones/AddZone"} className={styles.Link}>Modificar Zona</Link>
                    <Link href={"/Configuraciones/AddZoneSec"} className={styles.Link}>Agregar Zona Secundaria</Link>
                    <Link href={"/Configuraciones/CheckStatus"} className={styles.Link}>Encendido Manual</Link>
                </section>
            </main>
        </div>
    )
}

export default Configuraciones