import { AppProps } from 'next/app'
import usePageview from '../hooks/usePageview'
import ModalProvider from '../utils/ModalProvider'
import '../styles/globals.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  usePageview()

  return (
    <div className="selection:bg-primary-200/50 dark:selection:bg-primary-200/20">
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </div>
  )
}

export default CustomApp
