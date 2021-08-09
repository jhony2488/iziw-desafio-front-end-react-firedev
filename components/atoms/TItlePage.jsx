import React from 'react'

import styles from '../../styles/atoms/TItlePage.module.scss'

export default function TItlePage(props) {
    return <h1 className={styles.title_page}>{props.title}</h1>
}
