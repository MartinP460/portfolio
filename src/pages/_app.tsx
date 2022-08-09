import { AppProps } from 'next/app'

import '../styles/globals.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="dark:bg-primary-800 transition-colors">
      <Component {...pageProps} />
    </div>
  )
}

export default CustomApp
