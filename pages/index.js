import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dana4.0</title>
        <meta name="description" content="Dana 4.0" />
        <link rel="icon" href="/littleHouse.png" />
      </Head>

      <header className={styles.Headers}>
        <Link href={"./"} className={styles.LinkHome}>Home</Link>
        <Link href={"./login"} className={styles.Link}>Login</Link>
        <Link href={"./dashboard"} className={styles.Link}>Profile</Link>
        <Link href={"./login/register"} className={styles.Link}>Register</Link>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="">Dana 4.0</a>
        </h1>

        <img src={("/home.png").toLowerCase()} />

        <section className={styles.zonas}>

          <Link href={"./Zonas"} className={styles.Link}>Zonas</Link>


        </section>
      </main>
      <footer className={styles.footer}>
        <Link href={"./Configuraciones/CheckStatus"} className={styles.Link}>Check Status</Link>
        <Link href={"./Configuraciones/AgregarDisp"} className={styles.Link}>Add Disp</Link>
        <Link href={"./Configuraciones/Info"} className={styles.Link}>Info</Link>
      </footer>

    </div>
  )
}
