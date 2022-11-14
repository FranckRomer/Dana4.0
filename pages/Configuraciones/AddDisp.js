import React from 'react'
import styles from '../../styles/Configuraciones.module.css'
import axios from "axios";
import Link from 'next/link';
import react from 'react';

const Configuraciones = () => {
    const [newData, setNewData] = React.useState({
        can: "",
        pin: "",
        percentage: "",
        rgb: "",
        tipo: "",
        zona: "",
        top: "",
        left: "",
    })

    const [dropData, setDropData] = React.useState({
        can: "",
        pin: ""
    })

    

    // ///////////////////////////////////////////////////////////////
    const CrearLampara = async (e) => {
        e.preventDefault();
        console.log(newData);
        try {
            const res = await axios.put("/api/dana/infoDisp/changeDisp", newData);
            console.log(res);
        } catch (error) {
            console.log("NO SE PUDO ENVIAR");
        }
    }
    const EliminarLampara = async (e) => {
        e.preventDefault();
        console.log(dropData);
        try {
            // const res = await axios.put("/api/dana/infoDisp/dropDisp", dropData);
            console.log(res);
        } catch (error) {
            console.log("NO SE PUDO ENVIAR");
        }
    }

   



    // ///////////////////////////////////////////////////////////////

    return (
        <div className={styles.Body}>
            <header className={styles.Headers}>
                <Link href={"/Configuraciones"} className={styles.Link}>Configuraciones</Link>
            </header>

            <section className={styles.AddDisp}>

                <h1 className={styles.Titulo}>Modificar Dispositivo</h1>
                <form onSubmit={CrearLampara} className={styles.inputcontainer}>
                    <input
                        type="" name="CAN" placeholder='CAN'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                can: e.target.value,
                            })
                        }>
                    </input>
                    <input
                        type="" name="PIN" placeholder='PIN'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                pin: e.target.value,
                            })
                        }>
                    </input>
                    <input
                        type="" name="PORCENTAJE" placeholder='PORCENTAJE'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                percentage: e.target.value,
                            })
                        }>
                    </input>
                    <input
                        type="" name="RGB" placeholder='RGB'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                rgb: e.target.value,
                            })
                        }>
                    </input>

                    <input
                        type="" name="TIPO" placeholder='TIPO'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                tipo: e.target.value,
                            })
                        }>
                    </input>

                    <input
                        type="" name="ZONA" placeholder='ZONA'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                zona: e.target.value,
                            })
                        }>
                    </input>

                    <input
                        type="" name="TOP" placeholder='TOP'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                top: e.target.value,
                            })
                        }>
                    </input>

                    <input
                        type="" name="LEFT" placeholder='LEFT'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                left: e.target.value,
                            })
                        }>
                    </input>
                    <br />
                    <button type="" className={styles.Agregar} >AGREGAR</button>
                </form>

            </section>
            {/* /////////////////////////////////////////////// */}

            <section className={styles.DropData}>
                <h1 className={styles.Titulo}>Eliminar Dispositivo</h1>
                <form onSubmit={EliminarLampara} className={styles.dropcontainer}>
                    <input
                        type="" name="CAN" placeholder='CAN'
                        onChange={(e) =>
                            setDropData({
                                ...dropData,
                                can: e.target.value,
                            })
                        }>
                    </input>
                    <input
                        type="" name="PIN" placeholder='PIN'
                        onChange={(e) =>
                            setDropData({
                                ...dropData,
                                pin: e.target.value,
                            })
                        }>
                    </input>
                    <br />
                    <button type="" className={styles.Eliminar} >ELIMINAR</button>
                </form>
            </section >

            {/* /////////////////////////////////////////////// */}

            
        </div>
    )
}

export default Configuraciones