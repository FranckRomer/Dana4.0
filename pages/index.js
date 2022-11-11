import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  const [modal, setModal] = React.useState(false)
  const invertirModal = () => {
    setModal(!modal)
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>Dana4.0</title>
        <meta name="description" content="Dana 4.0" />
        <link rel="icon" href="/littleHouse.png" />
      </Head>


      {/********************** HEADER **********************/}
      <header className={styles.Headers}>
        <div className={styles.home}>
          <Link href={"/"} className={styles.LinkHome}>Home</Link>
        </div>

        <div className={styles.menu} onClick={invertirModal}>
          <img src="menu.png" />
        </div>
      </header>

      {/********************** MAIN **********************/}
      <main className={styles.main}>
        <h1 className={styles.title}><a href="">Dana 4.0</a></h1>

        <img src={("/home.png").toLowerCase()} />
        
        <section className={styles.zonas}>
          <Link href={"./Zonas"} className={styles.Link}>Zonas</Link>
        </section>
      </main>
      
      {/********************* MODAL *********************/}
      {modal ?
        <nav className={styles.nav} >
          <div className={styles.modalOscuro} onClick={() => setModal(!modal)}></div>
          <ul >
            <Link href={"./login"}                className={styles.Link}><li>Login</li></Link>
            <Link href={"./login/register"}       className={styles.Link}><li>Register</li></Link>
            <Link href={"./dashboard"}       className={styles.Link}><li>Profile</li></Link>
            <Link href={"./Configuraciones"}       className={styles.Link}><li>Ajustes</li></Link>
            <Link href={"./Configuraciones/Info"}       className={styles.Link}><li>Info</li></Link>            
          </ul>
        </nav>
        : ""
      }

    </div>
  )
}
