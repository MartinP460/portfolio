import { useEffect } from 'react'
import { useRouter } from 'next/router'

// this enables smooth scrolling on the page where the component is used
const useSmoothScroll = () => {
  const router = useRouter()

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')

    const handleRouteChange = () => {
      document.documentElement.classList.remove('scroll-smooth')
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])
}

export default useSmoothScroll
