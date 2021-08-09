import Image from 'next/image'
import React from 'react'

import serviceImage from '../../public/images/service.png'
import styles from '../../styles/molecules/Service.module.scss'


export default function Service(props) {
    return (
        <div id={`service-${props.keyService}`} className={styles.service}>
            <Image src={serviceImage} alt={props.title} className={styles.service__image} />
            <h2>{props.title}</h2>
        </div>
    )
}
