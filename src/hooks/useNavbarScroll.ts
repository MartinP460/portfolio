import { useState, useEffect, useRef } from 'react'

const useNavbarScroll = () => {
  const [visible, setVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const lastScrollY = useRef(0)
  const scrollTimeout = useRef<any>()

  useEffect(() => {
    const controlNavbar = () => {
      // the scroll event is throttled to avoid performance issues
      clearTimeout(scrollTimeout.current)

      scrollTimeout.current = setTimeout(() => {
        if (typeof window !== 'undefined') {
          if (window.scrollY === 0) {
            setIsAtTop(true)
          }
          if (window.scrollY !== 0 && isAtTop) {
            setIsAtTop(false)
          }

          if (window.scrollY > lastScrollY.current) {
            setVisible(false)
          } else {
            setVisible(true)
          }

          lastScrollY.current = window.scrollY
        }
      }, 20)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      return () => window.removeEventListener('scroll', controlNavbar)
    }
  }, [isAtTop])

  return [visible, isAtTop]
}

export default useNavbarScroll
