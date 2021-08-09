import React from 'react'

import styles from '../../styles/molecules/Footer.module.scss'

export default function FooterComponent() {
    return (
        <footer className={styles.footer}>
            
                <p>
                    Copyright iziw 2021 created by 
                    <a
                        href="https://jhonyaraujo.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Jhonata Vinicius
                    </a>
                </p>
           
        </footer>
    )
}
