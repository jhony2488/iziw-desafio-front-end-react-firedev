import { useRouter } from 'next/router'

import Footer from '../../../components/molecules/Footer.jsx'
import Head from '../../../components/molecules/Head.jsx'
import styles from '../../../styles/Home.module.scss'

export default function RequestServices() {
    const router = useRouter()
    const {
        query: { user },
    } = router
    return (
        <div className={styles.container}>
            <Head
                title="Serviços solicitados"
                description="Serviços solicitados"
            />
            {user}
            <Footer />
        </div>
    )
}
