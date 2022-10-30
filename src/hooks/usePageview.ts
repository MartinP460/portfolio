import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { logPageView } from '../utils/logPageView'

const usePageview = () => {
  const router = useRouter()
  const visitedPaths = useRef<string[]>([])

  useEffect(() => {
    const logView = async () => {
      const currentPath = window.location.pathname

      if (!visitedPaths.current.includes(currentPath)) {
        await logPageView()
        visitedPaths.current.push(currentPath)
      }
    }

    logView()

    router.events.on('routeChangeComplete', logView)

    return () => {
      router.events.off('routeChangeComplete', logView)
    }
  }, [router.events])
}

export default usePageview
