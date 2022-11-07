import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/ZonaDisp.module.css'
import { BotonJoya } from '../../../component/Joya/BotonJoya'
import Data from "../../../joyaData.json"
import Image from 'next/image'
import Link from 'next/link'
import axios from "axios";
const DataCochera = Data.Cochera

const ProductItem = () => {
    const { query: { zonaMapa } } = useRouter()
    const [dispositivos, setDispositivos] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    })
    const obtenerDatos = async () => {
        try {
            const data = await axios.put('/api/dana/infoDisp/findDispZona', {zona: zonaMapa})
            // console.log(data.data);
            setDispositivos(data.data)
        } catch (error) {
            console.log("NO FUNCIONO");
        }
    }
    

    return (
        <div className={styles.Zona}>
            <header className={styles.Headers}>
                <Link href={"/Zonas"} className={styles.LinkHome}>Zonas</Link>
            </header>
            <main>
                <section className={styles.Imagen} >
                    <img src={("/images/joya/zonas/"+ zonaMapa +".jpg").toLowerCase()} />
                </section>
                {/* Iluminarias */}
                <section>
                    {
                        dispositivos.map((item, index) => (
                            <BotonJoya
                                Data={item}
                                key={index}
                            />
                        ))
                    }
                </section>
                
            </main>
        </div>
    )
}

export default ProductItem