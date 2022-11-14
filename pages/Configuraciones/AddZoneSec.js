import React from 'react'
import styles from '../../styles/Configuraciones.module.css'
import axios from "axios";
import Link from 'next/link';
import react from 'react';

const AddZone = () => {
    const [newZone, setNewZone] = React.useState({
        zona: "",
        index: "",        
    })
    const [dropZone, setDropZone] = React.useState({
        zona: ""
    })
    const [pathImage, setPathImage] = React.useState("")
    const [image, setImage] = React.useState(null);
    // ///////////////////////////////////////////////////////////////
    const AgregarZona = async (e) => {
        e.preventDefault();
        console.log(newZone);
        try {
            // POST DE NUEVA IMAGEN DE ZONAS
            const body = new FormData();
            body.append("file", image);            
            const response = await fetch("/api/dana/infoDisp/zonas/addImagen", {
                method: "POST",
                body
            });            
            console.log(response);
            // POST DE NOMBRE DE LAS ZONAS
            const res = await axios.put("/api/dana/infoDisp/zonas/addZone", newZone);
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

    /**     
     * CAPTURA EL ARCHIVO DE IMAGEN PARA ENVIARLO AL BACK
     */
    const onfileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            if (file.type.includes("image")) {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = function load() {
                    setPathImage(reader.result)
                }
                // setFile(file)
                console.log(file);
                setImage(file)
                setNewZone({
                    ...newZone,
                    name_image: file.name
                })
            } else {
                console.log("No es una Imagen");
            }
        }
    }
    /////////////////////////////////////////////////////////////////

    return (
        <>
            <div className={styles.Body}>
                {/* HEADER */}
                <header className={styles.Headers}>
                    <Link href={"/Configuraciones"} className={styles.Link}>Configuraciones</Link>
                </header>
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
                        <div className={styles.inputFile}>
                            <input
                                type="file"
                                name="File"
                                placeholder='Selecionar imagen'
                                onChange={onfileChange}
                            />
                            <br />
                            {pathImage ? <img src={pathImage} alt="Image" width={150} /> : ""}

                        </div>
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
        </>
    )
}

export default AddZone