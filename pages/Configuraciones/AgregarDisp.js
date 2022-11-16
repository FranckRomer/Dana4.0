import React from 'react'
import styles from '../../styles/Configuraciones/Configuraciones.module.css'
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

    const [newZone, setNewZone] = React.useState({
        zona: "",
        index: "",
    })

    const [dropZone, setDropZone] = React.useState({
        zona: ""
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
    const AgregarZona = async (e) => {
        e.preventDefault();
        console.log(newZone);
        try {
            const res = await axios.put("/api/dana/infoDisp/addZone", newZone);
            console.log(res);
        } catch (error) {
            console.log("NO SE PUDO ENVIAR");
        }
    }
    const EliminarZona = async (e) => {
        e.preventDefault();
        console.log(dropZone);
        try {
            const res = await axios.put("/api/dana/infoDisp/dropZone", dropZone);
            console.log(res);
        } catch (error) {
            console.log("NO SE PUDO ENVIAR");
        }
    }



    // ///////////////////////////////////////////////////////////////

    return (
        <div className={styles.Body}>
            <header className={styles.Headers}>
                <Link href={"/"} className={styles.Link}>Zonas</Link>
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

            {/* 
                ******************************************************************
                                    ZONAS
                ******************************************************************
            */}
            <section className={styles.DropData}>
                <h1 className={styles.Titulo}>Agregar Zona</h1>
                <form onSubmit={AgregarZona} className={styles.inputcontainer}>
                    <input
                        type="" name="ZONA" placeholder='ZONA'
                        onChange={(e) =>
                            setNewZone({
                                ...newZone,
                                zona: e.target.value,
                            })
                        }>
                    </input> 
                    <input
                        type="" name="Orden" placeholder='ORDEN'
                        onChange={(e) =>
                            setNewZone({
                                ...newZone,
                                index: e.target.value,
                            })
                        }>
                    </input>                   
                    <br />
                    <button type="" className={styles.Agregar} >Agregar</button>
                </form>
            </section>
            {/* //////////////////////////////////////////////// */}

            <section className={styles.DropData}>
                <h1 className={styles.Titulo}>Eliminar Zona</h1>
                <form onSubmit={EliminarZona} className={styles.dropcontainer}>
                    <input
                        type="" name="ZONA" placeholder='ZONA'
                        onChange={(e) =>
                            setDropZone({
                                ...dropZone,
                                zona: e.target.value,
                            })
                        }>
                    </input>                   
                    <br />
                    <button type="" className={styles.Eliminar} >Eliminar</button>
                </form>
            </section>

        </div>
    )
}

export default Configuraciones