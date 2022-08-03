import usePrefersDarkMode from './usePrefersDarkMode'
import useSafeLocalStorage from './useSafeLocalStorage'
import { useEffect } from 'react'

const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode()
  const [isDarkMode, setIsDarkMode] = useSafeLocalStorage(
    'dark-mode',
    undefined
  )

  const darkMode = isDarkMode === undefined ? prefersDarkMode : isDarkMode

  useEffect(() => {
    if (!window) return

    const root = window.document.documentElement

    root.classList.remove(darkMode ? 'light' : 'dark')
    root.classList.add(darkMode ? 'dark' : 'light')
  }, [darkMode])

  return [darkMode, setIsDarkMode]
}

export default useDarkMode
