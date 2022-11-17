import { useEffect, useState } from "react"
import axios from "axios"
import styles from "../../styles/Configuraciones/tabla.module.css"

function TableZonasSec(props) {
    // UseSTATE
    const [dispositivos, setDispositivos] = useState([])
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        obtenerDatos()
    })
    const obtenerDatos = async () => {
        try {
            const data = await axios.put('/api/dana/infoDisp/findZonasSec', {zonaPrin: ""})
            setDispositivos(data.data)
            // console.log(data.data);
        } catch (error) {
            console.log("NO FUNCIONO");
        }

    }

    // buscar
    const onSearchValueChange = (event) => {
        console.log(event.target.value.toLowerCase())
        setSearchValue(event.target.value.toLowerCase())
    }
    const filteredData = dispositivos.filter((el) => {
        //if no input the return the original
        if (searchValue === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            // console.log(el.element);
            try {
                return el.zona.toLowerCase().includes(searchValue)
            } catch (error) {
                
            }
            
        }
    })

    // Return
    return (
        <div className={styles.body}>

            <h1>{props.tipo}</h1>

            <div className={styles.buscador}>
                
                <input 
                    type="input"  placeholder="Buscar" name="name" id='name' required 
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </div>

            <div className={styles.tabla}>
                {/* ENCABEZADO */}
                <div className={styles.encabezado}>
                    <div>Zona Principal</div>
                    <div>Zona Secundaria</div>
                    <div>Index</div>
                    <div>Tipo</div>
                    <div>Name Img</div>
                    <div>Modificar</div>
                </div>
                
                {/* TABLA */}
                {filteredData.map((data, index) => (
                    <div className={styles.datos}> 
                        <div>{data.zonaPrin}</div>
                        <div>{data.zonaSec}</div>
                        <div>{data.index}</div>
                        <div>{data.tipo}</div>
                        <div>{data.name_image}</div>
                        <div><button></button></div>
                    </div>
                
                ))}
            </div>

        </div>
    )
}

export { TableZonasSec }