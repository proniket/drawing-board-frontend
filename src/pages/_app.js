import { Provider } from 'react-redux'
import { store } from '@/store'
import '@/styles/globals.css'
import 'react-tooltip/dist/react-tooltip.css';

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
