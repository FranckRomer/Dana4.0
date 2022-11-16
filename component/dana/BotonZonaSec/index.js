import Link from "next/link"
// import styles from '../../../styles/ZonaDisp.module.css'
import styles from '../../../styles/Zonas/ZonaDisp.module.css'

function BotonZonaSec(props) {
    // console.log(props.Data);
    const stylePosicion = {
        left: props.Data.left,
        top: props.Data.top,        
    };
    return (
        
        <div className={styles.Cubo} style={stylePosicion} >
            <button type="" >
                <Link href={"/Zonas/ZonaSec/" + props.Data.tipo} className={styles.LinkZonaSec}>
                    <img src={'/images/disp/' + props.Data.tipo + ".png" } />
                </Link>
            </button>
        </div>

    )
}

export  { BotonZonaSec }