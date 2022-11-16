import { useEffect, useState } from "react"
import axios from "axios"

function TableDisp(props) {
    // UseSTATE
    const [dispositivos, setDispositivos] = useState([])

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
    return (
        <>
            {/* ENCABEZADO */}
            <tr>
                {/* <th>Name</th> */}
                <th>Can</th>
                <th>Pin</th>
                <th>%</th>
                <th>RGB</th>
                <th>Zona</th>
                <th>Tipo</th>
                <th>Modificar</th>
            </tr>

            {dispositivos.map((data, index) => (
                <tr>
                    {/* <td>{data._id}</td> */}
                    <td>{data.can}</td>
                    <td>{data.pin}</td>
                    <td>{data.percentage}</td>
                    <td>{data.rgb}</td>
                    <td>{data.zona}</td>
                    <td>{data.tipo}</td>
                    <td><button type="check-box"></button></td>
                </tr>

            ))}

        </>
    )
}

export { TableDisp }