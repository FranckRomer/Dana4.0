import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Zonas.module.css'
import Link from 'next/link'
import axios from 'axios'

const Zonas = () => {
  const [zonas, setZonas] = React.useState([])

  React.useEffect(() => {
    obtenerDatos()
  })
  const obtenerDatos = async () => {
    try {
      const data = await axios.put('/api/dana/infoDisp/findZona')
      console.log(data.data);
      setZonas(data.data)
    } catch (error) {
      console.log("NO FUNCIONO");
    }
  }

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

          {
            zonas.map((item, index) => (
              <Link href={"./Zonas/ZonaMapa/" + item.zona} className={styles.Link}>{item.zona}</Link>
            ))
          }

        </section>
      </main>


    </div>
  )
}

export default Zonas