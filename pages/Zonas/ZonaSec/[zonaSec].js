import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/Zonas/ZonaDisp.module.css'
import { BotonDisp } from '../../../component/dana/BotonDisp'
import { BotonZonaSec } from '../../../component/dana/BotonZonaSec'
import Data from "../../../joyaData.json"
import Image from 'next/image'
import Link from 'next/link'
import axios from "axios";
// const DataCochera = Data.Cochera

const ZonaSecundaria = () => {
    const { query: { zonaSec } } = useRouter()
    const [dispositivos, setDispositivos] = React.useState([])
    const [zonasSec, setZonasSec] = React.useState([])
    // console.log(zonaSec);
    // console.log(zonasSec);
    React.useEffect(() => {
        obtenerDatos()
    })
    const obtenerDatos = async () => {
        try {
            const data = await axios.put('/api/dana/infoDisp/findDispZona', { zona: zonaSec })
            const dataZonasSec = await axios.put('/api/dana/infoDisp/findZonasSec', { zonaPrin: zonaSec })
            // console.log(data.data);
            // console.log(dataZonasSec.data);
            // console.log(dataZonasSec.data[0].tipo);
            setDispositivos(data.data)
            setZonasSec(dataZonasSec.data)
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
                    <img src={("/uploads/zonasSec/" + zonaSec + ".png").toLowerCase()} />
                </section>
                {/* Iluminarias */}
                <section>
                    {
                        dispositivos.map((item, index) => (
                            <BotonDisp
                                Data={item}
                                key={index}
                            />
                        ))
                    }
                </section>
                <section>
                    {
                        zonasSec.map((item, index) => (
                            <div>
                                <BotonZonaSec
                                    Data={item}
                                    key={index}
                                />
                            </div>
                        ))
                    }
                </section>

            </main>
        </div>
    )
}

export default ZonaSecundaria