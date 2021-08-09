import Footer from '../components/molecules/Footer.jsx'
import Head from '../components/molecules/Header.jsx'
import styles from '../styles/Home.module.scss'

export default function Login() {
    return (
        <div className={styles.container}>
            <Head title="Login" description="tela login" />
            <Footer />
        </div>
    )
}
