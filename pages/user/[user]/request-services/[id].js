import { useRouter } from 'next/router'

import Footer from '../../../../components/molecules/Footer.jsx'
import Head from '../../../../components/molecules/Head.jsx'

export default function RequestServices() {
    const router = useRouter()
    const {
        query: { id, user },
    } = router
    return (
        <div>
            <Head title="request-service" description="tela request-services" />
            The dynamic route is {id} is name {user}
            <Footer />
        </div>
    )
}
