import { AppProps } from 'next/app'
import usePageview from '../hooks/usePageview'
import '../styles/globals.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  usePageview()

  return (
    <div className="selection:bg-primary-200/50 dark:selection:bg-primary-200/20">
      <Component {...pageProps} />
    </div>
  )
}

export default CustomApp
