import { useEffect, useState } from "react"
import axios from "axios"
import styles from "../../styles/Configuraciones/tabla.module.css"

function TableDisp(props) {
    // UseSTATE
    const [dispositivos, setDispositivos] = useState([])
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        obtenerDatos()
    })
    const obtenerDatos = async () => {
        try {
            const data = await axios.put('/api/dana/infoDisp/findDisp')
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
                return el.can.toLowerCase().includes(searchValue)
            }
            
        }
    })

    // Return
    return (
        <div className={styles.body}>

            <h1>{props.tipo}</h1>

            <div className={styles.buscador}>
                
                <input 
                    type="input"  placeholder="Can o Zona" name="name" id='name' required 
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </div>

            <div className={styles.tabla}>
                {/* ENCABEZADO */}
                <div className={styles.encabezado}>
                    <div>Name</div>
                    <div>Can</div>
                    <div>Pin</div>
                    <div>%</div>
                    <div>RGB</div>
                    <div>Zona</div>
                    <div>Tipo</div>
                    <div>Modificar</div>
                </div>
                
                {/* TABLA */}
                
                {filteredData.map((data, index) => (
                    <div className={styles.datos}> 
                        <div>{data.name}</div>
                        <div>{data.can}</div>
                        <div>{data.pin}</div>
                        <div>{data.percentage}</div>
                        <div>{data.rgb}</div>
                        <div>{data.zona}</div>
                        <div>{data.tipo}</div>
                        <div><button></button></div>
                    </div>
                
                ))}
            </div>

        </div>
    )
}

export { TableDisp }