import { AppProps } from 'next/app'

import 'normalize.css'
import '../styles/global-styles.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default CustomApp
