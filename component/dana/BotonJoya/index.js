import styles from '../../../styles/ZonaDisp.module.css'
import React from 'react'
import Modal from '../../Modal';
import stylesModal from "../../../styles/Modal.module.css"
import axios from "axios";
// import { SketchPicker } from 'react-color';
// import { render } from 'react-dom';
import Link from 'next/link'
// import { ModalComponent } from '../Modal';

function BotonJoya(props) {
    const [showModal, setShowModal] = React.useState(false)
    const [colorHexCode, setColorHexCode] = React.useState(false);
    const [rgbData, setrRgbData] = React.useState({
        RGB: "FFF",
    })

    /*
     *  ENVIO DE DATOS
    */

    const EncenderLampara = async (e) => {

        const msg = {
            can: e.can,
            pin: e.pin,
            percentage: "100",
            rgb: props.Data.rgb,
        }
        console.log(msg)
        EnviarDatos(msg)
    }
    const ApagarLampara = async (e) => {
        const msg = {
            can: e.can,
            pin: e.pin,
            percentage: "000",
            rgb: props.Data.rgb,
        }
        console.log(msg)
        EnviarDatos(msg)
    }
    const ColoresLampara = async (e) => {
        // let valueR = ((Math.floor(Math.random() * 16).toString(16)).toUpperCase());
        // let valueG = ((Math.floor(Math.random() * 16).toString(16)).toUpperCase());
        // let valueB = ((Math.floor(Math.random() * 16).toString(16)).toUpperCase());
        // console.log(valueR + valueG + valueB)
        // let id_RGB = valueR + valueG + valueB
        // rgbData = rgbData.toUpperCase()
        const msg = {
            can: props.Data.can,
            pin: props.Data.pin,
            percentage: "100",
            rgb: rgbData.RGB,
        }
        console.log(msg)
        EnviarDatos(msg)
    }

    /* ENVIO DE DATOS */
    const EnviarDatos = async (msg) => {
        try {
            const res = await axios.put("/api/dana/infoDisp/sendEsp", msg);
            console.log(res);
        } catch (error) {
            console.log("NO SE PUDO ENVIAR");
            alert("NO SE PUDO ENVIAR, problemas en el envio \nError: " + error)
        }
    }


    // STYLES
    const stylePosicion = {
        left: props.Data.left,
        top: props.Data.top,


    };
    const styleRGBColor = {
        background: "#" + props.Data.rgb,
    }

    const styleRgbNewColor = {
        background: "#" + rgbData.RGB,
    }
    const styleLink = {
        width: "40px",
        height: "40px"
    }

    const ObtenerValuesRGB = async (e) => {
        e.preventDefault();
        console.log(rgbData);
    }

    return (
        <>

            {
                props.Data.can === "FFF" ?
                    <div>
                        <div className={styles.Cubo} style={stylePosicion} >
                            <button type="" >
                                <Link href={"/Zonas/ZonaMapa/" + props.Data.tipo} className={styles.LinkZonaSec}>
                                    <img src={'/images/disp/' + props.Data.tipo + '.png'} />
                                </Link>
                            </button>
                        </div>
                    </div>
                    :
                    <div className={styles.Cubo} style={stylePosicion} >
                        <button type="" onClick={() => setShowModal(true)} style={styleRGBColor}>
                            {
                                (props.Data.percentage == "000") ?
                                    <img src={'/images/disp/' + props.Data.tipo + '_off.png'} />
                                    :
                                    <img src={'/images/disp/' + props.Data.tipo + '_on.png'} />
                            }
                        </button>
                    </div>
            }

            {/***************************** MODAL *****************************/}
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className={stylesModal.ContainFoco}>
                    <section className={stylesModal.Data}>
                        <p> Top: {props.Data.top}, Left: {props.Data.left} </p>
                        <p>Can: <strong>{props.Data.can}</strong>, Pin: <strong>{props.Data.pin}</strong></p>
                    </section>
                    <section className={stylesModal.ImagenContend} style={styleRGBColor}>
                        {
                            (props.Data.percentage == "000") ? <button type="" onClick={() => EncenderLampara(props.Data)} ><img src={'/images/disp/' + props.Data.tipo + '_off.png'} /></button> : <button type="" onClick={() => ApagarLampara(props.Data)}><img src={'/images/disp/' + props.Data.tipo + '_on.png'} /></button>
                        }
                    </section>

                    <section className={stylesModal.BotonesContend}>
                        <button type="" onClick={() => EncenderLampara(props.Data)} className={stylesModal.Encender} ><strong>ON</strong></button>
                        <button type="" onClick={() => ApagarLampara(props.Data)} className={stylesModal.Apagar} ><strong>OFF</strong></button>

                    </section>
                    <section className={stylesModal.BotonRGB}  >
                        {props.Data.tipo == "rgb" ?
                            <div>
                                <button type="rgb" onClick={() => setColorHexCode(true)}><strong>RGB</strong></button>
                                {/* <h3>{props.Data.rgb}</h3> */}
                            </div>
                            : ""
                        }
                    </section>


                </div>
                {
                    colorHexCode ?
                        <div className={stylesModal.ContainRGB}>
                            <h3>New Color</h3>
                            <div className={stylesModal.RgbCubo} style={styleRgbNewColor} >

                            </div>
                            <form onSubmit={ObtenerValuesRGB} className={stylesModal.RGBcontainer}>
                                <input
                                    type="" name="Value RED" placeholder='Value RED'
                                    onChange={(e) =>
                                        setrRgbData({
                                            ...rgbData,
                                            RGB: e.target.value.toUpperCase(),
                                        })
                                    }>
                                </input>
                                
                                <br />
                                <button type="" onClick={ColoresLampara} >Cambiar Color</button>
                            </form>
                            <button type="" onClick={() => setColorHexCode(false)}> Close </button>
                        </div>
                        : ""
                }

            </Modal>
        </>
    )
}

export { BotonJoya }