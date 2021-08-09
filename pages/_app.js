import 'normalize.css'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'

import store from '../redux/Store/store/index.js'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
