import { AppProps } from 'next/app'

import '../styles/globals.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="transition-colors selection:bg-primary-200/50 dark:bg-primary-800 dark:selection:bg-primary-200/20">
      <Component {...pageProps} />
    </div>
  )
}

export default CustomApp
