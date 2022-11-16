import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'
import Headers from '../component/Headers/Headers'


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Dana4.0</title>
        <meta name="description" content="Dana 4.0" />
        <link rel="icon" href="/littleHouse.png" />
      </Head>


      {/********************** HEADER **********************/}
      <Headers />
      

      {/********************** MAIN **********************/}
      <main className={styles.main}>
        <h1 className={styles.title}><a href="">Dana 4.0</a></h1>

        <img src={("/home.png").toLowerCase()} />
        
        <section className={styles.zonas}>
          <Link href={"./Zonas"} className={styles.Link}>Zonas</Link>
        </section>
      </main>
      
      

    </div>
  )
}
