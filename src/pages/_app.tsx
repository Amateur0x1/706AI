import type { AppProps } from 'next/app'

import './styles.css'
import "./main.css"
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
