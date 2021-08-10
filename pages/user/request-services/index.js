import Footer from '../../../../components/molecules/Footer.jsx'
import Head from '../../../../components/molecules/Head.jsx'
import styles from '../../../styles/Home.module.scss'

export default function RequestServices() {
    return (
        <div className={styles.container}>
            <Head
                title="Serviços solicitados"
                description="Serviços solicitados"
            />
            <Footer />
        </div>
    )
}
