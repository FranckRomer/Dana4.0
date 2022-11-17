import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/Configuraciones/Configuraciones.module.css'
import Link from 'next/link'
import Headers from '../../component/Headers/Headers'
import { TableDisp } from '../../component/TableDisp'
import { TableZonas } from '../../component/TableDisp/TableZonas'
import { TableZonasSec } from '../../component/TableDisp/TableZonaSec'
import { TableTarjHome } from '../../component/TableDisp/TableTarjHome'

const Configuraciones = () => {
    const [tabla, setTabla] = useState("Dispositivos")
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


                {
                    tabla == "Dispositivos" ?
                        <div className={styles.titulos}>
                            <h1 onClick={() => { setTabla("Dispositivos") }}>Dispositivos</h1>
                            <h2 onClick={() => { setTabla("Zonas") }}>Zonas</h2>
                            <h2 onClick={() => { setTabla("ZonasSec") }}>Zonas Secundarias</h2>
                            <h2 onClick={() => { setTabla("TarjetaH") }}>Tarjeta Home</h2>
                        </div> 
                    : tabla == "Zonas" ?
                        <div className={styles.titulos}> 
                            <h2 onClick={() => { setTabla("Dispositivos") }}>Dispositivos</h2>
                            <h1 onClick={() => { setTabla("Zonas") }}>Zonas</h1>
                            <h2 onClick={() => { setTabla("ZonasSec") }}>Zonas Secundarias</h2>
                            <h2 onClick={() => { setTabla("TarjetaH") }}>Tarjeta Home</h2>
                        </div>
                    : tabla == "ZonasSec" ?
                    <div className={styles.titulos}> 
                            <h2 onClick={() => { setTabla("Dispositivos") }}>Dispositivos</h2>
                            <h2 onClick={() => { setTabla("Zonas") }}>Zonas</h2>
                            <h1 onClick={() => { setTabla("ZonasSec") }}>Zonas Secundarias</h1>
                            <h2 onClick={() => { setTabla("TarjetaH") }}>Tarjeta Home</h2>
                    </div>
                    : tabla == "TarjetaH" ?
                    <div className={styles.titulos}> 
                            <h2 onClick={() => { setTabla("Dispositivos") }}>Dispositivos</h2>
                            <h2 onClick={() => { setTabla("Zonas") }}>Zonas</h2>
                            <h2 onClick={() => { setTabla("ZonasSec") }}>Zonas Secundarias</h2>
                            <h1 onClick={() => { setTabla("TarjetaH") }}>Tarjeta Home</h1>
                    </div>
                    : ""
                }
                <div>
                    {
                        tabla == "Dispositivos" ? 
                            <TableDisp /> 
                        : tabla == "Zonas" ?
                            <TableZonas /> 
                        : tabla == "ZonasSec" ?
                            <TableZonasSec /> 
                        : tabla == "TarjetaH" ?
                            <TableTarjHome /> 
                        : ""
                    }
                </div>
                {/* <TableDisp tipo= "Dispositivos"/>
                <TableZonas/> */}

            </main>
        </div>
    )
}

export default Configuraciones