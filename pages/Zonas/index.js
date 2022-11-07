import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Zonas.module.css'
import Link from 'next/link'


const Zonas = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Zonas</title>
      <meta name="description" content="Zonas" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.mainJoya}>
      <div className={styles.Headers}>
        <Link href={"./"} className={styles.LinkHome}>Home</Link>
      </div>

      <h1 className={styles.title}>
        <a href="">Zonas Joya</a>
      </h1>


      <section className={styles.zonas}>

        <Link href={"./Zonas/ZonaMapa/Cochera"} className={styles.Link}>Cochera</Link>
        <Link href={"./Zonas/ZonaMapa/Recamaras"} className={styles.Link}>Recamaras</Link>
        <Link href={"./Zonas/ZonaMapa/Cocina"} className={styles.Link}>Cocina</Link>
        <Link href={"./Zonas/ZonaMapa/Estancia"} className={styles.Link}>Estancia</Link>
        <Link href={"./Zonas/ZonaMapa/Bar"} className={styles.Link}>Bar</Link>
        <Link href={"./Zonas/ZonaMapa/Oficina"} className={styles.Link}>Oficina</Link>
        <Link href={"./Zonas/ZonaMapa/Pasillos"} className={styles.Link}>Pasillos</Link>
        <Link href={"./Zonas/ZonaMapa/Villas"} className={styles.Link}>Villas</Link>

      </section>
    </main>


  </div>
  )
}

export default Zonas