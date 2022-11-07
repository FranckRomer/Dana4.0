import React from 'react'
import styles from '../../styles/Pruebas.module.css'
import { AddLight } from '../../component/AddLight'
import { InterfaceBtn } from '../../component/InterfaceBtns';
import Link from 'next/link';

const CheckStatus = () => {


    ///////////////////////////////////////////////////////
    return (
        <>
            <div className={styles.Headers}>
                <Link href={"/"} className={styles.Link}>Zonas</Link>
            </div>
            <div className={styles.Pruebas}>

                {/*--------------- Crear Lampara ---------------*/}

                <AddLight />

                {/*--------------- BOTONES ---------------*/}
                <InterfaceBtn />

            </div>
        </>
    )
}

export default CheckStatus